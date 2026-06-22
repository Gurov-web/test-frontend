
const Footer = () => {
    return (
        <footer className="flex justify-between flex-wrap items-center px-10 sm:px-6 lg:px-12.5 py-4 shadow-2xl shadow-[#a0ffb910] border-t border-[#A0FFB910] relative">
            <div className="flex flex-col items-start gap-2">
                <div className="font-bold text-primary dark:text-primary">ВВ ГРУПП</div>
                <p className="font-body-md text-body-md text-on-surface-variant opacity-60">© {new Date().getFullYear()} ВВ ГРУПП. Все права
                    защищены.</p>
            </div>
            <div className="flex flex-wrap gap-5">
                <a className="hover:text-primary transition-colors font-body-md"
                   href="https://t.me/lionlion2707" target="_blank">Поддержка</a>
                <a className="hover:text-primary transition-colors font-body-md"
                   href="https://vk.com/yliytsezarnovoross" target="_blank">Контакты</a>
            </div>
        </footer>
    );
};

export default Footer;