export type Lang = 'en' | 'zh';

export interface BilingualText {
  en: string;
  zh: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  status: 'Active' | 'Completed';
  category: 'flagship' | 'repository';
  repoUrl: string;
  language?: string;
  updatedAt?: string;
  summary: BilingualText;
  description?: BilingualText;
  highlights?: { title: BilingualText; detail: BilingualText }[];
  tags: string[];
}

export const UI_TEXT = {
  brandSub: {
    en: 'Bioinformatics & Clinical NLP Research',
    zh: '生物信息学与临床自然语言处理研究',
  },
  nav: {
    overview: { en: 'Overview', zh: '概览' },
    projects: { en: 'Projects', zh: '项目' },
    research: { en: 'Research', zh: '研究与论文' },
    updates: { en: 'Updates', zh: '更新日志' },
  },
  search: {
    trigger: { en: 'Search...', zh: '搜索全站...' },
    placeholder: {
      en: 'Search updates, projects, papers, or tags...',
      zh: '搜索更新日志、项目、论文或技术标签...',
    },
    empty: {
      en: 'Type to search across 50+ research logs, projects, and papers.',
      zh: '输入关键词，即时检索 50+ 篇研究日志、开源项目与论文成果。',
    },
    noResults: {
      en: 'No matching results found.',
      zh: '未找到匹配的结果。',
    },
  },
  hero: {
    eyebrow: {
      en: 'SELDAS RESEARCH LAB · OPEN SCIENCE',
      zh: 'SELDAS 研究实验室 · 开放科学',
    },
    title: {
      en: 'Research Log & Technical Updates',
      zh: '研究日志与技术演进追踪',
    },
    subtitle: {
      en: 'A repository of machine learning pipelines, gene expression analysis tools, and clinical NLP resources developed for regulatory science and pharmacovigilance.',
      zh: '聚焦监管科学、药物警戒、临床自然语言处理（Clinical NLP）与高维基因表达分析的开源机器学习管线与工程实践记录。',
    },
    ctaProjects: { en: 'Projects Portfolio', zh: '浏览项目矩阵' },
    ctaUpdates: { en: 'Updates Timeline', zh: '查看更新日志' },
  },
  home: {
    focusTitle: { en: 'Research Focus Areas', zh: '核心研究方向' },
    featuredTitle: { en: 'Featured Projects', zh: '核心研究项目' },
    allProjects: { en: 'All Projects →', zh: '全部项目 →' },
    latestUpdates: { en: 'Latest Updates', zh: '最新研究日志' },
    fullTimeline: { en: 'Full Timeline →', zh: '完整时间线 →' },
    readLog: { en: 'Read Log Entry →', zh: '阅读日志详情 →' },
    selectedPubs: { en: 'Selected Publications', zh: '代表性论文成果' },
    allResearch: { en: 'All Research →', zh: '研究与论文 →' },
  },
  projectsPage: {
    title: { en: 'Research Projects', zh: '开源项目与研究工具' },
    subtitle: {
      en: 'Open-source platforms, deep learning models, and analytical toolkits developed for bioinformatics, pharmacovigilance, and clinical NLP.',
      zh: '面向生物信息学、药物警戒与临床自然语言处理开发的开源平台、深度学习模型与高性能科研工具集。',
    },
    searchPlaceholder: {
      en: 'Filter projects by name, tech stack, or keyword...',
      zh: '按项目名称、技术栈或关键词筛选...',
    },
    statusAll: { en: 'All', zh: '全部' },
    statusActive: { en: 'Active', zh: '活跃维护' },
    statusCompleted: { en: 'Completed', zh: '已完成' },
    flagshipHeading: { en: 'Flagship Platforms & Models', zh: '核心研究平台与模型' },
    reposHeading: { en: 'Open-Source Repositories (GitHub)', zh: '更多 GitHub 开源仓库' },
    sourceCode: { en: 'Source Code', zh: '源码仓库' },
  },
  updatesPage: {
    title: { en: 'Updates Timeline', zh: '研究更新日志' },
    subtitle: {
      en: 'Chronological engineering milestones, weekly research notes, and architecture iterations across active projects.',
      zh: '按时间线记录各活跃研究项目的工程里程碑、每周实验进展与系统架构迭代。',
    },
    searchPlaceholder: {
      en: 'Search log entries by title, tag, or summary...',
      zh: '按标题、标签或摘要搜索更新日志...',
    },
    allProjects: { en: 'All Projects', zh: '全部项目' },
    showing: { en: 'entries', zh: '条记录' },
  },
  researchPage: {
    title: { en: 'Research & Publications', zh: '研究洞察与学术论文' },
    subtitle: {
      en: 'Peer-reviewed publications, plain-language summaries, and architectural deep dives for regulatory AI and clinical safety.',
      zh: '围绕监管环境中的可信 AI、药物警戒自动化与生物信息学发表的同行评审论文、通俗解读及架构深度思考。',
    },
    essaysHeading: { en: 'Technical Essays & Architecture Notes', zh: '技术深度文章与架构笔记' },
    pubsHeading: { en: 'Peer-Reviewed Publications', zh: '同行评审学术论文' },
    plainSummary: { en: 'Plain Language Summary', zh: '通俗要点解读' },
  },
  footer: {
    builtWith: {
      en: '© 2026 seldas. Built with Astro.',
      zh: '© 2026 seldas · 基于 Astro 构建',
    },
  },
} as const;

