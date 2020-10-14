import React from 'react';
import styled from 'styled-components';
import "papercss/dist/paper.min.css";
import TictacToe from './components/tictactoe'

// https://claritydev.net/blog/making-tic-ta-toe-with-react-hooks-and-styled-comp/
// https://airbnb.io/javascript/react/
function App() {
  return (
    <Main>
      <TictacToe />
    </Main>
  );

}

const Main = styled.main`
  display: flex;
  justify-content : center;
  align-items : center;
  height: 100vh;
`;

export default App;
