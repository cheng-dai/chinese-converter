import { useState } from "react";
import * as OpenCC from "opencc-js";

const App = () => {
  const [text, setText] = useState("");
  const converter = OpenCC.Converter({ from: "cn", to: "tw" });
  return (
    <div>
      <h1>簡體轉繁體</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={20}
      />
      <div>{converter(text)}</div>
    </div>
  );
};

export default App;
