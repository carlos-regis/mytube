import styled from "styled-components";

export const StyledBanner = styled.div`
  position: absolute;
  width: 100%;
  height: 230px;
  left: 0px;
  top: 56px;
  background-image: url(${({ bg }) => bg });
`;
