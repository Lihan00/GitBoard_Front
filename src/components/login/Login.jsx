import React from "react";
import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"
import "./Login.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { setUser } from "./../../modules/user";
import { useDispatch } from 'react-redux'

const Login = ( props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [id,setId] = useState("")
    const [pw, setPw] = useState("")

    const signIn = () => {
        if(id !== "" && pw !== "") {
            axios.post(`/user/sign-in?id=${id}&password=${pw}`
            ).then(function (response) {
                if (response.status === 200) {
                    const token = response.data.token
                    axios.get(`/user/${id}`,
                        {headers: { "X-AUTH-TOKEN": response.data.token}}
                    ).then(function (response) {
                        dispatch(setUser(token, response.data.name, response.data.id, response.data.email, response.data.email))
                    })
                    navigate("/")
                }
            }).catch(function(error) {
                alert('아이디가 존재하지 않거나 비밀번호가 틀렸습니다')
            })
        }
        else {
            alert('빈칸을 채워주세요')
        }
    }

    const autoLogin = (e) => {
        if (e.key === "Enter") {
            signIn()
        }
    };

    return (
        <>
            <div className="postheader">
                <Header/>
            </div>
            <div className="loginbody" onKeyDown={(e) => autoLogin(e)}>
                <div className="playbody">
                    <div className="playlogin">LOGIN</div>
                    <div className="playinput"><input className="playid" placeholder="id" onChange={(e) => setId(e.target.value)}></input><br/></div>
                    <div className="playinput"><input className="playpw" placeholder="password" type="password" onChange={(e) => setPw(e.target.value)}></input></div>
                    <div className="playinput"><div className="playregister" onClick={() => signIn()}>로그인</div></div>
                    <div className="playinput"><div className="playregister" onClick={() => navigate('/register')}>회원가입</div></div>
                </div>
                <div className="playbottom">
                    <div className="lineone"></div>
                    <div className="linetwo"></div>
                    <div className="linethree"></div>
                    <div className="linefour"></div>
                    <div className="linefive"></div>
                    <div className="linesix"></div>
                </div>
            </div>
            <div className="postfooter">
                <Footer/>
            </div>
        </>
    );
};

export default Login;
