import {
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  List,
  ListItem,
  Paper,
  Stack,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
  Title,
} from "@mantine/core";
import { getTranslations, getLocale } from "next-intl/server";
import { FeatureCard } from "@/components";

export const LoadTestPage = async () => {
  const startTime = Date.now();
  const locale = await getLocale();
  const t = await getTranslations();

  // Логирование метрик для анализа сборки
  const metrics = {
    timestamp: new Date().toISOString(),
    locale,
    environment: process.env.NODE_ENV,
    isBuildTime: process.env.NEXT_PHASE === "phase-production-build",
    buildId: process.env.NEXT_BUILD_ID || "unknown",
  };

  const features = [
    {
      icon: "IconBrandSpeedtest" as const,
      title: t("features.feature1.title"),
      description: t("features.feature1.description"),
    },
    {
      icon: "IconShield" as const,
      title: t("features.feature2.title"),
      description: t("features.feature2.description"),
    },
    {
      icon: "IconLock" as const,
      title: t("features.feature3.title"),
      description: t("features.feature3.description"),
    },
    {
      icon: "IconUsers" as const,
      title: t("features.feature4.title"),
      description: t("features.feature4.description"),
    },
    {
      icon: "IconPlug" as const,
      title: t("features.feature5.title"),
      description: t("features.feature5.description"),
    },
    {
      icon: "IconChartBar" as const,
      title: t("features.feature6.title"),
      description: t("features.feature6.description"),
    },
    {
      icon: "IconCloud" as const,
      title: "Облачные решения",
      description: "Масштабируемая облачная инфраструктура для вашего бизнеса с гарантией доступности 99.9%",
    },
    {
      icon: "IconCode" as const,
      title: "Качественный код",
      description: "Строгие стандарты кодирования и code review для обеспечения высокого качества кода",
    },
    {
      icon: "IconDatabase" as const,
      title: "Управление данными",
      description: "Эффективное хранение и обработка больших объемов данных с оптимизацией производительности",
    },
    {
      icon: "IconDeviceDesktop" as const,
      title: "Кроссплатформенность",
      description: "Разработка приложений, работающих на всех платформах и устройствах",
    },
    {
      icon: "IconRocket" as const,
      title: "Быстрый запуск",
      description: "Ускоренный процесс разработки и запуска проектов с минимальными временными затратами",
    },
    {
      icon: "IconWorld" as const,
      title: "Глобальный охват",
      description: "Поддержка множества языков и регионов для международного присутствия",
    },
    {
      icon: "IconCheck" as const,
      title: "Проверенное качество",
      description: "Многоуровневое тестирование и контроль качества на каждом этапе разработки",
    },
    {
      icon: "IconStar" as const,
      title: "Премиум поддержка",
      description: "Приоритетная техническая поддержка с гарантией ответа в течение часа",
    },
    {
      icon: "IconTrendingUp" as const,
      title: "Постоянное развитие",
      description: "Регулярные обновления и улучшения функциональности на основе обратной связи",
    },
    {
      icon: "IconSettings" as const,
      title: "Гибкая настройка",
      description: "Широкие возможности кастомизации под специфические требования вашего бизнеса",
    },
    {
      icon: "IconBell" as const,
      title: "Уведомления",
      description: "Система умных уведомлений для отслеживания важных событий и изменений",
    },
    {
      icon: "IconHeart" as const,
      title: "Забота о клиентах",
      description: "Индивидуальный подход к каждому клиенту с фокусом на удовлетворенность",
    },
    {
      icon: "IconThumbUp" as const,
      title: "Доверие клиентов",
      description: "Более 95% клиентов рекомендуют нас своим партнерам и коллегам",
    },
  ];

  const stats = [
    { value: "500+", label: t("about.stats.projects") },
    { value: "200+", label: t("about.stats.clients") },
    { value: "10+", label: t("about.stats.experience") },
    { value: "50+", label: t("about.stats.team") },
    { value: "1M+", label: "Пользователей" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Поддержка" },
    { value: "150+", label: "Страны" },
  ];

  const testimonials = [
    {
      text: t("testimonials.testimonial1.text"),
      author: t("testimonials.testimonial1.author"),
      role: t("testimonials.testimonial1.role"),
    },
    {
      text: t("testimonials.testimonial2.text"),
      author: t("testimonials.testimonial2.author"),
      role: t("testimonials.testimonial2.role"),
    },
    {
      text: t("testimonials.testimonial3.text"),
      author: t("testimonials.testimonial3.author"),
      role: t("testimonials.testimonial3.role"),
    },
    {
      text: "Превосходный сервис и профессионализм команды. Проект был завершен раньше срока!",
      author: "Сергей Волков",
      role: "Директор, ТехноСистемы",
    },
    {
      text: "Инновационные решения и отличная коммуникация. Очень доволен результатом.",
      author: "Анна Морозова",
      role: "Product Manager, Digital Solutions",
    },
    {
      text: "Лучший выбор для нашего стартапа. Команда помогла нам быстро выйти на рынок.",
      author: "Павел Новиков",
      role: "Основатель, CloudStart",
    },
    {
      text: "Качественная разработка и внимательное отношение к деталям. Рекомендую!",
      author: "Екатерина Лебедева",
      role: "CTO, FinTech Innovations",
    },
    {
      text: "Отличное соотношение цена-качество. Получили именно то, что хотели.",
      author: "Михаил Соколов",
      role: "CEO, RetailTech",
    },
    {
      text: "Профессиональный подход и глубокое понимание бизнес-процессов. Спасибо!",
      author: "Ольга Федорова",
      role: "Директор по развитию, E-Commerce Pro",
    },
    {
      text: "Быстрая реакция на изменения требований и гибкость в работе. Отлично!",
      author: "Денис Орлов",
      role: "Руководитель проектов, Logistics Plus",
    },
    {
      text: "Современные технологии и лучшие практики. Проект превзошел ожидания.",
      author: "Татьяна Жукова",
      role: "Head of IT, Healthcare Systems",
    },
    {
      text: "Надежный партнер для долгосрочного сотрудничества. Очень довольны.",
      author: "Владимир Кузнецов",
      role: "Основатель, EduTech Platform",
    },
    {
      text: "Высокий уровень экспертизы и отличная поддержка на всех этапах проекта.",
      author: "Наталья Романова",
      role: "Product Owner, SaaS Solutions",
    },
  ];

  const pricingPlans = [
    {
      name: t("pricing.plan1.name"),
      price: t("pricing.plan1.price"),
      period: t("pricing.plan1.period"),
      features: [
        t("pricing.plan1.feature1"),
        t("pricing.plan1.feature2"),
        t("pricing.plan1.feature3"),
        t("pricing.plan1.feature4"),
      ],
    },
    {
      name: t("pricing.plan2.name"),
      price: t("pricing.plan2.price"),
      period: t("pricing.plan2.period"),
      features: [
        t("pricing.plan2.feature1"),
        t("pricing.plan2.feature2"),
        t("pricing.plan2.feature3"),
        t("pricing.plan2.feature4"),
      ],
      popular: true,
    },
    {
      name: t("pricing.plan3.name"),
      price: t("pricing.plan3.price"),
      period: t("pricing.plan3.period"),
      features: [
        t("pricing.plan3.feature1"),
        t("pricing.plan3.feature2"),
        t("pricing.plan3.feature3"),
        t("pricing.plan3.feature4"),
      ],
    },
    {
      name: "Стартовый",
      price: "4,999",
      period: "₽/месяц",
      features: [
        "До 5 проектов",
        "2GB хранилища",
        "Email поддержка",
        "Базовые шаблоны",
      ],
    },
    {
      name: "Бизнес",
      price: "29,999",
      period: "₽/месяц",
      features: [
        "До 100 проектов",
        "200GB хранилища",
        "Приоритетная поддержка",
        "Расширенная аналитика",
      ],
    },
    {
      name: "Премиум",
      price: "79,999",
      period: "₽/месяц",
      features: [
        "Неограниченно проектов",
        "2TB хранилища",
        "Персональный менеджер",
        "Белый лейбл",
      ],
    },
  ];

  const faqItems = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: "Какие технологии вы используете?", a: "Мы используем современный стек технологий: React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB и многие другие, выбирая оптимальные решения для каждого проекта." },
    { q: "Сколько времени занимает разработка?", a: "Время разработки зависит от сложности проекта. Простые проекты могут быть завершены за 2-4 недели, а крупные enterprise решения требуют 3-6 месяцев." },
    { q: "Предоставляете ли вы техническую документацию?", a: "Да, мы предоставляем полную техническую документацию для всех проектов, включая API документацию, руководства пользователя и архитектурные схемы." },
    { q: "Можно ли интегрировать с существующими системами?", a: "Конечно! Мы имеем большой опыт интеграции с различными системами через REST API, GraphQL, веб-хуки и другие протоколы." },
    { q: "Какая гарантия на вашу работу?", a: "Мы предоставляем гарантию на все наши проекты сроком на 6 месяцев с бесплатным исправлением ошибок и технической поддержкой." },
    { q: "Работаете ли вы с международными клиентами?", a: "Да, мы работаем с клиентами по всему миру и поддерживаем несколько языков для удобства коммуникации." },
    { q: "Как происходит процесс разработки?", a: "Мы используем Agile методологию с короткими спринтами, регулярными демо и обратной связью от клиента на каждом этапе." },
    { q: "Можно ли расширить функциональность позже?", a: "Да, наша архитектура спроектирована с учетом масштабируемости, что позволяет легко добавлять новые функции в будущем." },
    { q: "Какие форматы отчетности вы предоставляете?", a: "Мы предоставляем еженедельные отчеты о прогрессе, а также можем настроить кастомные дашборды для отслеживания метрик проекта." },
    { q: "Есть ли у вас референсы и портфолио?", a: "Да, у нас есть обширное портфолио успешных проектов в различных отраслях. Мы можем предоставить кейсы по запросу." },
  ];

  const services = [
    {
      title: t("services.service1.title"),
      description: t("services.service1.description"),
    },
    {
      title: t("services.service2.title"),
      description: t("services.service2.description"),
    },
    {
      title: t("services.service3.title"),
      description: t("services.service3.description"),
    },
    {
      title: t("services.service4.title"),
      description: t("services.service4.description"),
    },
    {
      title: t("services.service5.title"),
      description: t("services.service5.description"),
    },
    {
      title: t("services.service6.title"),
      description: t("services.service6.description"),
    },
    {
      title: "E-commerce решения",
      description: "Полнофункциональные интернет-магазины с интеграцией платежных систем и управления складом",
    },
    {
      title: "CRM системы",
      description: "Кастомные системы управления взаимоотношениями с клиентами под специфику вашего бизнеса",
    },
    {
      title: "API разработка",
      description: "Создание RESTful и GraphQL API для интеграции различных систем и сервисов",
    },
    {
      title: "Миграция данных",
      description: "Безопасная миграция данных из старых систем в новые с сохранением целостности информации",
    },
    {
      title: "Облачная инфраструктура",
      description: "Настройка и оптимизация облачной инфраструктуры на AWS, Azure или Google Cloud",
    },
    {
      title: "Мониторинг и аналитика",
      description: "Внедрение систем мониторинга производительности и бизнес-аналитики",
    },
    {
      title: "Автоматизация процессов",
      description: "Автоматизация рутинных бизнес-процессов для повышения эффективности",
    },
    {
      title: "Безопасность",
      description: "Аудит безопасности, защита от уязвимостей и соответствие стандартам GDPR, SOC 2",
    },
    {
      title: "Обучение команды",
      description: "Обучение вашей команды работе с новыми системами и технологиями",
    },
    {
      title: "Техническая поддержка",
      description: "Постоянная техническая поддержка и обслуживание ваших систем",
    },
  ];

  const teamMembers = [
    {
      name: t("team.member1.name"),
      role: t("team.member1.role"),
      bio: t("team.member1.bio"),
    },
    {
      name: t("team.member2.name"),
      role: t("team.member2.role"),
      bio: t("team.member2.bio"),
    },
    {
      name: t("team.member3.name"),
      role: t("team.member3.role"),
      bio: t("team.member3.bio"),
    },
    {
      name: t("team.member4.name"),
      role: t("team.member4.role"),
      bio: t("team.member4.bio"),
    },
    {
      name: "Игорь Медведев",
      role: "Backend разработчик",
      bio: "Специалист по микросервисной архитектуре и высоконагруженным системам",
    },
    {
      name: "Светлана Новикова",
      role: "Frontend разработчик",
      bio: "Эксперт по React, Vue.js и современным фреймворкам",
    },
    {
      name: "Андрей Семенов",
      role: "QA инженер",
      bio: "Обеспечивает качество через автоматизированное и ручное тестирование",
    },
    {
      name: "Марина Петрова",
      role: "Бизнес-аналитик",
      bio: "Превращает бизнес-требования в технические спецификации",
    },
    {
      name: "Роман Соколов",
      role: "Системный архитектор",
      bio: "Проектирует масштабируемые и надежные системы",
    },
    {
      name: "Юлия Волкова",
      role: "Data Scientist",
      bio: "Создает модели машинного обучения и анализирует данные",
    },
  ];

  const blogPosts = [
    {
      title: t("blog.post1.title"),
      excerpt: t("blog.post1.excerpt"),
      date: t("blog.post1.date"),
    },
    {
      title: t("blog.post2.title"),
      excerpt: t("blog.post2.excerpt"),
      date: t("blog.post2.date"),
    },
    {
      title: t("blog.post3.title"),
      excerpt: t("blog.post3.excerpt"),
      date: t("blog.post3.date"),
    },
    {
      title: "Микросервисная архитектура: преимущества и вызовы",
      excerpt: "Разбираемся в преимуществах микросервисной архитектуры и как правильно организовать взаимодействие между сервисами",
      date: "20 декабря 2023",
    },
    {
      title: "GraphQL vs REST: что выбрать в 2024?",
      excerpt: "Сравнение подходов к проектированию API и рекомендации по выбору оптимального решения для вашего проекта",
      date: "12 декабря 2023",
    },
    {
      title: "Оптимизация производительности баз данных",
      excerpt: "Практические советы по оптимизации запросов, индексации и масштабированию баз данных",
      date: "5 декабря 2023",
    },
    {
      title: "CI/CD: автоматизация развертывания",
      excerpt: "Как настроить непрерывную интеграцию и доставку для ускорения разработки и повышения качества",
      date: "28 ноября 2023",
    },
    {
      title: "Безопасность веб-приложений: лучшие практики",
      excerpt: "Обзор основных угроз безопасности и методов защиты веб-приложений от атак",
      date: "20 ноября 2023",
    },
    {
      title: "Serverless архитектура: будущее облачных вычислений",
      excerpt: "Изучаем преимущества serverless подхода и когда его стоит использовать в проектах",
      date: "15 ноября 2023",
    },
    {
      title: "Docker и контейнеризация: полное руководство",
      excerpt: "От основ до продвинутых техник работы с Docker и оркестрацией контейнеров",
      date: "8 ноября 2023",
    },
    {
      title: "Мониторинг и логирование в production",
      excerpt: "Как правильно организовать мониторинг приложений и сбор логов для быстрого решения проблем",
      date: "1 ноября 2023",
    },
    {
      title: "WebAssembly: новая эра веб-разработки",
      excerpt: "Изучаем возможности WebAssembly для создания высокопроизводительных веб-приложений",
      date: "25 октября 2023",
    },
    {
      title: "Проектирование масштабируемых систем",
      excerpt: "Принципы проектирования систем, способных обрабатывать миллионы запросов в секунду",
      date: "18 октября 2023",
    },
  ];

  const timelineEvents = [
    {
      year: t("timeline.event1.year"),
      title: t("timeline.event1.title"),
      description: t("timeline.event1.description"),
    },
    {
      year: t("timeline.event2.year"),
      title: t("timeline.event2.title"),
      description: t("timeline.event2.description"),
    },
    {
      year: t("timeline.event3.year"),
      title: t("timeline.event3.title"),
      description: t("timeline.event3.description"),
    },
    {
      year: t("timeline.event4.year"),
      title: t("timeline.event4.title"),
      description: t("timeline.event4.description"),
    },
    {
      year: t("timeline.event5.year"),
      title: t("timeline.event5.title"),
      description: t("timeline.event5.description"),
    },
    {
      year: "2015",
      title: "Первый миллион пользователей",
      description: "Достигли отметки в 1 миллион активных пользователей нашей платформы",
    },
    {
      year: "2017",
      title: "Запуск мобильного приложения",
      description: "Успешно запустили нативные приложения для iOS и Android",
    },
    {
      year: "2019",
      title: "Выход на международный рынок",
      description: "Расширили присутствие в Европе и Азии с локализованными версиями",
    },
    {
      year: "2021",
      title: "Интеграция AI технологий",
      description: "Внедрили машинное обучение для улучшения пользовательского опыта",
    },
    {
      year: "2022",
      title: "Сертификация безопасности",
      description: "Получили сертификаты ISO 27001 и SOC 2 Type II",
    },
    {
      year: "2023",
      title: "Запуск облачной платформы",
      description: "Представили собственную облачную платформу для корпоративных клиентов",
    },
  ];

  const tableData = [
    {
      id: 1,
      name: "Проект Alpha",
      status: "Активен",
      progress: "75%",
      budget: "₽2,500,000",
    },
    {
      id: 2,
      name: "Проект Beta",
      status: "Завершен",
      progress: "100%",
      budget: "₽1,800,000",
    },
    {
      id: 3,
      name: "Проект Gamma",
      status: "В разработке",
      progress: "45%",
      budget: "₽3,200,000",
    },
    {
      id: 4,
      name: "Проект Delta",
      status: "Планирование",
      progress: "10%",
      budget: "₽950,000",
    },
    {
      id: 5,
      name: "Проект Epsilon",
      status: "Активен",
      progress: "90%",
      budget: "₽4,100,000",
    },
    {
      id: 6,
      name: "Проект Zeta",
      status: "Активен",
      progress: "60%",
      budget: "₽1,500,000",
    },
    {
      id: 7,
      name: "Проект Eta",
      status: "В разработке",
      progress: "30%",
      budget: "₽2,800,000",
    },
    {
      id: 8,
      name: "Проект Theta",
      status: "Завершен",
      progress: "100%",
      budget: "₽5,200,000",
    },
    {
      id: 9,
      name: "Проект Iota",
      status: "Активен",
      progress: "85%",
      budget: "₽3,600,000",
    },
    {
      id: 10,
      name: "Проект Kappa",
      status: "Планирование",
      progress: "5%",
      budget: "₽1,200,000",
    },
    {
      id: 11,
      name: "Проект Lambda",
      status: "В разработке",
      progress: "55%",
      budget: "₽4,500,000",
    },
    {
      id: 12,
      name: "Проект Mu",
      status: "Активен",
      progress: "70%",
      budget: "₽2,100,000",
    },
    {
      id: 13,
      name: "Проект Nu",
      status: "Завершен",
      progress: "100%",
      budget: "₽6,300,000",
    },
    {
      id: 14,
      name: "Проект Xi",
      status: "В разработке",
      progress: "40%",
      budget: "₽3,900,000",
    },
    {
      id: 15,
      name: "Проект Omicron",
      status: "Активен",
      progress: "95%",
      budget: "₽7,800,000",
    },
    {
      id: 16,
      name: "Проект Pi",
      status: "Планирование",
      progress: "15%",
      budget: "₽1,600,000",
    },
    {
      id: 17,
      name: "Проект Rho",
      status: "В разработке",
      progress: "50%",
      budget: "₽4,200,000",
    },
    {
      id: 18,
      name: "Проект Sigma",
      status: "Активен",
      progress: "80%",
      budget: "₽5,500,000",
    },
    {
      id: 19,
      name: "Проект Tau",
      status: "Завершен",
      progress: "100%",
      budget: "₽3,400,000",
    },
    {
      id: 20,
      name: "Проект Upsilon",
      status: "В разработке",
      progress: "35%",
      budget: "₽2,700,000",
    },
    {
      id: 21,
      name: "Проект Phi",
      status: "Активен",
      progress: "65%",
      budget: "₽4,800,000",
    },
    {
      id: 22,
      name: "Проект Chi",
      status: "Планирование",
      progress: "20%",
      budget: "₽1,900,000",
    },
    {
      id: 23,
      name: "Проект Psi",
      status: "В разработке",
      progress: "48%",
      budget: "₽3,100,000",
    },
    {
      id: 24,
      name: "Проект Omega",
      status: "Активен",
      progress: "88%",
      budget: "₽6,600,000",
    },
    {
      id: 25,
      name: "Проект Nova",
      status: "Завершен",
      progress: "100%",
      budget: "₽8,200,000",
    },
    {
      id: 26,
      name: "Проект Stellar",
      status: "В разработке",
      progress: "42%",
      budget: "₽3,700,000",
    },
    {
      id: 27,
      name: "Проект Galaxy",
      status: "Активен",
      progress: "72%",
      budget: "₽5,900,000",
    },
    {
      id: 28,
      name: "Проект Cosmos",
      status: "Планирование",
      progress: "8%",
      budget: "₽2,300,000",
    },
    {
      id: 29,
      name: "Проект Quantum",
      status: "В разработке",
      progress: "38%",
      budget: "₽4,400,000",
    },
    {
      id: 30,
      name: "Проект Infinity",
      status: "Активен",
      progress: "92%",
      budget: "₽9,100,000",
    },
  ];

  // Завершение сбора метрик
  const renderTime = Date.now() - startTime;
  const finalMetrics = {
    ...metrics,
    renderTimeMs: renderTime,
    dataCounts: {
      features: features.length,
      stats: stats.length,
      testimonials: testimonials.length,
      pricingPlans: pricingPlans.length,
      faqItems: faqItems.length,
      services: services.length,
      teamMembers: teamMembers.length,
      blogPosts: blogPosts.length,
      timelineEvents: timelineEvents.length,
      tableRows: tableData.length,
    },
  };

  // Логирование метрик для анализа сборки
  console.log(
    "[METRICS] LoadTestPage render:",
    JSON.stringify(finalMetrics, null, 2)
  );

  return (
    <Box>
      {/* Hero Section */}
      <Box
        style={{
          background:
            "linear-gradient(135deg, var(--mantine-color-blue-6) 0%, var(--mantine-color-cyan-6) 100%)",
          padding: "120px 0",
          color: "white",
        }}
      >
        <Container size="lg">
          <Stack align="center" gap="xl">
            <Title order={1} size="3.5rem" ta="center" fw={700}>
              {t("hero.title")}
            </Title>
            <Text size="xl" ta="center" maw={700}>
              {t("hero.subtitle")}
            </Text>
            <Group gap="md" mt="xl">
              <Button size="lg" variant="white" color="blue">
                {t("hero.cta")}
              </Button>
              <Button size="lg" variant="outline" color="white">
                {t("hero.learnMore")}
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container size="lg" py={80}>
        <Stack gap="xl" mb={60}>
          <Title order={2} ta="center" size="2.5rem">
            {t("features.title")}
          </Title>
          <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
            {t("features.subtitle")}
          </Text>
        </Stack>

        <Grid gutter="xl">
          {features.map((feature, index) => (
            <GridCol key={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </GridCol>
          ))}
        </Grid>
      </Container>

      {/* About Section */}
      <Box bg="gray.0" py={80}>
        <Container size="lg">
          <Grid gutter="xl" align="center">
            <GridCol span={{ base: 12, md: 6 }}>
              <Stack gap="md">
                <Title order={2} size="2.5rem">
                  {t("about.title")}
                </Title>
                <Text size="lg" c="dimmed" fw={500}>
                  {t("about.subtitle")}
                </Text>
                <Text size="md" c="dimmed">
                  {t("about.description")}
                </Text>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <Grid gutter="md">
                {stats.map((stat, index) => (
                  <GridCol key={index} span={6}>
                    <Card padding="md" radius="md" withBorder>
                      <Stack gap={4} align="center">
                        <Text size="2rem" fw={700} c="blue">
                          {stat.value}
                        </Text>
                        <Text size="sm" ta="center" c="dimmed">
                          {stat.label}
                        </Text>
                      </Stack>
                    </Card>
                  </GridCol>
                ))}
              </Grid>
            </GridCol>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container size="lg" py={80}>
        <Stack gap="xl" mb={60}>
          <Title order={2} ta="center" size="2.5rem">
            {t("testimonials.title")}
          </Title>
          <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
            {t("testimonials.subtitle")}
          </Text>
        </Stack>

        <Grid gutter="xl">
          {testimonials.map((testimonial, index) => (
            <GridCol key={index} span={{ base: 12, md: 4 }}>
              <Card shadow="sm" padding="lg" radius="md" h="100%">
                <Stack gap="md">
                  <Text size="md" style={{ fontStyle: "italic" }}>
                    "{testimonial.text}"
                  </Text>
                  <Box>
                    <Text fw={600}>{testimonial.author}</Text>
                    <Text size="sm" c="dimmed">
                      {testimonial.role}
                    </Text>
                  </Box>
                </Stack>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Container>

      {/* Pricing Section */}
      <Box bg="gray.0" py={80}>
        <Container size="lg">
          <Stack gap="xl" mb={60}>
            <Title order={2} ta="center" size="2.5rem">
              {t("pricing.title")}
            </Title>
            <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
              {t("pricing.subtitle")}
            </Text>
          </Stack>

          <Grid gutter="xl">
            {pricingPlans.map((plan, index) => (
              <GridCol key={index} span={{ base: 12, md: 4 }}>
                <Card
                  shadow="sm"
                  padding="xl"
                  radius="md"
                  h="100%"
                  style={{ position: "relative" }}
                >
                  {plan.popular && (
                    <Badge
                      color="blue"
                      size="lg"
                      style={{ position: "absolute", top: -10, right: 20 }}
                    >
                      Популярный
                    </Badge>
                  )}
                  <Stack gap="md">
                    <Title order={3} size="h3">
                      {plan.name}
                    </Title>
                    <Group gap={4} align="flex-end">
                      <Text size="2.5rem" fw={700} c="blue">
                        {plan.price}
                      </Text>
                      <Text size="lg" c="dimmed" mb="md">
                        {plan.period}
                      </Text>
                    </Group>
                    <Divider />
                    <List spacing="sm" size="sm">
                      {plan.features.map((feature, idx) => (
                        <ListItem key={idx}>{feature}</ListItem>
                      ))}
                    </List>
                    <Button
                      fullWidth
                      mt="auto"
                      variant={plan.popular ? "filled" : "outline"}
                    >
                      Выбрать план
                    </Button>
                  </Stack>
                </Card>
              </GridCol>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container size="lg" py={80}>
        <Stack gap="xl" mb={60}>
          <Title order={2} ta="center" size="2.5rem">
            {t("services.title")}
          </Title>
          <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
            {t("services.subtitle")}
          </Text>
        </Stack>

        <Grid gutter="xl">
          {services.map((service, index) => (
            <GridCol key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <Card shadow="sm" padding="lg" radius="md" h="100%">
                <Stack gap="md">
                  <Title order={4}>{service.title}</Title>
                  <Text size="sm" c="dimmed">
                    {service.description}
                  </Text>
                </Stack>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Container>

      {/* FAQ Section */}
      <Box bg="gray.0" py={80}>
        <Container size="lg">
          <Stack gap="xl" mb={60}>
            <Title order={2} ta="center" size="2.5rem">
              {t("faq.title")}
            </Title>
            <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
              {t("faq.subtitle")}
            </Text>
          </Stack>

          <Stack gap="md">
            {faqItems.map((item, index) => (
              <Card key={index} shadow="sm" padding="lg" radius="md">
                <Stack gap="xs">
                  <Text fw={600} size="lg">
                    {item.q}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {item.a}
                  </Text>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Team Section */}
      <Container size="lg" py={80}>
        <Stack gap="xl" mb={60}>
          <Title order={2} ta="center" size="2.5rem">
            {t("team.title")}
          </Title>
          <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
            {t("team.subtitle")}
          </Text>
        </Stack>

        <Grid gutter="xl">
          {teamMembers.map((member, index) => (
            <GridCol key={index} span={{ base: 12, sm: 6, md: 3 }}>
              <Card shadow="sm" padding="lg" radius="md" h="100%">
                <Stack gap="md" align="center">
                  <Box
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, var(--mantine-color-blue-6) 0%, var(--mantine-color-cyan-6) 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text size="3rem" c="white" fw={700}>
                      {member.name.charAt(0)}
                    </Text>
                  </Box>
                  <Stack gap={4} align="center">
                    <Text fw={600} size="lg">
                      {member.name}
                    </Text>
                    <Text size="sm" c="blue" fw={500}>
                      {member.role}
                    </Text>
                    <Text size="xs" c="dimmed" ta="center">
                      {member.bio}
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Container>

      {/* Blog Section */}
      <Box bg="gray.0" py={80}>
        <Container size="lg">
          <Stack gap="xl" mb={60}>
            <Title order={2} ta="center" size="2.5rem">
              {t("blog.title")}
            </Title>
            <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
              {t("blog.subtitle")}
            </Text>
          </Stack>

          <Grid gutter="xl">
            {blogPosts.map((post, index) => (
              <GridCol key={index} span={{ base: 12, md: 4 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md">
                    <Badge color="blue" variant="light">
                      {post.date}
                    </Badge>
                    <Title order={3} size="h4">
                      {post.title}
                    </Title>
                    <Text size="sm" c="dimmed">
                      {post.excerpt}
                    </Text>
                    <Button variant="subtle" size="sm">
                      Читать далее →
                    </Button>
                  </Stack>
                </Card>
              </GridCol>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Timeline Section */}
      <Container size="lg" py={80}>
        <Stack gap="xl" mb={60}>
          <Title order={2} ta="center" size="2.5rem">
            {t("timeline.title")}
          </Title>
          <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
            {t("timeline.subtitle")}
          </Text>
        </Stack>

        <Stack gap="lg">
          {timelineEvents.map((event, index) => (
            <Paper key={index} shadow="sm" p="lg" radius="md" withBorder>
              <Grid gutter="xl" align="center">
                <GridCol span={{ base: 12, sm: 3 }}>
                  <Text size="2rem" fw={700} c="blue">
                    {event.year}
                  </Text>
                </GridCol>
                <GridCol span={{ base: 12, sm: 9 }}>
                  <Stack gap="xs">
                    <Title order={4}>{event.title}</Title>
                    <Text size="sm" c="dimmed">
                      {event.description}
                    </Text>
                  </Stack>
                </GridCol>
              </Grid>
            </Paper>
          ))}
        </Stack>
      </Container>

      {/* Data Table Section */}
      <Box bg="gray.0" py={80}>
        <Container size="lg">
          <Stack gap="xl" mb={60}>
            <Title order={2} ta="center" size="2.5rem">
              Активные проекты
            </Title>
            <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
              Обзор текущих проектов и их статусов
            </Text>
          </Stack>

          <Card shadow="sm" padding="lg" radius="md">
            <Table striped highlightOnHover>
              <TableThead>
                <TableTr>
                  <TableTh>ID</TableTh>
                  <TableTh>Название проекта</TableTh>
                  <TableTh>Статус</TableTh>
                  <TableTh>Прогресс</TableTh>
                  <TableTh>Бюджет</TableTh>
                </TableTr>
              </TableThead>
              <TableTbody>
                {tableData.map((row) => (
                  <TableTr key={row.id}>
                    <TableTd>{row.id}</TableTd>
                    <TableTd>{row.name}</TableTd>
                    <TableTd>
                      <Badge
                        color={
                          row.status === "Активен"
                            ? "green"
                            : row.status === "Завершен"
                              ? "blue"
                              : row.status === "В разработке"
                                ? "yellow"
                                : "gray"
                        }
                      >
                        {row.status}
                      </Badge>
                    </TableTd>
                    <TableTd>{row.progress}</TableTd>
                    <TableTd>{row.budget}</TableTd>
                  </TableTr>
                ))}
              </TableTbody>
            </Table>
          </Card>
        </Container>
      </Box>

      {/* Technologies Section */}
      <Container size="lg" py={80}>
        <Stack gap="xl" mb={60}>
          <Title order={2} ta="center" size="2.5rem">
            Технологии
          </Title>
          <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
            Современный стек технологий для создания лучших решений
          </Text>
        </Stack>

        <Grid gutter="xl">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Docker",
            "Kubernetes",
            "AWS",
            "GraphQL",
            "Tailwind CSS",
            "Mantine",
            "Jest",
            "Playwright",
            "GitHub Actions",
            "Terraform",
            "Elasticsearch",
          ].map((tech, index) => (
            <GridCol key={index} span={{ base: 6, sm: 4, md: 3 }}>
              <Card shadow="sm" padding="md" radius="md" withBorder>
                <Text ta="center" fw={500}>
                  {tech}
                </Text>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Container>

      {/* Partners Section */}
      <Box bg="gray.0" py={80}>
        <Container size="lg">
          <Stack gap="xl" mb={60}>
            <Title order={2} ta="center" size="2.5rem">
              Наши партнеры
            </Title>
            <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
              Доверяют нам ведущие компании индустрии
            </Text>
          </Stack>

          <Grid gutter="xl">
            {[
              "TechCorp",
              "Digital Solutions",
              "Cloud Systems",
              "Innovation Labs",
              "Future Tech",
              "Smart Solutions",
              "NextGen Systems",
              "Advanced Technologies",
              "Modern Platforms",
              "Elite Software",
              "Premium Services",
              "Enterprise Solutions",
            ].map((partner, index) => (
              <GridCol key={index} span={{ base: 6, sm: 4, md: 3 }}>
                <Card shadow="sm" padding="xl" radius="md" h="100%">
                  <Stack gap="md" align="center">
                    <Box
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, var(--mantine-color-blue-6) 0%, var(--mantine-color-cyan-6) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text size="2rem" c="white" fw={700}>
                        {partner.charAt(0)}
                      </Text>
                    </Box>
                    <Text ta="center" fw={500}>
                      {partner}
                    </Text>
                  </Stack>
                </Card>
              </GridCol>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Case Studies Section */}
      <Container size="lg" py={80}>
        <Stack gap="xl" mb={60}>
          <Title order={2} ta="center" size="2.5rem">
            Кейсы
          </Title>
          <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
            Примеры успешных проектов и достигнутых результатов
          </Text>
        </Stack>

        <Grid gutter="xl">
          {[
            {
              title: "E-commerce платформа",
              description: "Создали масштабируемую платформу для интернет-магазина с обработкой 10,000+ заказов в день",
              result: "Увеличение продаж на 300%",
            },
            {
              title: "CRM система",
              description: "Разработали кастомную CRM систему для управления клиентской базой из 50,000+ контактов",
              result: "Экономия времени на 40%",
            },
            {
              title: "Мобильное приложение",
              description: "Создали нативное мобильное приложение для iOS и Android с 1M+ загрузок",
              result: "Рейтинг 4.8/5.0",
            },
            {
              title: "Облачная инфраструктура",
              description: "Мигрировали legacy систему в облако с улучшением производительности в 5 раз",
              result: "Снижение затрат на 60%",
            },
            {
              title: "API интеграция",
              description: "Интегрировали 15+ внешних сервисов через единый API gateway",
              result: "Время ответа < 100ms",
            },
            {
              title: "Система аналитики",
              description: "Внедрили систему бизнес-аналитики с real-time дашбордами и отчетами",
              result: "Улучшение решений на 250%",
            },
            {
              title: "Автоматизация процессов",
              description: "Автоматизировали рутинные процессы, сократив время обработки на 80%",
              result: "Экономия 200 часов/месяц",
            },
            {
              title: "Безопасность и соответствие",
              description: "Провели аудит безопасности и получили сертификаты GDPR и SOC 2",
              result: "100% соответствие",
            },
            {
              title: "Миграция данных",
              description: "Безопасно мигрировали 10TB данных из старой системы в новую",
              result: "Zero downtime",
            },
          ].map((caseStudy, index) => (
            <GridCol key={index} span={{ base: 12, md: 4 }}>
              <Card shadow="sm" padding="lg" radius="md" h="100%">
                <Stack gap="md">
                  <Badge color="blue" variant="light">
                    Кейс {index + 1}
                  </Badge>
                  <Title order={4}>{caseStudy.title}</Title>
                  <Text size="sm" c="dimmed">
                    {caseStudy.description}
                  </Text>
                  <Box mt="auto">
                    <Text size="sm" fw={600} c="green">
                      Результат: {caseStudy.result}
                    </Text>
                  </Box>
                </Stack>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Container>

      {/* Additional Stats Section */}
      <Box bg="gray.0" py={80}>
        <Container size="lg">
          <Stack gap="xl" mb={60}>
            <Title order={2} ta="center" size="2.5rem">
              Дополнительная статистика
            </Title>
          </Stack>

          <Grid gutter="xl">
            {[
              { label: "Строк кода", value: "5M+" },
              { label: "Коммитов", value: "50K+" },
              { label: "Pull Requests", value: "12K+" },
              { label: "Code Reviews", value: "8K+" },
              { label: "Деплоев", value: "2K+" },
              { label: "Тестов", value: "15K+" },
              { label: "Документации", value: "500+" },
              { label: "Тренингов", value: "200+" },
            ].map((stat, index) => (
              <GridCol key={index} span={{ base: 6, sm: 4, md: 3 }}>
                <Card padding="lg" radius="md" withBorder>
                  <Stack gap={4} align="center">
                    <Text size="2rem" fw={700} c="blue">
                      {stat.value}
                    </Text>
                    <Text size="sm" ta="center" c="dimmed">
                      {stat.label}
                    </Text>
                  </Stack>
                </Card>
              </GridCol>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Duplicate Features Section */}
      <Container size="lg" py={80}>
        <Stack gap="xl" mb={60}>
          <Title order={2} ta="center" size="2.5rem">
            Дополнительные возможности
          </Title>
          <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
            Еще больше функций для вашего успеха
          </Text>
        </Stack>

        <Grid gutter="xl">
          {features.slice(6, 12).map((feature, index) => (
            <GridCol key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </GridCol>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        style={{
          background:
            "linear-gradient(135deg, var(--mantine-color-blue-6) 0%, var(--mantine-color-cyan-6) 100%)",
          padding: "80px 0",
          color: "white",
        }}
      >
        <Container size="lg">
          <Stack align="center" gap="xl">
            <Title order={2} size="2.5rem" ta="center">
              {t("cta.title")}
            </Title>
            <Text size="xl" ta="center" maw={600}>
              {t("cta.subtitle")}
            </Text>
            <Button size="lg" variant="white" color="blue">
              {t("cta.button")}
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="dark.9" py={60} style={{ color: "white" }}>
        <Container size="lg">
          <Grid gutter="xl">
            <GridCol span={{ base: 12, md: 4 }}>
              <Stack gap="md">
                <Title order={4}>{t("footer.links")}</Title>
                <Stack gap="xs">
                  <Anchor c="gray.5" size="sm">
                    О нас
                  </Anchor>
                  <Anchor c="gray.5" size="sm">
                    Услуги
                  </Anchor>
                  <Anchor c="gray.5" size="sm">
                    Контакты
                  </Anchor>
                </Stack>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 4 }}>
              <Stack gap="md">
                <Title order={4}>{t("footer.company")}</Title>
                <Stack gap="xs">
                  <Anchor c="gray.5" size="sm">
                    Команда
                  </Anchor>
                  <Anchor c="gray.5" size="sm">
                    Карьера
                  </Anchor>
                  <Anchor c="gray.5" size="sm">
                    Блог
                  </Anchor>
                </Stack>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 4 }}>
              <Stack gap="md">
                <Title order={4}>{t("footer.support")}</Title>
                <Stack gap="xs">
                  <Anchor c="gray.5" size="sm">
                    Помощь
                  </Anchor>
                  <Anchor c="gray.5" size="sm">
                    Документация
                  </Anchor>
                  <Anchor c="gray.5" size="sm">
                    FAQ
                  </Anchor>
                </Stack>
              </Stack>
            </GridCol>
          </Grid>
          <Box
            mt={40}
            pt={20}
            style={{ borderTop: "1px solid var(--mantine-color-dark-6)" }}
          >
            <Text size="sm" ta="center" c="gray.5">
              © 2024 {t("footer.copyright")}
            </Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
