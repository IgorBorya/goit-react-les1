import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Message from "./components/Message/Message";
import Modal from "./components/Modal/Modal";

const App = () => {
  const isOnline = false;
  const isLoading = false;
  const age = 13;
  const filmsData = [
    { id: "1", title: "Got" },
    { id: "2", title: "Taxi" },
    { id: "3", title: "Terminator" },
  ];
  const goodsData = [
    { id: "1", title: "Apple" },
    { id: "2", title: "Onion" },
    { id: "3", title: "milk" },
  ];
  return (
    <>
      <Header />
      <p>Супер Форум</p>
      {isOnline && <h2>Welcome</h2>}
      {isLoading && <h2>Loading</h2>}
      {age > 18 ? <h2>You are so adult</h2> : <h2>You are too little</h2>}
      <Message author="Petro" message="Sell Sofa" />
      <Message message="Hello" />
      <List title="films" data={filmsData} />
      <List title="Goods" data={goodsData} />
      <Modal>
        <h2>Rent house</h2>
        <button>Yes</button>
        <button>No</button>
      </Modal>
    </>
  );
};
export default App;
