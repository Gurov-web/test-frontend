import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import UserMenu from "./UserMenu";
import { useAuthStore } from "../../../store/authStore";

export default function NavbarDesktop() {
  const { user } = useAuthStore();

  return (
    <div className="hidden md:flex items-center justify-between">
      <div className="flex items-center gap-16">
        <Link to="/" className="text-primary text-3xl font-bold">
          ВВ ГРУПП
        </Link>
        <nav className="flex gap-6">
          <NavLinks />
        </nav>
      </div>
      <div className="flex items-center gap-8">
        {user ? <UserMenu /> : <AuthButtons />}
      </div>
    </div>
  );
}
