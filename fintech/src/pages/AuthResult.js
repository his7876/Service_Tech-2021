import React , { useState,  useEffect} from 'react';
import Header from '../component/Header';
import { useLocation} from 'react-router-dom';
import queryString  from "query-string";
import axios from 'axios';
//쿼리스트림을 가져오기 위한 React Hook 

const AuthResult = () => {
    const {search} = useLocation();
    const {code} = queryString.parse(search);
    const [accessToken, setAccessToken] = useState("토큰 받아오기 전");


    useEffect(() => {
        getAccessToken();
      }, []);
    
      const getAccessToken = () => {
        console.log("토큰을 가져옵니다");
        const sendData = {
          code: code,
          client_id: "클라이언트ID",
          client_secret: "클라이언트 비밀번호",
          redirect_uri: "http://localhost:3000/authResult",
          grant_type: "authorization_code",
        };
        //전달하는 정보의 sendData(JsObject) 선언
    
        const encodedSendData = queryString.stringify(sendData);
        //전달하는 sendData 형식의 변경
    
        const option = {
          method: "POST",
          url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: encodedSendData,
        };
    
        axios(option).then((response) => {
          console.log(response.data.access_token);
          setAccessToken(response.data.access_token);
        });
        //axios 오브젝트 설정
      };
    
      return (
        <div>
          <Header title="인증 결과"></Header>
          <p>인증 코드 : {code}</p>
          <p>AccessToken : {accessToken}</p>
        </div>
      );
    };
    
    export default AuthResult;
    