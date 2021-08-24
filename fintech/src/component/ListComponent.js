import React, { useState } from 'react'

const ListComponent = () => {
    const [users, setUsers] = useState([
        {name : "정재현", age : 25 , height : 180},
        {name : "김정우", age : 24 , height : 182},
        {name : "김도영", age : 26 , height : 178},
    ]);
    return (
    <>
        <div>
            {users.map((user)=>{
                return (<><p>{user.name} {user.age} {user.height} </p></>)
            })}
        </div>
       
    </>
    );
};

export default ListComponent;
