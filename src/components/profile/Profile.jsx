import React from "react";
import "./Profile.css";
import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"
import { useSelector } from 'react-redux';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`/projects/user/${user.id}`)
        .then(function (response) {
            setData(response.data.data)
        }).catch(function(error) {
            alert('검색에 실패했습니다')
        })
    }, [])
    
    return (
        <>
            <div className="postheader">
                <Header/>
            </div>
            <div className="profilebody">
                <div className="mybody">
                    <div className="myleft">
                        <div className="myedit">Edit Profile</div>
                        <img className="myimg" ></img>
                        <div className="myname">{user.name}</div>
                        <div className="myid">{user.email}</div>
                        <div className="mybookmark">bookmark</div>
                    </div>
                    <div className="myright">
                        <div className="myprojecttitle">Project List</div>
                        <div className="myprojectlist">
                            {data && data.map(x => (
                                <div className="mysearchlist" onClick={() => navigate('/postdetail', {
                                    state: {
                                        id: x.id
                                    }
                                })}>
                                    <div className="mysearchname">{x.name}</div>
                                    <div className="searchsdes">{x.simpleDescription}</div>
                                </div>
                            ))}
                        </div>
                        <div className="myintro">Intro</div>
                        <div className="mycontent">{user.description}</div>
                        <div className="mybadge">Badge</div>
                    </div>
                </div>
            </div>
            <div className="postfooter">
                <Footer/>
            </div>
        </>
    );
};

export default Profile;
