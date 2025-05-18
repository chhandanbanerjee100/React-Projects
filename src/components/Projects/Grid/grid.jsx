import { useGrid } from "../../../hooks/useGrid";
import styles from "./index.module.css";

function Cell({ filled, onClick, isDisabled }) {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? styles.itemActivated : styles.item}
    />
  );
}

function Grid() {
  const { config, order, handleClick, isDeactivating } = useGrid();

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {config.flat(1).map((value, index) => {
          return value === 1 ? (
            <Cell
              key={index}
              filled={order.includes(index)}
              onClick={() => handleClick(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
