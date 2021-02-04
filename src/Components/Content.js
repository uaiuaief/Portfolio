export const content = {
    "pt": {
        "home-page": {
            "banner-title": "Olá, eu sou o John",
            "banner-description": "Um desenvolvedor full-stack de Curitiba-PR. Eu crio websites sob medida, ajudando pessoas a chegarem mais longe online.",
            "banner-button": "Meus Projetos",

            "section-1-title": "Projeto em Destaque",
            "section-2-title": "Meus Serviços",
            "section-2-button": "Ver Todos os Serviços",

        },

        "projects-page": {
            "banner-title": "Meus Projetos",
            "banner-description": "Pelos últimos 3 anos eu venho desenvolvendo aplicações e websites. Abaixo estão alguns dos mais recentes.",
            "preview-button": "Prévia",
            "source-button": "Código Fonte",

        },

        "services-page": {
            "banner-title": "Meus Serviços",
            "banner-description": "Tudo que eu ofereço com uma visão detalhada de cada um.",

        },

        "about-page": {
            "banner-title": "Sobre Mim",
            "banner-description": "Conheça um pouco sobre mim, quem eu sou, de onde eu venho e quais são os meus objetivos.",

            "textblock-1-title": "Quem eu sou",
            "textblock-1-paragraph1": "Meu nome é Jhonatas. Eu sou um desenvolvedor fullstack que mora em Curitiba, PR.",
            "textblock-1-paragraph2": "Eu sou apaixonado por sistemas computacionais e passo a maior parte do meu tempo desenvolvendo meus próprios projetos.",
            "textblock-1-paragraph3": "Eu acredito fortemente no potencial da tecnologia como ferramenta para transformar o mundo em um lugar melhor, e o meu objetivo é estar na linha de frente dessa transformação.",

            "textblock-2-title": "Porque trabalhar comigo?",
            "textblock-2-paragraph1": "Não tem nada que eu goste mais de fazer do que desenvolver soluções que vão melhorar a vida das pessoas.",
            "textblock-2-paragraph2": "Eu passo a maior parte do meu tempo tentando aperfeiçoar o que eu faço, e mesmo sabendo que eu nunca serei perfeito, eu faço o meu melhor para chegar perto.",
            "textblock-2-paragraph3": "Se você tem um projeto e gostaria de trabalhar comigo, entre em contato e nós podemos começar a trabalhar.",

            "contact-button": "Fale Comigo"
        },

        "contact-page": {
            "banner-title": "Fale Comigo",
            "banner-description": "Se você gostaria de falar sobre um projeto, preencha o formulário abaixo e eu irei responder dentro de 1 ou 2 dias.",

            "status-text-1": "Disponível",
            "status-text-2": "Estou aceitando novos projetos!",

            "form-name-label": "Nome",
            "form-email-label": "E-mail",
            "form-textarea-label": "Como eu posso ajudar?",
            "form-submit-button": "Enviar Mensagem"
        },

        "navbar": {
            "projects": "Projetos",
            "services": "Serviços",
            "about": "Sobre Mim",
            "contact": "Contato",
        },

        "CTA": {
            "title": "Vamos Trabalhar Juntos",
            "description": "Tem um projeto que gostaria de discutir?",
            "button": "Entre em Contato",
            "phone": "41 99958-1030"
        },

        "footer": {
            "copyright": "© 2021 John. Todos os direitos reservados."
        },

        "projects": [
            {
                "title": "Xadrez",
                "description": "Um jogo de xadrez para navegador onde você pode jogar com outro jogador ou contra o computador.",
                "image": "/icons/chess_project.png",
                "live_demo_link": "http://45.77.80.117:5000/",
                "github_link": "https://github.com/uaiuaief/chess",
                "tech_used": [
                    "Javascript / CSS3 / HTML5",
                    "Python",
                    "Flask",
                    "Sunfish API"
                ]
            },
            {
                "title": "Explorador de Países",
                "description": "Um site onde você pode aprender sobre países, sua língua, cultura e lugares para visitar.",
                "image": "/icons/country_project.png",
                "live_demo_link": "http://45.77.80.117/",
                "github_link": "https://github.com/uaiuaief/country-explorer",
                "tech_used": [
                    "Javascript / CSS3 / HTML5",
                    "Google Search API",
                    "Rest Countries API",
                ]
            },
            {
                "title": "Pellington Orgânicos",
                "description": "Um e-commerce feito em React e Django, com sistema de pagamentos Stripe integrado.",
                "image": "/icons/ecommerce_project.png",
                "live_demo_link": "https://affectionate-sammet-d8c720.netlify.app",
                "github_link": "https://github.com/uaiuaief/ecommerce-project",
                "tech_used": [
                    "Javascript / CSS3 / HTML5",
                    "Python",
                    "Django Rest Framework",
                    "React js",
                    "Stripe"
                ]
            },
        ],

        "services-provided": [
            {
                'icon': 'monitor',
                'title': "Back End",
                'description': [
                    {
                        'subtitle': 'Python',
                        'description_text': `Uma das linguagens de programação mais populares, possui uma
                        forte comunidade de desenvolvedores e uma vasta quantidade de bibliotecas e frameworks.
                        A filosofia do python permite ao desenvolvedor escrever um código simples e elegante,
                        e ao mesmo tempo eficiente e de alto desempenho. Tudo isso faz do Python a minha
                        linguagem  de programação favorita.`,
                    },
                    {
                        'subtitle': 'Django',
                        'description_text': `Django é atualmente o principal framework para desenvolvimento web
                        em Python, sendo utilizado por grandes empresas como Instagram, Mozilla e PBS.
                        Django oferece várias funcionalidades logo de início, o que permite a criação 
                        de aplicações complexas e escaláveis com muito pouco código.`
                    },
                    {
                        'subtitle': 'Django Rest Framework',
                        'description_text': `O DRF é construído em cima do Django e adiciona muitas 
                        funcionalidades que facilitam a criação de REST APIs, `
                    },
                ],
                'summary': [
                    {
                        'subtitle': 'Estável e Seguro',
                        'description_text': `Para uma aplicação ter sucesso, é necessário que ela funcione a maior parte
                         do tempo sem interrupções ou vulnerabilidades.`
                    },
                ]
            },
            {
                'icon': 'pen',
                'title': "Front End",
                'description': [
                    {
                        'subtitle': 'Javascript',
                        'description_text': `A linguagem da web, sem ela a criação de aplicações de web dinâmicas
                         seria uma tarefa praticamente impossível. `
                    },
                    {
                        'subtitle': 'React',
                        'description_text': `Websites ficam mais complexos a cada dia, e toda essa complexidade
                         teria um custo muito alto se fosse necessário renderizar tudo no back end. 
                         O React torna simples a criação de componentes reutilizáveis e o gerenciamento de estado, 
                         sendo possível criar websites dinâmicos renderizados pelo navegador, diminuindo
                         a carga do servidor e tornando a expêriencia do usuário rápida e suave.`
                    },
                    {
                        'subtitle': 'HTML / CSS',
                        'description_text': `Criar uma fundação forte para um website significa ter uma boa
                         arquitetura de HTML e CSS. Se você tem um design eu posso criar um código front end
                         para ele.`
                    },
                ],
                'summary': [
                    {
                        'subtitle': 'Rápido e Responsivo',
                        'description_text': `Todo website precisa ser criado com dois objetivos em mente:
                        Primeiro, ele precisa funcionar em todos os dispositivos. E segundo, ele precisa
                        ser o mais rápido possível.`
                    },
                ]
            },

        ]
    },

    "en": {
        "home-page": {
            "banner-title": "Hey, I'm John",
            "banner-description": "A fullstack developer who lives in Brazil. I create bespoke websites to help people go further online.",
            "banner-button": "My Projects",

            "section-1-title": "Featured Projects",
            "section-2-title": "My Services",
            "section-2-button": "View all Services",

        },

        "projects-page": {
            "banner-title": "My Projects",
            "banner-description": "For the last 3 years I've been developing applications and websites. Below are some of my favorites.",
            "preview-button": "Live Demo",
            "source-button": "Source Code",
        },

        "services-page": {
            "banner-title": "My Services",
            "banner-description": "Everything I offer with a detailed overview of each.",

        },

        "about-page": {
            "banner-title": "About Me",
            "banner-description": "Find out who I am, where I'm from and what I'm all about.",

            "textblock-1-title": "Who I Am",
            "textblock-1-paragraph1": "My name is Jonathan. I'm a fullstack developer living in Brazil.",
            "textblock-1-paragraph2": "I'm a computer systems enthusiast and spend most of my time working on my own projects.",
            "textblock-1-paragraph3": "I strongly believe in technology's potential as a tool to turn the world into a better place, my goal is to be in the frontline of this transformation.",

            "textblock-2-title": "Why Work With Me",
            "textblock-2-paragraph1": "There's nothing I like doing more than developing solutions that will change people's lives for the better.",
            "textblock-2-paragraph2": "I spend most of my time trying to perfect what I do, while I know I'll never be perfect, I do my best to come close.",
            "textblock-2-paragraph3": "If you’ve got a project you’d like to work on with me just get in touch and we can get to work!",

            "contact-button": "Contact Me"
        },

        "contact-page": {
            "banner-title": "Contact Me",
            "banner-description": "If you’d like to chat about a project please fill in the form below and I’ll get back within 1-2 days.",

            "status-text-1": "Available",
            "status-text-2": "I’m currently taking on new projects!",

            "form-name-label": "Name",
            "form-email-label": "E-mail",
            "form-textarea-label": "How can I help?",
            "form-submit-button": "Send Message"
        },

        "navbar": {
            "projects": "Projects",
            "services": "Services",
            "about": "About Me",
            "contact": "Contact",
        },

        "CTA": {
            "title": "Let's Work Together",
            "description": "Have a project you'd like to discuss?",
            "button": "Get in Touch",
            "phone": "+55 41 99958-1030"
        },

        "footer": {
            "copyright": "© 2021 John. All rights reserved."
        },

        "projects": [
            {
                "title": "Chess",
                "description": "A browser based chess game where you can play against the computer or another player.",
                "image": "/icons/chess_project.png",
                "live_demo_link": "http://45.77.80.117:5000/",
                "github_link": "https://github.com/uaiuaief/chess",
                "tech_used": [
                    "Javascript / CSS3 / HTML5",
                    "Python",
                    "Flask",
                    "Sunfish API"
                ]
            },
            {
                "title": "Country Explorer",
                "description": "A website where you can learn about countries, their language, culture and travel destinations.",
                "image": "/icons/country_project.png",
                "live_demo_link": "http://45.77.80.117/",
                "github_link": "https://github.com/uaiuaief/country-explorer",
                "tech_used": [
                    "Javascript / CSS3 / HTML5",
                    "Google Search API",
                    "Rest Countries API",
                ]
            },
            {
                "title": "Pellington Organics",
                "description": "An eCommerce built with React and Django, with an integrated Stripe payments system.",
                "image": "/icons/ecommerce_project.png",
                "live_demo_link": "https://affectionate-sammet-d8c720.netlify.app",
                "github_link": "https://github.com/uaiuaief/ecommerce-project",
                "tech_used": [
                    "Javascript / CSS3 / HTML5",
                    "Python",
                    "Django Rest Framework",
                    "React js",
                    "Stripe"
                ]
            },
        ],
        "services-provided": [
            {
                'icon': 'monitor',
                'title': "Back End",
                'description': [
                    {
                        'subtitle': 'Python',
                        'description_text': `One of the most popular programming languages, Python has a
                        big community of developers and a vast amount of libraries and frameworks.
                        Python's philosophy makes it easy for the developer to write code that's both
                        simple and high performing. All of that makes Python my favorite programming language.`,
                    },
                    {
                        'subtitle': 'Django',
                        'description_text': `Django is currently Python's most used web framework, being used
                        by big companies like Instagram, Mozilla and PBS. Django offers many functionalities
                        right out of the box, allowing the creation of complex and scalable apllications with 
                        very little code.`,
                    },
                    {
                        'subtitle': 'Django Rest Framework',
                        'description_text': `DRF is built upon Django and adds many tools to help in the creation of REST APIs.`,
                    },
                ],
                'summary': [
                    {
                        'subtitle': 'Secure and Stable',
                        'description_text': `The success of an application depends upon the creation of a back end that can run
                        without interruptions and that has no vulnerabilities.`,
                    },
                ]
            },
            {
                'icon': 'pen',
                'title': "Front End",
                'description': [
                    {
                        'subtitle': 'Javascript',
                        'description_text': `The language of the web, without it the creation of dynamic web apllications
                        would be an almost impossible task.`,
                    },
                    {
                        'subtitle': 'React',
                        'description_text': `Websites get more complex every day, and all of that complexity
                        would have a very high cost if you had to render everything in the back end.
                        React makes it easy to manage state and to create reusable components, which then
                        can be used in the creation of dynamic websites that can be rendered by the browser,
                        reducing the server's load and making the user's experience fast and smooth.
                        `,
                    },
                    {
                        'subtitle': 'HTML / CSS',
                        'description_text': `Creating a strong foundation for a website means getting the 
                        HTML and CSS architecture right. If you've got a design I can create the front-end code for it. `
                    },
                ],
                'summary': [
                    {
                        'subtitle': 'Responsive and Fast',
                        'description_text': `Every website should be built with two primary goals: Firstly, 
                        it needs to work across all devices. Secondly, it needs to be fast as possible. `
                    },
                ]
            },

        ],
    }
}