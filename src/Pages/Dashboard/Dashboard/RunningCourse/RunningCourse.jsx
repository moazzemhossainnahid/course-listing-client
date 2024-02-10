import React from 'react';
import { useGetAllCoursesQuery } from '../../../../Redux/api/apiSlice';
import Spinner from '../../../../Components/Others/Spinner/Spinner';
import RunningCourseRow from './RunningCourseRow';
import useProfile from '../../../../Hooks/useProfile';

const RunningCourse = () => {

    const [profile] = useProfile();


    const courses = profile?.courses;


    return (
        <div className="w-full h-full rounded-md bg-gray-50 p-4">
        <h1 className="text-lg  font-semibold text-secondary">
          Running Course ({courses?.length || 0})
        </h1>
        <div className="overflow-x-auto mt-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Finished Modules</th>
                <th>Remaining Modules</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses?.map((course, index) => (
                <RunningCourseRow
                  key={course?._id}
                  index={index}
                  course={course?.course}
                />
              ))}
            </tbody>
          </table>
          {courses?.length === 0 && (
            <div className="mt-10 italic text-center text-secondary text-lg font-medium">
              No courses found!
            </div>
          )}
        </div>
      </div>
    );
};

export default RunningCourse;