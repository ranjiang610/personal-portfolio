export type Project = { id: string; title: string; summary: string; category: string; image: string; featured?: boolean; number?: string; eyebrow?: string; externalUrl?: string; detailImages: { src?: string; ratio: string; alt: string }[] };

// 替换真实内容时只需修改本文件；externalUrl 有值时会打开站酷，否则进入站内详情。
export const profile = {
  name: '冉江', englishName: 'Ran Jiang',
  intro: 'Hi，我是冉江，一名拥有交互设计背景的产品体验设计师，擅长结合产品思维、vibe coding 工作流与高保真原型，将复杂需求快速转化为清晰、可落地的交互体验。',
  strengths: ['5年 UI', 'CODEX', '产品思维', '原型设计'],
  capabilities: [
    { title: '设计能力与思维', body: '熟练使用 Figma 与 Adobe 软件工具，具备从用户研究、需求梳理、交互架构到高保真输出、组件库搭建的完整项目经验，覆盖工业软件、App 与网页设计。' },
    { title: 'AI 工具应用能力', body: '结合 Lovable、Codex、ChatGPT 与 Figma Make 完成设计、开发、测试闭环，让方案更快落地。' }
  ],
  experience: { company: '重庆*****网络有限公司', position: '网页设计师 / UI/UX 设计师', period: '20XX.XX – 20XX.XX · 任职 7 年', description: '负责产品体验和视觉设计，参与需求梳理、交互设计、界面规范及项目交付。这里是演示数据，后续可替换为真实经历。' },
  history: [
    { title: '01｜XX 企业官网视觉及体验升级', tags: 'Web / 品牌官网 / 响应式设计', description: '围绕业务目标调整信息层级与关键路径，建立适用于不同屏幕的视觉语言。' },
    { title: '02｜XX 业务管理平台 UI/UX 改版', tags: 'Web / 业务平台 / 体验优化', description: '梳理复杂任务流程，优化内容呈现与操作效率，沉淀可复用的交互模式。' }
  ],
  contacts: [
    { label: '手机', value: '138****8888', href: 'tel:13800008888' },
    { label: '站酷主页', value: 'www.zcool.com.cn', href: 'https://www.zcool.com.cn/' },
    { label: '微信公众号', value: '欢迎交流', href: 'mailto:hello@example.com' },
    { label: '邮箱', value: 'hello@example.com', href: 'mailto:hello@example.com' }
  ]
};

export const projects: Project[] = [
  { id: 'planet', number: '01', featured: true, eyebrow: '围绕用户核心路径，优化产品结构与社交互动细节', title: '不夜星球社交 APP 产品体验设计优化', summary: '围绕用户核心路径，优化产品结构与社交互动细节，建立更清晰的内容层级与使用体验。', category: 'APP UX 产品设计', image: '/assets/featured.png', detailImages: [{ ratio: '16 / 9', alt: '项目首图' }, { ratio: '4 / 3', alt: '项目过程图' }, { ratio: '3 / 4', alt: '项目成果图' }] },
  { id: 'dashboard', title: '产品管理平台体验优化', summary: '让复杂信息变得清晰，以一致的组件与流程支持高效协作。', category: '企业平台 / UI UX', image: '/assets/project-2.png', detailImages: [{ ratio: '16 / 9', alt: '项目首图' }, { ratio: '4 / 3', alt: '项目过程图' }, { ratio: '3 / 4', alt: '项目成果图' }] },
  { id: 'website', title: '网站视觉优化改版设计', summary: '以更明确的视觉层级与响应式设计提升品牌内容的可读性。', category: '网站视觉 / 品牌设计', image: '/assets/project-3.png', detailImages: [{ ratio: '16 / 9', alt: '项目首图' }, { ratio: '4 / 3', alt: '项目过程图' }, { ratio: '3 / 4', alt: '项目成果图' }] },
  { id: 'house', title: '不动产服务平台产品体验设计', summary: '围绕核心任务重构服务流程，让信息查找与决策更加轻松。', category: '产品体验 / 服务设计', image: '/assets/project-4.png', detailImages: [{ ratio: '16 / 9', alt: '项目首图' }, { ratio: '4 / 3', alt: '项目过程图' }, { ratio: '3 / 4', alt: '项目成果图' }] }
];

export const skills = [
  { number: '01', title: 'DESIGN.md 编写助手', summary: '按设计规范创建、审查和维护完整的视觉契约，统一处理 Token 所有权与语义命名。', tag: '设计系统 Gallery 组件' },
  { number: '02', title: '设计系统 Gallery', summary: '创建、审查和优化设计系统的默认示例、属性轴与状态对比。', tag: '设计系统 Gallery 组件' },
  { number: '03', title: '原型假数据与演示', summary: '为前端原型统一接入假数据、占位交互、源码展示和可关闭的演示状态。', tag: '原型 假数据 设计到代码' },
  { number: '04', title: '交互体验检查', summary: '梳理关键任务路径、界面反馈与不同设备的响应方式。', tag: '用户体验 / 交互设计' },
  { number: '05', title: '组件规范维护', summary: '让可复用组件在设计与开发之间保持一致。', tag: '组件库 / 设计规范' }
];
