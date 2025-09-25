import React, { useState } from "react";
import { styled } from "styled-components";
// import MainSearchBox from "./MainSearchBox";
import SearchIcon from "../../icons/SearchIcon";
import { useNavigate } from "react-router-dom";
import SearchList from "./SearchList";
import "./MainContent.css";

const StyledMainContent = styled.div`
    display: block;
    position: absolute;
    top: 35vh;
    left: 50%;
    transform: translateX(-50%);
`;

const MainTitle = styled.div`
    font-size: 56px;
    font-weight: 500; //Semi Bold
    text-align: center;
`;

const StyledSearchIcon = styled.div`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;

const MainCaption = styled.div`
    margin-top: 20px;
    font-size: 18px;
    font-weight: 300; //Regular
    text-align: center;
`;

const MainSearchBox = styled.input`
    margin-top: 25px;
    /* padding-left: 15px; */

    background-color: transparent;
    border-radius: 999px;

    width: 50vw;
    max-width: 580px;
    min-width: 400px;
    height: 48px;

    border: 1px solid white;

    color: white;
    font-size: 23px;
    font-weight: 300;
    text-align: left;
    text-indent: 2vw;
`;

const MainContent = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const searchQueryHandler = (event) => {
        setSearchQuery(event.target.value);
    };

    const hrefSearchQuery = () => {
        if (String(searchQuery).trim() !== "") {
            // Convert searchQuery to a string and then construct the URL
            const query = String(searchQuery);
            const url = `https://myAwesomeUrl/search/${encodeURIComponent(
                query
            )}`;
            window.location.href = url;
        }
    };

    const SearchClickHandler = () => {
        //hrefSearchQuery();
        if (search === 0) {
            navigate('/search', {
                state: {
                    info: searchQuery,
                    feat: search
                }})
        } else {
            navigate('/search', {
                state: {
                    info: [...cate, ...caten, ...social, ...socialn, ...lang, ...langn, ...frame, ...framen, ...infra, ...infran],
                    feat: search
                }})
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            //hrefSearchQuery();
            if (search === 0) {
                navigate('/search', {
                    state: {
                        info: searchQuery,
                        feat: search
                    }})
            } else {
                navigate('/search', {
                    state: {
                        info: [...cate, ...caten, ...social, ...socialn, ...lang, ...langn, ...frame, ...framen, ...infra, ...infran],
                        feat: search
                    }})
            }
        }
    };

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
    const [plustest, setPlustest] = useState(1)
    const [search, setSearch] = useState(0)

    return (
        <>
            {plus === 1 && (
                <SearchList cate={cate} setCate={setCate} caten={caten} setCaten={setCaten} plus={plus} setPlus={setPlus} title="group"/>
            )}
            {plus === 2 && (
                <SearchList cate={social} setCate={setSocial} caten={socialn} setCaten={setSocialn} plus={plus} setPlus={setPlus} title="social"/>
            )}
            {plus === 3 && (
                <SearchList cate={lang} setCate={setLang} caten={langn} setCaten={setLangn} plus={plus} setPlus={setPlus} title="language"/>
            )}
            {plus === 4 && (
                <SearchList cate={frame} setCate={setFrame} caten={framen} setCaten={setFramen} plus={plus} setPlus={setPlus} title="framework"/>
            )}
            {plus === 5 && (
                <SearchList cate={infra} setCate={setInfra} caten={infran} setCaten={setInfran} plus={plus} setPlus={setPlus} title="infra"/>
            )}
            <StyledMainContent>
                <MainTitle>GitBoard</MainTitle>
                <MainSearchBox
                    // Pass a callback to update the searchQuery state
                    onChange={searchQueryHandler}
                    onKeyDown={handleKeyPress}
                />
                <StyledSearchIcon>
                    <div className="searchform">
                        <div className="searchfilter" onClick={() => setPlus(plustest)}>=</div>
                        <div className="searchicon" onClick={() => SearchClickHandler()}><SearchIcon/></div>
                    </div>
                </StyledSearchIcon>
                <div className="searchform">
                        <select className="searchcate" value={search} onChange={(e) => setSearch(parseInt(e.target.value))}>
                            <option value="0">텍스트 검색</option>
                            <option value="1">카테고리 검색</option>
                        </select>
                        {search === 1 && 
                            <select className="searchcate" value={plustest} onChange={(e) => setPlustest(parseInt(e.target.value))}>
                                <option value="1">group</option>
                                <option value="2">social</option>
                                <option value="3">language</option>
                                <option value="4">framework</option>
                                <option value="5">infra</option>
                            </select>}
                </div>
                <MainCaption>
                    Explore various open source project you want.
                </MainCaption>
            </StyledMainContent>
        </>
    );
};

export default MainContent;
