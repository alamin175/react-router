import React from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';

const UserDetail = () => {
    const loader = useLoaderData()
    const {id,address,phone,username,name} = loader
    console.log(loader)
    const navigate = useNavigate()
    const handleback = ()=>{
        navigate(-1)
    }    
    return (
        <div>
            <h1>{name} </h1>
            <h4>Address: {address.street} </h4>
            <button onClick={handleback}>Go back</button>
        </div>
    );
};

export default UserDetail;