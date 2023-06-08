import { useSelector, useDispatch } from "react-redux";
import { getCards } from "./services/cardSlice";
import CardItem from "./components/CardItem";
import { useEffect } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

function App() {
  const dispatch = useDispatch();
  const { cards, isLoading, isError, message } = useSelector(
    (state) => state.cards
  );

  const onEmit = () => {
    console.log("Button clicked");
    socket.emit("testEvent");
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getCards());
    console.log("Testing cards");
  }, []);
  if (isLoading) {
    return <h1> Please wait...</h1>;
  }
  return (
    <div className="App">
      <h2>Cards:</h2>
      <section>
        {cards.length > 0 ? (
          <div className="card-grid">
            {cards.map((card) => (
              <CardItem key={card._id} card={card} />
            ))}
          </div>
        ) : (
          <h3>No cards</h3>
        )}
      </section>
      <button onClick={onEmit}>Test</button>
    </div>
  );
}

export default App;
