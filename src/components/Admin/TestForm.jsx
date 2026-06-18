import QuestionEditor from "./QuestionEditor";

export default function TestForm({
                                     editingTest,
                                     title,
                                     setTitle,
                                     description,
                                     setDescription,
                                     category,
                                     setCategory,
                                     questions,
                                     onAddQuestion,
                                     onRemoveQuestion,
                                     onQuestionChange,
                                     onOptionChange,
                                     onCorrectIndexChange,
                                     onSave,
                                     onCancel,
                                 }) {
    return (
        <form
            onSubmit={onSave}
            className="rounded-md p-4 sm:p-6 lg:p-8 mb-12 border border-[#20201E]"
        >
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                {editingTest ? "Редактировать тест" : "Создать новый тест"}
            </h2>

            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название теста"
                className="w-full py-3 px-4 sm:py-4 sm:px-5 bg-[#1A1C1E] rounded-md outline-none mb-4"
                required
            />

            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Категория"
                className="w-full py-3 px-4 sm:py-4 sm:px-5 bg-[#1A1C1E] rounded-md outline-none mb-4"
                required
            />

            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Описание теста"
                className="w-full py-3 px-4 sm:py-4 sm:px-5 bg-[#1A1C1E] rounded-md outline-none mb-4"
            />

            <h3 className="font-medium mb-4">Вопросы</h3>

            {questions.map((q, qIndex) => (
                <QuestionEditor
                    key={qIndex}
                    q={q}
                    qIndex={qIndex}
                    onRemove={onRemoveQuestion}
                    onQuestionChange={onQuestionChange}
                    onOptionChange={onOptionChange}
                    onCorrectIndexChange={onCorrectIndexChange}
                />
            ))}

            <button
                type="button"
                onClick={onAddQuestion}
                className="text-primary text-sm underline cursor-pointer"
            >
                + Добавить вопрос
            </button>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-md bg-primary text-[#1A1C1E] font-semibold cursor-pointer"
                >
                    {editingTest ? "Сохранить изменения" : "Создать тест"}
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="w-full py-3 px-5 rounded-md bg-[#1A1C1E] text-primary font-semibold cursor-pointer"
                >
                    Отмена
                </button>
            </div>
        </form>
    );
}