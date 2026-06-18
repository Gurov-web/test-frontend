import QuestionCard from "./QuestionCard";

export default function TestForm({ questions, selectedAnswers, onAnswer, onSubmit, loading }) {
    return (
        <>
            <div className="space-y-8 md:space-y-10">
                {questions.map((q, qIndex) => (
                    <QuestionCard
                        key={q.id}
                        question={q}
                        qIndex={qIndex}
                        selectedAnswer={selectedAnswers[qIndex]}
                        onSelect={onAnswer}
                    />
                ))}
            </div>

            <button
                onClick={onSubmit}
                disabled={loading}
                className="w-full py-3 rounded-md bg-primary text-[#1A1C1E] font-semibold cursor-pointer mt-5"
            >
                {loading ? "Отправка..." : "Завершить тест"}
            </button>
        </>
    );
}