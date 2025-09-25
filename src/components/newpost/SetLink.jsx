import React from "react";

const SetLink = ( props ) => {
    const linkup = (e) => {
        if(e.key === "Enter" && e.target.value !== "") {
            props.setLink(e.target.value)
            props.setLinkkey(1)
        }
    }

    return (
        <>
            <div className="setlinkback">
                <div className="setlinktitle">Input github project link</div>
                <input className="setlink" onKeyDown={(e) => linkup(e)}></input>
            </div>
        </>
    );
};

export default SetLink;