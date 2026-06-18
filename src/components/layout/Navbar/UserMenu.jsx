import { Link } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { useAuthStore } from "../../../store/authStore";

export default function UserMenu({ onClickLink, onLogout }) {
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    if (onLogout) onLogout();
  };

  return (
    <>
      <Link
        to="/profile"
        onClick={onClickLink}
        className="flex items-center gap-2 hover:text-white text-sm md:text-base"
      >
        <User size={18} />
        Профиль
      </Link>
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 hover:text-red-400 transition cursor-pointer text-sm md:text-base"
      >
        <LogOut size={18} />
        Выйти
      </button>
    </>
  );
}
