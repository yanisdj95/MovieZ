import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Footer from "../footer";
import { media } from "../features/media";
const Details = (props) => {
  const param = useParams();
  const [detail, setDetail] = useState({});
  const img_500 = "https://image.tmdb.org/t/p/w1280";
  const FormatUS = Intl.NumberFormat("en");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=934780721e54373dbb92f5d1dc942560&language=en-US`
      )
      .then((response) => {
        setDetail(response.data);
        console.log(response.data);
      });
  }, [param.id]);

  return (
    <StyledB>
      <ContainerD>
        <Wrapper>
          <WrapContentImg>
            <StyledImg
              src={`${img_500}/${detail.poster_path}`}
              alt="img"
            ></StyledImg>
          </WrapContentImg>
          <WrapContent>
            <StyledH1>{detail.title}</StyledH1>
            <StyledHr />
            <StyledH2>Storyline</StyledH2>
            <StyledP>{detail.overview}</StyledP>
            <StyledHr />
            <StyledUl>
              <StyledLi>Release Date :  {detail.release_date}</StyledLi>
              <StyledLi>Budget : {FormatUS.format(detail.budget)} $</StyledLi>
              <StyledLi>Revenue : {FormatUS.format(detail.revenue)} $</StyledLi>
              <StyledLi>Duration : {detail.runtime} min</StyledLi>
              <StyledLi>Public vote : {detail.vote_average}/10</StyledLi>
            </StyledUl>
          </WrapContent>
        </Wrapper>
      </ContainerD>
    </StyledB>
  );
};
export default Details;

/*Styled Components*/

const StyledB = styled.div`
  background-color: #3d3939;
  height: 100%;
  @media (min-width: 40em) {
    height: 100vh;
  }
`;
const ContainerD = styled.div`
  padding: 3rem 0;
  margin-inline: auto;
  width: min(90%, 75.5rem);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 40em) {
    display: flex;
    flex-direction: row;
    * {
      flex-basis: 100vh;
    }
    * {
      margin-left: 2em;
    }
  }
`;

const WrapContentImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 40em) {
    display: block;
    justify-content: center;
    align-items: center;
    box-shadow:  5px 5px 10px #484444;

  }
`
const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 40em) {
    display: block;
    justify-content: center;
    align-items: center;

  }
`;

const StyledImg = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 5px;
`;

const StyledH1 = styled.h1`
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 20px;
  max-width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b6b6b6;
  
  @media (min-width: 40em) {
    text-transform: uppercase;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b6b6b6;
    padding-top: 30px;
    max-width: 40rem;
  }
`;
const StyledH2 =styled.h2`
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  color: #b6b6b6;  
  margin-bottom: -5px;
  
  @media (min-width: 40em) {
    margin-bottom: -30px;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    font-size: 35px;
    color: #b6b6b6;
  }
`
const StyledP = styled.p`
  font-size: 10px;
  font-family: Open Sans;
  color: #b6b6b6;
  justify-content: center;
  @media (min-width: 40em) {
    font-size: 20px;
    font-family: Open Sans;
    color: #b6b6b6;
    justify-content: center;
    padding: 30px;
  }
`;

const StyledHr = styled.hr`
  width: 80%;
  height: 0.5px;
  background-color: #fff;
  margin-right: 40px;
`;
const StyledUl = styled.ul`
padding: 0;

`;
const StyledLi = styled.li`
 
  line-height: 1.5rem;
  list-style: none;
  font-size: 10px;
  font-family: Open Sans;
  color: #b6b6b6;
  
  @media (min-width: 40em) {
  
    line-height: 3rem;
    font-size: 20px;
    font-family: Open Sans;
    color: #b6b6b6;
    width: 90%;
    justify-content: center;
   
  }
`;



/* 
<StyledLi><StyledH>Release Date</StyledH> :  {detail.release_date}</StyledLi>
              <StyledLi><StyledH>Budget</StyledH> : {FormatUS.format(detail.budget)} $</StyledLi>
              <StyledLi><StyledH>Revenue </StyledH>: {FormatUS.format(detail.revenue)} $</StyledLi>
              <StyledLi><StyledH>Duration</StyledH> : {detail.runtime} min</StyledLi>
              <StyledLi><StyledH>Public vote</StyledH> : {detail.vote_average}/10</StyledLi>

const StyledUl = styled.ul`
padding: 0;
@media (min-width: 1250px) {
  padding: 10px;

}
`;
const StyledLi = styled.li`
  display: flex;
  align-items:center;
  justify-content: flex-start;
  line-height: 1.5rem;
  list-style: none;
  font-size: 10px;
  font-family: Open Sans;
  color: #b6b6b6;
  
  @media (min-width: 1250px) {
  background-color: green;
  display: flex;
  align-items:left;
    font-size: 20px;
    font-family: Open Sans;
    color: #b6b6b6;
    width: 90%;
    justify-content: center;
    *+*{
    margin-left: 0em;
  }
  }
`;
const StyledH = styled.p`
font-weight: bold;
`


const StyledB = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #3d3939;
  justify-content: center;
  flex-direction: column;
  
  
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  margin: 0 auto;
  align-content: center;
  
   
`;

const ImageCont = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

`;
const StyledImg = styled.img`
width: 70%;
display: flex;
justify-content: center;
border-radius:10px;
`;
const WrapContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: top center;
  flex-direction: column;
  font-family: Open Sans;
  height: 100vh;
  padding-right: 40px;
  @media screen and (max-width: 500px) {
    padding-bottom: 65px;
    flex-direction: column;

  }
`;

const StyledH1 = styled.h1`
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b6b6b6;
  padding-top: 80px;
`;

const StyledP = styled.p`
  font-size: 20px;
  font-family: Open Sans;
  color: #b6b6b6;
  width: 90%;
  justify-content: center;
  
`;
const StyledHr= styled.hr`
width: 80%;
height: 0.5px;
background-color: #fff;
`
*/
