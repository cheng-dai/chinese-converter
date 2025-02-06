import { useState } from "react";
import * as OpenCC from "opencc-js";
import Footer from "./conponents/Footer";

const App = () => {
  const [text, setText] = useState("");
  const [toTraditional, setToTraditional] = useState(true);
  const converter = toTraditional
    ? OpenCC.Converter({ from: "cn", to: "tw" })
    : OpenCC.Converter({ from: "tw", to: "cn" });

  return (
    <div className="min-h-screen dark:bg-black/80 dark:text-white/90">
      <main className="p-4 flex flex-col gap-4 items-center">
        <div className="flex justify-center items-center gap-4">
          <h1 className="text-xl font-semibold text-center py-4">
            {toTraditional ? "简体" : "繁體"}
          </h1>
          <button
            className="border-2 border-black/20 rounded-md px-2 py-1 hover:bg-black/10"
            onClick={() => setToTraditional(!toTraditional)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M5.22 14.78a.75.75 0 0 0 1.06-1.06L4.56 12h8.69a.75.75 0 0 0 0-1.5H4.56l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06zm5.56-6.5a.75.75 0 1 1-1.06-1.06l1.72-1.72H2.75a.75.75 0 0 1 0-1.5h8.69L9.72 2.28a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06z"
              />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-center py-4">
            {toTraditional ? "繁體" : "简体"}
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4  ">
          <textarea
            value={text}
            placeholder={
              toTraditional ? "请输入要转换的文字" : "請輸入要轉換的文字"
            }
            onChange={(e) => setText(e.target.value)}
            className="border-2 border-black/20 rounded-md h-[30vh] p-4 focus:outline-none  dark:bg-black/40 dark:text-white/90"
          />
          {text ? (
            <div className="border-2 p-4 rounded-md">{converter(text)}</div>
          ) : null}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
