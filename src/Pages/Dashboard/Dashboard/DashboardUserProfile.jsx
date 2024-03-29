import { LuBookOpenCheck } from "react-icons/lu";
import ProfilePhoto from "../../../Components/Others/UI/ProfilePhoto";
import DashboardProfileButton from "../../../Components/Others/UI/DashboardProfileButton";
const DashboardUserProfile = ({ user }) => {
  return (
    <div className="bg-[#371e7c] py-5 border border-slate-200 rounded-xl">
      <div className="px-6 md:px-7 2xl:px-8 text-white  mx-auto">
        {/* info side  */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  ">
            {user?.displayName}
          </h1>
          <p className="text-sm font-semibold italic">
            <span className=" px-1 py-0.5 bg-purple-500 bg-opacity-10">
              {" "}
              {user?.email}
            </span>
          </p>
          <h2 className="text-xl md:text-2xl  font-bold ">
            <span className=" py-1 px-2 bg-purple-800">
              {"Student"}
            </span>
          </h2>

          <div className="lg:flex  item-center justify-between pt-5">
            <div className="flex items-center gap-x-5">
              <ProfilePhoto image={user?.photoURL || "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-man-avatar-with-circle-frame-vector-ilustration-png-image_6110328.png"} />
              {(user?.role === "instructor" || user?.role === "super_admin") && (
                <div className="italic">
                  <h5 className="font-lg font-semibold mb-2">Total Rating</h5>
                  <div className="flex item-center  gap-x-1">
                    <p className="mt-[-2px] font-bold">(346)</p>
                  </div>
                </div>
              )}
              {user?.role === "student" && (
                <div className="italic flex items-center gap-x-5">
                  <div>
                    <h5 className="font-lg font-semibold ">Enroll Courses</h5>
                    <div className="flex items-center gap-x-2 font-bold">
                      <LuBookOpenCheck />
                      <p className=" ">{user?.enrolledCourses?.length}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4">
              {user?.role === "student" && (
                <DashboardProfileButton
                  text="Go to course"
                  url="/dashboard/running-course"
                />
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUserProfile;
