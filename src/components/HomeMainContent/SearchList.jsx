import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";

const SetList = ( props ) => {
    const [list, setList] = useState([])
    const [want, setWant] = useState(props.cate)
    const [slist, setSlist] = useState([""])
    const [listn, setListn] = useState([])
    const [wantn, setWantn] = useState(props.caten)
    const [slistn, setSlistn] = useState([""])
    const [skey, setSkey] = useState(0)
    const [sword, setSword] = useState("")

    useEffect(() => {
            axios.get(`hashtags/group/${props.plus}`)
            .then(function (response) {
                setList(response.data.certifiedList)
                setListn(response.data.uncertifiedList)
            })
    }, [])

    const add = ( value ) => {
        if(want.filter((x) => x === value).length === 0 ) {
            const temp = [...want, value]
            setWant(temp)
        }
    }

    const addn = ( value ) => {
        if(wantn.filter((x) => x === value).length === 0 ) {
            const temp = [...wantn, value]
            setWantn(temp)
        }
    }

    const cancel = ( value ) => {
        const temp = want.filter((x) => x !== value)
        setWant(temp)
    }

    const canceln = ( value ) => {
        const temp = wantn.filter((x) => x !== value)
        setWantn(temp)
    }

    const search = ( value ) => {
        if (value === "")
            setSkey(0)
        else {
            setSkey(1)
            setSword(value)
        }

        let temp = []
        list.filter((x) => {
            if(x.toLowerCase().includes(value.toLowerCase()))
                temp = [...temp, x]
        })
        setSlist(temp)

        let tmp = []
        listn.filter((x) => {
            if(x.toLowerCase().includes(value.toLowerCase()))
                tmp = [...tmp, x]
        })
        setSlistn(tmp)
    }

    const listadd = (e) => {
        if((e.key === "Enter" || e === "Enter") && slist.length === 0 && slistn.length === 0 && skey === 1) {
            const temp = [...listn, sword]
            setListn(temp)
            axios.post('/hashtags',
                {
                    "certified": false,
                    "groupId": props.plus,
                    "name": sword,
                    "writerId": 1
                }
            );  
        }
    }

    return (
        <>
            <div className="searchcateback">
                <div className="searchcatetitle">Add your {props.title}</div>
                <div className="searchcatebody">
                    <div className="setcateleft">
                        <div className="setcatelists">
                            {want.map((x) => (
                                <div className="setcatewantgroup">
                                    <div className="setcatewant">#{x}</div>
                                    <div className="setcatedlt" id={x} onClick={(e) => cancel(e.target.id)}>x</div>
                                </div>
                            ))}
                            {wantn.map((x) => (
                                <div className="setcatewantgroup">
                                    <div className="setcatewantn">#{x}</div>
                                    <div className="setcatedlt" id={x} onClick={(e) => canceln(e.target.id)}>x</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="setcateright">
                        <input className="setcateinput" onChange={(e) => search(e.target.value)} onKeyDown={(e) => listadd(e)}></input>
                        <img src="sd" className="setcateimg"></img>
                        <hr></hr>
                        <div className="setcatelists">
                            {skey === 0 && list.map((x) => (<div onClick={() => add(x)} className="setcatelist">#{x}</div>))}
                            {skey === 0 && listn.map((x) => (<div onClick={() => addn(x)} className="setcatelistn">#{x}</div>))}
                            {skey === 1 && slist.map((x) => (<div onClick={() => add(x)} className="setcatelist">#{x}</div>))}
                            {skey === 1 && slistn.map((x) => (<div onClick={() => addn(x)} className="setcatelistn">#{x}</div>))}
                            {(slist.length === 0 && slistn.length === 0) && (
                                <div>
                                    <div className="setcatecreatetext">'#{sword}' is not exist.</div>
                                    <div className="setcatecreategroup">
                                        <div onClick={() => listadd("Enter")} className="setcatecreateline">Click here</div>
                                        <div className="setcatecreate">&nbsp;to create new hashtag.</div>
                                    </div>
                                </div>        
                            )}
                        </div>
                    </div>
                </div>
                <div className="searchcatebtngroup">
                    <div className="setcatecnl" onClick={() => props.setPlus(0)}>Cancel</div>
                    <div className="setcateadd" onClick={() => {props.setCate(want); props.setCaten(wantn); props.setPlus(0)}}>Apply</div>
                </div>
            </div>
        </>
    );
};

export default SetList;