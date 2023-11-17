"use client"

import { CartControl } from "./cart-control";

import { CloseIcon,  } from "./icons/close-icon";
import { BurgerIcon } from "./icons/burger-icon";

import { Saira_Stencil_One } from 'next/font/google'

import { styled } from "styled-components";

import { useState } from "react";

import { NavBar } from "./navbar";

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

interface NavigationProps {
    selected: boolean
    filterListVisible: boolean
}

const Nav = styled.div`

    display: none;

    @media(max-width: ${props => props.theme.tableBreakpoint}){
        display: flex;
        justify-content: space-between;
        padding: .5rem;
        background: var(--shapes-dark);
        transition: opacity 0.3s;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    text-decoration: none;
`

const NavIcon = styled.div`
    cursor: pointer;

    svg {
        width: 35px;
        height: 35px;
        fill: var(--border-color); // substitua pela cor desejada
    }
`

export function Navigation(props : NavigationProps){
    
    const [filterListVisible, setFilterListVisible] = useState(false);

    const handleNavIconClick = () => {
        setFilterListVisible(!filterListVisible);
    }

    // Toggle
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


     return(
        <Nav>
            <CartControl></CartControl>
            <Logo className={sairaStencil.className} href="/">
                Capputeeno
            </Logo>

            <NavIcon onClick={handleNavIconClick}>
                {filterListVisible ? <CloseIcon /> : <BurgerIcon /> }
            </NavIcon>

            <NavBar filterListVisible={filterListVisible} selected={props.selected}/>
        </Nav>
     )
}

    