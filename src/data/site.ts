// ============================================================================
// Academic Personal Site Configuration
// Edit this single file to replace all placeholder text with your own details.
// Tip: Drop your own photo into `public/avatar.jpg` and set `avatar: '/avatar.jpg'`;
// CSS automatically crops it into a circle and renders it in monochrome.
// ============================================================================

export type SocialIconType =
  | 'cv'
  | 'email'
  | 'scholar'
  | 'orcid'
  | 'researchgate'
  | 'github'
  | 'linkedin'
  | 'x'
  | 'rss';

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconType;
  external?: boolean;
}

export interface NewsItem {
  date: string;
  /** Supports simple inline HTML links, e.g. <a href="...">Venue</a> */
  contentHtml: string;
}

export interface PublicationLink {
  label: string;
  href: string;
}

export interface PublicationItem {
  /** Unique anchor ID used to jump from Research pages to /publications/#id */
  id: string;
  title: string;
  /** Authors matching `authorSelfVariants` are automatically underlined */
  authors: string[];
  /** Co-first / equal-contribution authors (rendered with superscript †) */
  coFirstAuthors?: string[];
  /** Corresponding authors (rendered with superscript *) */
  correspondingAuthors?: string[];
  venue: string;
  /** Optional volume, issue, and page/article number (e.g. "37(20), 2420229") */
  volumeInfo?: string;
  year: number;
  /** Exact online publication date (YYYY-MM-DD), shown & sorted on /publications/ */
  onlineDate: string;
  month?: string;
  selected?: boolean;
  award?: string;
  links: PublicationLink[];
  bibtex?: string;
}

export interface ResearchProject {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  status: 'ongoing' | 'completed';
  roleLine: string;
  thumbnail: string;
  heroImage?: string;
  heroCaption?: string;
  bodyHtml: string[];
  /** Matches PublicationItem.id values to auto-link key publications */
  keyPublicationIds: string[];
}

export interface ContactRow {
  label: string;
  valueHtml: string;
}

export interface ExperienceItem {
  period: string;
  location: string;
  role: string;
  organization: string;
  summary: string;
  highlights: string[];
}

export interface EducationItem {
  period: string;
  location: string;
  degree: string;
  degreeUrl?: string;
  institution: string;
  department: string;
  note?: string;
}

export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  description?: string;
}

export interface PresentationItem {
  year: string;
  title: string;
  venue: string;
  type?: string;
}

export interface PatentItem {
  year: string;
  title: string;
  inventorsHtml: string;
  numberInfo: string;
}

export interface SkillRow {
  label: string;
  value: string;
}

