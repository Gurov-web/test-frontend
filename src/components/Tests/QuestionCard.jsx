export default function QuestionCard({ question, qIndex, selectedAnswer, onSelect }) {
    return (
        <div className="border border-[#20201E] rounded-md p-4 sm:p-6 md:p-8">
            <p className="font-medium text-base sm:text-lg mb-4 sm:mb-6 text-white">
                {qIndex + 1}. {question.questionText}
            </p>

            {/* Блок с кодом — только для задач типа code и если код не пустой */}
            {question.type === "code" && question.codeSnippet?.trim() && (
                <div className="mb-6">
                    <div className="text-xs text-zinc-500 mb-2 font-mono">КОД:</div>
                    <pre className="bg-[#1A1C1E] border border-[#20201E] rounded-md p-4 overflow-x-auto font-mono text-sm leading-relaxed whitespace-pre-wrap">
            <code>{question.codeSnippet}</code>
          </pre>
                </div>
            )}

            <div className="grid grid-cols-1 gap-3">
                {question.options.map((option, optIndex) => (
                    <button
                        key={optIndex}
                        onClick={() => onSelect(qIndex, optIndex)}
                        className={`text-left px-4 py-3 sm:px-6 sm:py-4 rounded-md border transition-all cursor-pointer ${
                            selectedAnswer === optIndex
                                ? "border-primary bg-emerald-500/10"
                                : "border-zinc-700 hover:border-primary"
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}