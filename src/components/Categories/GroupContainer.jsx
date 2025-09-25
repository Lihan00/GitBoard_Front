import React from "react";
import { styled } from "styled-components";

const StyledGroupContainer = styled.ul`
    list-style: none;
    display: flex; /* Flexbox container */
    align-items: center; /* 수직 정렬 */
    margin-top: 0px;
    margin-bottom: 18x;
    text-align: right;
`;

const HashTagTitle = styled.li`
    background-color: transparent;
    border: none;
    color: #d6d6d6;
    font-size: 18px;
    font-weight: 400;
    margin-right: 20px;
    width: 100px;
`;

const HashTag = styled.a`
    padding: 10px 18px 10px 18px;
    background-color: ${(props) => props.theme.primaryColor.darkGray};
    border-radius: 999px;
    color: white;
    font-size: 18px;
    font-weight: 300; //Regular
    margin-left: 12px;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
        color: ${({ theme }) => theme.primaryColor.purple};
    }
`;

const GroupContainer = (props) => {
    const title = props.title;
    const tagList = props.data;

    return (
        <StyledGroupContainer>
            <HashTagTitle>{title}</HashTagTitle>
            {tagList.map((e) => (
                <HashTag>
                    {"#" + e.charAt(0).toUpperCase() + e.substring(1)}
                </HashTag>
            ))}
        </StyledGroupContainer>
    );
};

export default GroupContainer;
