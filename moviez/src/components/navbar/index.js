import styled from "styled-components";
import { useState } from "react";
const Navbar = () =>{
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    console.log(showLinks)

    return(
            <StyledNavbar showLinks={showLinks}>
                <StyledDivLogo>
                    Logo
                </StyledDivLogo>
                <StyledList showLinks={showLinks}>
                    <StyledElementNav>
                        <StyledLink>Connexion</StyledLink>
                    </StyledElementNav>
                    <StyledElementNav>
                        <StyledLink>Inscription</StyledLink>
                    </StyledElementNav>
                    <StyledElementNav>
                        <StyledLink>Boutique</StyledLink>
                    </StyledElementNav>
                </StyledList>
                <StyledBurgerButton onClick={handleShowLinks}>
                    <StyledSpanBurgerLine showLinks={showLinks}></StyledSpanBurgerLine>
                </StyledBurgerButton>
            </StyledNavbar>
    );
}

export default Navbar;

const StyledNavbar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    position: fixed;
    width: 100%;
    min-height: 75px;
    background-color: black;
    color:white;
`

const StyledDivLogo = styled.div`

`

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    @media screen and (max-width:767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        right:-100vw;
        right: ${props =>
            props.showLinks ? props.showLinks : 0};
        visibility: ${props =>
            props.showLinks ? props.showLinks : 'visible'};
        width: 0;
        width: ${props =>
            props.showLinks ? props.showLinks : '100%'};
        bottom: 0;
        height: 100%;
        background-color:black;
        padding:2rem;
        transition: all 0.8s ease-out;
    }    
`

const StyledElementNav = styled.li`
    &:after{
        content:"";
        display:block;
        margin: 0 auto;
        width:3vw;
        height:1px;
        background: white;
    }
    &:last-child:after{
        display:none;
    }
`

const StyledLink = styled.a`
    text-decoration: none;
    padding:0 0.3rem;
    color:inherit;
    @media screen and (max-width:767px) {
        display: block;
        padding:1.5rem;
        font-size: 5vw;
    }
`

const StyledBurgerButton = styled.button`
    width: 40px;
    height: 40px;
    background: transparent;
    color:inherit;
    border:none;
    display: none;
    @media screen and (max-width:767px) {
        display:block;
        position: fixed;
        top:1rem;
        right:1rem;
        &:hover{
            cursor:pointer;
        }
    }
`

const StyledSpanBurgerLine = styled.span`
    @media screen and (max-width:767px) {
        display:block;
        width:40px;
        width: ${props =>
            props.showLinks ? props.showLinks : 0};
        transition: all .5s ease-in-out;
        height:3px;
        position: relative;
        background: white;
        background: ${props =>
            props.showLinks ? props.showLinks : 'transparent'};
        border-radius: 3px;
        &:before{
            display:block;
            width:40px;
            height:3px;
            position: absolute;
            background: white;
            transition: all .5s ease-in-out;
            content:"";
            left:0;
            border-radius: 3px;
            transform: translateY(-12px);
            transform: ${props =>
                props.showLinks ? props.showLinks : 'rotate(45deg)'};

        }
        &:after {
            display:block;
            width:40px;
            height:3px;
            position: absolute;
            background: white;
            transition: all .5s ease-in-out;
            content:"";
            left:0;
            border-radius: 3px;
            transform: translateY(12px);
            transform: ${props =>
                props.showLinks ? props.showLinks : 'rotate(-45deg)'};
        }
    }
`