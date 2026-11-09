#!/usr/bin/env python3
"""
生成首页交界处的白蕾丝（public/lace.svg）和它背后那块绿色的形状（public/lace-edge.svg）。
白蕾丝跨在交界上：大扇贝朝上压在丝缎上；背后的绿色上沿是一条藏在花纹后面的波浪线，
所以网眼上半截透丝缎、下半截透绿色，看不到直线分界。

一段横向可无缝重复的花边：网底 + 大玫瑰 + 小花 + 叶子 + 卷草 + 扇贝边和小珠。
所有图形都是白色，花瓣里的「镂空纹」用 mask 抠出来，所以压在任何底色上都对。
改花型：改下面 MOTIFS 里的位置 / 大小，再跑 python3 scripts/make-lace.py。
"""
import math
from pathlib import Path

W, H = 360, 132          # 一段的宽高（横向重复）
EDGE = 96                # 扇贝边的「腰线」高度
SC = 4                   # 每段几个扇贝
OUT = Path(__file__).resolve().parent.parent / "public" / "lace.svg"
# 蕾丝是白色的
INK = "#fff"

f = lambda v: f"{v:.2f}".rstrip("0").rstrip(".")


def pol(cx, cy, r, a):
    return cx + r * math.cos(a), cy + r * math.sin(a)


# ── 轮廓：上边一条微波浪的边，下边扇贝 ─────────────────────
# 上边：一串大小、高低都不一样的小弧（像蕾丝顺着花型剪下来的边），不是直线
TOP = [(34, 9), (22, 5), (48, 15), (26, 7), (40, 12), (30, 6), (52, 16), (24, 8), (38, 11), (46, 13)]
BASE = 22
assert sum(w for w, _ in TOP) == W


TOP = [(34, 5), (22, 3), (48, 8), (26, 4), (40, 6), (30, 3), (52, 8), (24, 4), (38, 6), (46, 7)]
assert sum(w for w, _ in TOP) == W


def top_edge(move=True):
    """下沿（翻转前写在上面）：一串大小、高低都不一样的小弧"""
    d = [f"M0 {BASE}"] if move else []
    x = 0
    for w, h in TOP:
        d.append(f"Q{f(x + w / 2)} {f(BASE - h * 2)} {f(x + w)} {BASE}")
        x += w
    return " ".join(d)


def top_picots():
    out, x = [], 0
    for w, h in TOP:
        out.append(f'<circle cx="{f(x + w / 2)}" cy="{f(BASE - h - 3.2)}" r="1.8"/>')
        x += w
    return "".join(out)


def body_path():
    d = [top_edge(), f"L{W} {EDGE}"]
    sw = W / SC
    for i in range(SC):
        xa = W - i * sw
        xb = xa - sw
        d.append(f"C{f(xa - sw*0.06)} {f(EDGE + 30)} {f(xb + sw*0.06)} {f(EDGE + 30)} {f(xb)} {EDGE}")
    d.append("Z")
    return " ".join(d)


def scallop_line(offset=0):
    sw = W / SC
    d = [f"M0 {EDGE - offset}"]
    for i in range(SC):
        xa = i * sw
        xb = xa + sw
        d.append(f"C{f(xa + sw*0.06)} {f(EDGE + 30 - offset*1.6)} {f(xb - sw*0.06)} {f(EDGE + 30 - offset*1.6)} {f(xb)} {EDGE - offset}")
    return " ".join(d)


