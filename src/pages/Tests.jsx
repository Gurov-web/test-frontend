import {useEffect, useState} from "react";
import {useTestStore} from "../store/testStore";
import Filter from "../components/ui/Filter";
import SearchBar from "../components/Tests/SearchBar";
import TestsList from "../components/Tests/TestsList";

export default function Tests() {
    const {tests, fetchTests, loading} = useTestStore();
    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchTests();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-12 md:py-20 text-lg md:text-xl">
                Загрузка тестов...
            </div>
        );
    }

    const filteredTests = tests.filter((test) => {
        const matchCategory =
            category.toLowerCase() === "all"
                ? true
                : test.category.toLowerCase() === category.toLowerCase();
        const matchSearch =
            search.trim() === ""
                ? true
                : test.title.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <div className="flex flex-col lg:flex-row">
            <Filter selectedCategory={category} setCategory={setCategory}/>
            <div className="px-4 py-8 md:px-8 lg:p-12.5 w-full">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                    Все тесты
                </h1>
                <SearchBar
                    value={search}
                    onChange={setSearch}
                    placeholder="Поиск технологий (Python, JavaScript, SQL...)"
                />
                <TestsList tests={filteredTests}/>
            </div>
        </div>
    );
}
