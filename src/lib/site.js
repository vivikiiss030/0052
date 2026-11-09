// ── 全站文案都在这里 ───────────────────────────────────────────
// 英文版和中文版各一套，结构完全一样。改字不用碰别的地方。
// 〔方括号〕里的是待填，填完连括号一起删。

export const T = {
  en: {
    site: {
      latin: ['The Open', 'Space'],
      cjk: '自留地',
      sub: 'tarot with Vicky',
      tagline: 'Tarot readings · online · in English & 中文',
      // 左上角：一句话让人知道这里是干什么的
      intro: 'Tarot · Self-healing',
      // 手机上没有鼠标悬停，进场时轻轻提示一句「名字可以点」
      hint: 'step inside',
    },
    nav: [
      { href: '#about', label: 'About me' },
      { href: '#how', label: 'Good to know' },
      { href: '#readings', label: 'Readings' },
      { href: '#book', label: 'Book' },
    ],
    nameStory: {
      kicker: 'The Open Space · 自留地',
      title: 'Where am I?',
      body: [
        'Hi, I’m Vicky — welcome to my healing space, The Open Space 自留地.',
        'The name came to me in a flash one night. I had always wanted my tarot practice to be demystified: an open, friendly space where the person asking and the person reading both grow a little, and discover something, as we read the cards and connect. In a fast world, I want fewer final verdicts — and more of the blank space we keep for ourselves, those moments that matter.',
        'Liúbái 留白, leaving space empty, is part of traditional Chinese aesthetics, and a deeply philosophical idea in itself. As with yin and yang: where there is yin there is yang, and where there is yang there is yin. Nothing is absolute, and nothing stays the same. Only by walking the road yourself can you step into another person’s shoes and know whether they are warm or cold.',
        'Two kinds of sessions are open for now — you’ll find them, and everything to know before booking, just below. Please DM me ahead of time to book; if you have any particular needs, I’ll do my best to find a slot that suits us both.',
      ],
    },
    about: {
      kicker: 'About me',
      title: 'Vicky',
      tags: ['Psychology background', 'Spiritual practitioner', 'Manifestor', 'Tarot reader'],
      body: 'I believe in self-care and self-acceptance, and in tarot as a tool for looking inward.',
      motto: 'Let the person lead the cards — and the cards lead the luck.',
    },
    how: {
      kicker: 'Good to know',
      title: ['A reading isn’t a final ending.', 'It’s a way of seeing yourself.'],
      items: [
        { t: 'What tarot can answer', b: ['Tarot suits questions with a timeframe — usually anything within the next three to six months, or sooner. It isn’t the right tool for long-range questions; for your long-term fortune, astrology or other systems will serve you better.'] },
        { t: 'How a reading works', b: ['You tell me the background and what’s puzzling you → we talk it through and settle on the question and the right spread → you pay to book → I shuffle → you wait quietly and settle yourself → you give me numbers, or I draw → we read and discuss → done.', 'A typical reading takes about 20 minutes: one question, one answer, follow-up questions not included.'] },
        { t: 'When I’ll decline', b: ['Tarot can’t help much if you arrive with an answer already decided, or while caught in a strong fixation, an unresolved knot, or big swings of emotion. I also don’t read on life and death, health, gambling, or anything involving lives or the law.', 'Please come calm and centred — not superstitious, not blindly following.'] },
        { t: 'How to hold a reading', b: ['A spread mirrors the energy of your subconscious right now. It isn’t the final ending — only the most likely timeline if nothing changes. Everyone has the power to change their own fate, so please don’t put blind faith in any tool: a reading offers a perspective on your heart and habits, and the reader knows no more than anyone else.', '“Character is fate” means the habits, emotions, thoughts and patterns we run without thinking add up to our fate. The point of a reading is to see those automatic programmes clearly, step off the worn path, and add some luck of your own.'] },
      ],
    },
    readingsKicker: 'Readings',
    readings: [
      {
        n: '01',
        name: 'Tarot reading',
        len: '3–10 cards · about 20 min',
        price: 'DM for prices',
        note: 'One question, one answer. We choose the spread together, depending on what you want to know.',
        toggle: ['See the spreads', 'Hide the spreads'],
        spreads: [
          { k: 3, lay: 'three', name: 'Three-card spread', zh: '万能牌阵', pos: 'Development · Outcome · Thoughts', for: 'Works for almost any single question.', tag: 'Any question' },
          { k: 5, lay: 'cross', name: 'Cross spread', zh: '综合十字', pos: 'Development · Influences · Obstacles · Outcome / Advice', for: 'A rounded look at one situation, with advice on what to do next.', tag: 'Any question' },
          { k: 5, kl: '5 / 7', lay: 'choice', name: 'Choice spread', zh: '二选一 / 三选一', pos: 'You at the base · one line of cards for each path', for: 'Torn between two paths, or three? See how each is likely to unfold — and which way to go.', tag: 'Decisions' },
          { k: 6, lay: 'six', name: 'Thoughts & direction', zh: '想法及发展', pos: 'Their thoughts · Where it’s heading', for: 'Any relationship in your life — a partner, a colleague, a classmate, a friend: what they currently think of you, and where things between you are going.', tag: 'Relationships' },
          { k: 8, lay: 'venus', name: 'Venus love spread', zh: '爱情维纳斯', pos: 'Both sides · Influences · Direction · Obstacles · Outcome', for: 'A deep reading of a relationship, from both people’s side.', tag: 'Love' },
          { k: 10, lay: 'celtic', name: 'Celtic Cross', zh: '凯尔特十字', pos: 'Present · Obstacles · Past · Future · Conscious · Subconscious · Advice · Influences · Outcome', for: 'The most complete spread, for when you want the whole picture.', tag: 'The full picture' },
        ],
      },
      {
        n: '02',
        name: 'Healing & channelling',
        len: '50 min / session',
        price: 'DM for prices',
        note: 'A longer session with no limit on questions — tarot (and a pendulum when it helps), deep listening, live channelling and therapeutic conversation.',
        toggle: ['What happens in a session', 'Close'],
        points: [
          'Ask as many questions as you like',
          'Tarot — and a pendulum when it helps — with deep listening, live channelling and therapeutic conversation',
          'Use the cards to explore the deeper psychology and causes behind a problem',
          'Face the core of the issue — together',
          'Break old patterns, limiting beliefs and old scripts',
          'Create a new sense of self, and a new ending to your story',
        ],
        after: 'At the end we make a growth plan together, with practical steps to help you change. It’s a journey of exploration we share — I hope we both bring care for ourselves, mutual respect and cooperation.',
      },
    ],
    readingsNote: 'All sessions are online, in English or Chinese — whichever you think in. Prices are sent privately: message me on Instagram and I’ll send you the full menu.',
    saysKicker: 'What people say',
    says: [
      { quote: '〔a few lines someone wrote you after a reading〕', who: '〔R., London〕' },
      { quote: '〔another one〕', who: '〔who〕' },
      { quote: '〔another one〕', who: '〔who〕' },
    ],
    notesKicker: 'Notes',
    notes: [
      { t: '〔a short thought〕', b: '〔one or two sentences.〕' },
      { t: '〔another〕', b: '〔…〕' },
      { t: '〔another〕', b: '〔…〕' },
    ],
    book: {
      kicker: 'Book',
      title: 'Readings are booked through Instagram.',
      body: 'Send me a DM with a little background — no need to make it tidy. I’ll send you the price list, and we’ll find a spread and a time that suits us both.',
      // 英文版：点了直接去 IG
      cta: { type: 'link', href: 'https://instagram.com/v.vikiiss_', label: 'Message me on Instagram', detail: '@v.vikiiss_', note: 'DM on Instagram' },
    },
  },

  zh: {
    site: {
      latin: ['The Open', 'Space'],
      cjk: '自留地',
      sub: 'Vicky 的塔罗',
      tagline: '线上塔罗解读 · 中文 / English',
      intro: '塔罗 · 自我疗愈',
      hint: '由此进入',
    },
    nav: [
      { href: '#about', label: '关于我' },
      { href: '#how', label: '占卜须知' },
      { href: '#readings', label: '解读项目' },
      { href: '#book', label: '预约' },
    ],
    nameStory: {
      kicker: 'The Open Space · 自留地',
      title: '自留地',
      body: [
        '嗨你好，欢迎来到我的疗愈空间「The Open Space 自留地」，我是 Vicky。',
        '这个空间的名字来源于一个夜晚的灵光一闪——我一直想为自己的占卜愿景打造一个「去神秘化」的开放友好空间，希望我与问卜者都能够在读牌、链接的过程中彼此有所成长与发现。在这个快节奏的时代，少一点「断言定论」，多一些留给自己的，那些重要的空白时刻。',
        '「留白」作为中国传统美学的一部分，本身也是一个极具哲学意味的理念。正如阴阳之中，有阴必有阳，有阳必有阴。没有什么是绝对的，也没有什么是一成不变的。持续在道路中体验，才能把脚踏进另一个人的鞋子里，知其冷暖。',
        '目前已开放两类服务，具体项目和须知就在下面，价目表请私信获取。咨询需求请提前私信预约，如有任何特殊需要，我会尽可能协调一个双方都方便的 slot 完成。',
      ],
    },
    about: {
      kicker: '关于我',
      title: 'Vicky',
      tags: ['心理学专业', '灵修者', '显化者', '塔罗师'],
      body: '主张自我关怀与自我接纳，让塔罗牌成为向内探索的工具。',
      motto: '以人驭牌，以牌驭运。',
    },
    how: {
      kicker: '占卜服务须知',
      title: ['占卜不是最终结局，', '而是一个看清自己的视角。'],
      items: [
        { t: '关于问题范围', b: ['塔罗适合询问具有时效性的问题，一般 3–6 个月甚至更短的事情都可以看，但更长远的问题不太适用这种工具。如需咨询长期运势类问题，请寻求星盘、命理等工具帮助。'] },
        { t: '关于咨询流程', b: ['你向我详细描述问题背景以及困惑点 → 我和你讨论后确认咨询问题及合适牌阵 → 你付款预定 → 我洗牌 → 你等候并静心 → 你向我报数字或我抽牌 → 解读与讨论 → 结束。', '一般问题占卜时长在 20 分钟左右。一问一答，不包含延伸问题。'] },
        { t: '拒收案例标准', b: ['占卜并不适用于问卜者带着已有预设答案，或内心有强烈执念、心结、情绪起伏时的状态来解答；同样不接受关于生死、健康、赌博等任何涉及生命或违法事宜的预测。', '请确保自身状态平和中正，不迷信、不盲从，方宜占卜。'] },
        { t: '对待占卜的态度', b: ['纸牌占卜本质上是对问卜者当下潜意识能量的映射。占卜解读并不代表「最终结局」，仅仅代表「如果按照当下什么都不改变，最可能的时间线结果是什么」。因此，每个人都有力量改变自己的命运，请不要迷信任何工具。占卜只是给你一个视角，帮助你面对自己的内心与习性，占卜师并不比任何人懂得更多。', '「性格决定命运」，指的就是那些我们不假思索的习惯、情绪、思维以及行为模式，共同造就了我们的「命」。而占卜的意义，就在于看清这些「自动化程式」后打破已有路径，为自己增添「运」的力量。'] },
      ],
    },
    readingsKicker: '解读项目',
    readings: [
      {
        n: '01',
        name: '塔罗私占',
        len: '3–10 张牌阵 · 约 20 分钟',
        price: '私信获取价目',
        note: '一问一答，不含延伸问题。根据你想问的事，我们一起选合适的牌阵。',
        toggle: ['展开牌阵', '收起牌阵'],
        spreads: [
          { k: 3, lay: 'three', name: '3 张万能牌阵', pos: '发展 · 结果 · 想法', for: '几乎任何单个问题都适用。', tag: '万能' },
          { k: 5, lay: 'cross', name: '综合十字', pos: '发展 · 影响 · 阻碍 · 结局 / 建议', for: '全面看一件事，并给出下一步的建议。', tag: '万能' },
          { k: 5, kl: '5 / 7', lay: 'choice', name: '选择牌阵 · 二选一 / 三选一', pos: '最下面是你 · 每条路各一列牌', for: '适用于拥有多种选择、犹豫不决，希望看清每条路的未来发展、该怎么选的情况。', tag: '抉择' },
          { k: 6, lay: 'six', name: '想法及发展', pos: '对方的想法 · 关系走向', for: '不只是感情——同事、同学、朋友，任何一段关系都可以看：对方目前对你的想法，以及你们关系未来的发展。', tag: '人际' },
          { k: 8, lay: 'venus', name: '爱情维纳斯', pos: '双方想法 · 影响 · 关系走向 · 阻碍 · 结局', for: '深度解读一段感情，从双方的角度来看。', tag: '感情' },
          { k: 10, lay: 'celtic', name: '凯尔特十字', pos: '现状 · 阻碍 · 过去 · 未来 · 表意识 · 潜意识 · 建议 · 影响 · 结果', for: '最全面的牌阵，想看清全局时用。', tag: '全局' },
        ],
      },
      {
        n: '02',
        name: '疗愈传讯',
        len: '50 分钟 / 节',
        price: '私信获取价目',
        note: '不限提问次数。结合占卜（塔罗，必要时也会用灵摆）、倾听陪伴、即时传讯与咨询疗愈的一节长时段咨询。',
        toggle: ['展开详情', '收起'],
        points: [
          '不限提问次数',
          '结合占卜（塔罗牌，必要时也会用灵摆）、倾听陪伴、即时传讯与咨询疗愈',
          '帮助你一起通过牌面，探索问题背后的深层心理机制与成因',
          '陪伴你直面问题核心',
          '打破行为模式、限制性信念、旧剧本',
          '创造全新自我概念与故事结局',
        ],
        after: '结束后会与你共同制定可帮助改进的成长实践计划。这是一场共同的探索旅程，希望我们彼此都能带着对自我的关怀，相互尊重与配合。',
      },
    ],
    readingsNote: '全部线上进行，中文或英文都可以。价目表私发：加微信后我发给你。',
    saysKicker: '他们说',
    says: [
      { quote: '〔有人在解读之后写给你的几句话〕', who: '〔小 R，上海〕' },
      { quote: '〔另一条〕', who: '〔谁〕' },
      { quote: '〔另一条〕', who: '〔谁〕' },
    ],
    notesKicker: '感悟',
    notes: [
      { t: '〔一个短短的念头〕', b: '〔一两句话就够。〕' },
      { t: '〔另一个〕', b: '〔……〕' },
      { t: '〔另一个〕', b: '〔……〕' },
    ],
    book: {
      kicker: '预约',
      title: '预约请加我的微信。',
      body: '加微信时简单说说你的问题背景就好，不用整理得很清楚。我会发你价目表，再约一个双方都方便的时间。',
      // 中文版：国内的人多半没有 IG，走你现在的微信私域。
      // 微信号不能做成链接，所以按钮是「点一下复制」
      cta: { type: 'copy', value: 'SeeSoul_', label: '复制微信号', detail: 'SeeSoul_', done: '已复制，去微信搜索添加', note: '如何联系？', noteDetail: 'WeChat: SeeSoul_' },
    },
  },
};

