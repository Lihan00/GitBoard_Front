import axios from "axios";
import { useEffect } from "react";
import Header from "./../Header/Header"
import Footer from "./../Footer/Footer" 
import { useState } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState([])

    useEffect(() => {
        if(location.state.feat === 0) {
            if(location.state.info === "") {
                axios.get(`projects/page-number/0/size/5`)
                .then(function (response) {
                    setData(response.data.data)
                }).catch(function(error) {
                    alert('검색에 실패했습니다')
                })
            } else {
            axios.get(`/page/search/keyword/${location.state.info}/page-number/0/size/5`)
                .then(function (response) {
                    setData(response.data.data)
                }).catch(function(error) {
                    alert('검색에 실패했습니다')
                })
            }
        } else {
            axios.get(`/page/search/Hashtag-list/${location.state.info}/page-number/0/size/5`)
                .then(function (response) {
                    console.log(response.data.data)
                    setData(response.data.data)
                }).catch(function(error) {
                    alert('검색에 실패했습니다')
                })
        }
        /*if(location.state.id === "") {
            axios.get(`projects/page-number/0/size/5`)
            .then(function (response) {
                console.log(response.data.data)
                setData(response.data.data)
            })
        } else {
        axios.get(`/projects/search/keyword/${location.state.id}/page-number/0/size/10`)
            .then(function (response) {
                console.log(response.data.data)
                setData(response.data.data)
            })
        }*/
    }, [])

    return (
        <>
            <div className="postheader">
                <Header/>
            </div>   
            <div className="postbody">
                <div className="postmain">
                        {data && data.map(x => (
                            <div className="searchlist" onClick={() => navigate('/postdetail', {
                                state: {
                                    id: x.id
                                }
                            })}>
                                <div className="searchname">{x.name}</div>
                                <div className="searchsdes">{x.simpleDescription}</div>
                                <div className="searchhashlists">
                                    {x.hashtagList && x.hashtagList.map(x =>
                                        <div className="searchhashlist">{x}</div>
                                    )}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="postfooter">
                <Footer/>
            </div>
        </>
    );
};

export default Search;
