export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export const articles: Article[] = [
  {
    id: '1',
    title: '春日里的阅读时光',
    excerpt: '在这个温暖的季节里，阅读是最好的陪伴。分享一些最近读过的好书，希望能给你带来灵感和启发。',
    content: '',
    category: '生活',
    date: '2024-04-15',
    readTime: 8,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cozy%20reading%20corner%20with%20sunlight%20streaming%20through%20window%20books%20plants%20minimal%20clean&image_size=landscape_16_9'
  },
  {
    id: '2',
    title: '前端开发中的设计思维',
    excerpt: '作为前端开发者，如何将设计思维融入日常工作中，创造出既美观又实用的用户界面。',
    content: '',
    category: '技术',
    date: '2024-04-10',
    readTime: 12,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20web%20development%20workspace%20computer%20code%20design%20minimal%20clean%20professional&image_size=landscape_16_9'
  },
  {
    id: '3',
    title: '极简主义生活方式',
    excerpt: '简约不是简单，而是一种生活态度。分享我如何通过极简主义提升生活品质。',
    content: '',
    category: '生活',
    date: '2024-04-05',
    readTime: 6,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20lifestyle%20clean%20room%20simple%20decor%20plants%20natural%20light%20white&image_size=landscape_16_9'
  },
  {
    id: '4',
    title: 'React Hooks 最佳实践',
    excerpt: '深入探讨React Hooks的使用技巧和最佳实践，帮助你写出更优雅的代码。',
    content: '',
    category: '技术',
    date: '2024-03-28',
    readTime: 15,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=react%20programming%20code%20modern%20tech%20clean%20aesthetic%20blue&image_size=landscape_16_9'
  },
  {
    id: '5',
    title: '旅行日记：江南水乡',
    excerpt: '漫步在江南的小巷中，感受水乡的柔情与诗意。这里的每一处风景都值得被记录。',
    content: '',
    category: '旅行',
    date: '2024-03-20',
    readTime: 10,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=jiangnan%20water%20town%20traditional%20chinese%20architecture%20canal%20boats%20beautiful%20peaceful&image_size=landscape_16_9'
  },
  {
    id: '6',
    title: 'CSS Grid 布局完全指南',
    excerpt: '从基础到进阶，全面掌握CSS Grid布局，让你的页面布局更加灵活和强大。',
    content: '',
    category: '技术',
    date: '2024-03-15',
    readTime: 18,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=css%20grid%20layout%20visual%20design%20web%20development%20clean%20geometric%20shapes&image_size=landscape_16_9'
  },
  {
    id: '7',
    title: '晨间日记的力量',
    excerpt: '坚持写晨间日记三个月后，我的生活发生了哪些改变？分享这个简单而强大的习惯。',
    content: '',
    category: '生活',
    date: '2024-03-10',
    readTime: 7,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=morning%20journaling%20notebook%20pen%20coffee%20sunrise%20peaceful%20minimal%20clean&image_size=landscape_16_9'
  },
  {
    id: '8',
    title: '摄影入门：捕捉光影之美',
    excerpt: '作为摄影爱好者，分享一些基础的摄影技巧，帮助你更好地捕捉生活中的美好瞬间。',
    content: '',
    category: '旅行',
    date: '2024-03-05',
    readTime: 11,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=photography%20camera%20beautiful%20light%20nature%20sunset%20artistic%20clean&image_size=landscape_16_9'
  },
  {
    id: '9',
    title: 'TypeScript 类型体操入门',
    excerpt: '类型体操是提升TypeScript水平的必经之路。从基础开始，一起探索类型的奥秘。',
    content: '',
    category: '技术',
    date: '2024-02-28',
    readTime: 20,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=typescript%20code%20programming%20modern%20tech%20abstract%20geometric%20minimal&image_size=landscape_16_9'
  }
];

export const categories: Category[] = [
  { id: 'all', name: '全部', count: 9 },
  { id: 'tech', name: '技术', count: 4 },
  { id: 'life', name: '生活', count: 3 },
  { id: 'travel', name: '旅行', count: 2 },
];

export const authorInfo = {
  name: '林晓',
  title: '前端开发者 / 生活记录者',
  bio: '热爱技术，享受生活。在这里分享我的学习心得、生活感悟和旅行故事。',
  avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20young%20asian%20woman%20developer%20friendly%20smile%20minimal%20background%20clean&image_size=square',
  socialLinks: {
    github: '#',
    twitter: '#',
    linkedin: '#',
    email: 'mailto:hello@example.com'
  }
};