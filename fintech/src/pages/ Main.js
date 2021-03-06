import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../component/main/Card';
import Header from '../component/Header';


const  Main = () => {
    const [accountList, setAccountList] = useState([]);
    
    useEffect(() =>{
        getAccountList();
    },[]);
    
    const getAccountList = () =>{
        const accessToken = localStorage.getItem('accessToken');
        const userSeNo = localStorage.getItem('userSeqNo');
        const option = {
            method: "GET",
            url: "/v2.0/user/me",
            headers: {
                "Authorization": "Bearer "+ accessToken,
            },
            params: {
                "user_seq_no": userSeNo,             
            },
        };
        axios(option).then(({data})=>{
            console.log(data);
            setAccountList(data.res_list);
        });
    };
    

    return (
        <div>
            <Header title ={"메인"}></Header>
            {accountList.map((account) => {
                return(
                <Card
                    key = {account.fintech_use_num} 
                    bankName={account.bank_name} 
                    fintechUseNo = {account.fintech_use_num}
                    ></Card>
                )
            })}
        </div>
    )
};

export default  Main
