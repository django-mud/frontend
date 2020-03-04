import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    align-content: center;
`
const HeaderTitle = styled.h1`
    width: 100%;
    border-bottom: 1px solid black;
    padding-bottom: 1.2rem;
`

const Header = () => {
    return (
        <Div>
            <HeaderTitle>Lambda MUD</HeaderTitle>
        </Div>
    )
}

export default Header;