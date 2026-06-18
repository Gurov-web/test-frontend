export default function UserCard({ user, onClick }) {
  return (
    <div
      onClick={() => onClick(user)}
      className="bg-[#20201E] border border-zinc-800 rounded p-6 hover:border-primary cursor-pointer transition"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold text-lg">{user.username}</p>
          <p className="text-zinc-400 text-sm">{user.email}</p>
        </div>
        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded">
          Сотрудник
        </span>
      </div>
    </div>
  );
}
