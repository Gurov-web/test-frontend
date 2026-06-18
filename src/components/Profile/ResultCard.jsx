export default function ResultCard({ result }) {
  return (
    <div className="bg-[#20201E] border border-[#20201E] rounded p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="flex-1">
        <h3 className="font-semibold text-lg sm:text-xl text-white">
          {result.Test?.title}
        </h3>
        <p className="text-zinc-400 text-xs sm:text-sm mt-1">
          {new Date(result.createdAt).toLocaleDateString("ru-RU")}
        </p>
      </div>

      <div className="flex items-center gap-6 md:gap-8">
        <div className="text-center">
          <div className="text-4xl sm:text-5xl font-bold text-primary">
            {result.percentage}
          </div>
          <div className="text-xs text-zinc-500 -mt-1">%</div>
        </div>

        <div className="text-sm text-zinc-400">
          {result.score} из {result.totalQuestions}
          <br />
          правильных ответов
        </div>
      </div>
    </div>
  );
}
