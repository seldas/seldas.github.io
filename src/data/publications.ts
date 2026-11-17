export interface Publication {
  id: string;
  journal: string;
  date: string;
  title: { en: string; zh: string };
  originalTitle: string;
  authors: string;
  doi: string;
  doiUrl: string;
  metrics: { label: string; value: string }[];
  bullets: { en: string[]; zh: string[] };
  summary: { en: string; zh: string };
}

export const PUBLICATIONS: Publication[] = [
  {
    id: 'askfdalabel-safety-screening-2025',
    journal: 'Drug Safety',
    date: 'February 2025',
    title: {
      en: 'AI-Powered Safety Screening: Enhancing Drug Adverse Event Classification with AskFDALabel',
      zh: 'AI 驱动的药物安全性筛查：利用 AskFDALabel 提升不良事件分类能力',
    },
    originalTitle:
      'Leveraging FDA Labeling Documents and Large Language Model to Enhance Annotation, Profiling, and Classification of Drug Adverse Events with AskFDALabel',
    authors: 'Leihong Wu, Hong Fang, Yanyan Qu, Joshua Xu, and Weida Tong',
    doi: '10.1007/s40264-025-01520-1',
    doiUrl: 'https://doi.org/10.1007/s40264-025-01520-1',
    metrics: [
      { label: 'DILI Classification F1', value: '0.978' },
      { label: 'Cardiotoxicity F1', value: '0.931' },
      { label: 'AE Annotation F1', value: '0.911' },
    ],
    summary: {
      en: 'Applied the AskFDALabel RAG framework to automatically scan thousands of FDA drug labels, flagging Drug-Induced Liver Injury (DILI) and Cardiotoxicity risks with high precision.',
      zh: '将 AskFDALabel RAG 框架应用于数千份 FDA 药品说明书的自动化安全筛查，高精准识别药物性肝损伤（DILI）与心脏毒性风险。',
    },
    bullets: {
      en: [
        'High-Accuracy Risk Screening: Achieved F1-scores of 0.978 for DILI risk classification and 0.931 for Drug-Induced Cardiotoxicity.',
        'Automated Adverse Event Annotation: Flags and extracts complex adverse event terms directly from labeling texts with an F1-score of 0.911.',
        'Streamlining Safety Workflows: Significantly reduces manual labor and human error risk across thousands of FDA documents.',
        'RAG Grounding: Structuring regulatory databases into a RAG vector pipeline enables smaller open-source models to outcompete generalized chatbots.',
      ],
      zh: [
        '高精度风险筛查：在药物性肝损伤（DILI）风险分类中取得 0.978 的 F1 分数，药物性心脏毒性分类达到 0.931。',
        '自动化不良事件标注：直接从说明书文本中抽取复杂不良事件术语，F1 分数达到 0.911。',
        '简化安全审查工作流：显著降低跨数千份 FDA 文档人工扫描与安全信号画像的劳动强度与误差风险。',
        'RAG 循证约束：将监管数据库结构化接入向量检索管线，使轻量级开源模型在专业任务上超越通用聊天机器人。',
      ],
    },
  },
  {
    id: 'askfdalabel-framework-2024',
    journal: 'Regulatory Toxicology and Pharmacology',
    date: 'April 2024',
    title: {
      en: 'Bringing Safe AI to Drug Regulation: The AskFDALabel Framework',
      zh: '将可信 AI 引入药品监管：AskFDALabel 框架',
    },
    originalTitle:
      'A framework enabling LLMs into regulatory environment for transparency and trustworthiness and its application to drug labeling document',
    authors: 'Leihong Wu, et al.',
    doi: '10.1016/j.yrtph.2024.105613',
    doiUrl: 'https://doi.org/10.1016/j.yrtph.2024.105613',
    metrics: [
      { label: 'Data Privacy', value: '100% On-Premise' },
      { label: 'Hallucination Control', value: 'Grounded RAG' },
      { label: 'Auditability', value: 'Paragraph Citations' },
    ],
    summary: {
      en: 'Introduced a privacy-preserving, two-module RAG architecture that enables local open-source LLMs (Llama-2, Falcon) to assist regulatory reviewers with zero data leakage and full citation auditing.',
      zh: '提出一种隐私保护的双模块 RAG 架构，使本地部署的开源大模型（Llama-2、Falcon）能够在零数据出域与全量原文溯源的前提下辅助监管审查。',
    },
    bullets: {
      en: [
        '100% Data Privacy: Operates entirely within private servers so sensitive or proprietary drug data never crosses the firewall.',
        'Hallucination Control: Mathematically constrains text generation to summarize only the retrieved regulatory document passages.',
        'Full Auditing & Explainability: Every response includes clickable references pointing to exact source paragraphs.',
        'Cost-Effective Local Models: Demonstrates that locally hosted smaller models match commercial API accuracy at a fraction of the cost.',
      ],
      zh: [
        '100% 数据隐私安全：完全运行于机构私有服务器内，敏感与专有药品数据不出防火墙。',
        '幻觉控制：通过检索增强生成（RAG）约束生成过程，仅基于检索到的特定法规段落进行总结。',
        '全链路可审计与可解释性：每条回答均附带可点击的原文段落引用，便于监管人员核验。',
        '低成本本地化部署：证明本地托管的中小规模开源模型在监管文本任务上可媲美商业大模型。',
      ],
    },
  },
  {
    id: 'labelcomp-2024',
    journal: 'Drug Safety',
    date: '2024',
    title: {
      en: 'LabelComp: Automated Adverse Event Comparison Across Drug Labeling Revisions',
      zh: 'LabelComp：跨版本药品说明书不良事件自动比对工具',
    },
    originalTitle: 'LabelComp: Automated Adverse Event Comparison Across Drug Labeling Documents',
    authors: 'Leihong Wu, et al.',
    doi: '10.1007/s40264-024-01468-8',
    doiUrl: 'https://doi.org/10.1007/s40264-024-01468-8',
    metrics: [
      { label: 'Entity Extraction F1', value: '0.795 – 0.936' },
      { label: 'Input Format', value: 'PDF + BERT' },
    ],
    summary: {
      en: 'Developed an automated PDF text extraction and fine-tuned BERT pipeline to identify and highlight adverse event terminology updates across historical drug label versions.',
      zh: '开发了结合 PDF 文本提取与微调 BERT 模型的自动化工具，用于识别并高亮药品说明书历史修订中的不良事件术语变更。',
    },
    bullets: {
      en: [
        'Targeted Entity Recognition: Fine-tuned BERT models specifically for adverse event terms in regulatory PDF documents.',
        'Strong Benchmark Performance: Achieved F1 scores ranging from 0.795 to 0.936 across evaluation tasks.',
      ],
      zh: [
        '针对性实体识别：面向监管 PDF 文档中的不良事件术语进行专项 BERT 微调。',
        '优异评测表现：在多项核心对比任务上取得 0.795–0.936 的 F1 分数。',
      ],
    },
  },
];
