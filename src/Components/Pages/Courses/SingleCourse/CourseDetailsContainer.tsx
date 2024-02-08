

const CourseDetailsContainer = ({course}) => {
  return (
    <div className="h-fit w-full max-width py-8 lg:py-16 flex flex-col md:flex-row gap-5">
      {/* course description and content */}
      <div className="w-full  px-2 sm:px-2.5 md:px-3 lg:px-4 shadow rounded py-3">
        <h1 className="text-lg md:text-xl  font-semibold text-dark border-b pb-2">
          Course Description
        </h1>
        <p className="text-sm py-2 text-gray-500">
          {course?.details?.description}
        </p>
        <p className="text-sm py-2 text-gray-500">
          {course?.details?.for_whom}
        </p>
        <p className="text-sm py-2 text-gray-500">
          {course?.details?.certificate_details}
        </p>
      </div>
      {/* course info and categories */}
      {/* <CourseInfo course={course}></CourseInfo> */}
    </div>
  );
};

export default CourseDetailsContainer;
