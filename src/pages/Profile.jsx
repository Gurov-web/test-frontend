import {useEffect} from "react";
import {useTestStore} from "../store/testStore";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ResultsSection from "../components/Profile/ResultsSection";

export default function Profile() {
    const {userResults, fetchUserResults, loading} = useTestStore();

    useEffect(() => {
        fetchUserResults();
    }, []);

    return (
        <div className="px-4 py-8 md:px-8 lg:p-12.5 w-full">
            <ProfileHeader/>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                Результаты тестов
            </h2>
            <ResultsSection results={userResults} loading={loading}/>
        </div>
    );
}
