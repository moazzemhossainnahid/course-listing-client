import { useParams } from "react-router-dom";
import { useGetSingleCourseQuery } from "../../../../Redux/api/apiSlice";
import Spinner from "../../../Others/Spinner/Spinner";
import CourseDetailsBanner from "../../../Others/Banner/CourseDetailsBanner";
import CourseDetailsContainer from "./CourseDetailsContainer";


const SingleCourseDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleCourseQuery(id);

    if (isLoading)
        return (
            <div className="h-[80vh] flex items-center justify-center">
                <Spinner />
            </div>
        );

    const course = data;

    return (
        <div>
            {/* banner */}
            <CourseDetailsBanner course={course}></CourseDetailsBanner>
            {/* course details container */}
            <CourseDetailsContainer course={course}></CourseDetailsContainer>
        </div>
    );
};

export default SingleCourseDetails;