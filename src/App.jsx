import "./App.css";
import Counter from "./counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./User";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("button 2 clicked");
  };

  const addToFive = (number) => {
    alert(number + 5);
  };

  return (
    <>
      <h2>React Core Concepts 2</h2>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        Third
      </button>
      {/* Vejailla */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
