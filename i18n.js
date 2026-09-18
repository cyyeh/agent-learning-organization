'use strict';

const translations = {
  'zh-Hant': {
    title: '打造 AI Agent 學習型工程團隊',
    'lang.group': '語言',
    'hero.h1a': '把「不知道」快速變成',
    'hero.h1b': '團隊共同能力',
    'hero.lead': '對 3–4 位工程師的小團隊，不必做大型知識管理。重點是建立一個短迴路：從真實工作發現問題，用小實驗驗證，再把結果沉澱成可重用的工程資產。',
    'hero.quote': '學習型組織 ≠ 大家一直上課；而是團隊能持續把未知轉化成經過驗證的共同知識。',
    'def.h2': '什麼是「學習型組織」？',
    'def.h3': '核心定義',
    'def.p': '學習型組織不是「大家常上課」或「公司有很多分享會」，而是：',
    'def.quote': '團隊能持續發現問題、產生新知、分享知識，並真的改變後續的決策與工作方式。',
    'judge.h3': '判斷標準',
    'judge.1k': '能暴露未知：',
    'judge.1v': '知道自己還不知道什麼',
    'judge.2k': '能快速驗證：',
    'judge.2v': '用實驗與證據取代直覺爭論',
    'judge.3k': '能跨人傳遞：',
    'judge.3v': '知識不只停留在個人',
    'judge.4k': '能形成改變：',
    'judge.4v': '學到的東西會進入流程、程式碼與決策',
    'lab.h2': '這個 Agent Engineering Lab 與學習型組織的關係',
    'lab.1h': '1. 真實工作產生問題',
    'lab.1p': '不從課本選題，而是從產品、agent failure、效能瓶頸與開發流程中找到真正的未知。',
    'lab.2h': '2. Lab 把問題變成共同學習',
    'lab.2p': '透過 hypothesis、baseline、experiment、trace 與討論，把個人經驗轉成團隊可驗證的知識。',
    'lab.3h': '3. 學習回到 Production',
    'lab.3p': '將結論沉澱成 eval、test、pattern、tool、ADR 或 guardrail，真正改變下一次工程實作。',
    'lab.quote': 'Agent Engineering Lab 是「學習型組織」的實作載體：讓學習不只發生在人的腦中，而是進入團隊流程與工程系統。',
    'cap.h2': '五個核心能力',
    'cap.1': '主動發現「我們其實不知道什麼」。',
    'cap.2': '用小實驗取代憑感覺爭論。',
    'cap.3': '從成功與失敗的 trace 找出原因。',
    'cap.4': '把經驗變成 eval、pattern、decision。',
    'cap.5': '讓個人學習真正改變團隊工作方式。',
    'cycle.h2': '學習循環',
    'cycle.aria': '學習循環：真實工作、發現未知、提出假設、最小實驗、看結果、取得證據、團隊討論、沉澱規則，再回到真實工作',
    'cycle.s1': '真實工作',
    'cycle.s2': '發現未知',
    'cycle.s3': '提出假設',
    'cycle.s4': '最小實驗',
    'cycle.s5': '看結果',
    'cycle.s6': '取得證據',
    'cycle.s7': '團隊討論',
    'cycle.s8': '沉澱規則',
    'pool.h2': '不要建立「主題池」',
    'pool.p': '少一點：MCP、Memory、Multi-Agent、RAG……',
    'pool.h3': '改成建立「問題池」',
    'pool.q1': 'Subagent 什麼情況真的比 single-agent 好？',
    'pool.q2': 'Context 多到什麼程度開始降低表現？',
    'pool.q3': '哪些 failure 是 model，而不是 tool / retrieval / harness？',
    'pool.q4': '什麼任務根本不值得使用 agent？',
    'unk.h2': '把「我不知道」變成資產',
    'unk.p': '鼓勵工程師把 uncertainty 公開化，不要求立即有答案。',
    'unk.quote': '「這兩週你遇到最值得團隊搞清楚的一個『我不知道』是什麼？」',
    'sys.h2': '最小制度：小團隊就做這 6 件事',
    'sys.th1': '機制',
    'sys.th2': '節奏',
    'sys.th3': '目的',
    'sys.r1c2': '隨時',
    'sys.r1c3': '蒐集值得驗證的新資訊與問題',
    'sys.r2c2': '持續',
    'sys.r2c3': '管理 Unknown → Hypothesis → Experiment → Decision',
    'sys.r3c2': '每兩週 75 分鐘',
    'sys.r3c3': '一次只回答一個真實工程問題',
    'sys.r4c2': '工作中持續',
    'sys.r4c3': '把 bug / failure 轉成 regression case',
    'sys.r5c2': '每季輪替',
    'sys.r5c3': '避免知識只存在單一工程師身上',
    'sys.r6c2': '每季一次',
    'sys.r6c3': '檢查哪些新知真的改變了 production',
    'meet.h2': 'Agent Lab 每次只做一件事：回答一個問題',
    'meet.before': '會議前',
    'meet.b1': '定義問題與 hypothesis',
    'meet.b2': '準備 baseline',
    'meet.b3': '帶一個成功 trace + 一個失敗 trace',
    'meet.during': '會議中',
    'meet.d1': '拆解 failure',
    'meet.d2': '做一個小型 ablation',
    'meet.d3': '形成 Adopt / Experiment / Reject / Revisit 決策',
    'know.h2': '知識要一路壓縮成「可執行資產」',
    'know.1h': '資訊',
    'know.1p': '文章、paper、GitHub、AI summary',
    'know.2h': '團隊知識',
    'know.2p': 'Insight、Pattern、Decision、Failure Taxonomy',
    'know.3h': 'Executable Knowledge',
    'know.3p': 'Eval、Test、Reusable Tool、CI Guardrail、Reference Implementation',
    'know.note': '最理想的分享產物不是 PPT，而是下一位工程師能直接重用或系統能自動執行的東西。',
    'leader.h2': 'Leader 的角色',
    'leader.1': '不是成為「最懂 AI 的人」',
    'leader.2': '提出好問題',
    'leader.3': '要求證據與 baseline',
    'leader.4': '鼓勵反例與失敗案例',
    'leader.5': '確保學習被沉澱與擴散',
    'review.h2': '季度 Learning Review',
    'review.1': '三個月前不知道、現在知道什麼？',
    'review.2': '哪些 assumption 被推翻？',
    'review.3': '哪些實驗真的改變 production？',
    'review.4': '有哪些知識仍只存在個人腦中？',
    'metric.kicker': '最終成功指標',
    'metric.a': '當團隊遇到一個沒有人知道答案的新 AI / Agent 工程問題時，',
    'metric.b': '是否能自己快速把它變成一個可靠、可重現、可共享的答案？',
  },
  en: {
    title: 'Building an AI Agent Learning Engineering Team',
    'lang.group': 'Language',
    'hero.h1a': 'Turn "I don\'t know" into',
    'hero.h1b': 'a shared team capability',
    'hero.lead': 'For a team of 3–4 engineers, you don\'t need heavy knowledge management. The point is a short loop: find real problems in the work, verify them with small experiments, then distill the results into reusable engineering assets.',
    'hero.quote': 'A learning organization ≠ endless classes. It is a team that keeps turning unknowns into verified shared knowledge.',
    'def.h2': 'What is a "learning organization"?',
    'def.h3': 'Core definition',
    'def.p': 'A learning organization is not "we take a lot of classes" or "we run lots of sharing sessions." It is:',
    'def.quote': 'A team that keeps finding problems, creating new knowledge, sharing it, and actually changing later decisions and ways of working.',
    'judge.h3': 'How to tell',
    'judge.1k': 'Surface the unknown: ',
    'judge.1v': 'we know what we don\'t know',
    'judge.2k': 'Verify quickly: ',
    'judge.2v': 'experiments and evidence replace gut-feel arguments',
    'judge.3k': 'Transfer across people: ',
    'judge.3v': 'knowledge does not stay in one person\'s head',
    'judge.4k': 'Produce change: ',
    'judge.4v': 'what we learn enters process, code, and decisions',
    'lab.h2': 'How this Agent Engineering Lab relates to a learning organization',
    'lab.1h': '1. Real work produces the questions',
    'lab.1p': 'Don\'t pick topics from a textbook. Find real unknowns in the product, agent failures, performance bottlenecks, and the development process.',
    'lab.2h': '2. The lab turns problems into shared learning',
    'lab.2p': 'Through hypothesis, baseline, experiment, traces, and discussion, individual experience becomes knowledge the team can verify.',
    'lab.3h': '3. Learning returns to production',
    'lab.3p': 'Distill conclusions into evals, tests, patterns, tools, ADRs, or guardrails so the next implementation actually changes.',
    'lab.quote': 'The Agent Engineering Lab is how a learning organization is practiced: learning does not just live in people\'s heads — it enters team process and the engineering system.',
    'cap.h2': 'Five core capabilities',
    'cap.1': 'Actively find what we actually don\'t know.',
    'cap.2': 'Replace gut-feel arguments with small experiments.',
    'cap.3': 'Find causes in successful and failed traces.',
    'cap.4': 'Turn experience into evals, patterns, and decisions.',
    'cap.5': 'Make individual learning actually change how the team works.',
    'cycle.h2': 'Learning cycle',
    'cycle.aria': 'Learning cycle: real work, find unknown, hypothesis, mini experiment, see results, get evidence, team discussion, distill rules, then back to real work',
    'cycle.s1': 'Real work',
    'cycle.s2': 'Find unknown',
    'cycle.s3': 'Hypothesis',
    'cycle.s4': 'Mini experiment',
    'cycle.s5': 'See results',
    'cycle.s6': 'Get evidence',
    'cycle.s7': 'Team discussion',
    'cycle.s8': 'Distill rules',
    'pool.h2': 'Don\'t build a "topic pool"',
    'pool.p': 'Less of: MCP, Memory, Multi-Agent, RAG…',
    'pool.h3': 'Build a "question pool" instead',
    'pool.q1': 'When is a subagent actually better than a single agent?',
    'pool.q2': 'At what context size does performance start to drop?',
    'pool.q3': 'Which failures are the model, not the tool / retrieval / harness?',
    'pool.q4': 'Which tasks are not worth using an agent at all?',
    'unk.h2': 'Turn "I don\'t know" into an asset',
    'unk.p': 'Encourage engineers to make uncertainty public. Don\'t demand an immediate answer.',
    'unk.quote': '"What\'s one \'I don\'t know\' from these two weeks that is most worth the team figuring out?"',
    'sys.h2': 'Minimum system: six things a small team actually does',
    'sys.th1': 'Mechanism',
    'sys.th2': 'Cadence',
    'sys.th3': 'Purpose',
    'sys.r1c2': 'Anytime',
    'sys.r1c3': 'Collect new information and questions worth verifying',
    'sys.r2c2': 'Ongoing',
    'sys.r2c3': 'Manage Unknown → Hypothesis → Experiment → Decision',
    'sys.r3c2': '75 minutes every two weeks',
    'sys.r3c3': 'Answer one real engineering question at a time',
    'sys.r4c2': 'Continuously during work',
    'sys.r4c3': 'Turn bugs / failures into regression cases',
    'sys.r5c2': 'Rotate quarterly',
    'sys.r5c3': 'Keep knowledge from living on a single engineer',
    'sys.r6c2': 'Once a quarter',
    'sys.r6c3': 'Check which new knowledge actually changed production',
    'meet.h2': 'Each Agent Lab does one thing: answer one question',
    'meet.before': 'Before the meeting',
    'meet.b1': 'Define the question and hypothesis',
    'meet.b2': 'Prepare a baseline',
    'meet.b3': 'Bring one successful trace and one failed trace',
    'meet.during': 'During the meeting',
    'meet.d1': 'Dissect the failure',
    'meet.d2': 'Run a small ablation',
    'meet.d3': 'Reach an Adopt / Experiment / Reject / Revisit decision',
    'know.h2': 'Compress knowledge all the way into executable assets',
    'know.1h': 'Information',
    'know.1p': 'Articles, papers, GitHub, AI summaries',
    'know.2h': 'Team knowledge',
    'know.2p': 'Insight, Pattern, Decision, Failure Taxonomy',
    'know.3h': 'Executable Knowledge',
    'know.3p': 'Eval, Test, Reusable Tool, CI Guardrail, Reference Implementation',
    'know.note': 'The best sharing artifact is not a slide deck. It is something the next engineer can reuse directly, or the system can run automatically.',
    'leader.h2': 'The leader\'s role',
    'leader.1': 'Not becoming "the person who knows AI best"',
    'leader.2': 'Ask good questions',
    'leader.3': 'Require evidence and a baseline',
    'leader.4': 'Encourage counterexamples and failure cases',
    'leader.5': 'Make sure learning is distilled and spread',
    'review.h2': 'Quarterly learning review',
    'review.1': 'What didn\'t we know three months ago that we know now?',
    'review.2': 'Which assumptions were overturned?',
    'review.3': 'Which experiments actually changed production?',
    'review.4': 'What knowledge still lives only in someone\'s head?',
    'metric.kicker': 'The real success metric',
    'metric.a': 'When the team hits a new AI / agent engineering problem nobody knows the answer to,',
    'metric.b': 'can they quickly turn it into a reliable, reproducible, shareable answer?',
  },
};