def picots():
    """扇贝外缘的小珠和小圈"""
    out = []
    sw = W / SC
    for i in range(SC):
        for t in [0.12, 0.27, 0.42, 0.58, 0.73, 0.88]:
            # 三次贝塞尔上取点
            xa, xb = i * sw, (i + 1) * sw
            p0, p1, p2, p3 = (xa, EDGE), (xa + sw*0.06, EDGE + 30), (xb - sw*0.06, EDGE + 30), (xb, EDGE)
            u = 1 - t
            x = u**3*p0[0] + 3*u*u*t*p1[0] + 3*u*t*t*p2[0] + t**3*p3[0]
            y = u**3*p0[1] + 3*u*u*t*p1[1] + 3*u*t*t*p2[1] + t**3*p3[1]
            # 法线方向往外推一点
            dx = 3*u*u*(p1[0]-p0[0]) + 6*u*t*(p2[0]-p1[0]) + 3*t*t*(p3[0]-p2[0])
            dy = 3*u*u*(p1[1]-p0[1]) + 6*u*t*(p2[1]-p1[1]) + 3*t*t*(p3[1]-p2[1])
            L = math.hypot(dx, dy) or 1
            nx, ny = dy / L, -dx / L
            if ny < 0: nx, ny = -nx, -ny
            out.append(f'<circle cx="{f(x + nx*3.6)}" cy="{f(y + ny*3.6)}" r="2.1"/>')
            out.append(f'<circle cx="{f(x + nx*3.6)}" cy="{f(y + ny*3.6)}" r="3.6" class="ring"/>' if t in (0.42, 0.58) else "")
        # 扇贝最低点挂一颗大一点的
        out.append(f'<circle cx="{f(i*sw + sw/2)}" cy="{f(EDGE + 28.5)}" r="2.8"/>')
    return "".join(out)


# ── 花型 ──────────────────────────────────────────────
def petal(cx, cy, r0, r1, a, width, lobes=3):
    """一片花瓣：从 r0 到 r1，外缘做成几个小波浪（像蕾丝花瓣的齿边）"""
    pts = []
    half = width / 2
    a0, a1 = a - half, a + half
    x, y = pol(cx, cy, r0, a0)
    d = [f"M{f(x)} {f(y)}"]
    x, y = pol(cx, cy, r1 * 0.86, a0 - 0.02)
    d.append(f"Q{f(pol(cx, cy, (r0 + r1) / 2, a0 - 0.12)[0])} {f(pol(cx, cy, (r0 + r1) / 2, a0 - 0.12)[1])} {f(x)} {f(y)}")
    for k in range(lobes):
        b0 = a0 + (a1 - a0) * k / lobes
        b1 = a0 + (a1 - a0) * (k + 1) / lobes
        cxp, cyp = pol(cx, cy, r1 * 1.08, (b0 + b1) / 2)
        ex, ey = pol(cx, cy, r1 * (0.86 if k < lobes - 1 else 0.86), b1)
        d.append(f"Q{f(cxp)} {f(cyp)} {f(ex)} {f(ey)}")
    x, y = pol(cx, cy, r0, a1)
    d.append(f"Q{f(pol(cx, cy, (r0 + r1) / 2, a1 + 0.12)[0])} {f(pol(cx, cy, (r0 + r1) / 2, a1 + 0.12)[1])} {f(x)} {f(y)}Z")
    return " ".join(d)


def rose(cx, cy, R, rot=0.0):
    """大玫瑰：外圈 8 瓣（网格填充 + 粗轮廓），中圈 6 瓣（实心 + 镂空脉），花心一圈小珠"""
    solid, hatch, cuts = [], [], []
    for i in range(8):
        a = rot + i * math.tau / 8
        p = petal(cx, cy, R * 0.42, R, a, math.tau / 8 * 0.98, lobes=3)
        hatch.append(p)
        # 花瓣中线的镂空
        x0, y0 = pol(cx, cy, R * 0.55, a)
        x1, y1 = pol(cx, cy, R * 0.86, a)
        cuts.append(f"M{f(x0)} {f(y0)}L{f(x1)} {f(y1)}")
    for i in range(6):
        a = rot + 0.3 + i * math.tau / 6
        solid.append(petal(cx, cy, R * 0.16, R * 0.56, a, math.tau / 6 * 0.95, lobes=2))
        x0, y0 = pol(cx, cy, R * 0.24, a)
        x1, y1 = pol(cx, cy, R * 0.46, a)
        cuts.append(f"M{f(x0)} {f(y0)}L{f(x1)} {f(y1)}")
    dots = "".join(
        f'<circle cx="{f(pol(cx, cy, R * 0.11, rot + k * math.tau / 8)[0])}" cy="{f(pol(cx, cy, R * 0.11, rot + k * math.tau / 8)[1])}" r="{f(R * 0.035)}"/>'
        for k in range(8)
    )
    return solid, hatch, cuts, dots + f'<circle cx="{f(cx)}" cy="{f(cy)}" r="{f(R*0.05)}"/>'


