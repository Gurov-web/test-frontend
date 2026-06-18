export default function ResultCard({ result }) {
  return (
    <div className="bg-[#20201E] border border-zinc-800 rounded p-6">
      <div className="flex justify-between">
        <h3 className="font-medium">{result.Test.title}</h3>
        <span className="text-primary font-bold text-xl">
          {result.percentage}%
        </span>
      </div>
      <p className="text-sm text-zinc-400 mt-2">
        {result.score} из {result.totalQuestions} •{" "}
        {new Date(result.createdAt).toLocaleDateString("ru-RU")}
      </p>
    </div>
  );
}
