
import PageBanner from '../../Components/Others/Banner/PageBanner';
import AllCourses from '../../Components/Pages/Courses/AllCourses';

const Courses = () => {
    return (
        <div className='w-full'>
            <PageBanner title={"All Of Our Courses"} path={"/courses"} pathTitle={"Courses"}/>
            <AllCourses/>
        </div>
    );
};

export default Courses;