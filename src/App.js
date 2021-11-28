import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import TicTac from "./components/tictac";
export default function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <TicTac />
    </div>
  );
}
