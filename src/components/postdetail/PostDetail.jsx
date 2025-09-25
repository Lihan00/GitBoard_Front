import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"
import axios from "axios"
import "./PostDetail.css"

const PostDetail = () => {
    const location = useLocation();

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`/projects/${location.state.id}`)
            .then(function (response) {
                console.log(response.data.data)
                setData(response.data.data)
            })
    }, [])

    return (
        <>
            <div className="postheader">
                <Header/>
            </div>   
            <div className="postbody">
                <div className="postdetailmain">
                    <div className="posttop">
                        <div className="postimg"></div>
                        <div className="posttitle">
                            <div className="postdetailname">Project name</div>
                            <div className="postdetailcontent">{data.name}</div>
                            <div className="postdetailsdes">Single description</div>
                            <div className="postdetailcontent">{data.simpleDescription}</div>
                        </div>
                    </div>
                    <div className="posthr"></div>
                    <div className="des">{data.description}</div>
                    <div className="posthr"></div>
                    <div className="postcate">Group</div>
                    <div className="postcatelist">
                        {data.group && data.group.map((x) => (<div className="setcatelist">#{x}</div>))}
                    </div>
                    <div className="postframe">Social</div>
                    <div className="postframelist">
                        {data.social && data.social.map((x) => (<div className="setcatelist">#{x}</div>))}
                    </div>
                    <div className="postframe">Language</div>
                    <div className="postframelist">
                        {data.framework && data.framework.map((x) => (<div className="setcatelist">#{x}</div>))}
                    </div>
                    <div className="postframe">Framework</div>
                    <div className="postframelist">
                        {data.language && data.language.map((x) => (<div className="setcatelist">#{x}</div>))}
                    </div>
                    <div className="postframe">Infra</div>
                    <div className="postframelist">
                        {data.infra && data.infra.map((x) => (<div className="setcatelist">#{x}</div>))}
                    </div>
                    <div className="postframe">Contributor</div>
                </div>
            </div>
            <div className="postfooter">
                <Footer/>
            </div>
        </>
    );
};

export default PostDetail;