export const RESEARCH_FOCUS = [
  {
    id: 'clinical-nlp',
    icon: 'file-text',
    title: {
      en: 'Clinical NLP & Regulatory Intelligence',
      zh: '临床自然语言处理与监管智能',
    },
    description: {
      en: 'Developing automated pipelines to parse Structured Product Labeling (SPL) files, compare safety warnings, and extract adverse event indicators from regulatory documents and ICSRs.',
      zh: '构建自动化管线以解析结构化药品说明书（SPL）、比对安全性警示变更，并从监管文档与个例安全性报告（ICSRs）中精准抽取不良事件指标。',
    },
  },
  {
    id: 'bioinformatics',
    icon: 'dna',
    title: {
      en: 'Deep Learning & Bioinformatics',
      zh: '深度学习与生物信息学',
    },
    description: {
      en: 'Training heterogeneous autoencoders and generative adversarial networks to encode high-dimensional gene expression profiles, harmonize platforms, and map biological phenotypes.',
      zh: '训练异构自编码器与生成对抗网络（GAN）以编码高维基因表达谱、实现跨平台转录组数据转换并映射癌症基因组生物学表型。',
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'askaems',
    name: 'askAEMS',
    status: 'Active',
    category: 'flagship',
    repoUrl: 'https://github.com/seldas/autonomous_pv_pipeline',
    language: 'Python / React',
    updatedAt: '2026-07',
    summary: {
      en: 'A professional-grade Pharmacovigilance (PV) analysis platform for secure, deep-dive review and annotation of Individual Case Safety Reports (ICSRs).',
      zh: '专业级药物警戒（PV）分析平台，用于安全、深入地审查与标注个例安全性报告（ICSRs）。',
    },
    description: {
      en: 'askAEMS is a dedicated pharmacovigilance safety platform built to optimize clinical safety case annotations and causality assessments. By utilizing asynchronous task workers, it processes narratives and produces standardized safety logs.',
      zh: 'askAEMS 专为优化临床安全性病例标注与因果关系评估而构建。通过异步任务工作流，平台可高效处理病例叙述文本并生成标准化安全性审查日志。',
    },
    highlights: [
      {
        title: { en: '5-Stage PV Pipeline', zh: '五阶段药物警戒流水线' },
        detail: {
          en: 'Guides experts step-by-step from raw case text narratives to final WHO-UMC causality determination.',
          zh: '引导专家从原始病例叙述文本逐步完成质控、去重、标注直至最终 WHO-UMC 因果关系判定。',
        },
      },
      {
        title: { en: 'AID-Dup Deduplication', zh: 'AID-Dup 智能去重引擎' },
        detail: {
          en: 'Multi-signal bucketing, Clauset-Newman-Moore modularity clustering, and parallel AI rescue for ambiguous pairs.',
          zh: '结合多信号分桶、Clauset-Newman-Moore 模块度聚类与并行 AI 复核，精准识别重复安全报告。',
        },
      },
      {
        title: { en: 'SCAT Annotation Integration', zh: 'SCAT 实体标注集成' },
        detail: {
          en: 'Supports importing and exporting complex clinical relationship offsets aligned with SCAT entity loaders.',
          zh: '支持导入和导出符合 SCAT 实体规范的复杂临床关系偏移量标注。',
        },
      },
    ],
    tags: ['Pharmacovigilance', 'FastAPI', 'React', 'Celery', 'Redis', 'PostgreSQL'],
  },
  {
    id: 'askfdalabel',
    name: 'AskFDALabel',
    status: 'Active',
    category: 'flagship',
    repoUrl: 'https://github.com/seldas/askFDALabel-v5',
    language: 'TypeScript / Python',
    updatedAt: '2026-11',
    summary: {
      en: 'A grounded conversational search and analytical assistant for U.S. FDA drug labeling documents using RAG and agentic workflows.',
      zh: '基于 RAG 与智能体工作流的美国 FDA 药品说明书可信对话检索与分析平台。',
    },
    description: {
      en: 'AskFDALabel is a full-stack labeling intelligence suite designed to automate the extraction, annotation, profiling, and classification of adverse event data across 150,000+ FDA drug labeling documents.',
      zh: 'AskFDALabel 是一套全栈药品说明书智能分析套件，面向超过 150,000 份 FDA 药品说明书实现不良事件数据的自动抽取、标注、画像与风险分类。',
    },
    highlights: [
      {
        title: { en: 'Conversational Search', zh: '可信对话式检索' },
        detail: {
          en: 'Grounded workspace querying the FDALabel database (150k+ documents) using Gemini/Llama and pgvector semantic retrieval.',
          zh: '结合 Gemini/Llama 与 pgvector 语义检索，在 15 万+ 说明书库中提供带原文引用的可信问答。',
        },
      },
      {
        title: { en: 'Label Comparison', zh: '多版本说明书对比' },
        detail: {
          en: 'Side-by-side comparison workspace for up to four SPL labels with section-level diffs and AI-generated summaries.',
          zh: '支持最多四份 SPL 说明书并行对比，提供章节级文本差异对齐与 AI 实质性变更总结。',
        },
      },
      {
        title: { en: 'askDrugTox & Device Intelligence', zh: '毒理与医疗器械智能' },
        detail: {
          en: 'Modules for browsing harmonized toxicity datasets and openFDA medical device IFU comparisons.',
          zh: '内置标准化药物毒性数据集浏览与 openFDA 医疗器械使用说明书（IFU）对比模块。',
        },
      },
    ],
    tags: ['RAG', 'Clinical NLP', 'Next.js', 'TypeScript', 'PostgreSQL', 'pgvector'],
  },
  {
    id: 'labelcomp',
    name: 'LabelComp',
    status: 'Active',
    category: 'flagship',
    repoUrl: 'https://github.com/seldas/LabelComp',
    language: 'Python',
    updatedAt: '2024-02',
    summary: {
      en: 'AI-powered comparison tool for FDA drug labeling documents designed to extract and highlight adverse event updates.',
      zh: '面向 FDA 药品说明书的 AI 比对工具，自动抽取并高亮不良事件（AE）更新条目。',
    },
    description: {
      en: 'Published in Drug Safety (2024), LabelComp combines PDF text extraction with fine-tuned BERT models to automatically detect and compare adverse event terminology changes across drug label revisions.',
      zh: '发表于《Drug Safety》(2024)，将 PDF 文本解析与微调 BERT 模型结合，自动识别并比对药品说明书修订前后的不良事件术语变化。',
    },
    tags: ['Clinical NLP', 'BERT', 'Regulatory Science', 'Python'],
  },
  {
    id: 'llm4ae',
    name: 'LLM4AE',
    status: 'Active',
    category: 'flagship',
    repoUrl: 'https://github.com/seldas/LLM4AE',
    language: 'Python',
    updatedAt: '2026-09',
    summary: {
      en: 'Named Entity Recognition of Clinical Concepts in Safety Reports using Large Language Models and BioBERT.',
      zh: '结合大语言模型与 BioBERT 的药物安全报告临床概念命名实体识别与标注平台。',
    },
    description: {
      en: 'An advanced annotation and extraction platform for Pharmacovigilance (PV) professionals combining BioBERT token classification with LLM-assisted clinical concept extraction.',
      zh: '面向药物警戒专业人士的高级实体抽取与标注平台，融合 BioBERT 序列标注与大语言模型辅助概念抽取。',
    },
    tags: ['Pharmacovigilance', 'BioBERT', 'LLMs', 'NER', 'Next.js', 'Flask'],
  },
  {
    id: 'dbbtoolkits',
    name: 'DBBtoolkits',
    status: 'Active',
    category: 'flagship',
    repoUrl: 'https://github.com/seldas/DBBToolkits',
    language: 'Rust / JavaScript',
    updatedAt: '2026-08',
    summary: {
      en: 'A lightweight, offline-first desktop application containing a suite of high-performance scientific tools built with Tauri v2 and Rust.',
      zh: '基于 Tauri v2 与 Rust 构建的轻量级、离线优先高性能科研桌面工具套件。',
    },
    tags: ['Tauri v2', 'Rust', 'Desktop App', 'Scientific Tools'],
  },
  {
    id: 'ganomics',
    name: 'GANomics',
    status: 'Completed',
    category: 'flagship',
    repoUrl: 'https://github.com/seldas/GANomics',
    language: 'Python / PyTorch',
    updatedAt: '2026-04',
    summary: {
      en: 'A Generative Adversarial Network (GAN) framework for bidirectional translation between legacy (Microarray) and modern (RNA-seq) transcriptomic platforms.',
      zh: '用于传统芯片（Microarray）与现代测序（RNA-seq）转录组平台双向转换的生成对抗网络（GAN）框架。',
    },
    tags: ['Deep Learning', 'Bioinformatics', 'GANs', 'PyTorch', 'FastAPI', 'React'],
  },
  {
    id: 'hetenc',
    name: 'HetEnc',
    status: 'Completed',
    category: 'flagship',
    repoUrl: 'https://github.com/seldas/HetEnc_Code',
    language: 'Python',
    updatedAt: '2019-12',
    summary: {
      en: 'A deep learning predictive model utilizing heterogeneous autoencoders for integrated gene expression and feature analysis.',
      zh: '基于异构自编码器的集成基因表达与特征分析深度学习预测模型。',
    },
    tags: ['Deep Learning', 'Bioinformatics', 'Autoencoders', 'Python'],
  },
  // Synced GitHub Repositories
  {
    id: 'aid-dup',
    name: 'AID-Dup',
    status: 'Active',
    category: 'repository',
    repoUrl: 'https://github.com/seldas/AID-Dup',
    language: 'Python',
    updatedAt: '2026-07',
    summary: {
      en: 'AI-driven deduplication engine for pharmacovigilance case series using multi-signal bucketing, modularity clustering, and LLM pair rescue.',
      zh: '面向药物警戒病例序列的 AI 驱动去重引擎，融合多信号分桶、模块度聚类与大模型歧义复核。',
    },
    tags: ['Deduplication', 'Clustering', 'Pharmacovigilance', 'Python'],
  },
  {
    id: 'ae-profiling',
    name: 'AE_Profiling',
    status: 'Active',
    category: 'repository',
    repoUrl: 'https://github.com/seldas/AE_Profiling',
    language: 'TypeScript',
    updatedAt: '2026-06',
    summary: {
      en: 'A modernized adverse events profiling workspace for structured drug labeling analysis.',
      zh: '用于药品说明书不良事件结构化画像的现代化分析工作区。',
    },
    tags: ['TypeScript', 'Drug Labeling', 'AE Profiling'],
  },
  {
    id: 'faers-market',
    name: 'FAERS-Market',
    status: 'Active',
    category: 'repository',
    repoUrl: 'https://github.com/seldas/FAERS-Market',
    language: 'TypeScript',
    updatedAt: '2026-04',
    summary: {
      en: 'Exploratory analytics and market-level pharmacovigilance signal tracking over FAERS data.',
      zh: '基于 FAERS 数据的药物警戒信号与市场维度探索性分析工具。',
    },
    tags: ['TypeScript', 'FAERS', 'Analytics'],
  },
  {
    id: 'askfdalabel-v2',
    name: 'AskFDALabel-v2',
    status: 'Completed',
    category: 'repository',
    repoUrl: 'https://github.com/seldas/AskFDALabel-v2',
    language: 'JavaScript',
    updatedAt: '2026-02',
    summary: {
      en: 'Early generation AskFDALabel architecture integrating DB-RAG and Llama 3.1 for structured SQL + semantic querying.',
      zh: 'AskFDALabel 早期版本架构，集成 DB-RAG 与 Llama 3.1 实现结构化检索增强问答。',
    },
    tags: ['DB-RAG', 'Llama 3.1', 'JavaScript'],
  },
  {
    id: 'sist3',
    name: 'SIST3',
    status: 'Completed',
    category: 'repository',
    repoUrl: 'https://github.com/seldas/SIST3',
    language: 'Perl',
    updatedAt: '2018-10',
    summary: {
      en: 'Splitting Internal Standard reads Toolbox for high-throughput sequencing quality control.',
      zh: '用于高通量测序质控的内标序列拆分工具箱。',
    },
    tags: ['Bioinformatics', 'Sequencing', 'Perl'],
  },
  {
    id: 'dl-beetles',
    name: 'DL_Beetles',
    status: 'Completed',
    category: 'repository',
    repoUrl: 'https://github.com/seldas/DL_Beetles',
    language: 'Python',
    updatedAt: '2018-03',
    summary: {
      en: 'Deep learning computer vision pipeline for automated food contamination detection.',
      zh: '用于食品污染自动化检测的深度学习计算机视觉管线。',
    },
    tags: ['Deep Learning', 'Computer Vision', 'Python'],
  },
  {
    id: 'dforest',
    name: 'Dforest',
    status: 'Completed',
    category: 'repository',
    repoUrl: 'https://github.com/seldas/Dforest',
    language: 'R',
    updatedAt: '2017-11',
    summary: {
      en: 'R implementation of the Decision Forest algorithm for bioinformatics classification tasks.',
      zh: '面向生物信息学分类任务的 Decision Forest 算法 R 语言实现。',
    },
    tags: ['R', 'Machine Learning', 'Decision Forest'],
  },
];
