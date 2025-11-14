import { Icons } from '@/components/icons';
import { CodeIcon, HomeIcon, NotebookIcon, MailIcon, FileText } from 'lucide-react';

export const DATA = {
    name: 'Ve Sharma',
    initials: 'VS',
    url: 'https://vesharma.dev',
    location: 'Vancouver, British Columbia',
    locationLink: 'https://www.google.com/maps/place/vancouver',
    description: 'Technical Leader. Founder. Dev. Speaker. Community Builder.',
    summary: `As co-founder & CTO of Adauris, he built a B2B SaaS platform from the ground up, securing over $2M in total funding and scaling to
    serve millions of end-users/listeners. 
     \n\n All IN AI listed his last startup, Adauris, as [one of the top 100 A.I. startups in Canada](https://www.linkedin.com/posts/varun-d-sharma_incredibly-excited-to-meet-some-top-ai-minds-activity-7237554608967929856-RuFe/). 

    \n\nHis experience spans cloud architecture, full stack development, applied A.I., and
    leading high-performing teams.\nAll while navigating the competitive startup landscape with proven success,
    including acceptance into prestigious accelerator programs & being venture backed like [Morgan Stanley (and being listed on the NASDAQ in times Square!🤩)](https://www.linkedin.com/posts/varun-d-sharma_tech-startups-morganstanley-activity-7162874074875056129-sqEm/), Google for Startups, and The XX - all with 1% acceptance rates. 
    \n\nVe continues to be an ecosystem voice for developers & technical founders in groups such as Microsoft, Google Developer Groups, Vancouver.dev, the League of Innovators, and other organizations speaking on topics around A.I, Dev Tools, Cloud Infrastructure, and technical entrepreneurship around North America. 
\n\nAfter Adauris, Ve went on to be the Head of Engineering at [YGG - Yield Guild Games](https://yieldguild.io), the first & largest Web3 crypto Gaming DAO in the world that has built a ~$70M USD Treasury. 

\n\nToday, Ve is at Microsoft as a Senior Solution Engineer on the Cloud & AI team focusing on Dev Tools, working on Github Copilot & Agentic DevOps.
`,
    avatarUrl: '/me.jpeg',
    skills: [
        'System Architecture',
        'Organizational Culture',
        'Strategy',
        'Research and Development',
        'Product Development',
        'Cloud Technologies',
        'Agile Methodologies',
        'Technical Problem Solving',
        'Machine Learning',
        'Cloud Technologies',
        'DevOps',
        'FinOps',
        'React',
        'Next.js',
        'Typescript',
        'Node.js',
        'Python',
        'Postgres',
        'Docker',
        'Kubernetes',
        'Express',
        'Langchain',
        'Git',
        'Bash',
        'oh my zsh',
        'Bun.sh',
        'Terraform',
        'FinOps',
        'GCP',
        'Vertex AI',
        'Cloud Run',
        'Cloud Functions',
        'Cloud SQL',
        'Compute Engine',
        'Cloud Storage',
        'AWS',
        'Bedrock',
        'ECR',
        'ECS',
        'EC2',
        'RDS'
    ],
    navbar: [
        { href: '/', icon: HomeIcon, label: 'Home' },
        { href: 'https://medium.com/@vevarunsharma', icon: NotebookIcon, label: 'Blog' },
        { href: '#projects', icon: CodeIcon, label: 'Projects' },
        { href: 'mailto:ve@vesharma.dev', icon: MailIcon, label: 'Email' }
    ],
    contact: {
        email: 've@vesharma.dev',
        tel: '+4375807573',
        social: {
            GitHub: {
                name: 'GitHub',
                url: 'https://github.com/vevarunsharma',
                icon: Icons.github,
                navbar: true
            },
            LinkedIn: {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/vevarunsharma/',
                icon: Icons.linkedin,
                navbar: true
            },
            x: {
                name: 'x',
                url: 'https://x.com/vevarunsharma',
                icon: Icons.x,
                navbar: true
            },
            instagram: {
                name: 'Instagram',
                url: 'https://www.instagram.com/vevarunsharma/',
                icon: Icons.instagram,
                navbar: true
            }
        }
    },

    experience: [
        {
            company: 'Microsoft',
            href: 'https://azure.microsoft.com/en-us/solutions/devops',
            badges: [],
            location: 'Vancouver, British Columbia, Canada',
            title: 'Senior Solution Engineer - Cloud & AI - Dev Tools',
            logoUrl: '/logos/microsoft_logo_small.jpg',
            start: 'November 2025',
            end: 'Present',
            description: `Working on Github Copilot & Agentic DevOps. 

I work with developers to help them utilize copilot and Agentic DevOps to accelerate productivity and to build the next generation of AI applications. 

As well as working with technical executives to bring copilot to market.`
        },
        {
            company: 'YGG - Yield Guild Games',
            href: 'https://yieldguild.io',
            badges: [],
            location: 'Metaverse',
            title: 'Head of Engineering',
            logoUrl: '/logos/ygg_logo.png',
            start: 'October 2024',
            end: 'November 2025',
            description: ` Led and managed a team of 20 engineers within a 100 person org.
            
            - Oversaw technical strategy for the world's first and largest Web3 gaming DAO. Backed by a16z, Polygon Labs, Bitkraft Ventures amassing a ~$70M USD Treasury.
            
            - Increased developer throughput by 2.5x by integrating, Gemini Code Assist and using custom AI IDE rules improving automated code review & velocity.
            
            - Managed an $8.4M engineering & product budget delivering $1M in annual cost savings by leading a strategic re-organization and technical roadmap optimization.
           
            - Led the full-stack development and architecture for a decentralized app (dApp), utilizing Next.js, TypeScript, Solidity,  Thirdweb on a multi-chain environment.
           
            - Directed the Partnership Engineering team, architecting API integrations and leading the technical onboarding for key gaming and Web3 partners.
 `
        },
        {
            company: 'BlackFin Labs',
            href: 'https://blackfinlabs.co',
            badges: [],
            location: 'Vancouver, British Columbia',
            title: 'CEO & Fractional CTO',
            logoUrl: '/logos/Blackfin_labs_v2_logo_and_name.png',
            start: 'Oct 2024',
            end: 'Present',
            description: ` Functioned in a technical pre-sales and consulting capacity, advising diverse clients & startup founders on cloud adoption and AI implementation, reducing cloud spend by an average of 30% through infrastructure modernization.
            
            - Deployed open-sourced LLM models on serverless GPUs for a Healthtech startup reducing inference costs by 40% compared to proprietary APIs while meeting HIPAA compliance.
                        `
        },
        {
            company: 'Adauris',
            href: 'https://adauris.ai',
            badges: [],
            location: 'Vancouver, British Columbia',
            title: 'Senior Technical Advisor & Co-Founder',
            logoUrl: '/logos/adauris_logo_black.jpeg',
            start: 'Sept 2024',
            end: 'Present',
            description: `
           Leveraging my deep understanding of the company's technology stack and strategic direction, I provide expert guidance on technical strategy, product development, and industry trends.
           
           My focus is on supporting the technical team, fostering innovation, and contributing to the company's long-term success.
                            `
        },
        {
            company: 'Adauris',
            href: 'https://adauris.ai',
            badges: [],
            location: 'Vancouver, British Columbia',
            title: 'Chief Technology Officer & Co-Founder',
            logoUrl: '/logos/adauris_logo_black.jpeg',
            start: 'Oct 2020',
            end: 'Sept 2024',
            description: `
                Key Accomplishments:
                - Recognized as a Top 100 AI Startup in Canada (2024) by ALL IN AI.
                - Secured ($2.05M) $1.3M in VC funding + $750k R&D grants by developing investor-facing technical roadmaps and led technical due diligence with stakeholders.
                - Moved to Sr. Tech advisor from Oct 2024 - June 2025 leading up to acquisition.
            
            
                Cloud Infrastructure:
                - Architected and built a full-stack AI SaaS platform on a multi-cloud (GCP/AWS + Azure) environment, scaling to serve 10M+ end-users with a tech stack including Next.js, Chakra UI, Python, Firebase, Firestore, PostgreSQL.
                - Reduced monthly GCP & AWS costs by 33% by re-architecting stateful services to serverless functions, right sizing resources on Cloud SQL, EKS K8s
                - Served as the lead Solution Engineer for our first 100 B2B customers, partnering with their technical teams to lead Proofs-of-Concept (PoCs) and integrating our AI Audio API for customers ranging from SME to enterprise level.
            
            
                AI/ML & Model Deployment:
                - Productionized A.I. models for audio generation and optimized user listening experience, resulting in a 40% increase in user engagement.
                - Designed LLM optimization strategies for Claude & Gemini models, via  temperature controls, & few-shot learning to improve transformation accuracy⁠⁠⁠⁠​.
            
            
                System Architecture & Performance:
                - Architected RSS pipeline with optimized processing times (2-hour narrations processed in ~1 minute).
                - Architected a microservices re-architecture improving system efficiency and decreasing downtime by 25%.
                            `
        },
        {
            company: 'Morgan Stanley',
            badges: [],
            href: 'https://www.morganstanley.com/about-us/diversity/inclusive-ventures-lab',
            location: 'Toronto, Canada',
            title: 'Morgan Stanley Inclusive Venture lab',
            logoUrl: '/logos/morgan_stanley_logo.png',
            start: 'Sept 2023',
            end: 'March 2024',
            description: `Adauris was 1 of 23 companies selected from an applicant pool of 7,900 for Morgan Stanley's Inclusive Venture Lab. 
            
            The program includes both venture investment and programming support. To date, 92 companies have been included in the company. $217M in additional funding to date that companies have received after participating in the Lab. $923M combined valuation to date of companies that have participated in the Lab.`
        },
        {
            company: 'Google',
            badges: [],
            href: 'https://startup.google.com/',
            location: 'Toronto, Canada',
            title: 'Google Cloud Accelerator',
            logoUrl: '/logos/google_logo.jpg',
            start: 'April 2022',
            end: 'June 2022',
            description: `The Google Cloud Accelerator Canada is a three-month accelerator program for cloud-native Canadian SaaS or ML/AI startups. 
            
            The accelerator is designed to bring the best of Google's programs, products, people and technology to startups doing interesting work in the cloud. 
            
            In addition to cloud mentorship and technical project support, the accelerator also includes deep dives and workshops focused on product design, customer acquisition and leadership development for startup founders and leaders.`
        },
        {
            company: 'League of Innovators',
            badges: [],
            href: 'https://www.theleagueofinnovators.org/',
            location: 'Toronto, Canada',
            title: 'Advisory Committee Member - Alumni Council',
            logoUrl: '/logos/loi_logo.jpg',
            start: 'April 2022',
            end: 'Aug 2023',
            description: `As an Advisory Committee member for the League of Innovators (LOI), we give tactical and strategic input to the LOI team and it's board of directors which includes Ryan Holmes - CEO Hootsuite, Manny Padda - Founder New Avenue Capital, Michele Romanow - Dragons' Den Investor & Co-founder Clearbanc. 
            
            The advisory committee concerns itself with the core value proposition of League of Innovators for new founders and alumni alike.`
        },
        {
            company: 'XX by WeFunder',
            badges: [],
            href: 'https://markets.businessinsider.com/news/stocks/forget-silicon-valley-vcs-xx-accelerator-allows-anyone-to-invest-in-startups-fighting-coronavirus-1029438040',
            location: 'San Francisco, CA',
            title: 'The XX Accelerator',
            logoUrl: '/logos/xx_logo.jpg',
            start: 'Feb 2021',
            end: 'March 2021',
            description: `The XX is a pre-seed startup accelerator and is a collection of mentors and experts - often successful founders in their own right - who help startups. Our Lead Advisor was Daniel Ha - The Founder and CEO of Disqus.

            The XX Team is financially incentivized to help companies in the Wefunder portfolio succeed. The Lead Investor is hired by the XX team for a specific company. 
            
            The XX is a competitive accelerator with the last batch having a 1% acceptance rate.`
        },
        {
            company: 'Freelance',
            badges: [],
            href: 'https://vesharma.dev',
            location: 'Remote',
            title: 'Full Stack Software Developer',
            logoUrl: '/logos/freelance.jpeg',
            start: 'March 2020',
            end: 'October 2020',
            description: `Developed and deployed responsive web applications from conception to completion for diverse clients, utilizing React.JS, Node.JS, Django, and Python.\n\n - Designed and implemented complex backend architectures and database schemas, ensuring scalability and performance.\n\n - Collaborated closely with clients to understand their needs and translate them into effective technical solutions.`
        },
        {
            company: 'UBCMUN',
            badges: [],
            href: 'https://vesharma.dev',
            location: 'Remote',
            title: 'Director General',
            logoUrl: '/logos/ubcmun.jpeg',
            start: 'Feb 2020',
            end: 'Jan 2021',
            description: `UBCMUN is the largest and most prestigious university model United Nations conference in Western Canada. 
            
            Led and managed a staff of 20+ across 7 teams and a secretariat of 15, ensuring successful planning of the conference with over 1000 delegates.
                       
            Implemented new programs resulting in 25% higher pre-registration rates. `
        }
    ],
    education: [
        {
            school: 'The University of British Columbia ',
            href: 'https://www.ubc.ca/',
            degree: `Bachelor's degree in Political Science`,
            logoUrl: '/logos/ubc-logo.png',
            start: '2019',
            end: '2021',
            description: `Activities and Societies:
                        BizTech - Business & Technology
                        BOLT - Data Science & Business Tech Bootcamps
                        UX Hub - User Experience and Design 
                        nwPlus - Club for aspiring programmers 
                        MUNSA - Model United Nation Students' Association
`
        }
    ],
    certifications: [
        {
            name: 'Innovation Governance Program - L1  - Council of Canadian Innovators',
            href: 'https://igp.canadianinnovators.org/',
            about: `Training for board membership for high-growth firms within Canada's rapidly expanding innovation economy.`,
            logoUrl: '/logos/igp_logo.png',
            start: '2024',
            end: '2024'
        }
    ],
    projects: [
        {
            title: 'Adauris Dashboard Web App',
            href: 'https://adauris.ai',
            dates: 'Jan 2023 - Present',
            active: true,
            description: 'Turn written content into high quality audio experiences.',
            technologies: ['Next.js', 'ChalkraUI', 'Typescript', 'Firestore', 'Firebase', 'Stripe', 'GCP', 'AWS', 'Vercel', 'Railway'],
            links: [
                {
                    type: 'Website',
                    href: 'https://adauris.ai',
                    icon: <Icons.globe className="size-3" />
                },
                {
                    type: 'Source',
                    href: 'https://github.com/Ad-Auris/',
                    icon: <Icons.github className="size-3" />
                }
            ],
            image: '',
            video: 'https://storage.googleapis.com/ve-portfolio-site/ve-portfolio-main-webapp/ScreenRecording2024-07-14at12.06.32AM-ezgif.com-video-to-mp4-converter.mp4'
        },
        {
            title: 'Cloud Cost Optimization',
            href: 'https://www.linkedin.com/feed/update/urn:li:activity:7201277013758758912/',
            dates: 'Feb 2024 - May 2024',
            active: true,
            description: `How we've trimmed our Cloud Costs by $30K+ 💰 at my startup, Adauris 💸🚀 As CTO of Adauris, I'm always looking for ways to optimize our cloud infrastructure and maximize our budget.`,
            technologies: ['GCP', 'AWS', 'MongoDB', 'Firebase', 'Cloud Run', 'Cloud Functions', 'EKS', 'Kubernetes'],
            links: [
                {
                    type: 'LinkedIn Post',
                    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7201277013758758912/',
                    icon: <Icons.linkedin className="size-3" />
                },
                {
                    type: 'Source',
                    href: 'https://github.com/Ad-Auris/',
                    icon: <Icons.github className="size-3" />
                }
            ],
            image: '',
            video: 'https://cdn.llm.report/openai-demo.mp4'
        },
        {
            title: 'BlackFinLabs',
            href: 'https://blackfinlabs.co',
            dates: 'Sept 2024 - Present',
            active: true,
            description:
                "A Landing page for BlackFin Labs' GCP Cloud Consulting which includes services such as Cost Optimization & A.I implementation.",
            technologies: ['Next.js', 'MagicUI', 'Typescript', 'Vercel', 'GCP'],
            links: [
                {
                    type: 'Website',
                    href: 'https://blackfinlabs.co',
                    icon: <Icons.globe className="size-3" />
                },
                {
                    type: 'Source',
                    href: 'https://github.com/vesharma-dev/blackfinlabs-landing-page',
                    icon: <Icons.github className="size-3" />
                }
            ],
            image: '',
            video: 'https://storage.googleapis.com/ve-portfolio-site/ve-portfolio-main-webapp/blackfinlabs-landing-page.mov'
        }
    ],
    activities: [
        {
            title: 'Google AI Connect - Public Policy Roundtable with Government - Pannelist',
            dates: 'June, 2025',
            location: 'Toronot, ON, Canada 🇨🇦',
            description:
                "Another opportunity at Google's Canadian 🇨🇦 HQ for the Google AI Connect roundtable during TorontoTech Week! \n\n We dove deep into the future of AI in Canada with fellow founders, ecosystem builders, and government representatives like Federal MP Karim Bardeesy (Secretary to the Minister of Industry). ",
            image: '/logos/google_logo.png',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7346262801125953536/'
                }
            ]
        },
        {
            title: 'Google AI Connect - Public Policy Roundtable - Pannelist',
            dates: 'May, 2025',
            location: 'Vancouver, BC, Canada 🇨🇦',
            description:
                'I had the privilege 🙏 to contribute to discussions on AI policy & regulation with the Google Public Policy team and local BC founders. \n\n My dual background as a CTO of an AI startup, combined with my Political Science degree, offers a unique perspective as we explore how to foster a more equitable and innovative society for all through responsible AI. ',
            image: '/logos/google_logo.png',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7333118544026509312/'
                }
            ]
        },
        {
            title: 'Google i/o - Gemini Product Roundtable with the Gemini Deepmind Team',
            dates: 'May 2025',
            location: 'Sunnyvale, CA 🇺🇸',
            description: `Product Roundtable with Google's DeepMind team to discuss the Gemini models, and how to improve them, and sharing technical and product feedback.`,
            image: '/logos/google_io_logo_2024.jpg',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://io.google/2025/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7331030327135490048/'
                }
            ]
        },
        {
            title: 'Vancouver.dev - AI & RAG panel - Speaker ',
            dates: 'March 2025',
            location: 'Vancouver, BC, Canada 🇨🇦',
            description: `Spoke on a panel with other season AI folks to discuss how to strategize with AI and RAG, when and when not to use it, and taming LLM & RAG Costs.`,
            image: '/logos/vancouver-dev-logo.png',
            links: [
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7323330341627138049/'
                }
            ]
        },
        {
            title: 'Google for Startups Accelerator: Demo Day Sizzle Video 🎬',
            dates: 'Dec 5th, 2024',
            location: 'Toronto, Ontario 🇨🇦',
            description:
                'Attended the Google Demo Day for the Winter Canada Canada cohort as an Alumni buddy! I was able to share my experience via the Google sizzle video!',
            image: '/logos/gfs_logo.png',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'YouTube Video',
                    icon: <Icons.youtube className="h-4 w-4" />,
                    href: 'https://www.youtube.com/watch?v=aw9Xi6nILRM'
                }
            ]
        },
        {
            title: 'Google Developer Fest - Burnaby - Speaker',
            dates: 'Nov 30, 2024',
            location: 'Vancouver, British Columbia 🇨🇦',
            description: 'I hosted a V2 session on AI cost optimization, specifically, LLM + tokenization costs 💰 🤑!',
            image: '/logos/gdsc-logo.png',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/gdgburnaby_devfest2024-aioptimized-llm-activity-7258608425352273920-FPGm'
                }
            ]
        },
        {
            title: 'Google for Startups Alumni Summit - Panelist',
            dates: 'Nov 20 - 22, 2024',
            location: 'Spruce Goose Hangar in Playa Vista, California 🇺🇸',
            description:
                'I attended the inaugural Google for startups alumni summit, and was a panelist on the Airship discussing the topic of "Generative AI Track -  AI-Powered Cost Optimization: Strategies for Efficiency and Success"',
            image: '/logos/gfs_logo.png',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'Google For Startups Alumni Event Page',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://rsvp.withgoogle.com/events/alumni_summit_2024'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_google-startups-soogler-activity-7267246367767486464-liTh'
                }
            ]
        },

        {
            title: 'Vancouver AI Summit <> GDG YVR - Speaker',
            dates: 'Nov 1-2, 2024',
            location: 'Vancouver, British Columbia 🇨🇦',
            description:
                'I hosted a session on the main stage tackling AI cost optimization, specifically, LLM + tokenization costs 💰 🤑, which can be a major hurdle 🔥 for growth stage startups and developers!',
            image: '/logos/gdsc-logo.png',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_ai-aicostoptimization-gemini-activity-7259265437861859329-AUh0'
                }
            ]
        },
        {
            title: 'Google AI Connect - Pannelist',
            dates: 'Oct 3rd, 2024',
            location: 'Toronto, Ontario 🇨🇦',
            description:
                'I had the opportunity to discuss AI & tech public policy at an exclusive roundtable of 10 folks at the Google 🇨🇦 HQ with Google executives, top AI startup founders, and other ecosystem representatives such as the founder of Elevate. This is a personal favourite because I was able to combine my political science and computer science background together!',
            image: '/logos/gfs_logo.png',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_tech-ai-publicpolicy-activity-7249137943204798464-LBX3'
                }
            ]
        },
        {
            title: 'League Of Innovators Labs - Making the Most of Founder Communities - Founder Panel #1 - Ve (Varun) Sharma',
            dates: 'Oct, 1st, 2024',
            location: 'Toronto, Canada 🇨🇦',
            description:
                'As an avid LOI alumni I gave a presentation and fireside chat with my fellow speakers for how the recent LOI Labs Batch 13 cohort can maximize their time in both the Labs program and founder communities as a whole.',
            image: '/logos/loi_logo.jpg',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'LOI Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://www.theleagueofinnovators.org/'
                }
            ]
        },
        {
            title: 'Elevate Conference - Google Sponsored Attendee',
            dates: 'Oct, 1-4, 2024',
            location: 'Toronto, Canada 🇨🇦',
            description:
                'I had the opportunity to connect with world-class innovators, industry leaders, and the tech ecosystem which shine a global spotlight on Canada’s tech and innovation ecosystem.',
            image: '/logos/elevate_festival_logo_white.jpg',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'Elevate Festival Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://elevatefestival.ca/'
                }
            ]
        },
        {
            title: "ALL IN A.I. - Canada's Top 100 A.I. Startups - Delegate",
            dates: 'Sept 11th-12th, 2024',
            location: 'Montreal, Quebec 🇨🇦',
            description:
                "I represented Adauris as one of Canada's top 100 A.I. startups - I had the opportunity to connect with folks from a pool of 3,000 industry participants, including more than 600 members of international delegations from 40 different countries.",
            image: '/logos/all_in_canada_logo.jpeg',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'ALL IN A.I. Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://allinevent.ai/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7237554608967929856/'
                }
            ]
        },
        {
            title: 'Google for Startups - Alumni to Alumni: Cloud Cost Cutting Secrets from Ve (Varun) & Dmitriy - Speaker',
            dates: 'July 17th, 2024',
            location: 'Toronto, Ontario 🇨🇦',
            description:
                'I shared my expertise on slashing our cloud costs and shared optimization and scaling strategies for a room of 55 CTOs and CEOs.',
            image: '/logos/gfs_logo.png',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'Google For Startups Event Page',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://rsvp.withgoogle.com/events/na-alumni-event-google-cloud-cost'
                },
                {
                    title: 'Recorded Video',
                    icon: <Icons.googleDrive className="h-4 w-4" />,
                    href: 'https://drive.google.com/file/d/1XM4t3dCLw2fkCan47qAtFH_6AmRybLMN/view'
                }
            ]
        },
        {
            title: 'Startupfest - Speaker',
            dates: 'July, 2024',
            location: 'Montreal, Quebec 🇨🇦',
            description: 'I pitched my startup, Adauris, at Startupfest Montreal on the main stage!',
            image: '/logos/startupfest_logo.png',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://www.startupfest.com/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.youtube className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_startups-startupfest-ctos-activity-7218621906097254402-Tc5E'
                },
                {
                    title: 'YouTube Video',
                    icon: <Icons.youtube className="h-4 w-4" />,
                    href: 'https://www.youtube.com/watch?v=mNe7ATi_HX4'
                }
            ]
        },
        ,
        {
            title: 'Google for Startups Accelerator: Canada Day 🍁 - Speaker',
            dates: 'June 27th, 2024',
            location: 'Toronto, Ontario 🇨🇦',
            description:
                'Spoke at Google Canada HQ in Toronto about my experience in the Google For Startup Program. Joined by Ashley Francisco, Head of Accelerator & Startup Ecosystem, Americas.',
            image: '/logos/gfs_logo.png',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'Google For Startups Event Page',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://rsvp.withgoogle.com/events/gfsa-canada-day-in-the-office/sessions/google-for-startups-accelerator-canada-day'
                },
                {
                    title: 'YouTube Video',
                    icon: <Icons.youtube className="h-4 w-4" />,
                    href: 'https://youtu.be/8yzOpUHH78c?t=2557'
                }
            ]
        },
        {
            title: 'Men in Tech Panel - Vancouver Startup Week - Speaker',
            dates: 'May 2024',
            location: 'Vancouver, British Columbia 🇨🇦',
            description:
                'Represented Google For Startups with tryToast.ca to highlight issues in tech with gender discrepancies and help be an ally for women in tech.',
            image: '/logos/gfs_logo.png',
            links: [
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/aprilhicke_men-in-tech-that-was-the-title-of-the-toast-activity-7204337122210717697-dgxw'
                }
            ]
        },
        {
            title: 'Google i/o Pitch at Google HQ - Speaker',
            dates: 'May 2024',
            location: 'Mountain View, CA 🇺🇸',
            description: `Pitched my startup, Adauris at Google HQ in Mountain View during Google I/O!
                            ⚡️ 60 seconds to make an impact, and what an audience – Google VPs, PMs, and fellow Google for Startups alumni. Truly an honor.`,
            image: '/logos/google_logo.jpg',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://io.google/2024/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_googleio-ai-startups-activity-7199103314192420864-QaNP'
                }
            ]
        },
        {
            title: 'Google i/o - Attendee',
            dates: 'May 2024',
            location: 'Mountain View, CA 🇺🇸',
            description: `Google's annual developer conference. Learned from the top Google experts on how to use the new A.I models Gemini 1.5, Gemma 2, Firebase GenKit. Learned on how to best use new technologies from google ranging from A.I., Chrome, Browser, Firebase, and the Cloud. `,
            image: '/logos/google_io_logo_2024.jpg',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://io.google/2024/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/ashley-francisco-51484847_googleio-community-accelerator-ugcPost-7196929271649476609-9voN'
                }
            ]
        },
        {
            title: 'Google Cloud Next - Attendee',
            dates: 'April 2024',
            location: 'Las Vegas, Nevada 🇺🇸',
            description: `Attended Google Cloud Next. I attended sessions and learned from Google's top experts on how to improve AI application architecture, develop and deploy them on Google Cloud Platform (GCP), and manage infrastructure for optimized workload management. Additionally, I gained insights into enterprise technology stack building.`,
            image: '/logos/google_cloud_logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://cloud.withgoogle.com/next/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_googlecloudnext-googlecloud-google-activity-7185622947385020416-_Kh_'
                }
            ]
        },
        {
            title: 'TKS Moonshots - Judge',
            dates: 'April 2024',
            location: 'Vancouver, British Columbia 🇨🇦',
            description:
                'Judged a TKS demo day for their 2024 cohort. The world’s top global accelerator for teens. TKS is a 10-month global innovation program for ambitious high school students ages 13-17.',
            image: '/logos/tks_logo.jpg',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://www.tks.world/'
                }
            ]
        },
        {
            title: 'Venture for Canada Panel - Speaker',
            dates: 'February 2024',
            location: 'Vancouver, British Columbia 🇨🇦',
            description:
                'I spoke on a pannel about the founder experience, how to get started, and failures made along the way to a group of young ambitious students. Venture for Canada is a national charity that links interns and recent grads to paid opportunities at Canadian startups and small businesses.',
            image: '/logos/venture_for_canada_logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://ventureforcanada.ca/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7175604698563903488/'
                }
            ]
        },
        {
            title: 'UBC Imprint Conference - Speaker',
            dates: 'January 2024',
            location: 'Vancouver, British Columbia 🇨🇦',
            description:
                "Shared the journey of entrepreneurship as a student starting my own company while at university myself to an audience of business & marketing students. UBC Imprint Conference is UBC Sauder Business School's marketing conference. ",
            image: '/logos/ubcimprint_logo.jpeg',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://www.ubcimprint.com/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_entrepreneurship-startups-entrepreneurship-activity-7160325850276474881-NK1Q'
                }
            ]
        },
        {
            title: 'Google Developer Student Group - UBC - Speaker',
            dates: 'January 2024',
            location: 'Vancouver, British Columbia 🇨🇦',
            description:
                '💭🔥 Fireside Chat Session. I talked about my journey as a founder and CTO, and ways to become an entrepreneur, even as a student. ',
            image: '/logos/gdsc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://gdsc.community.dev/the-university-of-british-columbia-vancouver-canada/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/briantkho_the-long-awaited-devfest-canada-2023-ubc-activity-7137276460444127232-oxFv'
                }
            ]
        },

        {
            title: 'Google Developer Fest - Burnaby - Speaker',
            dates: 'January 2024',
            location: 'Vancouver, British Columbia 🇨🇦',
            description: `I was part of an awesome panel discussion on "Conscious Leadership: How Can We Support Gender Equality in Tech. I was on this panel with: 🌟Dean Guest - Principal Managing Partner @ Workday, 🌟 Edmund Lee - Senior Technology Manager @ lululemon, 🌟 Martin Wulff - Senior Manager II @ Electronic Arts (EA)`,
            image: '/logos/gdsc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://gdg.community.dev/gdg-burnaby/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/gdgburnaby_consciousleadership-genderequalityintech-activity-7131472572017246210-Qda1'
                }
            ]
        },
        {
            title: 'Google Developer Fest - Vancouver - Speaker',
            dates: 'Februrary 2024',
            location: 'Vancouver, British Columbia 🇨🇦',
            description: `Topic: How to go from 0-100,000 end users per month. The art of moving fast and scaling well with GCP. I discussed strategies for startups to move fast and scale effectively on Google Cloud Platform (GCP).`,
            image: '/logos/gdsc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://gdg.community.dev/gdg-vancouver/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_gcp-startups-cloudscaling-activity-7132450700621479936-9nZE'
                }
            ]
        },
        {
            title: 'UBC The Art Entrepreneurship 2023 - Speaker',
            dates: 'November 2023',
            location: 'Vancouver, British Columbia 🇨🇦',
            description: `I spoke to UBC students about how to get into entrepreneurship as an arts student, and how to break into tech as an arts student.`,
            image: '/logos/ubc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://www.ubc.ca/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_ubc-entrepreneurship-tech-activity-7125569639262150656-KAuW'
                }
            ]
        },
        {
            title: 'Google Cloud Next - Attendee',
            dates: 'August 2023',
            location: 'San Francisco, CA 🇺🇸',
            description: `Attended Google Cloud Next and learned about bleeding edge technology in the cloud & AI. This includes early access and workshops on Vertex AI, Model Garden, and a first peak at GCP TPUs.`,
            image: '/logos/google_cloud_logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://cloud.withgoogle.com/next/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_i-just-got-back-from-google-cloud-next-23-activity-7104888107606446080-REWr'
                }
            ]
        },
        {
            title: 'Google Developer Fest - Vancouver - Speaker',
            dates: 'October 2023',
            location: 'Vancouver, British Columbia 🇨🇦',
            description: `I had the opportunity to speak at Google i/o Vancouver! 
                🔥 My topic: Cracking the Code: Selling Your AI Startup's MVP Without Writing a Line of Code. 
                During the event, I shared our journey of selling our very first A.I.-based SaaS product to the Central Bank of India - and the best part? We achieved this without writing a single line of code! 🚀 `,
            image: '/logos/gdsc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://gdg.community.dev/gdg-vancouver/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_googleiovancouver-audio-google-activity-7089268047030423552-77mW'
                }
            ]
        },
        {
            title: `Collision Conf - ”Is 'Founder' in Your Future? A Candid Conversation with Some of Canada's Leading Youth Entrepreneurs"`,
            dates: 'October 2023',
            location: 'Toronto, ON 🇨🇦',
            description: `I spoke to an audience of young ambitious individuals who wanted to learn more about how to get started as a founder, what the journey has looked like, and the pitfalls to look out for (and the exciting moments!).   `,
            image: '/logos/collision_logo.jpg',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://vancouver.websummit.com/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/maxwellnicholson_it-was-a-pleasure-speaking-at-collision-conf-activity-7081770174739087361-hmbx'
                }
            ]
        },
        {
            title: 'Google Developer Student Group - Delft Technical University - Speaker',
            dates: 'March 2023',
            location: 'Delft, Netherlands 🇳🇱',
            description: 'Fireside 🔥 chat on going from campus to company! How to Launch your startup out of university.',
            image: '/logos/gdsc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://dscdelft.nl/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_google-developers-startups-activity-7056707018111209472-XQjR'
                }
            ]
        },
        {
            title: 'Google Developer Fest - Vancouver - Speaker',
            dates: 'November 2022',
            location: 'Vancouver, British Columbia 🇨🇦',
            description: `I had the opportunity being a speaker at @googledevs fest Vancouver!
                            My topic was How to raise your first million💰 as an early stage startup 🚀!`,
            image: '/logos/gdsc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://gdg.community.dev/gdg-vancouver/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_google-googledevelopers-googledevfest2022-activity-7000581341754912768-IpV9'
                }
            ]
        }
    ],
    newsArticles: [
        {
            title: `Get coding help from Gemini Code Assist — now for free`,
            href: 'https://blog.google/intl/en-ca/products/cloud/get-coding-help-from-gemini-code-assist-now-for-free/',
            dates: 'February 25, 2025',
            active: true,
            description: `Google Cloud metions how Ve, Sr. Tech Advisor and Head of Engineering respectively at both Adauris and Yield Guild Games, how Gemini Code Assist has dramatically accelerated thier development cycles.`,
            categories: ['Cloud'],
            links: [
                {
                    type: 'Google Blog',
                    href: 'https://blog.google/intl/en-ca/products/cloud/get-coding-help-from-gemini-code-assist-now-for-free/',
                    icon: <Icons.globe className="size-3" />
                }
            ],
            image: '/articles/google_cloud.jpeg',
            video: ''
        },
        {
            title: `Canada's Top 100 A.I Startups selected by ALL IN`,
            href: 'https://www.linkedin.com/posts/varun-d-sharma_incredibly-excited-to-meet-some-top-ai-minds-activity-7237554608967929856-RuFe',
            dates: 'September 8, 2024',
            active: true,
            description: `"Adauris selected as one of the top 100 A.I startups in Canada. ALL IN is The most important event dedicated to Canadian AI"`,
            categories: ['ALL IN'],
            links: [
                {
                    type: 'LinkedIn Post',
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_incredibly-excited-to-meet-some-top-ai-minds-activity-7237554608967929856-RuFe',
                    icon: <Icons.linkedin className="size-3" />
                }
            ],
            image: '/articles/top100_allin.jpeg',
            video: ''
        },
        {
            title: 'Congratulations to our spring 2024 IGP graduates!"',
            href: 'https://www.linkedin.com/posts/varun-d-sharma_igp-innovationgovernanceprogram-board-activity-7205987234024534016-YCrt',
            dates: 'June 12, 2024',
            active: true,
            description: `"CCI's Innovation Governance Program equips Canada's current and future business leaders with the tools and experiences they need to help our country's fastest growing companies navigate the intangible economy and scale up globally."`,
            categories: ['The Globe And Mail'],
            links: [
                {
                    type: 'LinkedIn Post',
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_igp-innovationgovernanceprogram-board-activity-7205987234024534016-YCrt',
                    icon: <Icons.linkedin className="size-3" />
                }
            ],
            image: '/articles/globe_and_mail_igpp.jpeg',
            video: ''
        },

        {
            title: 'Watchlist: 10 Vancouver startups set to rocket in 2024',
            href: 'https://vantechjournal.com/p/10-startups-watchlist-2024',
            dates: 'January 08, 2024',
            active: true,
            description: `"Whether you’re an investor, jobseeker, or local tech enthusiast, find out who to have your eye on in the coming year."`,
            categories: ['Vancouver Tech Journal'],
            links: [
                {
                    type: 'News Article Link',
                    href: 'https://vantechjournal.com/p/10-startups-watchlist-2024',
                    icon: <Icons.globe className="size-3" />
                },
                {
                    type: 'LinkedIn Post',
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_watchlist-10-vancouver-startups-set-activity-7152738467494481920-dpsJ/',
                    icon: <Icons.linkedin className="size-3" />
                }
            ],
            image: '/articles/vtj_top_10.png',
            video: ''
        },

        {
            title: 'Adauris, got featured on the NASDAQ in Times Square!"',
            href: 'https://www.linkedin.com/posts/varun-d-sharma_tech-startups-morganstanley-activity-7162874074875056129-sqEm?utm_source=share&utm_medium=member_desktop',
            dates: 'February 8, 2024',
            active: true,
            description: `"Adauris was features on the main NASDAQ billboard in Times Square, New York City."`,
            categories: ['NASDAQ'],
            links: [
                {
                    type: 'LinkedIn Post',
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_tech-startups-morganstanley-activity-7162874074875056129-sqEm?utm_source=share&utm_medium=member_desktop',
                    icon: <Icons.linkedin className="size-3" />
                }
            ],
            image: '/articles/adauris_timessquare.jpeg',
            video: ''
        },
        {
            title: 'Transformational or overhyped? How these geeks at Seattle’s giant ‘Founders Bash’ think about AI',
            href: 'https://www.geekwire.com/2023/transformational-or-overhyped-how-these-geeks-at-seattles-giant-founders-bash-are-thinking-about-ai/',
            dates: 'September 15, 2023',
            active: true,
            description: `"If you were looking for proof that Seattle is an AI hub, you would have found ample evidence on Thursday night at Block 41 in downtown. More than 1,000 entrepreneurs, investors and tech leaders gathered for Founders Bash 2023, a massive meet-up celebrating the region’s innovation sector."`,
            categories: ['GeekWire'],
            links: [
                {
                    type: 'News Article Link',
                    href: 'https://www.geekwire.com/2023/transformational-or-overhyped-how-these-geeks-at-seattles-giant-founders-bash-are-thinking-about-ai/',
                    icon: <Icons.globe className="size-3" />
                },
                {
                    type: 'LinkedIn Post',
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_i-was-featured-on-geekwire-as-a-activity-7117546495330942976-xIwi',
                    icon: <Icons.linkedin className="size-3" />
                }
            ],
            image: '/articles/geekwire_ve.jpeg',
            video: ''
        },

        {
            title: 'Adauris chosen for Morgan Stanley’s Inclusive Ventures Labs',
            href: 'https://vantechjournal.com/p/adauris-chosen-for-morgan-stanleys',
            dates: 'September 12, 2023',
            active: true,
            description: `"Adauris, a Vancouver-based startup that helps digital publications convert their articles into high-quality audio, has been selected for Morgan Stanely’s prestigious accelerator program, the Inclusive Ventures Lab. The company is one of just 23 businesses chosen from across North America, Europe, the Middle East, and Africa, from a pool of more than 7,900 applicants."`,
            categories: ['Vancouver Tech Journal'],
            links: [
                {
                    type: 'News Article Link',
                    href: 'https://vantechjournal.com/p/adauris-chosen-for-morgan-stanleys',
                    icon: <Icons.globe className="size-3" />
                },
                {
                    type: 'LinkedIn Post',
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_i-was-featured-on-geekwire-as-a-activity-7117546495330942976-xIwi',
                    icon: <Icons.linkedin className="size-3" />
                }
            ],
            image: '/articles/ms_vtj.png',
            video: ''
        },
        {
            title: 'Morgan Stanley Expands Global Inclusive Ventures Lab with Largest Single Cohort of 23 Companies',
            href: 'https://financialpost.com/pmn/business-wire-news-releases-pmn/morgan-stanley-expands-global-inclusive-ventures-lab-with-largest-single-cohort-of-23-companies',
            dates: 'September 12, 2023',
            active: true,
            description: `"Chosen from over 7,900 applicants – more than three times last year’s pool – the selected startups represent a range of disruptive technologies in industries including healthcare, sustainable solutions, customer service, supply chain, recruiting and cybersecurity. Companies in the cohort receive a $250,000 investment (£250,000 in EMEA) from Morgan Stanley."`,
            categories: ['Finanical Post'],
            links: [
                {
                    type: 'News Article Link',
                    href: 'https://financialpost.com/pmn/business-wire-news-releases-pmn/morgan-stanley-expands-global-inclusive-ventures-lab-with-largest-single-cohort-of-23-companies',
                    icon: <Icons.globe className="size-3" />
                }
            ],
            image: '/articles/financial_post_ms.png',
            video: ''
        },
        {
            title: `TECHTO's Canadian Rocketships`,
            href: 'https://www.techto.org/rocketships',
            dates: 'August 10, 2022',
            active: true,
            description: `"We’re proud to bring you The 2022 Rocketships List. This list was compiled by Founders, Angels, Entrepreneurs and Canadian Tech Community Members. More than 300 names were submitted, and these were the final selections."`,
            categories: ['TechTO'],
            links: [
                {
                    type: 'News Article Link',
                    href: 'https://www.techto.org/rocketships',
                    icon: <Icons.globe className="size-3" />
                }
            ],
            image: '/articles/tech_to_rocketships.jpeg',
            video: ''
        },

        {
            title: 'Ad Auris selected for Google’s Cloud Accelerator Canada program',
            href: 'https://vantechjournal.com/p/ad-auris-google-cloud',
            dates: 'April 08, 2022',
            active: true,
            description: `"The audio creation platform joins 10 other Canadian startups in Google’s second inaugural cohort. Google recently announced the 2022 cohort for its Cloud Accelerator Canada program. Among the batch is Vancouver’s Ad Auris, a platform that helps digital publications to convert their written work into high-quality audio."`,
            categories: ['Vancouver Tech Journal'],
            links: [
                {
                    type: 'News Article Link',
                    href: 'https://vantechjournal.com/p/ad-auris-google-cloud',
                    icon: <Icons.globe className="size-3" />
                }
            ],
            image: '/articles/ltv_top_10.png',
            video: ''
        },
        {
            title: 'Introducing our new cohort of startups for the 2022 Google Cloud Accelerator Canada',
            href: 'https://cloud.google.com/blog/topics/startups/google-cloud-announces-startups-for-canada-accelerator-cohort',
            dates: 'March 22, 2022',
            active: true,
            description: `"Today, we’re pleased to announce a new class of groundbreaking startups for the Google Cloud Accelerator Canada. This 10-week virtual accelerator brings the best of Google's programs, products, people and technology to startups doing interesting work in the cloud."`,
            categories: ['Google Cloud'],
            links: [
                {
                    type: 'News Article Link',
                    href: 'https://cloud.google.com/blog/topics/startups/google-cloud-announces-startups-for-canada-accelerator-cohort',
                    icon: <Icons.globe className="size-3" />
                }
            ],
            image: '/articles/gfs_2022.jpg',
            video: ''
        },

        {
            title: '46 Top Audio Startups and Companies in Canada',
            href: 'https://beststartup.ca/46-top-audio-startups-and-companies-in-canada/',
            dates: 'August 7, 2021',
            active: true,
            description:
                'Adauris listed in the top 46 audio companies in Canada. Best Startups Canada chose startups innovating in the Audio industry and picked companies across the size spectrum from cutting edge startups to established brands.',
            categories: ['Best Startup Canada'],
            links: [
                {
                    type: 'News Article Link',
                    href: 'https://beststartup.ca/46-top-audio-startups-and-companies-in-canada/',
                    icon: <Icons.globe className="size-3" />
                }
            ],
            image: '/articles/best_canadian_startups.png',
            video: ''
        },
        {
            title: 'New York VC - Top 50 Seed/Series A Companies 2021',
            href: 'https://www.vcnet.nyc/nyc-top-50/january-2021',
            dates: 'Jan 2021',
            active: true,
            description:
                'Adauris listed  in NYC Top 50 Seed/Series A Companies. The Selection Committee consists of current and former VCs, angel investors, exited entrepreneurs, and Fortune 500 employees in M&A roles. ',
            categories: ['New York VC'],
            links: [
                {
                    type: 'News Article Link',
                    href: 'https://www.vcnet.nyc/nyc-top-50/january-2021',
                    icon: <Icons.globe className="size-3" />
                }
            ],
            image: '/articles/ny_vc_network.png',
            video: ''
        }
    ],
    thoughtLeadership: [
        {
            title: 'Frequent speaker & panelist',
            description:
                'Presented at 40+ tech events, including Google I/O, Collision Conf, and Google Developer Fests, addressing developer and leadership audiences.'
        },
        {
            title: 'AI Policy Recommendations',
            description:
                'Collaborated with Google Public Policy team to present AI policy recommendations to government officials and Google executives.'
        },
        {
            title: 'Cloud Cost-Optimization Workshops',
            description: 'Co-hosted workshops with Google For Startups for 55 Seed-Series A+ CEOs & CTOs.'
        },
        {
            title: 'Google DeepMind Gemini Program',
            description: 'Provided technical feedback to shape product development and AI safety of GDM models.'
        }
    ]
} as const;
