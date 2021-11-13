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
          <WrapContent>
            <StyledImg
              src={`${img_500}/${detail.poster_path}`}
              alt="img"
            ></StyledImg>
          </WrapContent>
          <WrapContent>
            <StyledH1>{detail.title}</StyledH1>
            <StyledHr />
            <StyledP>{detail.overview}</StyledP>
            <StyledHr />
            <ul>
              <li></li>  
              <li></li>  
              <li></li>  
            </ul>
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
  height: 100vh;
  @media(min-width: 40em) {
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
   
    @media(min-width: 40em) {
    display: flex;
    gap: 200px;
    flex-direction: row;
    * {
      flex-basis: 100vh;
    }
  }
  
`;

const ImageCont = styled.div`

`;

const WrapContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media(min-width: 1250px) {
  display: block;
  justify-content: center;
  align-items: center;

}
`

const StyledImg = styled.img`
  display: block;
  max-width: 100%;
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
  @media(min-width: 1250px) {
    text-transform: uppercase;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b6b6b6;
    padding-top: 80px;
    max-width: 40rem;
  }
 
`;

const StyledP = styled.p`
  font-size: 10px;
  font-family: Open Sans;
  color: #b6b6b6;
  justify-content: center;
  @media(min-width: 1250px) {
    font-size: 20px;
    font-family: Open Sans;
    color: #b6b6b6;
    width: 90%;
    justify-content: center;
  }
 
`;

const StyledHr = styled.hr`
  width: 90%;
  height: 0.5px;
  background-color: #fff;
`;

/* 
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
