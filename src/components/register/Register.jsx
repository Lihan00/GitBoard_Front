import React from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [des, setDes] = useState("")
    const [email, setEmail] = useState("")
    const [git, setGit] = useState("")
    const [name, setName] = useState("")
    const [pw, setPw] = useState("")
    const [pwtest, setPwtest] = useState("")
    const [uname, setUname] = useState("")

    const signUp = () => {
        if (pw !== pwtest) {
            alert('비밀번호가 다릅니다')
            return
        }
        if(des !== "" && email !== "" && git !== "" && name !== "" && pw !== "" && uname !== "") {
            axios.post('/user/sign-up',
                {
                    "description": des,
                    "email": email,
                    "gitUrl": git,
                    "name": name,
                    "passwordKey": pw,
                    "userName": uname
                }
            ).then(function (response) { 
                if (response.status === 200) navigate("/")
                else console.log(response.status)
            }).catch(function(error) {
                alert('잘못된 값을 입력하거나 이미 존재하는 아이디입니다')
            })
            
            
        }
        else {
            alert('빈칸을 채워주세요')
        }
    }

    return (
        <>
            <div className="postheader">
                <Header/>
            </div>
            <div className="loginbody">
                <div className="playbody">
                    <div className="playregistertitle">Register</div>
                    <div className="playinput"><input className="playid" placeholder="description" onChange={(e) => setDes(e.target.value)}></input><br/></div>
                    <div className="playinput"><input className="playpw" placeholder="id" onChange={(e) => setEmail(e.target.value)}></input></div>
                    <div className="playinput"><input className="playpw" placeholder="gitUrl" onChange={(e) => setGit(e.target.value)}></input></div>
                    <div className="playinput"><input className="playpw" placeholder="name" onChange={(e) => setName(e.target.value)}></input></div>
                    <div className="playinput"><input className="playpw" placeholder="password" type="password" onChange={(e) => setPw(e.target.value)}></input></div>
                    <div className="playinput"><input className="playpw" placeholder="passwordtest" type="password" onChange={(e) => setPwtest(e.target.value)}></input></div>
                    <div className="playinput"><input className="playpw" placeholder="userName" onChange={(e) => setUname(e.target.value)}></input></div>
                    <div className="playinput"><div className="playregister" onClick={() => signUp()}>회원가입</div></div>
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

export default Register;
