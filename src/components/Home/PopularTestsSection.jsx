import { Link } from "react-router-dom";
import TestCard from "../common/TestCard";

export default function PopularTestsSection({ tests }) {
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Популярные тесты
        </h2>
        <Link
          to="/tests"
          className="text-primary text-lg md:text-xl hover:underline"
        >
          Смотреть все
        </Link>
      </div>

      {tests.length === 0 ? (
        <p className="text-lg md:text-xl">Тесты не найдены</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-9">
          {tests.map((test) => (
            <TestCard key={test.id} test={test} />
          ))}
        </div>
      )}
    </>
  );
}
