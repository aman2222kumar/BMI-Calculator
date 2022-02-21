
import { useState } from 'react';
import './App.css';



 function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [show, setShow] = useState(1);
  const [result, setResult] = useState(0);
  const [disable, setDisable] = useState(false);

  function DisplayResult() {
    setShow(show == 1 ? 0 : 1);
    if ((weight > 500 && height > 200) || weight == 0 || height == 0) {
      alert("sorry it can not be calculated");
      setShow(1);
    } else {
      let r = height * height;
      setResult(((weight / r) * 10000).toFixed(1));
      setDisable(true);
    }
  }
  function Reset() {
    setWeight(0);
    setHeight(0);
    setResult(0);
    setShow(1);
    setDisable(false);
  }
  return (
    <>
      <div className="container">
        <label>
          Enter Weight in kg:
          <input
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          ></input>
        </label>

        <label>
          Enter Height in cm:
          <input
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          ></input>
        </label>

        <button onClick={DisplayResult} disabled={disable}>
          Calculate
        </button>

        <button onClick={Reset}>Reset</button>

        {show == 0 && (
          <div className="resultContainer">
            <div className="information">
              <ul id="child">
                <li id="child0">
                  <li id="child1"> UnderWeight</li>
                  <li id="child11">16.0</li>
                </li>

                <li id="child01">
                  <li id="child2">Normal</li>

                  <li id="child21">18.5-25.0</li>
                </li>

                <li id="child03">
                  <li id="child3">overweight</li>
                  <li id="child31">40.0</li>
                </li>
              </ul>
            </div>
            <div className="resultText" style={{ color: "white" }}>
              You BMI :{result}
            </div>
          </div>
        )}
      </div>
    </>
  );
}











export default App;
