export const content = {
    "pt": {
        "home-page": {
            "banner-title": "Olá, eu sou o John",
            "banner-description": "Um desenvolvedor full-stack de Curitiba-PR. Eu crio websites sob medida, ajudando pessoas a chegarem mais longe online.",
            "banner-button": "Meus Projetos.",

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
            "textblock-2-paragraph2": "Eu passo a maior parte do meu tempo tentando aperfeiçoar o que eu faço, e mesmo sabendo que eu nunca serei perfeito, eu vou fazer o meu melhor para chegar perto.",
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
                "description": "Um jogo de xadrez no navegador onde você pode jogar com outro jogador ou contra o computador.",
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
                "description": "Um site onde você pode aprender sobre novos países, sua língua, cultura e lugares para visitar.",
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
                "title": "E-commerce",
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
                         para ele`
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
        "projects-page": {
            "banner-title": "My Projects",
            "banner-description": "Projects banner en",
            "preview-button": "Live Demo",
            "source-button": "Source Code",
        },

        "footer": {
            "copyright": "© 2021 John. All rights reserved."
        },

        "projects": [
            {
                "title": "Xadrez",
                "description": "Um jogo de xadrez no navegador onde você pode jogar com outro jogador ou contra o computador.",
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
                "description": "Um site onde você pode aprender sobre novos países, sua língua, cultura e lugares para visitar.",
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
                "title": "E-commerce",
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
                'icon': 'pen',
                'title': "Web Design",
                'description': [
                    {
                        'subtitle': 'User Focused',
                        'description_text': `A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website.`
                    },
                    {
                        'subtitle': 'eCommerce',
                        'description_text': `Creating a good online store can be hard. Over the years I've learned the best ways to design stores that sell products and provide real value to customers.`
                    },
                    {
                        'subtitle': 'Application UI',
                        'description_text': `The user interface of an application, whether it's mobile or desktop, can make or break a business. Getting the interface right and most importantly of all, making it easy to navigate, are the keys to a successful app.`
                    },
                ],
                'summary': [
                    {
                        'subtitle': 'User Focused',
                        'description_text': `A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website.`
                    },
                ]
            },
            {
                'icon': 'monitor',
                'title': "Web Development",
                'description': [
                    {
                        'subtitle': 'HTML / CSS',
                        'description_text': `Creating a strong foundation for a website means getting the HTML and CSS architecture right. If you've got a design I can create the front end code for it. `
                    },
                    {
                        'subtitle': 'WordPress',
                        'description_text': `Almost all of the websites I make are done using WordPress and the reason is simple: It just works. You can easily update every piece of content, turn sections on or off and so much more. `
                    },
                    {
                        'subtitle': 'Performance',
                        'description_text': `Having a fast website is key to keeping people around which ultimately converts them into customers. There are a myriad of techniques involved in making a fast website, all of which I've spent years learning. I build these techniques into every site I code and can also offer this as a standalone service for existing websites. `
                    },
                ],
                'summary': [
                    {
                        'subtitle': 'Responsive and Fast',
                        'description_text': `Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible. `
                    },
                ]
            },
        ]
    }
}