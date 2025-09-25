import React from "react";
import { ThemeProvider, styled } from "styled-components";
import theme from "../../style/theme";
import CategoryList from "./CategoryList";
import axios from "axios";

const Categories = ["Group", "Social", "Language", "Framework", "Infra"];

const testObject = {
    data: {
        Group: ["Enterprise", "Personal"],
        Social: ["Education", "Enviroment", "Life", "Security"],
        Language: [
            "C/C++",
            "C#",
            "java",
            "javascript",
            "kotlin",
            "python",
            "typescript",
        ],
        Framework: ["React", "Vue.js", "Spring", "AndroidStudio"],
        Infra: ["Docker", "AWS", "Jenkins", "Kafka"],
    },
    message: "string",
    resultCode: "string",
};

const StyledCategories = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.primaryColor.background.black};
    display: flex;
    padding-top: 40px;
    padding-bottom: 40px;
`;

const Title = styled.div`
    font-size: 24px;
    margin-left: 5vw;
    margin-top: 5px;
`;

const HomeCategories = () => {
    let data = testObject.data;

    // for (var i = 0; i < Categories.length; i++) {
    //     axios
    //         .get("/hashtags/group/" + i)
    //         .then(function (response) {
    //             // 성공한 경우 실행
    //             data[Categories[i]] = response;
    //             console.log(JSON.stringify(response));
    //         })
    //         .catch(function (error) {
    //             // 에러인 경우 실행
    //             console.log(error);
    //         });
    // }

    return (
        <ThemeProvider theme={theme}>
            <StyledCategories>
                <Title>Categories</Title>
                <CategoryList data={data} />
            </StyledCategories>
        </ThemeProvider>
    );
};

export default HomeCategories;