// 牌阵摆法示意：每张牌是 [中心 x, 中心 y, 是否横放]，单位约等于「牌宽 12、牌高 19」
export const W = 12, H = 19;
export const layouts = {
  three: { vb: [0, 0, 42, 19], cards: [[6, 9.5], [21, 9.5], [36, 9.5]] },
  cross: { vb: [0, 0, 42, 63], cards: [[21, 9.5], [6, 31.5], [21, 31.5], [36, 31.5], [21, 53.5]] },
  // 选择牌阵：最下面一张是你，往上两条路各自两张
  choice: { vb: [0, 0, 42, 63], cards: [[21, 53.5], [12, 31.5], [30, 31.5], [6, 9.5], [36, 9.5]] },
  six: { vb: [0, 0, 42, 41], cards: [[6, 9.5], [21, 9.5], [36, 9.5], [6, 31.5], [21, 31.5], [36, 31.5]] },
  // 维纳斯：照你那张实拍图的位置摆的
  venus: { vb: [0, 0, 48, 96], cards: [[24, 9.5], [9.5, 26.5], [38.5, 26.5], [24, 37.5], [6.5, 62], [24, 62], [41.5, 62], [24, 86.5]] },
  // 凯尔特十字（韦特版）：中间 1、2 交叉，3 上 4 下，6 左 5 右，右边一列从下往上 7→10
  celtic: { vb: [0, 0, 72, 85], cards: [[26, 42.5], [26, 42.5, 1], [26, 20.5], [26, 64.5], [44, 42.5], [8, 42.5], [64, 75.5], [64, 53.5], [64, 31.5], [64, 9.5]] },
};


