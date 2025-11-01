import styled from "styled-components";
import { FlexCol } from "./shared/styles/core";

function App() {
  return (
    <Container>
      <BackgroundVideo autoPlay muted loop playsInline>
        <source src="/assets/videos/socks_video.mp4" type="video/mp4" />
      </BackgroundVideo>
      <ContentOverlay>
        <Content>
          <h1>Million Dollar Socks</h1>
          <h2>This is the future site for Million Dollar Socks</h2>
          <p>Under Construction - Come Back Soon!</p>
        </Content>
      </ContentOverlay>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const ContentOverlay = styled(FlexCol)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  color: white;
  text-align: center;
  padding: 2rem;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);

  h1,
  h2,
  p {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }
`;

const Content = styled(FlexCol)`
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
`;

export default App;
