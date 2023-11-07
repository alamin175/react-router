import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,company,address,phone,username,name} = user
    return (
        <div>
          <h1>{name} </h1>  
          <h4>Company:{company.name} </h4>
          <p>UserName:{username} </p>
          <Link to = {`/users/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;