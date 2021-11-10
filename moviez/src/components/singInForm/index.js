import styled from 'styled-components';
import logo from '../../img/MZ.png';
import Footer from '../footer';
import Navbar from '../navbar';

const SingInForm = () => {
    return(
        <><Navbar></Navbar>
            <MainContainer>
            <FormContainer>
                <StyledDiv>
                    <StyledDiv2>
                        <StyledImg src={logo} />
                    </StyledDiv2>
                    <StyledDiv3>
                        <StyledInput type="text" placeholder="First Name"></StyledInput>
                        <StyledInput type="text" placeholder="Last Neme"></StyledInput>
                        <StyledInput type="text" placeholder="Username"></StyledInput>
                        <StyledInput type="text" placeholder="email"></StyledInput>
                        <StyledInput type="text" placeholder="password"></StyledInput>
                    </StyledDiv3>
                    <StyledDiv2>
                        <StyledButton>Sing In</StyledButton>
                    </StyledDiv2>
                </StyledDiv>
            </FormContainer>
            <Footer></Footer>
        </MainContainer></>
    );
}

export default SingInForm;

const MainContainer = styled.div`
    width:100%;
    height:100vh;
    display: flex;
  align-items: center;
  justify-content: center;
    background:#555454;
`

const StyledImg = styled.img`
     width:100px;
     height:50px;
     margin-bottom:20px;
`

const FormContainer = styled.div`
    padding-top:30px;
    width:70%;
    height:400px;
    background:#3D3939;
    display:flex;
    justify-content:center;
    border-radius:7px;
    box-shadow: 10px 5px 5px #484444;
`

const StyledInput = styled.input`
      width:80%;
      height:30px;
      border-radius:4px;
      margin-bottom:13px;
      border-style:none;
`

const StyledButton = styled.button`
margin-top:20px;
    width:70%;
    height:30px;
    color:white;
    border-radius:4px;
    background:#58DD94;
    border-style:solid;
    border-width:1px;
`

const StyledDiv = styled.div`
    width:250px;
    height:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    box-sizing:border-box;
    padding-left:5px;
    padding-right:5px;
`

const StyledDiv2 = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const StyledDiv3 = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`