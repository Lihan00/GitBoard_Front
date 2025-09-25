import React from "react";
import styled from "styled-components";
import "./ToggleMenuAnimation.css";
import { useNavigate } from "react-router-dom";

import { delUser } from "./../../../modules/user";
import { useDispatch } from 'react-redux'

const StyledToggleMenu = styled.div`
    background-color: black;
    z-index: 80;
    position: fixed;

    top: 50px;
    right: 5vw;

    padding: 10px 30px 20px 30px;

    visibility: visible;

    border-radius: 10px;
    border: 0.5px solid transparent;
    transition: all 0.3s ease-in-out;
    border-color: ${({ isScrolled }) => isScrolled && "white"};
`;

const StyledUnorderedList = styled.ul`
    font-size: 18px;
    font-weight: 300; //Regular
    list-style: none;

    margin: 0;
    padding: 0;
`;

const StyledList = styled.li`
    margin-top: 13px;
    margin-bottom: 13px;
`;

const StyledListItem = styled.a`
    width: auto;
    display: block;
    border-radius: 10px;

    padding: 6px 3px 6px 3px;
    margin-bottom: 13px;

    transition: background-color 0.3s;

    &:visited {
        color: white;
    }

    &:hover {
        background-color: #353535;
        transition: background-color 0s;
        cursor: pointer;
    }

    &:active {
        color: yellow;
    }
`;

const StyledHr = styled.hr`
    margin-top: 17px;
    margin-bottom: 17px;
`;

//Test component for Toggle menu
const ToggleMenu = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <StyledToggleMenu
            className={props.isMenuOpen ? "active" : "inactive"}
            isScrolled={props.isScrolled}
        >
            <StyledUnorderedList>
                <StyledList>
                    <StyledListItem onClick={() => navigate('/profile')}>My Profile</StyledListItem>
                    <StyledListItem onClick={() => navigate('/newpost')}>Create new post</StyledListItem>
                </StyledList>
                <StyledHr />
                <StyledList>
                    <StyledListItem>My post</StyledListItem>
                    <StyledListItem>Bookmark</StyledListItem>
                </StyledList>
                <StyledHr />
                <StyledList>
                    <StyledListItem>Gitboard Docs</StyledListItem>
                    <StyledListItem>Gitboard Support</StyledListItem>
                </StyledList>
                <StyledHr />
                <StyledList>
                    <StyledListItem>Settings</StyledListItem>
                    <StyledListItem onClick={() => {dispatch(delUser()); navigate('/')}}>Log out</StyledListItem>
                </StyledList>
            </StyledUnorderedList>
        </StyledToggleMenu>
    );
};

export default ToggleMenu;
