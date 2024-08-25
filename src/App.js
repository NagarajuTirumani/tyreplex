import "./App.css";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import Deals from "./components/Deals";
import ServiceComponent from "./components/ServicesOffer";
import Sales from "./components/Sales";
import BottomContainer from "./components/BottomContainer";

function App() {
  return (
    <div className="container-fluid bg-light mb-2">
      <Header />
      <div className="below-container">
        <TopSection />
        <Deals />
        <ServiceComponent />
        <Sales />
        <BottomContainer />
      </div>
    </div>
  );
}

export default App;
