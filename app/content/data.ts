export const heroContent = {
    greeting: "👋 Привет, я",
    name: "Екатерина Ковалева",
    subtitle: "Frontend-разработчик",
    description:
        "Создаю современные веб-приложения с высокой производительностью и плавными анимациями. Превращаю идеи и дизайн в интерактивный код.",
    buttons: {
        projects: "Смотреть работы",
        contact: "Связаться",
    },
    codeWindow: {
        developer: "Екатерина",
        skills: ["React", "TypeScript", "Next.js"],
    },
};

export const aboutContent = {
    greeting: "01. Обо мне",
    name: "Екатерина Ковалева",
    subtitle: "01. Обо мне",
    description:
        "Я frontend-разработчик с 5+ годами опыта создания современных веб-приложений. Специализируюсь на React экосистеме и создании плавных пользовательских интерфейсов.",
    plaques: [
        { title: "ES6+", content: "Чистый код" },
        { title: "Git", content: "Контроль версий" },
        { title: "15+", content: "Проектов" },
        { title: "100%", content: "Внимания к деталям" },
    ],
    items: [
        {
            icon: "⚡",
            subtitle: "Оптимизация",
            description: "Быстрая загрузка и производительность",
        },
        {
            icon: "🔧",
            subtitle: "Современный стек",
            description: "React, Next.js, TypeScript",
        },
        {
            icon: "📱",
            subtitle: "Адаптивность",
            description: "Корректное отображение на всех устройствах",
        },
        {
            icon: "🧩",
            subtitle: "Компонентный подход",
            description: "Модульная архитектура и переиспользуемые компоненты",
        },
    ],
};

export const skillContent = {
    subtitle: "02. Мой стек",
    skills: [
        { icon: "⚛️", name: "React" },
        { icon: "🔷", name: "TypeScript" },
        { icon: "🎨", name: "Tailwind" },
        { icon: "📦", name: "Webpack" },
        { icon: "🐙", name: "Git" },
        { icon: "🎭", name: "Figma" },
        { icon: "🧪", name: "Jest" },
        { icon: "🚀", name: "Vite" },
        { icon: "🔄", name: "Redux" },
    ],
};

type Project = {
    title: string;
    description: string;
    img: string;
    link: string;
    gradient?: string;
    tags: string[];
};

export const projectsContent = {
    subtitle: "03. Проекты",
    projects: <Project[]>[
        {
            title: "Сайт для мастера маникюра",
            description:
                "Одностраничный сайт-визитка с современным дизайном. Сделан максимально легким и быстрым для загрузки",
            img: "/projects/1.png",
            link: "https://asimo-git.github.io/lightweight-template/",
            tags: ["JavaScript", "CSS", "Vite"],
        },
        {
            title: "Rick and Morty API Viewer",
            description:
                "Пример интерфейса для работы с открытым API. Фильтрация и поиск по персонажам.",
            img: "/projects/2.png",
            link: "https://asimo-git.github.io/rick-and-morty-task",
            tags: ["React", "JavaScript", "WebSocket"],
        },
        {
            title: "Coﬀee House",
            description:
                "Pixel Perfect верстка по макету. Двустраничный сайт с плавной прокруткой, анимациями и адаптивностью. Сделано на чистом JS и CSS.",
            img: "/projects/3.png",
            link: "https://asimo-git.github.io/coﬀee-house",
            tags: ["CSS", "JavaScript"],
        },
        {
            title: "Календарь дальней дороги",
            description:
                "Небольшой арт-проект, реализован на Next.js с использованием серверного рендеринга. Уделено внимание адаптивности и UX.",
            img: "/projects/4.png",
            link: "https://asimo-git.github.io/rick-and-morty-task",
            tags: ["React", "TypeScript", "Next.js", "Vercel", "SPA"],
        },
        {
            title: "CryptoTracker",
            description:
                "Приложение отслеживает изменения криптовалют в реальном времени. Интеграция WebSocket позволяет отображать live-данные.",
            img: "/projects/5.png",
            link: "https://crypto-tracker-asimo.vercel.app/",
            tags: [
                "React",
                "Redux Toolkit",
                "WebSocket",
                "Next.js",
                "TypeScript",
                "Vercel",
            ],
        },
        {
            title: "Арендомания",
            description: "Сайт для посуточного бронирования в России",
            img: "/projects/6.png",
            link: "https://daily-rent-of-housing-fontend-react.vercel.app/",
            tags: ["React", "Redux Toolkit", "Next.js", "TypeScript", "Vercel"],
        },
    ],
};

export const contactsContent = {
    subtitle: "04. Контакты",
    text: "Открыта для интересных проектов и предложений",

    name: {
        label: "Имя",
        placeholder: "Как к вам обращаться?",
    },
    email: {
        label: "Контакт для связи",
        placeholder: "Ваш е-мейл или телеграм",
    },
    message: {
        label: "Сообщение",
        placeholder: "Расскажите о вашем проекте...",
    },
    buttonText: "Отправить сообщение",
    successMessage: "Сообщение отправлено!",
    errorMessage: "Неизвестная ошибка :(",
};
