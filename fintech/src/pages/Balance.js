import React, {useEffect, useState} from "react";
import BalanceCard from "../component/balance/BalanceCard";
import Header from "../component/Header";
import { useLocation } from "react-router";
import queryString  from "query-string";
import axios from "axios";
import TransactionList from "../component/balance/TransactionList";

const Balance = () => {
    const {search} = useLocation();
    const {fintechUseNo} = queryString.parse(search);
    const [balance, setBalance] = useState({});
    const [transaction, setTransaction] = useState([]);

    const genTransId = () => {
        let countnum = Math.floor(Math.random() * 1000000000) + 1;
        let transId = "M202113074U" + countnum; 
        return transId;
    };

    useEffect(()=>{
        getBalanceData();
        getTransactionList();
    },[]);

    
    const getBalanceData = () =>{
        const accessToken = localStorage.getItem('accessToken');
      
        const option = {
            method: "GET",
            url: "v2.0/account/balance/fin_num",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                bank_tran_id: genTransId(),
                fintech_use_num: fintechUseNo,
                tran_dtime: "20210826133200",
            },
        };

        axios(option).then(({data})=>{
            console.log(data);
            setBalance(data);
            
        });
    };
    const getTransactionList = () => {
        const accessToken = localStorage.getItem("accessToken");
        const option = {
          method: "GET",
          url: `/v2.0/account/transaction_list/fin_num`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            bank_tran_id: genTransId(),
            fintech_use_num: fintechUseNo,
            inquiry_type: "A",
            inquiry_base: "D",
            from_date: "20210101",
            to_date: "20210101",
            sort_order: "D",
            tran_dtime: "20210826132500",
          },
        };
        axios(option).then(({ data }) => {
          console.log(data);
          setTransaction(data.res_list);
        });
      };
    

  return (
    <div>
      <Header title="????????????"></Header>
      <BalanceCard bankName ={balance.bank_name} 
      fintechNo={balance.fintech_use_num} 
      balance = {balance.balance_amt}
      ></BalanceCard>
     <TransactionList transactionList={transaction}></TransactionList>
    
    </div>
  );
};

export default Balance;
