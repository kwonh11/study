import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30px;
  background-color: darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

export default function Home() {
  return <Container>Home</Container>;
}
