import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
    jon : {
        name: 'jon',
        desc: 'First Member'
    },
    lisa : {
        name: 'lisa',
        desc: 'Second Member'
    }
}


const Profile = () => {
    // debugger
    const { username } = useParams();
    const profile = data[username];

    if(!profile) {
        return <div>Not Found!</div>
    }

    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.desc}</p>
        </div>
    );
};

export default Profile;