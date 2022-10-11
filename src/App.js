import { useContext } from "react";
import Checkout from "./components/template/Checkout";
import FormTemplate from "./components/template/FormTemplate";
import { OrderContext } from "./context/OrderContext";

function App() {
  const { view } = useContext(OrderContext);

  if (view === 2) {
    return (
      <Checkout />
    );
  }

  return (
    <div>
      <FormTemplate />
    </div>
  );
}

export default App;
