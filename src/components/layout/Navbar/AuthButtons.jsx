import { Link } from "react-router-dom";

export default function AuthButtons({ onClickLink }) {
  return (
    <>
      <Link
        to="/login"
        onClick={onClickLink}
        className="text-gray hover:text-white text-sm md:text-base"
      >
        Войти
      </Link>
      <Link
        to="/register"
        onClick={onClickLink}
        className="py-2.5 px-5 rounded-md bg-primary text-[#1A1C1E] font-semibold text-sm md:text-base"
      >
        Регистрация
      </Link>
    </>
  );
}
