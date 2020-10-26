import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
      h1 {
        font-size: 1.0rem;
      }
    }
`;