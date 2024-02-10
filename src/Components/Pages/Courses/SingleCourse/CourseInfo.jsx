import {
    BsFillBookFill,
    BsFillClockFill,
    BsFillPersonFill,
    BsFilterCircle,
    BsTranslate,
    BsUnlockFill,
} from "react-icons/bs";
import { FaRegWindowRestore, FaVideo } from "react-icons/fa";

import ReactPlayer from "react-player";
import SingleInfo from "../../../Others/SingleInfo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../../firebase.init";
import Swal from "sweetalert2";
import useProfile from "../../../../Hooks/useProfile";

const CourseInfo = ({ course }) => {
    const [user] = useAuthState(auth);
    const [profile] = useProfile();
    const email = user?.email;

    console.log(email);

    // handle enroll button
    const handleEnrollBtn = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm it!"
          }).then((result) => {
            if (result.isConfirmed) {
                const enrolledCourse = [course]

                if (email) {
                    fetch(`https://course-listing-server.vercel.app/users/${email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem("accessToken")}`,
                        },
                        body: JSON.stringify({ courses: enrolledCourse })
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            Swal.fire({
                                title: "Success!",
                                text: "Your have Successfully Purchased this Course",
                                icon: "success"
                              });
                        })
                }
            }
          });
    };


    const myCourse = profile?.courses?.find(c => c?._id === course?._id);

    console.log("myCourse", myCourse);

    return (
        <div className="h-full w-full md:max-w-[300px] lg:max-w-[400px] rounded shadow">
            {/* course video */}
            <div className="h-[230px] w-full rounded overflow-hidden">
                <ReactPlayer
                    url={course?.introvdo}
                    controls
                    width="100%"
                    height="100%"
                />
            </div>
            {/* course info */}
            <div className="px-2 sm:px-2.5 md:px-4 py-3 mt-2">
                <div className="flex items-center gap-3">
                    
                    {myCourse?._id === course?._id ? <button disabled className="text-white disabled bg-info bg-opacity-50 font-medium text-sm lg:text-base px-3 py-1.5 lg:py-2 lg:px-4 checkout-gradient rounded hover:bg-opacity-80 ">
                        Already Enrolled
                    </button> : <button onClick={handleEnrollBtn} className="text-white bg-secondary font-medium text-sm lg:text-base px-3 py-1.5 lg:py-2 lg:px-4 checkout-gradient rounded hover:bg-opacity-80 ">
                        Enroll Now
                    </button>}
                    <div className="w-fit flex items-center gap-2">
                        {course?.discountPrice > 0 && (
                            <p className="font-medium text-lg text-gray-600">
                                <del>&#2547; {course?.price}</del>
                            </p>
                        )}
                        <p className="font-semibold text-base md:text-xl text-secondary">
                            &#2547; {course?.price - course?.discountPrice}
                        </p>
                    </div>
                </div>
                <h4 className="text-lg font-semibold py-3 mt-2">Course Info:</h4>
                <div className=" w-full space-y-2.5 md:space-y-4 pb-4 pt-1 sm:px-2">
                    <SingleInfo
                        icon={
                            <FaRegWindowRestore className="w-4 h-4 text-accent"></FaRegWindowRestore>
                        }
                        title={"Category"}
                        value={course?.category}
                    ></SingleInfo>
                    <SingleInfo
                        icon={
                            <BsTranslate className="w-4 h-4 text-accent"></BsTranslate>
                        }
                        title={"Language"}
                        value={course?.language}
                    ></SingleInfo>
                    <SingleInfo
                        icon={
                            <BsFillBookFill className="w-4 h-4 text-accent"></BsFillBookFill>
                        }
                        title={"Total Modules"}
                        value={course?.totalLessons + " modules"}
                    ></SingleInfo>
                    <SingleInfo
                        icon={<FaVideo className="w-4 h-4 text-accent"></FaVideo>}
                        title={"Total Videos"}
                        value={"32 " + " videos"}
                    ></SingleInfo>
                    <SingleInfo
                        icon={
                            <BsFillClockFill className="w-4 h-4 text-accent"></BsFillClockFill>
                        }
                        title={"Duration"}
                        value={`${course?.duration} Months`}
                    ></SingleInfo>
                    <SingleInfo
                        icon={
                            <BsUnlockFill className="w-4 h-4 text-accent"></BsUnlockFill>
                        }
                        title={"Accessible"}
                        value={course?.accessibility}
                    ></SingleInfo>
                    <SingleInfo
                        icon={
                            <BsFillPersonFill className="w-4 h-4 text-accent"></BsFillPersonFill>
                        }
                        title={"Total Enrolled"}
                        value={course?.totalEnrolled + " students"}
                    ></SingleInfo>
                    <SingleInfo
                        icon={
                            <BsFilterCircle className="w-4 h-4 text-accent"></BsFilterCircle>
                        }
                        title={"Type"}
                        value={course?.type}
                    ></SingleInfo>
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;
