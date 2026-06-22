import Features from "../components/Home/Features.jsx";

export default function AboutPage() {
    return (
        <div className="flex flex-col lg:flex-row">
            <main className="px-4 py-8 md:px-8 lg:p-12.5 w-full">
                <div className="space-y-6 md:space-y-7.5 mb-2 md:mb-2">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-bold">
                        Немного о <span className="text-primary">ВВ ГРУПП</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl max-w-full lg:max-w-300 tracking-wider">
                        Транспортная компания «ВВ ГРУПП» специализируется на перевозке технического сырья для строительного и промышленного сектора. Штат из 25 профессионалов и собственный IT-отдел позволяют нам гибко реагировать на запросы клиентов, внедрять цифровой контроль логистики и обеспечивать стабильно высокое качество услуг в Краснодарском крае.
                    </p>
                    <h2 className="text-2xl sm:text-5xl md:text-4xl text-white font-bold">
                        О платформе тестирования
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl max-w-full lg:max-w-300 tracking-wider">
                        Единая платформа оценки квалификации: свежие вопросы, моментальная обратная связь, уровни сложности под реальный опыт.
                    </p>
                </div>
                <Features/>
            </main>
        </div>
    );
}
