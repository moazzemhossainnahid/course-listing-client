import React from 'react';
import {
  BsBarChartSteps,
  BsFillBookFill,
  BsQuestionCircle,
} from "react-icons/bs";
import OverviewCard from '../../../Components/Others/Banner/OverviewCard';
import useProfile from '../../../Hooks/useProfile';

const DashboardCards = () => {

  const [profile] = useProfile();


  const courses = profile?.courses;

    return (
        <div className="w-full h-full bg-gray-50 rounded-md px-5 py-4 md:px-6 md:py-5">
        <div className="w-full h-fit grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 xl:gap-7">
          <OverviewCard
            iconBg={"bg-secondary"}
            classes={"bg-secondary"}
            title={"Enrolled Courses"}
            icon={
              <BsFillBookFill className="text-primary text-2xl md:text-4xl"></BsFillBookFill>
            }
            data={courses?.length || 0}
          ></OverviewCard>
          <OverviewCard
            classes={"bg-primary"}
            iconBg={"bg-primary"}
            title={"Completed Courses"}
            icon={
              <BsBarChartSteps className="text-primary text-2xl md:text-4xl"></BsBarChartSteps>
            }
            data={courses?.length || 0}
          ></OverviewCard>
          <OverviewCard
            classes={"bg-secondary"}
            iconBg={"bg-secondary"}
            title={"Completed Quiz"}
            icon={
              <BsQuestionCircle className="text-primary text-2xl md:text-4xl"></BsQuestionCircle>
            }
            data={0}
          ></OverviewCard>
        </div>
      </div>
    );
};

export default DashboardCards;