import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import UserMenu from "./UserMenu";
import { useAuthStore } from "../../../store/authStore";

export default function NavbarMobile({ isOpen, closeMenu }) {
  const { user } = useAuthStore();

  return (
    <div
      className={`md:hidden absolute top-full left-0 w-full bg-[#0E0E0E] shadow-2xl shadow-black/20 px-4 py-4 flex flex-col gap-4 transition-all duration-300 ease-in-out z-50 ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <nav className="flex flex-col gap-4">
        <NavLinks onClickLink={closeMenu} />
      </nav>
      <div className="flex flex-col gap-4 pt-4 border-t border-[#20201E]">
        {user ? (
          <UserMenu onClickLink={closeMenu} onLogout={closeMenu} />
        ) : (
          <AuthButtons onClickLink={closeMenu} />
        )}
      </div>
    </div>
  );
}
