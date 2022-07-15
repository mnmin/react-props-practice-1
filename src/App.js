import { useState } from "react";

import { reverse } from "./helpers";
import "./styles.css";
import Title from "./components/Title.js";
import NameLength from "./components/NameLength.js";
import NameReversed from "./components/NameReversed.js";

export default function App() {
  const [name, setName] = useState("Nicolas");

  return (
    <div className="app">
      <Title name={name} />
      <NameLength name={name} length={name.length} />
      <NameReversed name={name} potato={reverse(name)} />
    </div>
  );
}
