import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";


const Details = (props) => {
  const param = useParams();
  const [detail, setDetail] = useState({});
  const img_500 = "https://image.tmdb.org/t/p/w500"; 

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=934780721e54373dbb92f5d1dc942560&language=en-US`
      )
      .then((response) => {
        setDetail(response.data);
        console.log(response.data);
      });
  }, []);
  return (
    <PageContainer>
      <WrapContent>
        <StyledDiv>
          <StyledDiv1>
            <div key={detail.id}>
              <p>details</p>
              <img src={`${img_500}/${detail.backdrop_path}`}></img>
              <p>{detail.title}</p>

            </div>
          </StyledDiv1>
        </StyledDiv>
      </WrapContent>
    </PageContainer>
  );
};

export default Details;

/*Styled Components*/



const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const WrapContent = styled.div`
  flex: 1;
  background: #222222;
`;

const StyledDiv = styled.div`
  background: yellow;
  margin: 0px;
`;

const StyledDiv1 = styled.div`
  padding: 15px;
`;

const StyledImg = styled.img`
  width: 300px;
  height: 350px;
  border-radius: 10px;
`;
