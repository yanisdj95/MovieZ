import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router";

const Popular = () => {
  const img_500 = "https://image.tmdb.org/t/p/w500";
  const [popular, setPopular] = useState([]);
  const history = useHistory();
  const handleClick = (key) => {
    history.push(`/details/${key}`);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=934780721e54373dbb92f5d1dc942560"
      )
      .then((response) => {
        setPopular(response.data.results);
        console.log(response.data.results);
      });
  }, []);

  return (
    <PageContainer>
      <H1>Popular</H1>
      <WrapContent>
        <Grille>
          {popular.map((populars) => (
            <StyledDiv2
              key={populars.id}
              onClick={() => {
                handleClick(populars.id);
              }}
            >
              <StyledImg
                src={`${img_500}/${populars.backdrop_path}`}
              ></StyledImg>
              <StyledDiv>
                <StyledH5>{populars.title}</StyledH5>
              </StyledDiv>
            </StyledDiv2>
          ))}
        </Grille>
      </WrapContent>
    </PageContainer>
  );
};
export default Popular;
const H1 = styled.h1`
  font-size: 50px;
  justify-content: center;
  padding: 20px;
`;
const Grille = styled.div`
  max-width: auto;
  width: 100%;
  height: auto;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 130px);
  justify-content: center;
  grid-gap: 10px;
`;

const StyledImg = styled.img`
  max-width: 100px;
  height: auto;
  border-radius: none;
  margin: 15px;
`;

const StyledH5 = styled.h5`
  font-family: "Roboto";
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  text-overflow: ellipsis;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 20vh;
`;

const WrapContent = styled.div`
  flex: 1;
  background: #222222;
  border-radius: 15px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledDiv2 = styled.div`
  border-radius: 3px;
  box-shadow: 3px 3px 3px rgb(66, 64, 64), -3px -3px 3px rgba(0, 0, 0, 0.1);
`;
