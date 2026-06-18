import {Link} from "react-router-dom";

export default function TestCard({test}) {

    return (
        <div className="bg-[#20201E] rounded-xl p-6 md:p-8 lg:p-12.5 space-y-4 md:space-y-7.5">
            <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-md bg-[#262626] w-fit">
                    <p className="font-bold text-primary">&lt;/&gt;</p>
                </div>
                <p className="py-1.5 px-2 bg-[#131313] rounded-md text-xs md:text-sm">
                    {test.questionCount} ВОПРОСОВ
                </p>
            </div>
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-medium">
                {test.title}
            </h3>
            <p className="line-clamp-2 text-sm md:text-base">{test.description}</p>
            <p className="px-4 py-2 md:px-5 md:py-2.5 border border-gray w-fit rounded-md text-xs md:text-sm">
                ТЕОРИЯ
            </p>
            <Link
                to={`/test/${test.id}`}
                className="py-3 md:py-4 bg-[#A0FFB910] text-primary flex gap-2.5 items-center justify-center border border-primary rounded-md hover:bg-[#A0FFB930] duration-200 text-sm md:text-base"
            >
                Пройти тест →
            </Link>
        </div>
    );
}
