import UserCard from "./UserCard";

export default function UserList({ users, onUserClick }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Список сотрудников</h2>
      <div className="space-y-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onClick={onUserClick} />
        ))}
      </div>
    </div>
  );
}
