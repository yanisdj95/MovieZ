import styled from "styled-components";
const Footer = () => {
  return (
    <StyledFooter>
      <StyledP>© Movie’Z</StyledP>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  width: 100%;
  height: 40px;
  bottom: 0;
  position: fixed;
  background: #3d3939;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledP = styled.p`
  font-family: "Nunito", sans-serif;
  color: #58dd94;
`;
