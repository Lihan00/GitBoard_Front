import React from "react";
import theme from "../style/theme";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeCategories from "../components/Categories/HomeCategories";
import MainContent from "../components/HomeMainContent/MainContent";

const StyledHome = styled.div`
    background-color: ${(props) => props.theme.primaryColor.background.black};
    color: white;
    overflow: auto;
`;

const TestMain = styled.div`
    width: 100%;
    height: 90vh;
    background: url("/images/PcHome.png") center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

const Home = ( props ) => {
    //const isLoggedin = false;

    return (
        <ThemeProvider theme={theme}>
            <Header isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn}/>
            <StyledHome>
                <TestMain>
                    <MainContent />
                </TestMain>
                <HomeCategories></HomeCategories>
                <Footer></Footer>
            </StyledHome>
        </ThemeProvider>
    );
};

export default Home;
