export default function TestCardAdmin({ test, onEdit, onDelete }) {
    return (
        <div className="bg-[#262626] rounded-md p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-semibold wrap-break-words">
                    {test.title}
                </h3>
                <div className="flex gap-3 sm:gap-5 justify-end">
                    <button
                        onClick={() => onEdit(test)}
                        className="hover:text-white text-sm cursor-pointer"
                    >
                        Редактировать
                    </button>
                    <button
                        onClick={() => onDelete(test.id)}
                        className="text-red-400 hover:text-red-500 text-sm cursor-pointer"
                    >
                        Удалить
                    </button>
                </div>
            </div>
            <p className="text-zinc-400 text-sm mt-1 wrap-break-words">
                {test.description}
            </p>
            <p className="text-xs mt-4 text-zinc-500">
                {test.Questions.length} вопросов
            </p>
        </div>
    );
}