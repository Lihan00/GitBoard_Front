import styled from "styled-components";

const StyledToggleBtn = styled.button`
    color: white;
    font-size: 15px;

    padding: 1px 5px 1px 5px;

    border: none;
    border-radius: 999px;

    transition: all 0.3s;
    transform: rotate(${({ isToggled }) => (isToggled ? "-90deg" : 0)});
    background-color: ${({ isToggled }) => (isToggled ? "#353535" : "black")};

    cursor: pointer;
`;

const ToggleBtn = (props) => {
    return <StyledToggleBtn isToggled={props.isToggled}>&lt;</StyledToggleBtn>;
};

export default ToggleBtn;
