import { FiZap, FiTool, FiSmartphone, FiLayers } from "react-icons/fi";
import {
    FaReact,
    FaGitAlt,
    FaFigma,
    FaGithub,
    FaTelegramPlane,
} from "react-icons/fa";

import {
    SiTypescript,
    SiTailwindcss,
    SiWebpack,
    SiJest,
    SiVite,
    SiRedux,
    SiNextdotjs,
    SiEslint,
    SiVercel,
} from "react-icons/si";

import { FiGlobe, FiActivity, FiMonitor } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";

export const navLinks = [
    { href: "#about", label: "Обо мне" },
    { href: "#skills", label: "Навыки" },
    { href: "#projects", label: "Примеры работ" },
    { href: "#contact", label: "Контакты" },
];

export const heroContent = {
    greeting: "Привет, я",
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
        "Я - frontend-разработчик с коммерческим опытом создания современных веб-приложений. Специализируюсь на React экосистеме и создании плавных пользовательских интерфейсов. Мой опыт включает как разработку проектов с нуля (greenfield), так и поддержку легаси-кода с последующим рефакторингом. Легко интегрируюсь в распределенные команды, следую Git-флоу, провожу код-ревью и пишу понятную документацию. Владею английским на уровне B2 для чтения технической литературы и переписки. Умею не только реализовать дизайн из Figma «пиксель в пиксель», но и предложить улучшения для повышения удобства и доступности.",
    plaques: [
        { title: "ES6+", content: "Чистый код" },
        { title: "Git", content: "Контроль версий" },
        { title: "15+", content: "Проектов" },
        { title: "100%", content: "Внимания к деталям" },
    ],
    items: [
        {
            icon: FiZap,
            subtitle: "Оптимизация",
            description: "Быстрая загрузка и производительность",
        },
        {
            icon: FiTool,
            subtitle: "Современный стек",
            description: "React, Next.js, TypeScript",
        },
        {
            icon: FiSmartphone,
            subtitle: "Адаптивность",
            description: "Корректное отображение на всех устройствах",
        },
        {
            icon: FiLayers,
            subtitle: "Компонентный подход",
            description: "Модульная архитектура и переиспользуемые компоненты",
        },
    ],
};

export const skillContent = {
    subtitle: "02. Мой стек",
    skills: [
        { icon: FaReact, name: "React" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: SiWebpack, name: "Webpack" },
        { icon: FaGitAlt, name: "Git" },
        { icon: FaFigma, name: "Figma" },
        { icon: SiJest, name: "Jest" },
        { icon: SiVite, name: "Vite" },
        { icon: SiRedux, name: "Redux" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiEslint, name: "ESLint" },
        { icon: FiGlobe, name: "REST API" },
        { icon: FiActivity, name: "WebSocket" },
        { icon: SiVercel, name: "Vercel" },
        { icon: FiMonitor, name: "SPA" },
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
    subtitle: "03. Примеры работ",
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
    items: [
        {
            label: "Email",
            href: "mailto:rvolenc@gmail.com",
            icon: HiOutlineMail,
            text: "rvolenc@gmail.com",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/ekaterina-kovaleva-93a466335",
            icon: BsLinkedin,
            text: "LinkedIn",
        },
        {
            label: "GitHub",
            href: "https://github.com/asimo-git",
            icon: FaGithub,
            text: "GitHub",
        },
        {
            label: "Telegram",
            href: "https://t.me/AsimoRi",
            icon: FaTelegramPlane,
            text: "Telegram",
        },
    ],
};
