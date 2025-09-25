import React from "react";
import "./NewPost.css"
import { useState } from "react";
import SetList from "./SetList";
import SetLink from "./SetLink";
import axios from "axios";
import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Posts = () => {
    const navigate = useNavigate()
    const [cate, setCate] = useState([])
    const [social, setSocial] = useState([])
    const [lang, setLang] = useState([])
    const [frame, setFrame] = useState([])
    const [infra, setInfra] = useState([])
    const [caten, setCaten] = useState([])
    const [socialn, setSocialn] = useState([])
    const [langn, setLangn] = useState([])
    const [framen, setFramen] = useState([])
    const [infran, setInfran] = useState([])
    const [plus, setPlus] = useState(0)
    const [link, setLink] = useState("")
    const [linkkey, setLinkkey] = useState(0)

    const [name, setName] = useState("")
    const [sdes, setSdes] = useState("")
    const [des, setDes] = useState("")
    const user = useSelector(state => state.user);

    const submit = () => {
        if(link !== "" && name !== "" && sdes !== "" && des !== "") {
            axios.post('/posting',
                {
                    /*"description": des,
                    "gitUrl": link,
                    "hashtagList": [...cate, ...caten, ...social, ...socialn, ...lang, ...langn, ...frame, ...framen, ...infra, ...infran],
                    "name": name,
                    "simpleDescription": sdes,
                    "userId": user.id*/

                    "description": des,
                    "gitUrl": link,
                    "hashtagList": ["", ...cate, ...caten, ...social, ...socialn, ...lang, ...langn, ...frame, ...framen, ...infra, ...infran],
                    "licenseName": "",
                    "name": name,
                    "simpleDescription": "sdes",
                    "userId": user.id
                },
                {headers: { "X-AUTH-TOKEN": user.token}}
            ).then(function(response) {
                if(response.status === 200) navigate("/")
            }).catch(function(error) {
                alert('글 등록에 실패하였습니다. 다시 시도해주세요')
            })
            
        }
        else {
            alert('빈칸을 채워주세요')
        }
    }

    return (
        <>
            {(linkkey === 0) && (
                <SetLink setLink={setLink} setLinkkey={setLinkkey}/>
            )}
            <div className="postheader">
                <Header/>
            </div>   
            <div className="postbody">
                <div className="postmain">
                <div>Project image</div>
                    <div className="posttop">
                        <div className="postimg"></div>
                        <div className="posttitle">
                            <div>Project name</div>
                            <input className="postname" onChange={(e) => setName(e.target.value)}></input>
                            <div className="des">Single description</div>
                            <input className="postsimple" onChange={(e) => setSdes(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="postmid">
                        <div className="postmidtitle">Description.md</div>
                        <div className="h">Load README.md From Github</div>
                    </div>
                    <textarea className="postdesc" onChange={(e) => setDes(e.target.value)}></textarea>
                    <div className="postcate">Group</div>
                    <div className="postcatelist">
                        {cate.map((x) => (<div className="postlist">#{x}</div>))}
                        {caten.map((x) => (<div className="postlistn">#{x}</div>))}
                        <div onClick={() => setPlus(1)} className="postplus">+</div>
                    </div>
                    <div className="postframe">Social</div>
                    <div className="postframelist">
                        {social.map((x) => (<div className="postlist">#{x}</div>))}
                        {socialn.map((x) => (<div className="postlistn">#{x}</div>))}
                        <div onClick={() => setPlus(2)} className="postplus">+</div>
                    </div>
                    <div className="postframe">Language</div>
                    <div className="postframelist">
                        {lang.map((x) => (<div className="postlist">#{x}</div>))}
                        {langn.map((x) => (<div className="postlistn">#{x}</div>))}
                        <div onClick={() => setPlus(3)} className="postplus">+</div>
                    </div>
                    <div className="postframe">Framework</div>
                    <div className="postframelist">
                        {frame.map((x) => (<div className="postlist">#{x}</div>))}
                        {framen.map((x) => (<div className="postlistn">#{x}</div>))}
                        <div onClick={() => setPlus(4)} className="postplus">+</div>
                    </div>
                    <div className="postframe">Infra</div>
                    <div className="postframelist">
                        {infra.map((x) => (<div className="postlist">#{x}</div>))}
                        {infran.map((x) => (<div className="postlistn">#{x}</div>))}
                        <div onClick={() => setPlus(5)} className="postplus">+</div>
                    </div>
                    <div onClick={()=> submit()} className="postsubmit">Submit</div>
                </div>
            </div>
            <div className="postfooter">
                <Footer/>
            </div>
            {plus === 1 && (
                <SetList cate={cate} setCate={setCate} caten={caten} setCaten={setCaten} plus={plus} setPlus={setPlus} title="group"/>
            )}
            {plus === 2 && (
                <SetList cate={social} setCate={setSocial} caten={socialn} setCaten={setSocialn} plus={plus} setPlus={setPlus} title="social"/>
            )}
            {plus === 3 && (
                <SetList cate={lang} setCate={setLang} caten={langn} setCaten={setLangn} plus={plus} setPlus={setPlus} title="language"/>
            )}
            {plus === 4 && (
                <SetList cate={frame} setCate={setFrame} caten={framen} setCaten={setFramen} plus={plus} setPlus={setPlus} title="framework"/>
            )}
            {plus === 5 && (
                <SetList cate={infra} setCate={setInfra} caten={infran} setCaten={setInfran} plus={plus} setPlus={setPlus} title="infra"/>
            )}
        </>
    );
};

export default Posts;
