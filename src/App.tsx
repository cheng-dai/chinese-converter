import { useState } from "react";
import * as OpenCC from "opencc-js";
import Footer from "./conponents/Footer";

const App = () => {
  const [text, setText] = useState("");
  const [toTraditional, setToTraditional] = useState(true);
  const [convertedText, setConvertedText] = useState("");
  const [copied, setCopied] = useState(false);

  const converter = toTraditional
    ? OpenCC.Converter({ from: "cn", to: "tw" })
    : OpenCC.Converter({ from: "tw", to: "cn" });

  async function handleCopy() {
    await navigator.clipboard.writeText(convertedText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }
  return (
    <div className="min-h-[100dvh] dark:bg-black/80 dark:text-white/90">
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
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <textarea
            value={text}
            placeholder={
              toTraditional ? "请输入要转换的文字" : "請輸入要轉換的文字"
            }
            onChange={(e) => {
              setText(e.target.value);
              setConvertedText(converter(e.target.value));
            }}
            className="border-2 border-black/20 rounded-md h-[30vh] p-4 focus:outline-none  dark:bg-black/40 dark:text-white/90"
          />
          {convertedText ? (
            <div className="border-2 p-4 rounded-md relative">
              <p>{convertedText}</p>
              <button
                className="absolute bottom-2 right-2 "
                onClick={handleCopy}
              >
                {copied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <g fill="currentColor">
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093l3.473-4.425z" />
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                    />
                  </svg>
                )}
              </button>
            </div>
          ) : null}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
