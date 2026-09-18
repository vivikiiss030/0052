#!/usr/bin/env python3
"""
把中文字体裁到「这个网站真正用到的字」。

为什么需要这一步：
  完整的思源宋体简体一个字重就是 1.4 MB。中文站直接挂上去，
  手机上首屏会白屏好几秒。但一个人的网站其实只用到两三千个字，
  裁完通常只剩十分之一。

  这个脚本在每次 build 之前自动跑，所以你写了新文章之后
  不需要记得做任何事 —— 新出现的字会自动被包含进去。

用法：npm run build 会自动调用，也可以 npm run fonts 单独跑。
"""

import os
import re
import sys
from pathlib import Path

try:
    from fontTools.subset import Subsetter, Options
    from fontTools.ttLib import TTFont
except ImportError:
    # 构建环境没有 fontTools 时不报错退出 —— 直接用仓库里已经裁好的字体。
    # 这样 Cloudflare 上就算装不了 Python 依赖，网站照样能构建成功。
    print("  提示：没有 fontTools，跳过裁剪，使用仓库里现成的字体子集")
    raise SystemExit(0)

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "fonts"

# 扫描这些地方出现的所有汉字
SCAN_DIRS = [ROOT / "src"]
SCAN_EXTS = {".md", ".astro", ".mdx", ".html", ".js", ".mjs", ".ts", ".json"}

# 要裁的字体：源文件 → 输出名
FONTS = [
    ("@fontsource/noto-serif-sc/files/noto-serif-sc-chinese-simplified-300-normal.woff2", "noto-serif-sc-300.woff2"),
    ("@fontsource/noto-serif-sc/files/noto-serif-sc-chinese-simplified-400-normal.woff2", "noto-serif-sc-400.woff2"),
]

# 无论内容里有没有出现，都保留的字符：
# 常用标点、数字、拉丁字母，以及中文里高频但可能暂时没用上的字
ALWAYS = set(
    "　，。、；：？！…—～·《》〈〉「」『』【】（）〔〕［］｛｝“”‘’"
    "0123456789"
    "abcdefghijklmnopqrstuvwxyz"
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    " .,;:?!'\"()[]{}<>/\\-_=+*&^%$#@~`|"
    "的一是不了人我在有他这为之大来以个中上们"
    "到说国和地也子时道出而要于就下得可你年生"
)

CJK = re.compile(
    r"[　-〿㐀-䶿一-鿿豈-﫿＀-￯]"
)


def collect_chars() -> set:
    chars = set(ALWAYS)
    scanned = 0
    for base in SCAN_DIRS:
        if not base.exists():
            continue
        for path in base.rglob("*"):
            if not path.is_file() or path.suffix.lower() not in SCAN_EXTS:
                continue
            try:
                text = path.read_text(encoding="utf-8", errors="ignore")
            except OSError:
                continue
            scanned += 1
            chars.update(CJK.findall(text))
    print(f"  扫描了 {scanned} 个文件")
    return chars


def resolve(rel: str) -> Path:
    return ROOT / "node_modules" / rel


def main() -> int:
    print("裁剪中文字体…")
    chars = collect_chars()
    cjk_count = sum(1 for c in chars if CJK.match(c))
    print(f"  网站实际用到 {cjk_count} 个汉字/中文标点（合计 {len(chars)} 个字符）")

    OUT.mkdir(parents=True, exist_ok=True)
    total_before = total_after = 0

    for rel, out_name in FONTS:
        src = resolve(rel)
        if not src.exists():
            print(f"  ! 找不到 {src}，跳过", file=sys.stderr)
            continue

        before = src.stat().st_size
        font = TTFont(str(src))

        options = Options()
        options.flavor = "woff2"
        options.desubroutinize = True
        options.layout_features = ["*"]
        options.drop_tables += ["DSIG"]
        options.notdef_outline = True

        subsetter = Subsetter(options=options)
        subsetter.populate(text="".join(sorted(chars)))
        subsetter.subset(font)

        dest = OUT / out_name
        font.flavor = "woff2"
        font.save(str(dest))
        font.close()

        after = dest.stat().st_size
        total_before += before
        total_after += after
        pct = 100 * after / before
        print(f"  {out_name}: {before/1024:.0f} KB → {after/1024:.0f} KB ({pct:.1f}%)")

    if total_before:
        print(
            f"  合计 {total_before/1024/1024:.2f} MB → {total_after/1024:.0f} KB "
            f"（省下 {100 - 100*total_after/total_before:.0f}%）"
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
