import { toast } from 'react-toastify';

import { Link, NavLink, useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';


const Authentication = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const handleSignOut = async () => {
        await signOut(auth)
            .then(() => {
                localStorage.removeItem('accessToken');
                navigate('/signin');
                toast.success("User SignOut Successfully", { position: "top-left" });

            })
    }
    return (
        <div>
            {
                // user ? <button onClick={handleSignOut} >SignOut</button> : <NavLink to="/signin">SignIn Your Account</NavLink>
                user &&
                <div className="dropdown dropdown-end">
                    <div className="flex w-44 border border-x-primary mx-auto rounded px-5 py-1 items-center justify-between ">
                        <div className="">
                            <h3 className="text-primary text-xs">{user?.displayName?.slice(0, 10)}</h3>
                        </div>
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">

                                <img src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-man-avatar-with-circle-frame-vector-ilustration-png-image_6110328.png" alt='' />

                            </div>
                        </label>
                    </div>
                    <ul tabIndex="0" className="mt-3 p-2 gap-1 shadow menu menu-compact dropdown-content text-gray-600 bg-slate-200 rounded-box w-52">
                        <li> <Link to="/profile" className="justify-between text-sm"> Profile <span className="badge">New</span> </Link> </li>
                        {
                            user && <li> <NavLink reloadDocument className={({ isActive }) => (isActive ? 'text-[#0f52ba] duration-300 border-b-2 border-[#0f52ba]' : 'text-gray-800 duration-100 text-sm')} to="/dashboard">Dashboard</NavLink></li>
                        }
                        <li><button onClick={handleSignOut}>Sign Out</button></li>
                    </ul>
                </div>
                // : <button className='bg-primary text-white hover:bg-secondary px-5 py-2 rounded fony-semibold'><NavLink to="/signin">SignIn Your Account</NavLink></button>
            }

        </div>
    );
};

export default Authentication;
