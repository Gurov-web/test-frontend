import {useEffect} from "react";
import {useTestStore} from "../store/testStore";
import HeroSection from "../components/Home/HeroSection";
import PopularTestsSection from "../components/Home/PopularTestsSection";
import Features from "../components/Home/Features.jsx";

export default function Home() {
    const {tests, fetchTests} = useTestStore();

    useEffect(() => {
        fetchTests();
    }, []);

    return (
        <div className="flex flex-col lg:flex-row">
            <main className="px-4 py-8 md:px-8 lg:p-12.5 w-full">
                <HeroSection/>
                <PopularTestsSection tests={tests.slice(0, 3)}/>
                <Features/>

            </main>
        </div>
    );
}
