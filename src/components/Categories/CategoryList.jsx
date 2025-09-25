import React from "react";
import { styled } from "styled-components";
import GroupContainer from "./GroupContainer";

const StyledCategoryList = styled.div``;

const CategoryList = (props) => {
    const data = props.data;
    const keys = Object.keys(data);

    return (
        <StyledCategoryList>
            {keys.map((e) => (
                <GroupContainer title={e} data={data[e]}></GroupContainer>
            ))}
        </StyledCategoryList>
    );
};

export default CategoryList;