def small_flower(cx, cy, R, rot=0.0, n=5):
    solid, cuts = [], []
    for i in range(n):
        a = rot + i * math.tau / n
        solid.append(petal(cx, cy, R * 0.22, R, a, math.tau / n * 0.92, lobes=2))
        x0, y0 = pol(cx, cy, R * 0.38, a)
        x1, y1 = pol(cx, cy, R * 0.8, a)
        cuts.append(f"M{f(x0)} {f(y0)}L{f(x1)} {f(y1)}")
    cuts.append(f"M{f(cx + R*0.16)} {f(cy)}A{f(R*0.16)} {f(R*0.16)} 0 1 0 {f(cx - R*0.16)} {f(cy)}A{f(R*0.16)} {f(R*0.16)} 0 1 0 {f(cx + R*0.16)} {f(cy)}")
    return solid, cuts


def leaf(x, y, L, a, w=0.36):
    """尖叶：一条主脉，两边各三条侧脉（镂空）"""
    tip = pol(x, y, L, a)
    l1 = pol(x, y, L * 0.5, a - w)
    r1 = pol(x, y, L * 0.5, a + w)
    d = f"M{f(x)} {f(y)}Q{f(l1[0])} {f(l1[1])} {f(tip[0])} {f(tip[1])}Q{f(r1[0])} {f(r1[1])} {f(x)} {f(y)}Z"
    cuts = [f"M{f(pol(x, y, L*0.12, a)[0])} {f(pol(x, y, L*0.12, a)[1])}L{f(pol(x, y, L*0.86, a)[0])} {f(pol(x, y, L*0.86, a)[1])}"]
    for t in (0.3, 0.5, 0.68):
        bx, by = pol(x, y, L * t, a)
        for s in (-1, 1):
            ex, ey = pol(bx, by, L * 0.14, a + s * 0.9)
            cuts.append(f"M{f(bx)} {f(by)}L{f(ex)} {f(ey)}")
    return d, cuts


def scroll(x, y, r, a, turns=1.4, sign=1):
    """卷草：一条渐收的螺旋线"""
    pts = []
    for i in range(40):
        t = i / 39
        ang = a + sign * t * turns * math.tau
        rr = r * (1 - 0.82 * t)
        pts.append(pol(x, y, rr, ang))
    d = f"M{f(pts[0][0])} {f(pts[0][1])}" + "".join(f"L{f(px)} {f(py)}" for px, py in pts[1:])
    return d


# ── 一段里的布局 ──────────────────────────────────────
solid, hatch, cuts, dots, strokes = [], [], [], [], []

def add_rose(cx, cy, R, rot):
    s, h, c, d = rose(cx, cy, R, rot)
    solid.extend(s); hatch.extend(h); cuts.extend(c); dots.append(d)

def add_flower(cx, cy, R, rot, n=5):
    s, c = small_flower(cx, cy, R, rot, n)
    solid.extend(s); cuts.extend(c)

def add_leaf(x, y, L, a, w=0.36):
    d, c = leaf(x, y, L, a, w)
    solid.append(d); cuts.extend(c)

