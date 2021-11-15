import logo from '../../img/MZ.png';
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () =>{
    return(
        <NavContainer>
            <StyledDiv1>
                <StyledDiv1_1>
                    <StyledImg src={logo}/>
                    <StyledP>Boutique</StyledP>
                </StyledDiv1_1>
            </StyledDiv1>
            <StyledDiv2>
                <StyledDiv1_2>
                    <Link to="/login">
                        <StyledP>Connexion</StyledP>
                    </Link>
                    <Link to="/signin">
                        <StyledP>Inscription</StyledP>
                    </Link>
                </StyledDiv1_2>
            </StyledDiv2>
        </NavContainer>
    );
}

export default Nav;

const NavContainer = styled.div`
 width:100%;
 height:50px;
 background:#3D3939;
 display:flex;
 flex:1;
`
const StyledDiv1 = styled.div`
    width:50%;
    height:100%;
    display:flex;
    justify-content: flex-start;
`
const StyledDiv1_1 = styled.div`
    height:100%;
    display:flex;
    justify-content: flex-start;
    width:50%;
    padding-left:20px;
`
const StyledDiv2 = styled.div`
    width:50%;
    height:100%;
    display:flex;
    justify-content: flex-end;
`
const StyledDiv1_2 = styled.div`
    height:100%;
    display:flex;
    justify-content: space-around;
    width:50%;
`

const StyledImg = styled.img`
    width:100px;
    height:50px;
    margin-right:30px;
`

const StyledP = styled.p`
   font-family:Nunito;
   font-weight:bold;
   color:white;
`