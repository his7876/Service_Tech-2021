import React, { useState } from 'react'
import ListItem from "./ListItem";
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
                return (
                <>
                <ListItem username = {user.name}  age = {user.age} height = {user.height}></ListItem>
                </>);
            })}
        </div>
       
    </>
    );
};

export default ListComponent;
