import { useAuthStore } from "../../store/authStore";

export default function ProfileHeader() {
  const { user } = useAuthStore();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-10">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Профиль</h1>
        <p className="text-zinc-400 mt-1 text-sm sm:text-base">
          Имя пользователя: {user?.username}
        </p>
      </div>
      <div className="text-left sm:text-right">
        <p className="text-sm sm:text-base">
          Роль:
          <span className="text-primary font-medium">
            {user?.role === "admin" ? " Администратор" : " Сотрудник"}
          </span>
        </p>
      </div>
    </div>
  );
}
