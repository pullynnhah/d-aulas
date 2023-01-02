import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyled>
      <h1> Supimpa! </h1>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  background: #752656;
  position: relative;
  z-index: 3;
  width: 100%;
  height: 60px;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Sansita Swashed", cursive;
  color: white;
`;