for ox in (-W, 0, W):   # 两侧各复制一次，保证接缝处的图形是完整的
    # 叶子先画（压在花底下）
    for (x, y, L, a, w) in [
        (128, 70, 40, 0.42, 0.72), (130, 30, 36, -0.55, 0.7), (52, 26, 34, math.pi + 0.55, 0.7),
        (48, 74, 34, math.pi - 0.4, 0.72),
        (224, 40, 30, math.pi - 0.15, 0.7), (272, 62, 30, 0.75, 0.7), (230, 70, 26, math.pi * 0.8, 0.68),
        (322, 70, 28, -0.6, 0.7), (318, 96, 22, 0.3, 0.68), (168, 66, 26, 0.05, 0.68), (176, 40, 24, -0.9, 0.68),
        (346, 44, 26, -1.9, 0.7),
    ]:
        add_leaf(ox + x, y, L, a, w)
    # 大玫瑰
    add_rose(ox + 92, 52, 41, 0.12)
    # 五瓣、六瓣小花，大小错开
    add_flower(ox + 250, 46, 25, 0.5, n=6)
    add_flower(ox + 306, 84, 15, 0.1)
    add_flower(ox + 196, 86, 15, 0.9)
    add_flower(ox + 18, 88, 12, 0.3, n=6)
    add_flower(ox + 156, 20, 9, 0.2)
    add_flower(ox + 338, 20, 10, 0.7)
    add_flower(ox + 206, 20, 7, 0.4)
    # 卷草和花茎
    strokes.append(f"M{ox+128} 52 C{ox+150} 48 {ox+170} 76 {ox+196} 78 S{ox+226} 62 {ox+228} 56")
    strokes.append(f"M{ox+270} 58 C{ox+284} 74 {ox+292} 80 {ox+298} 80")
    strokes.append(f"M{ox+322} 74 C{ox+338} 64 {ox+350} 52 {ox+372} 54 S{ox+398} 44 {ox+412} 48")
    strokes.append(f"M{ox+150} 26 C{ox+170} 34 {ox+190} 22 {ox+202} 22")
    strokes.append(f"M{ox+274} 30 C{ox+296} 18 {ox+318} 26 {ox+332} 22")
    strokes.append(scroll(ox + 186, 46, 11, math.pi * 0.2, 1.4, 1))
    strokes.append(scroll(ox + 290, 40, 10, math.pi * 1.1, 1.4, -1))
    strokes.append(scroll(ox + 30, 52, 11, math.pi * 1.6, 1.3, 1))
    strokes.append(scroll(ox + 340, 88, 8, math.pi * 1.0, 1.3, -1))
    strokes.append(scroll(ox + 232, 96, 7, math.pi * 0.4, 1.3, 1))

