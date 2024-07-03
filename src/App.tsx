import { useState } from "react";
import * as OpenCC from "opencc-js";

const App = () => {
  const [text, setText] = useState("");
  const converter = OpenCC.Converter({ from: "cn", to: "tw" });

  return (
    <div className="p-4 ">
      <h1 className="text-xl font-semibold text-center py-4">簡體轉繁體</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-2 border-black/20 rounded-md w-full h-[30vh] p-4"
      />
      <pre>{converter(text)}</pre>
    </div>
  );
};

export default App;
