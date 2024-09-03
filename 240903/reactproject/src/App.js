import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  // const name = "Lee";
  const BodyProps = {
    name: "Lee",
    location: "서울시",
    // favorList: ["파스타", "소금빵", "떡볶이"],
  };

  return (
    <div className="App">
      <Header />
      {/* <Body name={name} location={"서울시"} /> */}
      <Body {...BodyProps} />
      <Footer />
    </div>
  );
}

export default App;
