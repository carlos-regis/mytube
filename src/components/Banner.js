import styled from "styled-components";
import config from "../../config.json";

const BannerStyle = styled.div`
display: flex;
  width: 100%;
  height: 230px;
  overflow: hidden;
  img{
    width: 100%;
    object-fit: cover;
  }
`;

export default function Banner() {
  return (
    <BannerStyle>
        <img src={config.banner} />
    </BannerStyle>
  );
}
