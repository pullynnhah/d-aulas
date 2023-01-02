import styled from "styled-components";

export default function DiscoBall() {
  return (
    <DiscoWrapper>
      <Hanger />
      <Disco>
        <img
          src="https://drive.google.com/uc?id=0B7QrEBMF4GTGQ3lfRzV0cU5rNHM"
          alt=""
        />
      </Disco>
    </DiscoWrapper>
  );
}

const DiscoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  text-align: center;
`;

const Hanger = styled.div`
  background: #eee;
  width: 1px;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
  height: 60px;
  position: absolute;
  top: 50px;
  left: 50%;
`;

const Disco = styled.div`
  margin-bottom: 40px;

  animation-timing-function: linear;
  animation-duration: 1s;
  animation-name: hue;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  background: lightgrey;
  border-radius: 200px;
  height: 200px;
  width: 200px;
  box-shadow: 0 3px 200px -3px #fff;

  img {
    height: 200px;
    width: 200px;
  }
`;