cell = 5.2
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
  <!-- 首页交界处的白蕾丝。由 scripts/make-lace.py 生成，别手改 -->
  <defs>
    <pattern id="net" width="{cell}" height="{cell * 0.866 * 2:.3f}" patternUnits="userSpaceOnUse">
      <path d="M0 0L{cell/2:.2f} {cell*0.866:.3f}L0 {cell*0.866*2:.3f}M{cell} 0L{cell/2:.2f} {cell*0.866:.3f}L{cell} {cell*0.866*2:.3f}M{cell/2:.2f} {cell*0.866:.3f}V{cell*0.866*2:.3f}" fill="none" stroke="#fff" stroke-width="0.55"/>
    </pattern>
    <pattern id="hatch" width="2.3" height="2.3" patternUnits="userSpaceOnUse" patternTransform="rotate(-38)">
      <path d="M0 0.6H2.3" stroke="#fff" stroke-width="1"/>
    </pattern>
    <pattern id="esprit" width="14" height="12" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="0.9" fill="#fff"/><circle cx="10" cy="9" r="0.9" fill="#fff"/>
    </pattern>
    <linearGradient id="root" gradientUnits="userSpaceOnUse" x1="0" y1="{BASE}" x2="0" y2="{BASE + 52}">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="0.35" stop-color="#fff" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="body"><path d="{body_path()}"/></clipPath>
    <mask id="cut" maskUnits="userSpaceOnUse" x="0" y="0" width="{W}" height="{H}">
      <rect width="{W}" height="{H}" fill="#fff"/>
      <path d="{" ".join(cuts)}" fill="none" stroke="#000" stroke-width="0.95" stroke-linecap="round"/>
    </mask>
  </defs>

  <g transform="translate(0 {H}) scale(1 -1)">
  <!-- 网底 + 撒点 -->
  <!-- 一层薄纱似的白底，让整条蕾丝更实一点，只在网眼里隐约透出后面 -->
  <path d="{body_path()}" fill="#fff" opacity="0.32"/>
  <rect width="{W}" height="{H}" fill="url(#net)" clip-path="url(#body)"/>
  <rect width="{W}" height="{H}" fill="url(#esprit)" clip-path="url(#body)"/>

  <g clip-path="url(#body)">
  <g mask="url(#cut)">
    <!-- 外圈花瓣：细纹填充 + 粗轮廓（蕾丝的「cordonnet」） -->
    <path d="{" ".join(hatch)}" fill="url(#hatch)"/>
    <path d="{" ".join(hatch)}" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>
    <!-- 实心部分：内圈花瓣、小花、叶子 -->
    <path d="{" ".join(solid)}" fill="#fff" fill-opacity="1" stroke="#fff" stroke-width="0.6" stroke-linejoin="round"/>
  </g>
  <g fill="#fff">{"".join(dots)}</g>

  <!-- 卷草、花茎 -->
  <path d="{" ".join(strokes)}" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
  </g>

  <!-- 扇贝边：一粗一细两道，外缘挂小珠 -->
  <path d="{scallop_line(0)}" fill="none" stroke="#fff" stroke-width="2.4"/>
  <path d="{scallop_line(5)}" fill="none" stroke="#fff" stroke-width="0.8" opacity="0.9"/>
  <g fill="#fff" stroke="#fff">{picots().replace('class="ring"', 'fill="none" stroke-width="0.8"')}</g>
  <!-- 下沿：一粗一细两道小弧边，弧顶挂小珠（翻转后在最下面，垂在绿色上） -->
  <path d="{top_edge()}" fill="none" stroke="#fff" stroke-width="2"/>
  <path d="{top_edge()}" fill="none" stroke="#fff" stroke-width="0.7" transform="translate(0 4)" opacity="0.85"/>
  <g fill="#fff">{top_picots()}</g>
  </g>
</svg>
'''
# 画的时候都用白色写的，最后统一换成面板色（mask 里的黑白不动）
head, rest = svg.split("<mask", 1)
mask_part, tail = rest.split("</mask>", 1)
head = head.replace("#fff", INK)
tail = tail.replace("#fff", INK)
svg = head + "<mask" + mask_part + "</mask>" + tail
OUT.write_text(svg)
print("wrote", OUT, len(svg) // 1024, "KB")

# 蕾丝背后那块绿色的形状：上沿是一条弯弯曲曲的线，藏在花纹后面。
# 网眼里，线以上透出丝缎，线以下透出绿色 —— 看得到的分界只有白色扇贝那一圈。
pts = []
for i in range(0, 73):
    x = W * i / 72
    y = 66 + 7 * math.sin(x / W * math.tau * 2 + 0.6) + 4 * math.sin(x / W * math.tau * 5 + 1.3) + 2.5 * math.sin(x / W * math.tau * 9)
    pts.append((x, y))
wave = f"M0 {H} L0 {f(pts[0][1])} " + " ".join(f"L{f(x)} {f(y)}" for x, y in pts[1:]) + f" L{W} {H}Z"
edge = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" preserveAspectRatio="none">
  <!-- 白蕾丝背后的绿色：上沿是波浪线，藏在花纹后面。由 scripts/make-lace.py 生成 -->
  <path d="{wave}" fill="#000"/>
</svg>
'''
(OUT.parent / "lace-edge.svg").write_text(edge)
print("wrote lace-edge.svg")
