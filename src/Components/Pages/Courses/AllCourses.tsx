import { useGetAllCoursesQuery } from "../../../Redux/api/apiSlice";
import Spinner from "../../Others/Spinner/Spinner";
import CourseCard from "./CourseCard";

const AllCourses = () => {

    const { data, isLoading } = useGetAllCoursesQuery({});

    if (isLoading) {
        return <div className="h-auto w-full flex items-center justify-center"><Spinner /></div>;
    }

    const courses = data?.data;

    console.log(courses);

    return (
        <div className="w-full">
            <div className="w-full h-full mt-8 sm:mt-0 relative">
                {/* top filter section in cards container */}
                <div className="w-full h-fit px-2 md:px-3 flex items-center py-2 md:py-3 justify-between  shadow">
                    <h4 className="text-xs sm:text-sm lg:text-base font-medium text-gray-500">
                        Showing courses {courses?.length}
                    </h4>
                    <div className="flex items-center gap-3">
                        <h4 className="text-xs sm:text-sm lg:text-base font-medium text-gray-500">
                            Sort by:{" "}
                        </h4>
                        {/* <SelectOption></SelectOption> */}
                    </div>
                </div>
                {/* all courses card render here */}
                <div
                    className={`w-full h-full my-5 px-3 md:px-5 z-10 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 min-h-[30vh] gap-5 md:gap-7 relative ${courses?.length === 0 && "md:min-h-[550px]"
                        }`}
                >
                    {courses?.map((course) => (
                        <CourseCard key={course?._id} course={course}></CourseCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllCourses;