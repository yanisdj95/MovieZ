import apex from '../../img/apex.jpg';
import dune from '../../img/dune.jpg';
import eternals from '../../img/eternals.jpg';
import james from '../../img/007.jpg';
import venom from '../../img/venom.jpg';
import adams from '../../img/adams.jpg';
import freeguy from '../../img/freeguy.jpg';
import snakeeyes from '../../img/snakeeyes.jpg';
import styled, { keyframes } from 'styled-components';
const Slider = () =>{
    return(
      <Sliderr>
        <Slides>
            <Slide> <StyledImg src={apex}/> </Slide>
            <Slide> <StyledImg src={dune}/> </Slide>
            <Slide> <StyledImg src={eternals}/> </Slide>
            <Slide> <StyledImg src={james}/> </Slide>
            <Slide> <StyledImg src={venom}/> </Slide>
            <Slide> <StyledImg src={freeguy}/> </Slide>
            <Slide> <StyledImg src={adams}/> </Slide>
            <Slide> <StyledImg src={snakeeyes}/> </Slide>
        </Slides>
      </Sliderr>
    );
}

export default Slider;


const Sliderr = styled.div`
display:flex;
justify-content:center;
  width:100%;
  height:100vh;
`
const glisse = keyframes`
 0%   {transform: translateX(0);}
 20%  {transform: translateX(-634px);}
 40%  {transform: translateX(-1268px);}
 60%  {transform: translateX(-1902px);}
 80%  {transform: translateX(-2536px);}
 100% {transform: translateX(0);}
`

const Slides = styled.div`
  width: 100%;
  overflow:hidden;
  height:100%;
  display:flex;
  flex-direction:row;
`

const Slide = styled.div`
   height:98vh;
   animation: ${glisse} 8s infinite;
`

const StyledImg = styled.img`
    width: calc(100vw/3);
    height:100vh;
`




