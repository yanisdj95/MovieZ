import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from 'react-router';


const UpComing = () => {
 
const img_500 = "https://image.tmdb.org/t/p/w1280"; 
const [upComing, setUpComing] = useState([]);  
const [searchTerm, setSearchTerm] = useState("");
  const SEARCH_API =
    "https://api.themoviedb.org/3/search/multi?api_key=934780721e54373dbb92f5d1dc942560&language=en-US&page=1&include_adult=false&query=";
    
  const history = useHistory();
  const handleClick = (key) => {
    history.push(`/details/${key}`);
  };
  const  HandleOnChange= (e) => {
    setSearchTerm(e.target.value); 
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=934780721e54373dbb92f5d1dc942560"
      )
      .then((response) => {
        setUpComing(response.data.results);
        console.log(response.data.results);
      });
  }, []);

  const HandleOnSubmit = (e) => {
    e.preventDefault();
    axios.get(SEARCH_API+searchTerm).then((response) => {
      setUpComing(response.data.results)
        console.log(response.data.results);})
    }
  

  

  return (
    <PageContainer>
        <Form onSubmit={HandleOnSubmit}>
              <StyledInput
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={HandleOnChange}
            />
        </Form>
      <WrapContent>
        <Grille>
          {upComing.map((upcomings) => (
            <StyledDiv2 key={upcomings.id} onClick={() => {
                handleClick(upcomings.id);
              }}>
              <StyledImg src={`${img_500}/${upcomings.poster_path}`}></StyledImg>
              <StyledDiv>
                <StyledH5>{upcomings.title}</StyledH5>
              </StyledDiv>
            </StyledDiv2>
          ))}
        </Grille>
      </WrapContent>
    </PageContainer>
  );
};




export default UpComing;


const Form =styled.form`
border-radius: 15px;
  background: #222222;
  margin: 20px auto 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  width: 200px;
  height: 30px;
  border: 4px solid #222222;
  padding: 0px 10px;
  border-radius: 50px;
  @media (min-width: 40em){
    border-radius: 15px;
  background: #222222;
  margin: 20px auto 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  width: 400px;
  height: 30px;
  border: 4px solid #222222;
  padding: 0px 10px;
  border-radius: 50px;
  }
`
const StyledInput = styled.input`
border: none;
  height: 100%;
  width: 100%;
  padding: 0px 5px;
  border-radius: 50px;
  background-color: #222222;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  :focus {
    outline: none;
  }`

const Grille = styled.div`
  max-width: auto;
  width: 100%;
  height: auto;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 290px);
  justify-content: center;
  grid-gap: 10px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const StyledH5 = styled.h5`
  font-family: "Roboto";
  color: #ffffff;
  font-size: 14px;
  text-align: center;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #555454;

  
`;

const WrapContent = styled.div`

`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledDiv2 = styled.div`
  border-radius: 10px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;
