import { Menu, X } from "lucide-react";

export default function MobileMenuToggle({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-white p-2 hover:text-primary transition"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}
