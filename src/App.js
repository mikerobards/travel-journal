import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import data from "./data";

function App() {
  const cards = data.map(card => {
    return <Card
      key={card.id}
      card={card}
    />
  })
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
