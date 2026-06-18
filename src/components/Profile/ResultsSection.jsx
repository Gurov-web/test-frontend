import { Link } from "react-router-dom";
import ResultCard from "./ResultCard";

export default function ResultsSection({ results, loading }) {
  if (loading) {
    return (
      <p className="text-center py-10 text-zinc-400">Загрузка результатов...</p>
    );
  }

  if (results.length === 0) {
    return (
      <div className="bg-[#20201E] border border-[#20201E] rounded p-8 md:p-12 text-center">
        <p className="text-lg sm:text-xl text-zinc-400">
          Вы ещё не прошли ни одного теста
        </p>
        <Link
          to="/tests"
          className="inline-block mt-6 py-2.5 px-5 rounded-md bg-primary text-[#1A1C1E] font-semibold hover:opacity-90 transition"
        >
          Перейти к тестам →
        </Link>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {results.map((result) => (
        <ResultCard key={result.id} result={result} />
      ))}
    </div>
  );
}
