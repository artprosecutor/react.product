import "./App.scss";
import Header from "./components/Header";
import { Experience } from "./components/Experience";
import { Capabilities } from "./components/Сapabilities";
import { StarRaitingFunction } from "./components/StarRaitingFunction";
import StarRaitingClass from "./components/StarRaitingClass";

function App() {
  return (
    <>
      {/*<Header></Header>
      <Experience></Experience>
  <Capabilities></Capabilities>*/}
      <StarRaitingFunction></StarRaitingFunction>
      <StarRaitingClass></StarRaitingClass>
    </>
  );
}

export default App;
