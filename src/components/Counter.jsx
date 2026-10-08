import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Licznik: {count}</p>
        <button onClick={() => setCount(count + 5)}>
            Zwiększ o 5
        </button>

        <button onClick={() => setCount(count + 1)}>
            Zwiększ
        </button>
    

        <button onClick={() => setCount(0)}>
            Reset
        </button>

        <button onClick={() => setCount(count - 1)}>
            Zmniejsz
        </button>

        <button onClick={() => setCount(count - 5)}>
            Zmniejsz o 5
        </button>
        
        <button onClick={() => setCount(100)}>
            Ustaw na 100
        </button>
    </div>
  );
}

export default Counter;
