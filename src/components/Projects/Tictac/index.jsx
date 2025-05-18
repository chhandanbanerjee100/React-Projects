import { useState } from "react";
import styles from "./index.module.css";

export default function Tictac() {
  return (
    <div className={styles.wrapper}>
      <div>Player X status</div>
      <button>Reset Game</button>
    </div>
  );
}
