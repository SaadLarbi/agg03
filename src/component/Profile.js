import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import JSONPretty from 'react-json-pretty';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <div className="m-3">            
           <a href="/menu"> Bienvenu</a>
            <h3>{user.given_name} {user.family_name}</h3>
            {/* <img src={user.picture} alt={user.name} /> */}
            {/* {JSON.stringify(user, null, 2)} */}
            {/* <JSONPretty data={user} /> */}
        </div>
        )
    )
}

export default Profile