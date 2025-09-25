import React from "react";
import { styled } from "styled-components";
import { useSelector } from 'react-redux';


const StyledMyAccount = styled.p``;

//Account name
const MyAccount = (props) => {
    const user = useSelector(state => state.user);
    return <StyledMyAccount>{user.name}</StyledMyAccount>;
};

export default MyAccount;