// ── 四个内容页 ───────────────────────────────────────────────
// 顺序就是「下一页」的顺序
export const order = ['about', 'guide', 'readings'];

export const pageMeta = {
  en: {
    about: { n: 'I', title: 'About me', nav: 'About me' },
    guide: { n: 'II', title: 'Good to know', nav: 'Good to know' },
    readings: { n: 'III', title: 'Readings', nav: 'Readings' },
  },
  zh: {
    about: { n: 'I', title: '关于我', nav: '关于我' },
    guide: { n: 'II', title: '占卜须知', nav: '占卜须知' },
    readings: { n: 'III', title: '解读项目', nav: '解读项目' },
  },
};

export const ui = {
  en: { home: 'The Open Space', next: 'Next', backToStart: 'Back to the start', book: 'Book', bookLong: 'Book a reading' },
  zh: { home: 'The Open Space', next: '下一页', backToStart: '回到首页', book: '预约', bookLong: '预约解读' },
};

export const url = (lang, key) => `${lang === 'zh' ? '/zh' : ''}/${key ? key + '/' : ''}`;

// 首页往下拉，空间介绍下面的三扇门
export const doors = {
  en: [
    { key: 'about', line: 'Who will be reading for you.' },
    { key: 'guide', line: 'What tarot can and can’t answer, and how a reading works.' },
    { key: 'readings', line: 'Two kinds of sessions, and the spreads I use.' },
  ],
  zh: [
    { key: 'about', line: '为你读牌的人。' },
    { key: 'guide', line: '塔罗能问什么、不适合问什么，以及咨询流程。' },
    { key: 'readings', line: '两类服务，以及我常用的牌阵。' },
  ],
};
