import style from "@styles/dual-button.module.css";
import MinusIcon from "./minus-icon";
import PlusIcon from "./plus-icon";
import { useStore } from "@nanostores/react";
import { counter as counterStore, decrement, increment } from "@stores/counter";

function DualButton() {
  const counter = useStore(counterStore);

  return (
    <div className={style.dualButton}>
      <button type="button" onClick={decrement}>
        <MinusIcon />
      </button>
      <span>{counter}</span>
      <button type="button" onClick={increment}>
        <PlusIcon />
      </button>
    </div>
  );
}

export default DualButton;
