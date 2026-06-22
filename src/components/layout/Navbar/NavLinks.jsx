import {Link} from "react-router-dom";
import {useAuthStore} from "../../../store/authStore";

export default function NavLinks({onClickLink}) {
    const {user} = useAuthStore();

    return (
        <>
            <Link
                to="/"
                onClick={onClickLink}
                className="hover:text-primary transition text-sm md:text-base"
            >
                Главная
            </Link>
            <Link
                to="/tests"
                onClick={onClickLink}
                className="hover:text-primary transition text-sm md:text-base"
            >
                Тесты
            </Link>
            <Link
                to="/about"
                onClick={onClickLink}
                className="hover:text-primary transition text-sm md:text-base"
            >
                О нас
            </Link>
            {user?.role === "admin" && (
                <>
                    <Link
                        to="/admin"
                        onClick={onClickLink}
                        className="flex items-center gap-1 hover:text-primary transition text-sm md:text-base"
                    >
                        Админ панель
                    </Link>
                    <Link
                        to="/admin/users"
                        className="flex items-center gap-1 hover:text-primary transition text-sm md:text-base"
                    >
                        Сотрудники
                    </Link>
                </>
            )}
        </>
    );
}
