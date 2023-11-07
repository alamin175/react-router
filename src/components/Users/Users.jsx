import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const data = useLoaderData()
    return (
        <div>
          <h1>Users: {data.length}  </h1>
          <div>
            {
                data.map(user=> <User key={user.id} user={user}></User>)
            }
          </div>
        </div>
    );
};

export default Users;