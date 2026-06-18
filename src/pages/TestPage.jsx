import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTestStore } from "../store/testStore";
import { useAuthStore } from "../store/authStore";
import TestForm from "../components/Tests/TestForm";
import TestResult from "../components/Tests/TestResult";

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function TestPage() {
    const { id } = useParams();
    const { currentTest, fetchTestById, submitTest } = useTestStore();
    const { user } = useAuthStore();

    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [alreadyPassed, setAlreadyPassed] = useState(false);
    const [passedResult, setPassedResult] = useState(null);

    useEffect(() => {
        fetchTestById(id);
        setSelectedAnswers([]);
        setSubmitted(false);
        setResult(null);
        setAlreadyPassed(false);
    }, [id]);

    // Проверка, проходил ли пользователь этот тест ранее
    useEffect(() => {
        if (!user || !currentTest) return;

        const checkIfPassed = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await fetch(`${API}/tests/my-results`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const results = await res.json();

                const existing = results.find((r) => r.testId === parseInt(id));
                if (existing) {
                    setAlreadyPassed(true);
                    setPassedResult(existing);
                }
            } catch (err) {
                console.error(err);
            }
        };

        checkIfPassed();
    }, [user, currentTest, id]);

    if (alreadyPassed && passedResult) {
        return (
            <TestResult
                percentage={passedResult.percentage}
                score={passedResult.score}
                total={passedResult.totalQuestions}
                isRetake={true}
            />
        );
    }

    if (!currentTest) {
        return (
            <div className="text-center py-12 md:py-20 text-lg md:text-xl">
                Загрузка теста...
            </div>
        );
    }

    const handleAnswer = (questionIndex, optionIndex) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[questionIndex] = optionIndex;
        setSelectedAnswers(newAnswers);
    };

    const handleSubmit = async () => {
        if (selectedAnswers.length !== currentTest.Questions.length) {
            alert("Ответьте на все вопросы!");
            return;
        }

        setLoading(true);
        try {
            const res = await submitTest(id, selectedAnswers);
            setResult(res);
            setSubmitted(true);
            useTestStore.getState().fetchUserResults();
        } catch (err) {
            if (err.response?.data?.msg) {
                alert(err.response.data.msg);
            } else {
                alert("Ошибка при отправке теста");
            }
        } finally {
            setLoading(false);
        }
    };

    if (submitted && result) {
        return (
            <TestResult
                percentage={result.percentage}
                score={result.score}
                total={result.total}
            />
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    {currentTest.title}
                </h1>
                <p className="text-gray mt-2 text-sm sm:text-base">
                    {currentTest.description}
                </p>
            </div>

            <TestForm
                questions={currentTest.Questions}
                selectedAnswers={selectedAnswers}
                onAnswer={handleAnswer}
                onSubmit={handleSubmit}
                loading={loading}
            />
        </div>
    );
}