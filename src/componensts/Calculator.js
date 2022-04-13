import { useRef, useState, useEffect } from "react";
import "./Calculator.css";
import { btns, BTN_ACTIONS } from "./btnConfig";

function Calculator() {
  const btnsRef = useRef(null);
  const expRef = useRef(null);
  const [expression, setExpression] = useState("");

  useEffect(() => {
    const btns = Array.from(btnsRef.current.querySelectorAll("button"));
    // console.log(btns);
    btns.forEach((e) => (e.style.height = e.offsetWidth + "px"));
  }, []);

  const btnClick = (item) => {
    // console.log(item);
  };
  return (
    <div className="calculator">
      <div className="theme">
        <div className="theme__icon"> ☀️</div>
      </div>
      <div className="calculator__result">
        <div ref={expRef} className="calculator__result__exp">
          9999
        </div>
      </div>
      <div ref={btnsRef} className="calculator__btns">
        {btns.map((item, index) => (
          <button
            key={index}
            className={item.class}
            onClick={() => btnClick(item)}
          >
            {item.display}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
