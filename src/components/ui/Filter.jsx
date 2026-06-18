// Filter.jsx
import React from "react";

export default function Filter({ selectedCategory, setCategory }) {
  const categories = [
    { id: 1, name: "Frontend" },
    { id: 2, name: "Backend" },
    { id: 3, name: "DevOps" },
  ];

  const isActive = (categoryName) => selectedCategory === categoryName;

  return (
    <aside className="w-full lg:w-92 py-5 px-4 lg:pl-12">
      <div className="mb-4 lg:mb-8">
        <h2 className="text-lg sm:text-[20px] font-bold text-primary">КАТЕГОРИИ</h2>
        <p className="text-sm sm:text-[16px]">Тесты по фильтрам</p>
      </div>

      <div className="w-full">
        <div className="flex lg:hidden gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setCategory("all")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap shrink-0 transition-all duration-200 ${
              isActive("all")
                ? "text-primary bg-[#1a1a1a] border-b-2 border-primary"
                : "hover:text-gray-200 hover:bg-[#1a1a1a]"
            }`}
          >
            Все тесты
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCategory(category.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap shrink-0 transition-all duration-200 ${
                isActive(category.name)
                  ? "text-primary bg-[#1a1a1a] border-b-2 border-primary"
                  : "hover:text-gray-200 hover:bg-[#1a1a1a]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex flex-col space-y-1">
          <button
            onClick={() => setCategory("all")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer w-full ${
              isActive("all")
                ? "text-primary bg-[#1a1a1a] border-r-2 border-primary transition-all duration-200 ease-in-out"
                : "hover:text-gray-200 hover:bg-[#1a1a1a] transition-all duration-200 ease-in-out"
            }`}
          >
            Все тесты
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCategory(category.name)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer w-full ${
                isActive(category.name)
                  ? "text-primary bg-[#1a1a1a] border-r-2 border-primary transition-all duration-200 ease-in-out"
                  : "hover:text-gray-200 hover:bg-[#1a1a1a] transition-all duration-200 ease-in-out"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}