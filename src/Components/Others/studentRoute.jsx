import { BsBook, BsCheckCircle, BsHouseDoor } from "react-icons/bs";

const studentRoute = [
    {
        title: 'Dashboard',
        path: '/dashboard/overview',
        icon: <BsHouseDoor></BsHouseDoor>
    },
    {
        title: 'Running Course',
        path: '/dashboard/running-course',
        icon: <BsBook></BsBook>
    },
    {
        title: 'Completed Courses',
        path: '/dashboard/completed-courses',
        icon: <BsCheckCircle></BsCheckCircle>
    },
]

export default studentRoute;