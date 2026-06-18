import { useNavigate } from "react-router-dom";

export default function TestResult({ percentage, score, total, isRetake = false }) {
    const navigate = useNavigate();

    return (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-center">
            <div className={`p-6 sm:p-10 border rounded-md ${
                isRetake ? "border-[#20201E]" : "border-[#20201E]"
            }`}>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                    {isRetake ? "Вы уже проходили этот тест" : "Тест завершён!"}
                </h2>
                <div className="text-5xl sm:text-6xl font-bold mb-2 text-white">
                    {percentage}%
                </div>
                <p className="text-lg sm:text-xl text-zinc-400">
                    Правильных ответов: {score} из {total}
                </p>
                <button
                    onClick={() => navigate("/profile")}
                    className="w-full py-3 rounded-md bg-primary text-[#1A1C1E] font-semibold cursor-pointer mt-5"
                >
                    Посмотреть результаты в профиле
                </button>
            </div>
        </div>
    );
}