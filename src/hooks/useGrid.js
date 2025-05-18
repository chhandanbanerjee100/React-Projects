import { useState } from "react";

const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

// config.flat - [1, 1, 1, 1, 0, 1, 1, 1, 1];

export function useGrid() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const handleClick = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivate();
    }
  };

  const deactivate = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((prevOrder) => {
        const newOrder = [...prevOrder];
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };

  return { config, order, handleClick, isDeactivating };
}
