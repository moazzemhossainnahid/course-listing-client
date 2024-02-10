import { useState } from "react";
import { useGetAllCoursesQuery } from "../../../Redux/api/apiSlice";
import SearchBar from "../../Others/SearchBar/SearchBar";
import Spinner from "../../Others/Spinner/Spinner";
import CourseCard from "./CourseCard";

const AllCourses = () => {

    const { data, isLoading } = useGetAllCoursesQuery({});
    const [searchKey, setSearchKey] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);

    if (isLoading) {
        return <div className="h-auto w-full flex items-center justify-center"><Spinner /></div>;
    }

    const courses = data;

    // console.log(courses);

    
  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for book by category
  const handleSearchResults = () => {
    // console.log(searchKey.length);
    if (searchKey.length > 0) {
      const result = courses?.filter((course) =>
        course.category.toLowerCase().includes(searchKey.toLowerCase().trim()) ||
        course.title.toLowerCase().includes(searchKey.toLowerCase().trim())
      );
      setFilteredCourses(result);
    } else {
      setFilteredCourses(courses);
    }

  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setSearchKey('');
    // console.log("clear");
    setFilteredCourses(courses);
  };


      // Load Courses By Filter Type
      let loadCourses;

      if (filteredCourses?.length > 0) {
        loadCourses = filteredCourses
      }
      else {
        loadCourses = courses
      }
  

    return (
        <div className="w-full">
            <div className="w-full h-full mt-8 sm:mt-0 relative">
                {/* top filter section in cards container */}
                <div className="w-full h-fit px-2 md:px-3 flex items-center py-2 md:py-3 justify-between  shadow">
                    <h4 className="text-xs sm:text-sm lg:text-base font-medium text-gray-500">
                        Showing courses {loadCourses?.length}
                    </h4>
                    <div className="flex items-center gap-3">
                        {/* Search Bar */}
                        <SearchBar
                            value={searchKey}
                            clearSearch={handleClearSearch}
                            formSubmit={handleSearchBar}
                            handleSearchKey={(e) => setSearchKey(e.target.value)}
                        />

                    </div>
                </div>
                {/* all courses card render here */}
                <div
                    className={`w-full h-full my-5 px-3 md:px-5 z-10 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 min-h-[30vh] gap-5 md:gap-7 relative ${courses?.length === 0 && "md:min-h-[550px]"
                        }`}
                >
                    {loadCourses?.map((course) => (
                        <CourseCard key={course?._id} course={course}></CourseCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllCourses;