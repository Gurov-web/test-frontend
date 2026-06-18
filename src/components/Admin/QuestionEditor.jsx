export default function QuestionEditor({
                                           q,
                                           qIndex,
                                           onRemove,
                                           onQuestionChange,
                                           onOptionChange,
                                           onCorrectIndexChange,
                                       }) {
    return (
        <div className="mb-4 p-4 sm:p-6 border border-[#20201E] rounded-md relative">
            <button
                type="button"
                onClick={() => onRemove(qIndex)}
                className="text-red-400 hover:text-red-500 text-xl absolute top-4 right-4 sm:static sm:float-right sm:mb-5"
            >
                Удалить
            </button>

            {/* Тип вопроса */}
            <select
                value={q.type}
                onChange={(e) => onQuestionChange(qIndex, "type", e.target.value)}
                className="w-full py-3 px-4 sm:py-4 sm:px-5 bg-[#1A1C1E] rounded-md outline-none mb-4 mt-8 sm:mt-0"
            >
                <option value="multiple">Обычный вопрос</option>
                <option value="code">Задача с кодом</option>
            </select>

            <input
                type="text"
                value={q.questionText}
                onChange={(e) => onQuestionChange(qIndex, "questionText", e.target.value)}
                placeholder={`Вопрос ${qIndex + 1}`}
                className="w-full py-3 px-4 sm:py-4 sm:px-5 bg-[#1A1C1E] rounded-md outline-none mb-4"
                required
            />

            {/* Поле для кода, показывается только для code */}
            {q.type === "code" && (
                <textarea
                    value={q.codeSnippet || ""}
                    onChange={(e) => onQuestionChange(qIndex, "codeSnippet", e.target.value)}
                    placeholder="Вставьте код здесь..."
                    className="w-full py-3 px-4 sm:py-4 sm:px-5 bg-[#1A1C1E] rounded-md outline-none mb-4 font-mono h-48"
                />
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {q.options.map((opt, optIndex) => (
                    <div key={optIndex} className="flex items-center gap-3 accent-primary">
                        <input
                            type="radio"
                            checked={q.correctIndex === optIndex}
                            onChange={() => onCorrectIndexChange(qIndex, optIndex)}
                        />
                        <input
                            type="text"
                            value={opt}
                            onChange={(e) => onOptionChange(qIndex, optIndex, e.target.value)}
                            placeholder={`Вариант ${optIndex + 1}`}
                            className="flex-1 py-3 px-4 sm:py-4 sm:px-5 bg-[#1A1C1E] rounded-md outline-none mb-4"
                            required
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}