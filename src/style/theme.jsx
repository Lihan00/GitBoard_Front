import styled from "styled-components";

const primaryColor = {
    background: {
        black: "#07030B",
        textArea: "#1C1920",
    },
    white: "#FFFFFF",
    black: "#141414",
    darkGray: "#23212D",
    purple: "#bc43be",
};

/**
 * Default style for <a> tag, addtional import require
 */
export const StyledLink = styled.a`
    background-color: transparent;
    text-decoration: none;
    transition: color 0.3s;

    color: white;

    &:visited {
        color: white;
    }

    &:hover {
        color: #bc43be;
        text-decoration: underline;
        transition: color 0.1s;
    }

    &:active {
        color: yellow;
        text-decoration: underline;
    }
`;

const theme = {
    primaryColor,
};

export default theme;
