import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const useProfile = () => {
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState([]);
    const email = user?.email;
 
    useEffect(() => {
        fetch(`https://course-listing-server.vercel.app/users/${email}`, {
            method: "GET",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            }
        })
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [email]);

    // console.log(profile);

    return [profile];
};

export default useProfile;