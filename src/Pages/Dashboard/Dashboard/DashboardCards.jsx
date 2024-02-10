import React from 'react';
import {
  BsBarChartFill,
  BsBarChartSteps,
  BsFillBookFill,
  BsGraphUpArrow,
  BsListCheck,
  BsQuestionCircle,
} from "react-icons/bs";
import OverviewCard from '../../../Components/Others/Banner/OverviewCard';

const DashboardCards = () => {
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
            data={0}
          ></OverviewCard>
          <OverviewCard
            classes={"bg-primary"}
            iconBg={"bg-primary"}
            title={"Completed Courses"}
            icon={
              <BsBarChartSteps className="text-primary text-2xl md:text-4xl"></BsBarChartSteps>
            }
            data={0}
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
          <OverviewCard
            classes={"bg-primary"}
            iconBg={"bg-primary"}
            title={"New Announcements"}
            icon={
              <BsGraphUpArrow className="text-primary text-2xl md:text-4xl"></BsGraphUpArrow>
            }
            data={0}
          ></OverviewCard>
          <OverviewCard
            classes={"bg-secondary"}
            iconBg={"bg-secondary"}
            title={"New Assignments"}
            icon={
              <BsListCheck className="text-primary text-2xl md:text-4xl"></BsListCheck>
            }
            data={0}
          ></OverviewCard>
          <OverviewCard
            classes={"bg-primary"}
            iconBg={"bg-primary"}
            title={"Coming Soon"}
            icon={
              <BsBarChartFill className="text-primary text-2xl md:text-4xl"></BsBarChartFill>
            }
            // data={0}
          ></OverviewCard>
        </div>
      </div>
    );
};

export default DashboardCards;