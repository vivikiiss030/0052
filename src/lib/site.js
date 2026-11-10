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
      intro: 'Tarot · Self-reflection & healing',
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
        'Hi, I’m Vicky — welcome to The Open Space 自留地.',
        'The name came to me in a flash one night. I had always wanted my tarot practice to be demystified: an open, friendly space where the person asking and the person reading both grow a little, and discover something, as we read the cards and connect. In a fast world, I want fewer final verdicts — and more of those little moments of stillness that we rarely make time for ourselves.',
        'Liúbái 留白, leaving space empty, is part of traditional Chinese aesthetics, and a deeply philosophical idea in itself. As with yin and yang: where there is yin there is yang, and where there is yang there is yin. Nothing is absolute, and nothing stays the same. Sometimes, all we need is a little prompt, a doorway, or a pause after a conversation — something that lets us step into our inner world and find answers of our own.',
        'Two kinds of sessions are open for now — you’ll find them, and everything to know before booking, just below. Please DM me ahead of time to book; if you have any particular needs, I’ll do my best to find a slot that suits us both.',
      ],
    },
    about: {
      kicker: 'About me',
      title: 'Vicky',
      tags: ['Psychology background', 'Spiritual practitioner', 'Manifestor', 'Tarot reader'],
      body: 'I believe in self-care and self-acceptance, and in tarot as a tool for looking inward.',
      story: [
        'A little about me: I’m Vicky — you can also call me Yifan.',
        'Even as a child, I was fascinated by the possibilities that might exist beyond the physical world. As a child I’d often ask my parents, “Wow — could I fly?” A sincere question that seems sweet and a little funny now, but it became something of a guiding thread in my life.',
        'Of course, the Wright brothers had already figured out how to get humans off the ground long before I was born. But I don’t think any of us need a pair of “wings” to “fly” — to see our lives from higher up and further out. We’re born with the ability already: imagination, which lets us explore our own worlds as freely as we like.',
        'I believe the answers aren’t out there — they’re within each of us. The world is a space we interact with and project onto; through what’s outside, we come to see ourselves more clearly and understand who we really are. Tarot is a tool that helps with exactly this. Beyond its traditional role in divination, it mirrors the querent’s subconscious and energy (which is, in fact, why it can divine at all). Through its symbolic images, it opens a door to the subconscious and invites us to consider the reasons we hadn’t yet noticed.',
        'So I decided to create this space — an open place without standard answers — bringing together my own background, experience and readings to offer a fresh perspective to anyone who needs one. If you have questions about love, study, career, personal growth or anything else, you’re very welcome to reach out :)',
      ],
      motto: 'Let the cards reveal. Let yourself decide.',
    },
    how: {
      kicker: 'Good to know',
      title: ['A reading isn’t a final ending.', 'It’s a way of seeing yourself.'],
      items: [
        { t: 'What tarot can answer', b: ['Tarot works best with questions that have a clear timeframe, usually within the next 3 to 6 months, or sooner. It isn’t the right tool for long-range questions; for your long-term fortune, astrology or other systems will serve you better (but dw, I’m already learning! Stay tuned!)'] },
        { t: 'How a reading works', b: ['You tell me the background and what’s puzzling you → we talk it through and agree on a question and a suitable spread → you confirm your booking with payment → I shuffle → you take a moment to relax and center yourself → you choose numbers, or I draw the cards for you → we read and discuss → done.', 'A typical reading takes about 20 minutes: one question, one answer, follow-up questions not included.'] },
        { t: 'When I’ll decline', b: ['Tarot may not be particularly helpful if you’re approaching a reading with an answer already decided in your mind, or if you’re experiencing intense emotional distress, fixation or inner conflict. I also don’t offer readings on matters involving life and death, health, gambling or legal issues.', 'Please come calm and centred — not superstitious, not blindly following.'] },
        { t: 'How to approach a reading', b: ['A spread mirrors the energy of your subconscious right now. It isn’t the final ending — only the most likely timeline if nothing changes. We all have the power to shape our own future, so I encourage you not to place blind faith in any tool. Tarot offers a perspective — a way to look inward, reflect on your habits and understand yourself a little better. The reader knows no more than anyone else, especially you, yourself.', '“Character is fate” means the habits, emotions, thoughts and patterns we run without thinking add up to our fate. The purpose of a reading is to bring these automatic patterns into awareness, so we can step beyond familiar paths and make more conscious choices. After all, the cards don’t decide your future. You do :)'] },
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
          { k: 5, kl: '5 / 7', lay: 'choice', name: 'Choice spread', zh: '二选一 / 三选一', pos: 'Shows how each of your paths is likely to unfold', for: 'Torn between two paths, or three? See how each is likely to unfold — and which way to go.', tag: 'Decisions' },
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
    readingsNote: 'All sessions are online, in English or Chinese — whichever you think in. Prices are sent privately.',
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
      body: 'Whether you’d like to book a reading or just want to look around first, you’re always welcome to say hi.',
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
        '「留白」作为中国传统美学的一部分，本身也是一个极具哲学意味的理念。正如阴阳之中，有阴必有阳，有阳必有阴。没有什么是绝对的，也没有什么是一成不变的。很多时候，我们或许只是需要一个引子，一道大门，一场谈话后的留白，来让我们进入内在的世界，发现属于自己的答案。',
        '目前已开放两类服务，具体项目和须知就在下面，价目表请私信获取。咨询需求请提前私信预约，如有任何特殊需要，我会尽可能协调一个双方都方便的 slot 完成。',
      ],
    },
    about: {
      kicker: '关于我',
      title: 'Vicky',
      tags: ['心理学专业', '灵修者', '显化者', '塔罗师'],
      body: '主张自我关怀与自我接纳，让塔罗牌成为向内探索的工具。',
      story: [
        '介绍一下我自己：我是Vicky，大家也可以叫我Yifan。',
        '很小的时候，我就发现自己对这个物质世界之外的可能性充满了想象力。小时候，我经常和父母说：“哇！我能不能飞起来呢？” 这句在现在看起来可爱又好笑的真诚发问，成为了我日后人生道路的索引。',
        '诚然，在这个宇宙里，早已有怀特兄弟实现我儿时的“梦想”。但我想，我们每个人并不需要一双“翅膀”才能“飞起来”，将自己的人生看得更高、更远。我们拥有与生俱来的能力——想象力，来帮助我们在自己的世界里尽情探索。',
        '我信奉一个理念，那就是：答案并不在外面，而在每个人的内心之中。这个世界是我们与之互动与投射的一个空间，我们借由外部，来更好地观照自己，认识自己到底是谁。而塔罗牌，就是一个能够帮助我们达到这一点的工具。它除了具有传统的占卜作用之外，更可以映射问卜者的内心潜意识与能量（其实，这也是为什么它能占卜的原因），通过象征性的画面，帮助问卜者打开一道潜意识的大门，引导人们去思考背后未被察觉的原因。',
        '因此，我决定创办这个空间——一个没有标准答案的开放之地。结合我自己的背景、经历和解读，来为更多有需要的朋友提供新的视角。如果你对自己的感情、学业、事业、自我成长等等方面有所疑问，欢迎前来咨询 :)',
      ],
      motto: '以人驭牌，以牌驭运。',
    },
    how: {
      kicker: '占卜服务须知',
      title: ['占卜不是最终结局，', '而是一个看清自己的视角。'],
      items: [
        { t: '关于问题范围', b: ['塔罗适合询问具有时效性的问题，一般 3–6 个月甚至更短的事情都可以看，但更长远的问题不太适用这种工具。如需咨询长期运势类问题，请寻求星盘、命理等工具帮助（不过我已经在学啦！敬请期待！）。'] },
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
          { k: 5, kl: '5 / 7', lay: 'choice', name: '选择牌阵 · 二选一 / 三选一', pos: '呈现多种路径各自的发展情况', for: '适用于拥有多种选择、犹豫不决，希望看清每条路的未来发展、该怎么选的情况。', tag: '抉择' },
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
    readingsNote: '全部线上进行，中文或英文都可以。价目表私发。',
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
      body: '无论是想要预约占卜，还是想先随便看看，都欢迎添加。',
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
