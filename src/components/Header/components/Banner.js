import styled from "styled-components";

export const StyledBanner = styled.div`
  height: 230px;
  background-color: blue;
  background-image: url(${({ bg }) => bg});
`;
