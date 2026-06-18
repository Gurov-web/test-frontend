import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserResults from "../components/AdminUsers/UserResults";
import UserList from "../components/AdminUsers/UserList";
import EmptyState from "../components/AdminUsers/EmptyState";

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userResults, setUserResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${API}/admin/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUsers(res.data);
  };

  const viewUserResults = async (user) => {
    setSelectedUser(user);
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${API}/admin/users/${user.id}/results`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserResults(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="px-4 py-8 md:px-8 lg:p-12.5 w-full">
      <h1 className="text-4xl text-white font-bold mb-10">
        Управление сотрудниками
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UserList users={users} onUserClick={viewUserResults} />

        {selectedUser ? (
          <UserResults
            user={selectedUser}
            results={userResults}
            loading={loading}
          />
        ) : (
          <EmptyState message="Выберите сотрудника, чтобы посмотреть его результаты" />
        )}
      </div>
    </div>
  );
}
