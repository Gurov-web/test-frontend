import {useState} from 'react';
import {useAuthStore} from '../store/authStore';
import {Link, useNavigate} from 'react-router-dom';
import {Eye, EyeOff} from 'lucide-react';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const {register} = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await register(username, email, password);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.msg || 'Ошибка регистрации');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="max-w-md w-full rounded-md p-8 border border-[#20201E]">
                <h1 className="text-3xl font-bold text-center mb-2 text-primary">Регистрация</h1>
                <p className="text-zinc-400 text-center mb-8">Создайте аккаунт и начинайте тестирование</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm text-zinc-400 mb-1">Имя пользователя</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full py-3 px-2 bg-[#1A1C1E] rounded-md outline-none"
                            placeholder="Полное имя пользователя"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-zinc-400 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full py-3 px-2 bg-[#1A1C1E] rounded-md outline-none"
                            placeholder="example@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-zinc-400 mb-1">Пароль</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full py-3 px-2 bg-[#1A1C1E] rounded-md outline-none"
                                placeholder="Введите пароль"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                            >
                                {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                            </button>
                        </div>
                    </div>

                    {error && <p className="text-red-400 text-sm text-center">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-md bg-primary text-[#1A1C1E] font-semibold cursor-pointer"
                    >
                        {loading ? 'Регистрация...' : 'Создать аккаунт'}
                    </button>
                </form>

                <p className="text-center text-zinc-400 mt-6">
                    Уже есть аккаунт?{' '}
                    <Link to="/login" className="text-primary hover:underline">
                        Войти
                    </Link>
                </p>
            </div>
        </div>
    );
}