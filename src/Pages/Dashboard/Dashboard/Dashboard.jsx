import React from 'react';
import DashboardUserProfile from './DashboardUserProfile';
import useProfile from '../../../Hooks/useProfile';
import SidebarUser from '../../../Components/Others/UI/SidebarUser';
import studentRoute from '../../../Components/Others/studentRoute';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [profile] = useProfile();

    return (
        <div className="pb-20">
            <div
                className="w-full h-[22vh] bg-opacity-50"
                style={{ background: "linear-gradient(270deg, #9D44C0 0%, #4D2DB7 100%)" }}
            >
            </div>
            <div className="max-width mt-[-14vh]">
                <DashboardUserProfile user={profile} />
            </div>
            <div className="max-width rounded mt-8 md:mt-10 flex flex-col md:flex-row gap-5 md:gap-8 min-h-fit h-full">
                {/* sidebar */}
                <SidebarUser user={profile} routes={studentRoute}></SidebarUser>
                {/* children here */}
                <div className="grow h-auto"><Outlet /></div>
            </div>
        </div>
    );
};

export default Dashboard;