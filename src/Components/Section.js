import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Contailner = styled.div`
    :not(:last-child) {
        margin-bottom: 50px;
    }
`;

const Title = styled.span`
    font-size:14px;
    font-weight: 600;
`;

const Grid = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    grid-gap: 25px;
`;


const Section = ({title, children}) => (
    <Contailner>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Contailner>
);

Section.protoTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section;