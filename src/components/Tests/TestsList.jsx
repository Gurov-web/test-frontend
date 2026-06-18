import TestCard from "../common/TestCard";

export default function TestsList({ tests }) {
  if (tests.length === 0) {
    return <p className="text-lg md:text-xl">Тесты не найдены</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tests.map((test) => (
        <TestCard key={test.id} test={test} />
      ))}
    </div>
  );
}
