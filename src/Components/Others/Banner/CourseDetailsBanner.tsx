

import { BsBook, BsPerson } from "react-icons/bs";
import { FaMedapps, FaRegClock, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CourseDetailsBanner = ({course}) => {
  const date = new Date(course?.createdAt).toLocaleDateString();
  return (
    <div className="w-full h-[40vh] sm:h-[35vh] text-white bg-accent bg-opacity-100">
      <div className="max-width p-5 sm:py-10 flex flex-col justify-between  h-full ">
        <div>
          <div className="text-xs sm:text-sm"><Link to={"/"} className="hover:underline">Home</Link> / <Link to={"/courses"} className="hover:underline">Courses</Link> / <span className="hover:underline cursor-pointer">{course?.title}</span></div>
          <h1 className="text-lg md:text-xl font-bold lg:text-3xl mt-3 sm:mt-5">
          Details - {course?.title}
          </h1>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="flex items-center gap-1.5">
            <Rating
              emptySymbol={<FaRegStar className="text-yellow-400" />}
              fullSymbol={<FaStar className="text-yellow-400" />}
              fractions={2}
              initialRating={course?.rating?.total_rating}
              readonly
            />
            <p>({course?.rating?.total_rating})</p>
            </div>
            | <p>Published: {date}</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-7 ">
            <div className="flex items-center gap-1 md:gap-2">
              <div className="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] rounded-full overflow-hidden border-2 border-secondary">
                <img
                  src={course?.instructor?.profileImg}
                  alt="profile"
                  width={200}
                  height={200}
                  className=""
                ></img>
              </div>
              <div className="flex flex-col">
                <h4 className=" text-sm md:text-base font-semibold">
                  {course?.instructor?.name}
                </h4>
              </div>
            </div>
            <p className="hidden sm:inline-block">| </p>
            <div className="flex items-center flex-wrap gap-1.5 md:gap-3  h-full ">
              <div className="flex items-center gap-2 md:gap-3 ">
                <BsBook className="w-4 h-4 md:w-5 md:h-5 "></BsBook>
                <p className="text-sm md:text-base font-medium">{course?.totalLessons} Lessons</p>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <FaRegClock className="w-4 h-4 md:w-5 md:h-5"></FaRegClock>
                <p className="text-sm md:text-base font-medium">{course?.duration}</p>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <FaMedapps className="w-4 h-4 md:w-5 md:h-5"></FaMedapps>
                <p className="text-sm md:text-base font-medium">{course?.type}</p>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <BsPerson className="w-4 h-4 md:w-5 md:h-5"></BsPerson>
                <p className="text-sm md:text-base font-medium">{course?.totalEnrolled}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsBanner;
