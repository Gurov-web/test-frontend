import {ChartLine, CodeXml, Layers, Star} from "lucide-react";

const Features = () => {
    return (
        <section className="py-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold border-l-5 border-primary pl-4 mb-6">Преимущества
                платформы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-8 rounded-xl border border-[#A0FFB910] hover:border-primary transition-all">
                    <div className="w-12 h-12 bg-[#A0FFB910] flex items-center justify-center rounded-lg mb-5">
                        <Layers color="#A0FFB9" />
                    </div>
                    <h4 className="font-title-md text-title-md mb-stack-sm text-primary font-semibold">Актуальный стек</h4>
                    <p className="text-on-surface-variant text-body-md">Мы постоянно обновляем базу вопросов в
                        соответствии с последними трендами и апдейтами фреймворков.</p>
                </div>
                <div className="p-8 rounded-xl border border-[#A0FFB910] hover:border-primary transition-all">
                    <div
                        className="w-12 h-12 bg-[#A0FFB910] flex items-center justify-center rounded-lg mb-5">
                        <ChartLine color="#A0FFB9" />
                    </div>
                    <h4 className="font-title-md text-title-md mb-stack-sm text-primary font-semibold">Подробный разбор</h4>
                    <p className="text-on-surface-variant text-body-md">После каждого теста вы получаете детальный
                        анализ ошибок со ссылками на документацию.</p>
                </div>
                <div className="p-8 rounded-xl border border-[#A0FFB910] hover:border-primary transition-all">
                    <div
                        className="w-12 h-12 bg-[#A0FFB910] flex items-center justify-center rounded-lg mb-5">
                        <Star color="#A0FFB9" />
                    </div>
                    <h4 className="font-title-md text-title-md mb-stack-sm text-primary font-semibold">Сертификат</h4>
                    <p className="text-on-surface-variant text-body-md">Подтвердите свои знания именным сертификатом,
                        который можно прикрепить к резюме или LinkedIn.</p>
                </div>
                <div className="p-8 rounded-xl border border-[#A0FFB910] hover:border-primary transition-all">
                    <div
                        className="w-12 h-12 bg-[#A0FFB910] flex items-center justify-center rounded-lg mb-5">
                        <CodeXml color="#A0FFB9" />
                    </div>
                    <h4 className="font-title-md text-title-md mb-stack-sm text-primary font-semibold">Разные уровни</h4>
                    <p className="text-on-surface-variant text-body-md">От Junior основ до Senior архитектуры. Выбирайте
                        сложность под свой текущий грейд.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;