function normalizeLang(value) {
  if (value == null) return null;
  const v = String(value).trim().toLowerCase();
  if (!v) return null;
  if (v === 'en' || v.startsWith('en-')) return 'en';
  if (v === 'zh-hant' || v === 'zh-tw' || v === 'zh' || v.startsWith('zh')) return 'zh-Hant';
  return null;
}

function readLang({ search = '', stored = null, fallback = 'zh-Hant' } = {}) {
  const raw = search.startsWith('?') ? search.slice(1) : search;
  const params = new URLSearchParams(raw);
  return normalizeLang(params.get('lang')) || normalizeLang(stored) || fallback;
}

function applyLang(doc, lang) {
  const resolved = normalizeLang(lang) || 'zh-Hant';
  const t = translations[resolved];
  if (doc.documentElement && typeof doc.documentElement.setAttribute === 'function') {
    doc.documentElement.setAttribute('lang', resolved);
  }
  doc.title = t.title;
  const all = (sel) => (typeof doc.querySelectorAll === 'function' ? doc.querySelectorAll(sel) : []);
  for (const el of all('[data-i18n]')) {
    const key = el.getAttribute('data-i18n');
    if (Object.prototype.hasOwnProperty.call(t, key)) el.textContent = t[key];
  }
  for (const el of all('[data-i18n-aria]')) {
    const key = el.getAttribute('data-i18n-aria');
    if (Object.prototype.hasOwnProperty.call(t, key) && typeof el.setAttribute === 'function') {
      el.setAttribute('aria-label', t[key]);
    }
  }
  for (const btn of all('[data-set-lang]')) {
    if (typeof btn.setAttribute === 'function') {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-set-lang') === resolved));
    }
  }
  return resolved;
}

const api = { translations, normalizeLang, readLang, applyLang };
if (typeof module !== 'undefined' && module.exports) module.exports = api;
if (typeof window !== 'undefined') window.ALO_I18N = api;
