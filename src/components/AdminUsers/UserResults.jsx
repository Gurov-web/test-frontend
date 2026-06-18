import ResultCard from "./ResultCard";
import EmptyState from "./EmptyState";

export default function UserResults({ user, results, loading }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Результаты сотрудника:{" "}
        <span className="text-primary">{user.username}</span>
      </h2>
      {loading ? (
        <p>Загрузка...</p>
      ) : results.length === 0 ? (
        <EmptyState message="У этого сотрудника пока нет результатов" />
      ) : (
        <div className="space-y-4">
          {results.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))}
        </div>
      )}
    </div>
  );
}
