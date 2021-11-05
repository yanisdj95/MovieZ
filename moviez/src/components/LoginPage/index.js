import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MZ from '../../MZ.png';


const LoginForm = props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    useEffect(() => {
    }, [username])

    const onSubmit = (e) => {
        e.preventDefault();
        if (username.length < 3) {
            alert('Mauvais nom Utilisateur')
            return;
        }
        
        
        
        axios({
            method: 'POST',
            url: 'https://easy-login-api.herokuapp.com/users/login',
            data: {
                username: username,
                password: password
            }
        }).then((response) => {
            console.log(response.headers['x-access-token']);
            localStorage.setItem('token', response.headers['x-access-token'])
           
        })

    }

    return (
        <FormContainer>
            <StyledForm onSubmit={onSubmit}>
                <ImgForm src={MZ}/>
                <StyledInput value={username} onChange={(e) => setUsername(e.target.value)} name="username" type="text"></StyledInput>
                <StyledInput value={password} name="password" type="password" onChange={(e) => setPassword(e.target.value)}></StyledInput>
                <StyledInput2 type="submit" value='Se Connecter' ></StyledInput2>
            </StyledForm>

        </FormContainer>
    );
};

const FormContainer = styled.div`
    min-height:100vh;
    height:100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size:cover;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const ImgForm = styled.img`
height: 100px;
float: center;
padding-bottom: 30px;
`
const StyledForm = styled.form`
display: flex;
flex-direction: column;
background-color: black;
padding-top: 15px;
padding-right: 45px;
padding-left: 45px;

`

const StyledInput = styled.input`
    height: 30px;
    margin-bottom: 12px;
    border-radius: 4px;
    outline: none;
`
const StyledInput2 = styled.input`
    background-color: green;
    height: 30px;
    margin-bottom: 12px;
    border-radius: 4px;
    outline: none;
`

LoginForm.propTypes = {

};

export default LoginForm;