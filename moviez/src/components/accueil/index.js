import styled from 'styled-components';
import Nav from '../nav';
import Footer from '../footer';
import Slider from '../slider';
import { useEffect } from 'react';
const Accueil = () =>{

    useEffect(()=>{
        console.log(`user id : ${localStorage.getItem('userId')}`);
    })


    return(
        <Container>
            <Nav></Nav>
            <StyledDiv>
                <Slider></Slider>
            </StyledDiv>
            <Footer></Footer>
        </Container>
    );
}

export default Accueil;

const Container = styled.div`
  width:100%;
  background:#555454;
`
const StyledDiv = styled.div`
    width:100%;
    height:100vh;
`