export const SITE = {
  // Brand & URL
  url: 'https://gblll.github.io',
  handle: 'gblll',
  name: 'Zi-Bin Lin',
  /** Displayed on homepage H1 (e.g. "Zi-Bin Lin, PhD") */
  displayName: 'Zi-Bin Lin, PhD',
  /** Matched against publication author lists to underline your name (supports spelling variants) */
  authorSelfVariants: ['Zibin Lin', 'Zi-Bin Lin'],
  role: 'Researcher',
  affiliation: 'Huazhong University of Science and Technology',
  affiliationUrl: 'https://english.hust.edu.cn/',
  location: 'Wuhan, P.R. China',
  languages: 'Chinese (Native), English',
  lastUpdated: 'November 2026',

  // Portrait image (CSS automatically crops circular & converts to monochrome)
  avatar: '/avatar.svg',
  avatarAlt: 'Portrait of Zi-Bin Lin',

  // Optional static CV PDF path inside `public/` (leave empty '' to trigger browser Print/PDF)
  cvPdfUrl: '',

  // SEO metadata
  title: 'Zi-Bin Lin, PhD',
  description:
    'Academic homepage of Zi-Bin Lin, PhD — medical ultrasound imaging, wearable & flexible ultrasonics, and acoustic wavefront engineering.',

  // Homepage Bio paragraphs (supports simple inline HTML links)
  bioHtml: [
    'Welcome! I am an ultrasound and acoustics researcher with expertise in acoustic metamaterials, ultrasonic device development, and wavefield engineering. I received my PhD in Physics from the <a href="https://acoustics-lab.hust.edu.cn/index.htm" target="_blank" rel="noopener noreferrer">Acoustic Metamaterials and Devices Laboratory</a> at <a href="https://english.hust.edu.cn/" target="_blank" rel="noopener noreferrer">Huazhong University of Science and Technology</a>, where I worked with <a href="https://scholar.google.com/citations?user=qHpUKWwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Prof. Xue-Feng Zhu</a> and <a href="https://scholar.google.com/citations?user=mhuKjN0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Assoc. Prof. Yu-Gui Peng</a>. My research focuses on designing functional acoustic metastructures and flexible ultrasonic systems for high-resolution imaging, acoustic holography, and energy harvesting.',
    'Bridging physical modeling, inverse design, and experimental acoustics, I aim to translate advanced wavefront modulation concepts into compact, reliable ultrasonic technologies for biomedical imaging and sensing.',
    'I am currently seeking a postdoctoral position in ultrasound and related areas. Please feel free to reach out via <a href="mailto:linzibin.edu@gmail.com">email</a>.',
  ],

  // Research Interests (middot-separated concise keywords on homepage)
  researchInterests: [
    'Medical ultrasound imaging & beamforming',
    'Wearable & flexible ultrasonics',
    'Acoustic wavefront engineering',
    'Ultrasonic metamaterials & metasurfaces',
    'Computational acoustics & inverse design',
    'Physical AI',
  ],

  // Homepage & section display controls
  homeNewsLimit: 6,
  enableWriting: false,
  showWritingOnHome: false,

  // Contact note shown beneath the centered bottom social logos
  contactNote: 'The best way to reach me is by email.',
  email: 'linzibin.edu@gmail.com',

  // Clean Title-Case top navigation
  nav: [
    { label: 'About', href: '/' },
    { label: 'Publications', href: '/publications/' },
    { label: 'Research', href: '/research/' },
    { label: 'Biography', href: '/biography/' },
    { label: 'News', href: '/news/' },
    // { label: 'Writing', href: '/writing/' }, // Temporarily hidden (rename src/pages/_writing -> writing to re-enable)
  ],

  // Centered monochrome bottom icon row on homepage
  socials: [
    { label: 'Biography / CV', href: '/biography/', icon: 'cv', external: false },
    { label: 'Email', href: 'mailto:linzibin.edu@gmail.com', icon: 'email', external: false },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=IVIUUVUAAAAJ&hl=en',
      icon: 'scholar',
      external: true,
    },
    {
      label: 'ORCID',
      href: 'https://orcid.org/0009-0005-8360-7952',
      icon: 'orcid',
      external: true,
    },
    {
      label: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Zibin-Lin',
      icon: 'researchgate',
      external: true,
    },
    { label: 'GitHub', href: 'https://github.com/gblll', icon: 'github', external: true },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zibin-lin-2b40413b4/',
      icon: 'linkedin',
      external: true,
    },
  ] satisfies SocialLink[],

  // Full News Archive (homepage shows the newest `homeNewsLimit` items)
  news: [
    {
      date: 'Jun 30, 2026',
      contentHtml:
        'Graduated with a PhD in Physics from Huazhong University of Science and Technology and received the Outstanding Graduate Award. 🎓',
    },
    {
      date: 'Apr 23, 2026',
      contentHtml:
        'Successfully defended my PhD dissertation at Huazhong University of Science and Technology! 🎉',
    },
  ] satisfies NewsItem[],

  // Ordered list of publication IDs featured under `selected publications` on the homepage.
  // Keeping this separate lets you control exact homepage priority order independently of /publications/.
  selectedPublicationIds: [
    'lin2026echovision',
    'zhang2026sound',
    'zeng2025manifold',
  ] as string[],

  // Verified Publications from Google Scholar & Crossref (19 peer-reviewed articles, 2019–2026).
  publications: [
    // ==================== 2026 ====================
    {
      id: 'he2026moire',
      title: 'Moiré-driven skyrmion family',
      authors: [
        'Kuan He',
        'Meng-Han Li',
        'Shi-Da Fan',
        'Zi-Bin Lin',
        'Xiao-Ying Zhuang',
        'Cheng-Lin Han',
        'Li-Qun Chen',
        'Zhao-Dong Xu',
        'Xue-Feng Zhu',
        'Tian-Zhi Yang',
      ],
      coFirstAuthors: ['Kuan He', 'Meng-Han Li'],
      correspondingAuthors: ['Zhao-Dong Xu', 'Xue-Feng Zhu', 'Tian-Zhi Yang'],
      venue: 'Reports on Progress in Physics',
      volumeInfo: '89(8), 080502',
      year: 2026,
      onlineDate: '2026-08-04',
      month: 'Aug',
      selected: false,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1088/1361-6633/ae8d52' },
      ],
      bibtex: `@article{he2026moire,
  title={Moir{\\'e}-driven skyrmion family},
  author={He, Kuan and Li, Meng-Han and Fan, Shi-Da and Lin, Zi-Bin and Zhuang, Xiao-Ying and Han, Cheng-Lin and Chen, Li-Qun and Xu, Zhao-Dong and Zhu, Xue-Feng and Yang, Tian-Zhi},
  journal={Reports on Progress in Physics},
  volume={89},
  number={8},
  pages={080502},
  year={2026},
  doi={10.1088/1361-6633/ae8d52}
}`,
    },
    {
      id: 'qiu2026super',
      title: 'Super-resolution pulse-echo imaging via 3D-printed phase-type acoustic meta-lens',
      authors: [
        'Ji-Fan Qiu',
        'Zong-Lin Li',
        'Long-Sheng Zeng',
        'Lai-Xin Huang',
        'Zi-Bin Lin',
        'Yong-Hao Wen',
        'Jian-Ri Chen',
        'Peng-Qi Li',
        'Xue-Feng Zhu',
        'Fei Li',
        'Hai-Rong Zheng',
      ],
      correspondingAuthors: ['Xue-Feng Zhu', 'Fei Li', 'Hai-Rong Zheng'],
      venue: 'Ultrasonics',
      volumeInfo: '164, 108055',
      year: 2026,
      onlineDate: '2026-03-14',
      month: 'Aug',
      selected: false,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1016/j.ultras.2026.108055' },
      ],
      bibtex: `@article{qiu2026super,
  title={Super-resolution pulse-echo imaging via 3D-printed phase-type acoustic meta-lens},
  author={Qiu, Ji-Fan and Li, Zong-Lin and Zeng, Long-Sheng and Huang, Lai-Xin and Lin, Zi-Bin and Wen, Yong-Hao and Chen, Jian-Ri and Li, Peng-Qi and Zhu, Xue-Feng and Li, Fei and Zheng, Hai-Rong},
  journal={Ultrasonics},
  volume={164},
  pages={108055},
  year={2026},
  doi={10.1016/j.ultras.2026.108055}
}`,
    },
    {
      id: 'zhang2026sound',
      title:
        '3D Large-Scale Subwavelength-Resolution Sound Sheet Tomography Based on an Active and Programmable Circular Meta-Array',
      authors: [
        'Qiu-De Zhang',
        'Zi-Bin Lin',
        'Zhuo Chen',
        'Zhao-Hui Liu',
        'Jin-Lian He',
        'Jun-Jie Song',
        'Long-Sheng Zeng',
        'Liang Zhou',
        'Ming-Yue Ding',
        'Yu-Gui Peng',
        'Ming Yuchi',
        'Xue-Feng Zhu',
      ],
      coFirstAuthors: ['Qiu-De Zhang', 'Zi-Bin Lin'],
      correspondingAuthors: ['Yu-Gui Peng', 'Ming Yuchi', 'Xue-Feng Zhu'],
      venue: 'Advanced Science',
      volumeInfo: '13(39), e20560',
      year: 2026,
      onlineDate: '2026-04-15',
      month: 'Jul',
      selected: true,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1002/advs.202520560' },
      ],
      bibtex: `@article{zhang2026sound,
  title={3D Large-Scale Subwavelength-Resolution Sound Sheet Tomography Based on an Active and Programmable Circular Meta-Array},
  author={Zhang, Qiu-De and Lin, Zi-Bin and Chen, Zhuo and Liu, Zhao-Hui and He, Jin-Lian and Song, Jun-Jie and Zeng, Long-Sheng and Zhou, Liang and Ding, Ming-Yue and Peng, Yu-Gui and Yuchi, Ming and Zhu, Xue-Feng},
  journal={Advanced Science},
  volume={13},
  number={39},
  pages={e20560},
  year={2026},
  doi={10.1002/advs.202520560}
}`,
    },
    {
      id: 'lin2026echovision',
      title:
        'Echo-vision: A Dual-Function Ultrasonic Platform for Acoustic Energy Harvesting and Varifocal Echo Imaging',
      authors: [
        'Zi-Bin Lin',
        'Ji-Zhen Liu',
        'Yu Hu',
        'Zong-Lin Li',
        'Peng-Qi Li',
        'Yu-Gui Peng',
        'Bin Li',
        'Xue-Feng Zhu',
      ],
      coFirstAuthors: ['Zi-Bin Lin', 'Ji-Zhen Liu', 'Yu Hu'],
      correspondingAuthors: ['Yu-Gui Peng', 'Bin Li', 'Xue-Feng Zhu'],
      venue: 'Advanced Energy Materials',
      volumeInfo: '16(15), e06618',
      year: 2026,
      onlineDate: '2026-02-08',
      month: 'Apr',
      selected: true,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1002/aenm.202506618' },
      ],
      bibtex: `@article{lin2026echovision,
  title={Echo-vision: A Dual-Function Ultrasonic Platform for Acoustic Energy Harvesting and Varifocal Echo Imaging},
  author={Lin, Zi-Bin and Liu, Ji-Zhen and Hu, Yu and Li, Zong-Lin and Li, Peng-Qi and Peng, Yu-Gui and Li, Bin and Zhu, Xue-Feng},
  journal={Advanced Energy Materials},
  volume={16},
  number={15},
  pages={e06618},
  year={2026},
  doi={10.1002/aenm.202506618}
}`,
    },
    {
      id: 'wang2026holography',
      title:
        'Three-dimensional underwater acoustic holography based on a genetic algorithm-optimized binary metasurface',
      authors: [
        'Si-Hao Wang',
        'Zi-Bin Lin',
        'Long-Sheng Zeng',
        'Yu-Gui Peng',
        'Xue-Feng Zhu',
      ],
      correspondingAuthors: ['Long-Sheng Zeng', 'Yu-Gui Peng', 'Xue-Feng Zhu'],
      venue: 'Physical Review Applied',
      volumeInfo: '25(3), 034082',
      year: 2026,
      onlineDate: '2026-03-26',
      month: 'Mar',
      selected: false,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1103/wyx5-7bcx' },
      ],
      bibtex: `@article{wang2026holography,
  title={Three-dimensional underwater acoustic holography based on a genetic algorithm--optimized binary metasurface},
  author={Wang, Si-Hao and Lin, Zi-Bin and Zeng, Long-Sheng and Peng, Yu-Gui and Zhu, Xue-Feng},
  journal={Physical Review Applied},
  volume={25},
  number={3},
  pages={034082},
  year={2026},
  doi={10.1103/wyx5-7bcx}
}`,
    },

    // ==================== 2025 ====================
    {
      id: 'liu2025fresnel',
      title:
        'Efficient conversion of waterborne acoustic waves into electrical energy by using the phase-reversal Fresnel zone plate',
      authors: [
        'Ji-Zhen Liu',
        'Zi-Bin Lin',
        'Yong-Jing Li',
        'Yu-Gui Peng',
        'Bin Li',
        'Shi-Lin Yan',
        'Xue-Feng Zhu',
      ],
      coFirstAuthors: ['Ji-Zhen Liu', 'Zi-Bin Lin'],
      correspondingAuthors: ['Bin Li', 'Shi-Lin Yan', 'Xue-Feng Zhu'],
      venue: 'Ultrasonics',
      volumeInfo: '151, 107619',
      year: 2025,
      onlineDate: '2025-02-27',
      month: 'Jul',
      selected: false,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1016/j.ultras.2025.107619' },
      ],
      bibtex: `@article{liu2025fresnel,
  title={Efficient conversion of waterborne acoustic waves into electrical energy by using the phase-reversal Fresnel zone plate},
  author={Liu, Ji-Zhen and Lin, Zi-Bin and Li, Yong-Jing and Peng, Yu-Gui and Li, Bin and Yan, Shi-Lin and Zhu, Xue-Feng},
  journal={Ultrasonics},
  volume={151},
  pages={107619},
  year={2025},
  doi={10.1016/j.ultras.2025.107619}
}`,
    },
    {
      id: 'zeng2025manifold',
      title:
        'High-Resolution Manifold Acoustic Holography Based on High-Pixel-Array Binary Metasurfaces',
      authors: [
        'Long-Sheng Zeng',
        'Zi-Bin Lin',
        'Zong-Lin Li',
        'Ye Yang',
        'Yu Hu',
        'Zhuo Chen',
        'Yu-Gui Peng',
        'Teng Ma',
        'Hai-Rong Zheng',
        'Xue-Feng Zhu',
      ],
      coFirstAuthors: ['Long-Sheng Zeng', 'Zi-Bin Lin', 'Zong-Lin Li', 'Ye Yang'],
      correspondingAuthors: ['Yu-Gui Peng', 'Teng Ma', 'Hai-Rong Zheng', 'Xue-Feng Zhu'],
      venue: 'Advanced Materials',
      volumeInfo: '37(20), 2420229',
      year: 2025,
      onlineDate: '2025-03-23',
      month: 'May',
      selected: true,
      award: 'Cover Feature, Advanced Materials (20/2025)',
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1002/adma.202420229' },
        { label: 'Cover', href: 'https://doi.org/10.1002/adma.202570145' },
      ],
      bibtex: `@article{zeng2025manifold,
  title={High-Resolution Manifold Acoustic Holography Based on High-Pixel-Array Binary Metasurfaces},
  author={Zeng, Long-Sheng and Lin, Zi-Bin and Li, Zong-Lin and Yang, Ye and Hu, Yu and Chen, Zhuo and Peng, Yu-Gui and Ma, Teng and Zheng, Hai-Rong and Zhu, Xue-Feng},
  journal={Advanced Materials},
  volume={37},
  number={20},
  pages={2420229},
  year={2025},
  doi={10.1002/adma.202420229}
}`,
    },

    // ==================== 2024 ====================
    {
      id: 'zheng2024superlens',
      title: 'Acoustic sub-wavelength imaging via a virtual super-lens',
      authors: [
        'Chen Zheng',
        'Long-Sheng Zeng',
        'Zong-Lin Li',
        'Zi-Bin Lin',
        'Peng Wu',
        'Tuo Liu',
        'Yu-Gui Peng',
        'Xue-Feng Zhu',
      ],
      coFirstAuthors: ['Chen Zheng', 'Long-Sheng Zeng'],
      correspondingAuthors: ['Tuo Liu', 'Yu-Gui Peng', 'Xue-Feng Zhu'],
      venue: 'Applied Physics Letters',
      volumeInfo: '125(20), 202201',
      year: 2024,
      onlineDate: '2024-11-11',
      month: 'Nov',
      selected: false,
      award: 'Featured Article, Applied Physics Letters',
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1063/5.0233793' },
      ],
      bibtex: `@article{zheng2024superlens,
  title={Acoustic sub-wavelength imaging via a virtual super-lens},
  author={Zheng, Chen and Zeng, Long-Sheng and Li, Zong-Lin and Lin, Zi-Bin and Wu, Peng and Liu, Tuo and Peng, Yu-Gui and Zhu, Xue-Feng},
  journal={Applied Physics Letters},
  volume={125},
  number={20},
  pages={202201},
  year={2024},
  doi={10.1063/5.0233793}
}`,
    },
    {
      id: 'hu2024moire',
      title:
        'Experimental investigation of acoustic moiré effect controlled by twisted bilayer gratings',
      authors: ['Yu Hu', 'Zi-Bin Lin', 'Zong-Lin Li', 'Yu-Gui Peng', 'Xue-Feng Zhu'],
      correspondingAuthors: ['Yu-Gui Peng', 'Xue-Feng Zhu'],
      venue: 'Ultrasonics',
      volumeInfo: '141, 107338',
      year: 2024,
      onlineDate: '2024-05-03',
      month: 'Jul',
      selected: false,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1016/j.ultras.2024.107338' },
      ],
      bibtex: `@article{hu2024moire,
  title={Experimental investigation of acoustic moir{\\'e} effect controlled by twisted bilayer gratings},
  author={Hu, Yu and Lin, Zi-Bin and Li, Zong-Lin and Peng, Yu-Gui and Zhu, Xue-Feng},
  journal={Ultrasonics},
  volume={141},
  pages={107338},
  year={2024},
  doi={10.1016/j.ultras.2024.107338}
}`,
    },

    // ==================== 2023 ====================
    {
      id: 'lin2023metalens',
      title: 'Design of functional ultra-thin ultrasonic planar meta-lens based on genetic algorithm',
      authors: ['Zi-Bin Lin', 'Shao-Bo Zhu', 'Yu-Gui Peng', 'Xue-Feng Zhu'],
      correspondingAuthors: ['Yu-Gui Peng', 'Xue-Feng Zhu'],
      venue: 'Chinese Science Bulletin',
      volumeInfo: '68(26), 3464–3471',
      year: 2023,
      onlineDate: '2023-06-12',
      month: 'Jun',
      selected: false,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1360/tb-2023-0266' },
      ],
      bibtex: `@article{lin2023metalens,
  title={Design of functional ultra-thin ultrasonic planar meta-lens based on genetic algorithm},
  author={Lin, Zi-Bin and Zhu, Shao-Bo and Peng, Yu-Gui and Zhu, Xue-Feng},
  journal={Chinese Science Bulletin},
  volume={68},
  number={26},
  pages={3464--3471},
  year={2023},
  doi={10.1360/tb-2023-0266}
}`,
    },
    {
      id: 'yang2023nonlocal',
      title: 'Experimental Evidence of High-Efficiency Nonlocal Waterborne Acoustic Metasurfaces',
      authors: ['Tian Yang', 'Zi-Bin Lin', 'Tian-Zhi Yang'],
      correspondingAuthors: ['Tian-Zhi Yang'],
      venue: 'Advanced Engineering Materials',
      volumeInfo: '25(1), 2200805',
      year: 2023,
      onlineDate: '2022-07-24',
      month: 'Jan',
      selected: false,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1002/adem.202200805' },
      ],
      bibtex: `@article{yang2023nonlocal,
  title={Experimental Evidence of High-Efficiency Nonlocal Waterborne Acoustic Metasurfaces},
  author={Yang, Tian and Lin, Zi-Bin and Yang, Tian-Zhi},
  journal={Advanced Engineering Materials},
  volume={25},
  number={1},
  pages={2200805},
  year={2023},
  doi={10.1002/adem.202200805}
}`,
    },

    // ==================== 2022 ====================
    {
      id: 'yang2022harvesting',
      title: 'Elastic Metasurface with Dual-Coupled Resonators for Highly Efficient Energy Harvesting',
      authors: ['Tian Yang', 'Zi-Bin Lin', 'Xue-Feng Zhu', 'Tian-Zhi Yang'],
      coFirstAuthors: ['Tian Yang', 'Zi-Bin Lin'],
      correspondingAuthors: ['Xue-Feng Zhu', 'Tian-Zhi Yang'],
      venue: 'Physical Review Applied',
      volumeInfo: '18(6), 064065',
      year: 2022,
      onlineDate: '2022-12-21',
      month: 'Dec',
      selected: false,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1103/PhysRevApplied.18.064065' },
      ],
      bibtex: `@article{yang2022harvesting,
  title={Elastic Metasurface with Dual-Coupled Resonators for Highly Efficient Energy Harvesting},
  author={Yang, Tian and Lin, Zi-Bin and Zhu, Xue-Feng and Yang, Tian-Zhi},
  journal={Physical Review Applied},
  volume={18},
  number={6},
  pages={064065},
  year={2022},
  doi={10.1103/PhysRevApplied.18.064065}
}`,
    },
    {
      id: 'li2022bubble',
      title:
        'Underwater Transmitted Wavefront Manipulation Based on Bubble-Arrayed Acoustic Metasurfaces',
      authors: ['Zhi-Min Li', 'Zi-Bin Lin', 'Long-Sheng Zeng', 'Hao Wu', 'Xue-Feng Zhu'],
      correspondingAuthors: ['Zi-Bin Lin', 'Xue-Feng Zhu'],
      venue: 'Frontiers in Physics',
      volumeInfo: '10, 922010',
      year: 2022,
      onlineDate: '2022-06-29',
      month: 'Jun',
      selected: false,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.3389/fphy.2022.922010' },
      ],
      bibtex: `@article{li2022bubble,
  title={Underwater Transmitted Wavefront Manipulation Based on Bubble-Arrayed Acoustic Metasurfaces},
  author={Li, Zhi-Min and Lin, Zi-Bin and Zeng, Long-Sheng and Wu, Hao and Zhu, Xue-Feng},
  journal={Frontiers in Physics},
  volume={10},
  pages={922010},
  year={2022},
  doi={10.3389/fphy.2022.922010}
}`,
    },
    {
      id: 'zeng2022sharpedge',
      title:
        'Far-field super-resolution focusing with weak side lobes and defect detection via an ultrasonic meta-lens of sharp-edge apertures',
      authors: ['Long-Sheng Zeng', 'Zhi-Min Li', 'Zi-Bin Lin', 'Hao Wu', 'Yu-Gui Peng', 'Xue-Feng Zhu'],
      correspondingAuthors: ['Yu-Gui Peng', 'Xue-Feng Zhu'],
      venue: 'Applied Physics Letters',
      volumeInfo: '120(20), 202202',
      year: 2022,
      onlineDate: '2022-05-17',
      month: 'May',
      selected: false,
      award: 'Featured Article & AIP Scilight',
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1063/5.0094606' },
        { label: 'Scilight', href: 'https://doi.org/10.1063/10.0011485' },
      ],
      bibtex: `@article{zeng2022sharpedge,
  title={Far-field super-resolution focusing with weak side lobes and defect detection via an ultrasonic meta-lens of sharp-edge apertures},
  author={Zeng, Long-Sheng and Li, Zhi-Min and Lin, Zi-Bin and Wu, Hao and Peng, Yu-Gui and Zhu, Xue-Feng},
  journal={Applied Physics Letters},
  volume={120},
  number={20},
  pages={202202},
  year={2022},
  doi={10.1063/5.0094606}
}`,
    },
    {
      id: 'lin2022topology',
      title: 'Topology optimization of single-groove acoustic metasurfaces using genetic algorithms',
      authors: ['Zi-Bin Lin', 'Wei Wang', 'Wei-Kai Xu', 'Tian-Zhi Yang'],
      correspondingAuthors: ['Wei Wang'],
      venue: 'Archive of Applied Mechanics',
      volumeInfo: '92(3), 961–969',
      year: 2022,
      onlineDate: '2022-02-03',
      month: 'Mar',
      selected: false,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1007/s00419-021-02084-z' },
      ],
      bibtex: `@article{lin2022topology,
  title={Topology optimization of single-groove acoustic metasurfaces using genetic algorithms},
  author={Lin, Zi-Bin and Wang, Wei and Xu, Wei-Kai and Yang, Tian-Zhi},
  journal={Archive of Applied Mechanics},
  volume={92},
  number={3},
  pages={961--969},
  year={2022},
  doi={10.1007/s00419-021-02084-z}
}`,
    },

    // ==================== 2021 ====================
    {
      id: 'lin2021folding',
      title: 'Gradient folding metasurfaces with simultaneous phase and amplitude modulation',
      authors: ['Zi-Bin Lin', 'Wei-Kai Xu', 'Wei Wang', 'Sha-Sha Yuan'],
      correspondingAuthors: ['Wei-Kai Xu'],
      venue: 'Journal of Mechanical Science and Technology',
      volumeInfo: '35(12), 5495–5501',
      year: 2021,
      onlineDate: '2021-12-08',
      month: 'Dec',
      selected: false,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1007/s12206-021-1121-z' },
      ],
      bibtex: `@article{lin2021folding,
  title={Gradient folding metasurfaces with simultaneous phase and amplitude modulation},
  author={Lin, Zi-Bin and Xu, Wei-Kai and Wang, Wei and Yuan, Sha-Sha},
  journal={Journal of Mechanical Science and Technology},
  volume={35},
  number={12},
  pages={5495--5501},
  year={2021},
  doi={10.1007/s12206-021-1121-z}
}`,
    },
    {
      id: 'lin2021modular',
      title:
        'Modular elastic metasurfaces with mass oscillators for transmitted flexural wave manipulation',
      authors: ['Zi-Bin Lin', 'Wei-Kai Xu', 'Cheng-Ming Xuan', 'Wu-Chao Qi', 'Wei Wang'],
      correspondingAuthors: ['Wei-Kai Xu'],
      venue: 'Journal of Physics D: Applied Physics',
      volumeInfo: '54(25), 255303',
      year: 2021,
      onlineDate: '2021-04-06',
      month: 'Jun',
      selected: false,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1088/1361-6463/abee47' },
      ],
      bibtex: `@article{lin2021modular,
  title={Modular elastic metasurfaces with mass oscillators for transmitted flexural wave manipulation},
  author={Lin, Zi-Bin and Xu, Wei-Kai and Xuan, Cheng-Ming and Qi, Wu-Chao and Wang, Wei},
  journal={Journal of Physics D: Applied Physics},
  volume={54},
  number={25},
  pages={255303},
  year={2021},
  doi={10.1088/1361-6463/abee47}
}`,
    },

    // ==================== 2020 ====================
    {
      id: 'xu2020phononic',
      title:
        'Multi-objective topology optimization of two-dimensional multi-phase microstructure phononic crystals',
      authors: ['Wei-Kai Xu', 'Jin-Ying Ning', 'Zi-Bin Lin', 'Wu-Chao Qi', 'Hong-Liang Liu', 'Wei Wang'],
      correspondingAuthors: ['Wei-Kai Xu'],
      venue: 'Materials Today Communications',
      volumeInfo: '22, 100801',
      year: 2020,
      onlineDate: '2019-11-27',
      month: 'Mar',
      selected: false,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1016/j.mtcomm.2019.100801' },
      ],
      bibtex: `@article{xu2020phononic,
  title={Multi-objective topology optimization of two-dimensional multi-phase microstructure phononic crystals},
  author={Xu, Wei-Kai and Ning, Jin-Ying and Lin, Zi-Bin and Qi, Wu-Chao and Liu, Hong-Liang and Wang, Wei},
  journal={Materials Today Communications},
  volume={22},
  pages={100801},
  year={2020},
  doi={10.1016/j.mtcomm.2019.100801}
}`,
    },

    // ==================== 2019 ====================
    {
      id: 'xu2019lamb',
      title: 'Anomalous refraction manipulation of Lamb waves using single-groove metasurfaces',
      authors: ['Wei-Kai Xu', 'Meng Zhang', 'Zi-Bin Lin', 'Cheng-Long Liu', 'Wu-Chao Qi', 'Wei Wang'],
      correspondingAuthors: ['Wei-Kai Xu'],
      venue: 'Physica Scripta',
      volumeInfo: '94(10), 105807',
      year: 2019,
      onlineDate: '2019-08-06',
      month: 'Oct',
      selected: false,
      links: [
        { label: 'Link to paper', href: 'https://doi.org/10.1088/1402-4896/ab2b01' },
      ],
      bibtex: `@article{xu2019lamb,
  title={Anomalous refraction manipulation of Lamb waves using single-groove metasurfaces},
  author={Xu, Wei-Kai and Zhang, Meng and Lin, Zi-Bin and Liu, Cheng-Long and Qi, Wu-Chao and Wang, Wei},
  journal={Physica Scripta},
  volume={94},
  number={10},
  pages={105807},
  year={2019},
  doi={10.1088/1402-4896/ab2b01}
}`,
    },
  ] satisfies PublicationItem[],

  // Research Projects (displayed as 3-column grid on /research/ + individual detail pages)
  research: [
    {
      slug: 'wearable-transcranial-ultrasound',
      title: 'Wearable & Self-Powered Flexible Transcranial Ultrasound',
      subtitle:
        'Self-powered flexible ultrasonic devices and experimental field characterization for wearable transcranial focusing.',
      summary:
        'Self-powered flexible ultrasonic devices and experimental field characterization for wearable transcranial focusing',
      status: 'ongoing',
      roleLine: 'Researcher · Huazhong University of Science and Technology',
      thumbnail: '/projects/transcranial-ultrasound.svg',
      bodyHtml: [
        'Non-invasive transcranial focused ultrasound offers a promising route for neuromodulation and brain therapy, yet strong phase aberration and attenuation across the curved human skull—combined with the bulk and rigidity of conventional transducers—limit conformal coupling and wearable deployment.',
        'This ongoing project focuses on developing <strong>self-powered flexible ultrasonic devices</strong> for conformal transcranial focusing and wavefront modulation, alongside <strong>experimental acoustic-field characterization</strong> of <strong>wearable transcranial ultrasound helmet systems</strong> to evaluate intracranial focusing quality and multi-element wavefield control.',
      ],
      keyPublicationIds: [],
    },
    {
      slug: '4d-ice-metalens-optimization',
      title: 'Acoustic Metalens & Front-End Optimization for 4D ICE',
      subtitle:
        'Acoustic metalens design and wavefront optimization for catheter-based 4D intracardiac echocardiography.',
      summary:
        'Acoustic metalens optimization for deeper focusing and higher SNR in 4D intracardiac echocardiography',
      status: 'ongoing',
      roleLine: 'Technical Consultant · Shenzhen CardioACC Ltd.',
      thumbnail: '/projects/4d-ice-metalens.svg',
      bodyHtml: [
        'Four-dimensional intracardiac echocardiography (4D ICE) provides real-time volumetric imaging from within the heart to guide structural cardiac interventions, but millimeter-scale catheter footprints impose strict physical limits on aperture size, lens thickness, and acoustic attenuation.',
        'In this ongoing industry collaboration, we design and optimize <strong>miniature acoustic metalenses</strong> and front-end wavefront profiles for 4D ICE probes, aiming to improve <strong>focusing at greater depths</strong> and increase the <strong>signal-to-noise ratio (SNR)</strong> under practical hardware constraints.',
      ],
      keyPublicationIds: [],
    },
    {
      slug: 'sound-sheet-ultrasound-tomography',
      title: '3D Sound-Sheet Ultrasound Tomography',
      subtitle:
        'Active 2,048-channel circular meta-array combining sound-sheet beam shaping, full-matrix capture, and DMAS reconstruction.',
      summary:
        'Subwavelength 3D musculoskeletal imaging via a 2,048-element circular meta-array and sound-sheet tomography',
      status: 'completed',
      roleLine: 'Ph.D. Research · Huazhong University of Science and Technology',
      thumbnail: '/projects/sound-sheet-usct.png',
      bodyHtml: [
        'Conventional handheld 2D ultrasound suffers from operator dependence and a narrow field of view, whereas volumetric ultrasound computed tomography (USCT) is often limited by out-of-plane elevational blurring and incomplete angular coverage across complex anatomy. To address these bottlenecks, we developed an active, programmable <strong>2,048-element circular meta-array</strong> integrating engineered acoustic metalenses that shape out-of-plane elevation beams into a thin, collimated <strong>sound sheet</strong> while maintaining wide-angle in-plane radiation.',
        'Coupling lens-based sound-sheet beamforming and 3D hydrophone field characterization with full-matrix multi-channel RF data processing and coherence-weighted <strong>delay-multiply-and-sum (DMAS)</strong> image reconstruction, the platform achieves subwavelength resolution (~0.8&lambda;) with homogeneous omnidirectional coverage across a large imaging aperture. Sequential slice acquisition and 3D volumetric rendering in MATLAB and Amira enabled high-contrast imaging of structured phantoms and human musculoskeletal structures, demonstrating practical integration of acoustic wavefront engineering with medical ultrasound tomography.',
      ],
      keyPublicationIds: ['zhang2026sound'],
    },
    {
      slug: 'echo-vision-flexible-ultrasound',
      title: 'Echo-Vision Flexible Ultrasonic Platform',
      subtitle:
        'Bio-inspired ocular platform uniting a broadband PVDF transducer, stretchable metalens, and mechanical iris.',
      summary:
        'Reconfigurable flexible PVDF transducer and stretchable metalens for varifocal imaging and energy harvesting',
      status: 'completed',
      roleLine: 'Ph.D. Research · Huazhong University of Science and Technology',
      thumbnail: '/projects/echo-vision.png',
      bodyHtml: [
        'Compact ultrasonic devices for wearable sensing, soft robotics, and underwater exploration typically rely on rigid piezoceramics, fixed-focus lenses, and external wired power, forcing a trade-off between multi-depth imaging adaptability and energy autonomy. Inspired by biological ocular accommodation, we developed Echo-vision, a mechanically reconfigurable ultrasonic platform integrating a broadband <strong>flexible PVDF transducer</strong> (with tungsten/PDMS composite backing and PDMS encapsulation), a radially <strong>stretchable acoustic metalens</strong>, and a mechanical iris.',
        'Three-dimensional hydrophone mapping (Precision Acoustics UMS) and pulse-echo experiments (JSR DPR300 and S-Sharp Prodigy) demonstrated continuous <strong>focal tuning from 10 to 20 mm</strong> and multi-depth varifocal echo imaging with subwavelength lateral resolution. Paired with a dedicated acoustic energy-harvesting mode that charges storage capacitors—alongside complementary phase-reversal Fresnel zone plate focusing for efficient waterborne wave-to-electrical conversion—this platform establishes a compact, dual-function architecture for self-powered ultrasonic sensing and imaging.',
      ],
      keyPublicationIds: ['lin2026echovision', 'liu2025fresnel'],
    },
    {
      slug: 'ultrasonic-metasurfaces-holography',
      title: 'Inverse-Designed Ultrasonic Metasurfaces & Holography',
      subtitle:
        'Forward angular-spectrum and genetic-algorithm inverse design for manifold ultrasonic holography and subwavelength focusing.',
      summary:
        'High-pixel binary metasurfaces and inverse-designed planar metalenses for 3D acoustic holography and super-resolution imaging',
      status: 'completed',
      roleLine:
        'Principal Investigator & Ph.D. Research · Huazhong University of Science and Technology',
      thumbnail: '/projects/manifold-holography.jpg',
      bodyHtml: [
        'Shaping high-frequency ultrasonic fields into complex volumetric patterns or subwavelength focal spots with conventional 3D-printed phase plates is constrained by microfabrication tolerances, acoustic attenuation, single-plane bandwidth limits, and strong super-oscillatory sidelobes. Supported in part as Principal Investigator by the Fundamental Research Funds for the Central Universities, we developed inverse-design frameworks combining <strong>forward angular-spectrum optimization</strong> and <strong>MATLAB–COMSOL genetic algorithms</strong> to engineer ultrathin binary amplitude metasurfaces and planar acoustic metalenses for precision wavefront control.',
        'Using picosecond-laser-fabricated <strong>high-pixel binary metasurfaces (~90,000 pixels)</strong> and zero-padded angular-spectrum propagation, 3D hydrophone field scans verified diffraction-limited manifold acoustic holography across multiple depths, frequencies, and 3D underwater targets, earning a cover feature in <em>Advanced Materials</em>. Extending these optimization methods to planar, sharp-edge, virtual super-lens, and 3D-printed phase metalenses further realized acoustic bottle beams, sidelobe-suppressed far-field focusing, and super-resolution pulse-echo defect and target imaging across waterborne ultrasonic regimes, highlighted by two <em>Applied Physics Letters</em> Featured Articles.',
      ],
      keyPublicationIds: [
        'zeng2025manifold',
        'wang2026holography',
        'qiu2026super',
        'zheng2024superlens',
        'lin2023metalens',
        'zeng2022sharpedge',
      ],
    },
  ] satisfies ResearchProject[],

  // Biography / CV Structured Data (rendered in 7 modular cards with Sticky TOC)
  biography: {
    contact: [
      { label: 'Name', valueHtml: 'Zi-Bin Lin' },
      { label: 'Title', valueHtml: 'Researcher' },
      { label: 'Email', valueHtml: '<a href="mailto:linzibin.edu@gmail.com">linzibin.edu@gmail.com</a>' },
      { label: 'Languages', valueHtml: 'Chinese (native), English (fluent)' },
    ] satisfies ContactRow[],

    experience: [
      {
        period: '2026 - PRESENT',
        location: 'Wuhan, P.R. China',
        role: 'Researcher',
        organization: 'Huazhong University of Science and Technology',
        summary:
          'Researcher in the School of Physics, working with Prof. Xue-Feng Zhu and Assoc. Prof. Yu-Gui Peng on transcranial focused ultrasound, self-powered flexible ultrasonic devices, and wearable acoustic systems.',
        highlights: [
          'Self-powered flexible ultrasonic devices for transcranial focusing',
          'Experimental acoustic characterization of wearable transcranial ultrasound helmet systems',
        ],
      },
      {
        period: '2026 - PRESENT',
        location: 'Remote',
        role: 'Technical Consultant',
        organization: 'Shenzhen CardioACC Ltd.',
        summary:
          'Technical Consultant optimizing acoustic metalenses for four-dimensional intracardiac echocardiography (4D ICE) under practical hardware constraints.',
        highlights: [
          'Acoustic metalens design for 4D intracardiac echocardiography (4D ICE)',
        ],
      },
      {
        period: '2021 - 2022',
        location: 'Shenyang, P.R. China',
        role: 'Research Assistant',
        organization: 'Northeastern University',
        summary:
          'Research Assistant in the School of Mechanical Engineering, working with Prof. Tian-Zhi Yang on nonlocal acoustic metasurfaces and elastic-wave energy harvesting.',
        highlights: [
          'Nonlocal waterborne acoustic metasurfaces for high-efficiency wavefront control',
          'Dual-coupled elastic metasurfaces for flexural-wave energy harvesting',
        ],
      },
    ] satisfies ExperienceItem[],

    education: [
      {
        period: '2022 - 2026',
        location: 'Wuhan, P.R. China',
        degree: 'Ph.D.',
        degreeUrl: 'https://english.hust.edu.cn/',
        institution: 'Huazhong University of Science and Technology',
        department: 'Physics',
      },
      {
        period: '2018 - 2021',
        location: 'Shenyang, P.R. China',
        degree: 'M.S.',
        degreeUrl: 'https://en.sau.edu.cn/',
        institution: 'Shenyang Aerospace University',
        department: 'Mechanics',
      },
      {
        period: '2012 - 2016',
        location: 'Shenyang, P.R. China',
        degree: 'B.S.',
        degreeUrl: 'https://en.sau.edu.cn/',
        institution: 'Shenyang Aerospace University',
        department: 'Engineering Mechanics',
      },
    ] satisfies EducationItem[],

    awards: [
      {
        year: '2026',
        title: 'Outstanding Emerging Scholar Award & Best Poster Award',
        organization: 'The 5th China Metamaterials Conference (CMMC 2026)',
      },
      {
        year: '2026',
        title: 'Outstanding Graduate',
        organization: 'Huazhong University of Science and Technology',
      },
      {
        year: '2025',
        title: 'National Scholarship',
        organization: 'Ministry of Education of P.R. China',
      },
      {
        year: '2025',
        title: 'Merit Student Award',
        organization: 'Huazhong University of Science and Technology',
      },
      {
        year: '2024',
        title: 'Outstanding Emerging Scholar Award',
        organization: 'The 3rd China Metamaterials Conference (CMMC 2024)',
      },
      {
        year: '2024',
        title: 'Science & Technology Innovation Scholarship',
        organization: 'Huazhong University of Science and Technology',
      },
      {
        year: '2022–2026',
        title: 'Doctoral Student Scholarship',
        organization: 'Huazhong University of Science and Technology',
      },
    ] satisfies AwardItem[],

    presentations: [
      {
        year: '2026',
        title: '3D Ultrasound Tomography Based on a Circular Active Meta-array',
        venue: 'The 5th China Metamaterials Conference (CMMC 2026), Jinan, P.R. China · May 2026',
        type: 'Oral & Poster Presentation',
      },
      {
        year: '2025',
        title: 'Metalens-based Ultrasonic Energy Harvesting and Varifocal Imaging',
        venue: '2025 National Conference on Acoustics, Nanchang, P.R. China · Nov 2025',
        type: 'Oral Presentation',
      },
      {
        year: '2025',
        title: 'EchoVision: An Ultrasonic System for Energy Harvesting and Echo Imaging',
        venue: 'International Congress on Ultrasonics (ICU 2025), Paderborn, Germany · Sep 2025',
        type: 'Poster Presentation',
      },
      {
        year: '2025',
        title: 'Efficient acoustic energy harvesting via the Phase Reversal FZP',
        venue: 'International Symposium on Nonlinear Acoustics (ISNA 2025), Nanjing, P.R. China · Jul 2025',
        type: 'Oral Presentation',
      },
      {
        year: '2024',
        title: 'Design and Optimization of Ultrathin Planar Metalens',
        venue: 'The 3rd China Metamaterials Conference (CMMC 2024), Wuzhen, P.R. China · May 2024',
        type: 'Oral Presentation',
      },
    ] satisfies PresentationItem[],

    patents: [
      {
        year: '2025',
        title: 'Device and System for Ultrasonic Energy Harvesting and Echo Imaging',
        inventorsHtml: 'Xue-Feng Zhu, <u>Zi-Bin Lin</u>, Yu-Gui Peng, Ji-Zhen Liu, and Yu Hu',
        numberInfo: 'Chinese Invention Patent, Application No. 202512027716.1',
      },
      {
        year: '2025',
        title:
          'A Method for Holographic Acoustic Field Reconstruction Based on Amplitude Modulation and Forward Optimization',
        inventorsHtml: 'Xue-Feng Zhu, Yu-Gui Peng, Long-Sheng Zeng, <u>Zi-Bin Lin</u>, and Zong-Lin Li',
        numberInfo: 'Chinese Invention Patent, Application No. 202510275237.9',
      },
      {
        year: '2022',
        title: 'A Multifunctional Portable Acoustic Device',
        inventorsHtml: 'Xue-Feng Zhu, Peng-Qi Li, Zong-Lin Li, and <u>Zi-Bin Lin</u>',
        numberInfo: 'Chinese Invention Patent, Grant No. ZL 2022 1 0651453.5 (CN115190409B)',
      },
    ] satisfies PatentItem[],

    skills: [
      {
        label: 'Simulation & Computing',
        value:
          'Multiphysics modeling (COMSOL), ultrasound simulation (k-Wave, j-Wave, Field II, Stride), metalens & acoustic front-end optimization (genetic algorithms, neural networks), beamforming & 3D image reconstruction (MATLAB, Python, Amira)',
      },
      {
        label: 'Experimental Techniques',
        value:
          'Active/passive flexible ultrasonic device & metamaterial fabrication, pulse-echo characterization (JSR DPR300), 3D hydrophone scanning & acoustic field mapping (Precision Acoustics UMS, Brüel & Kjær), pulse-sequence programming (S-Sharp Prodigy)',
      },
      {
        label: 'CAD & Visualization',
        value:
          'Mechanical CAD & 3D modeling (SolidWorks, Shapr3D, Cinema 4D), data analysis (Origin), scientific rendering & illustration (KeyShot Studio, Adobe Illustrator, Photoshop)',
      },
    ] satisfies SkillRow[],

    interests: [
      {
        label: 'Sports',
        value: 'Badminton, basketball, table tennis, swimming',
      },
      {
        label: 'Music & Media',
        value: 'Accordion, video editing, music production',
      },
    ] satisfies SkillRow[],
  },
};
