import { createSignal } from "solid-js";
import { Button } from "@suid/material";


export const Hello = () => {
  const [counter, setCounter] = createSignal(0);

  const increment = () => {
    setCounter(counter() + 1);
  };

  return (
    <div>
      <Button variant="contained" onClick={increment}>Click Me</Button>
      <p>You've pressed the button {counter()} times.</p>
    </div>
  );
}
