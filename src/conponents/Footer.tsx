const Footer = () => {
  return (
    <p className="fixed w-full bottom-0 py-1 text-white/80  text-center font-mono text-sm bg-slate-500">
      {" "}
      Powered by{" "}
      <a
        href="https://github.com/BYVoid/OpenCC"
        className="text-blue-300 hover:underline"
      >
        OpenCC
      </a>{" "}
      &{" "}
      <a href="https://chengdai.dev" className="text-blue-300 hover:underline">
        Cheng
      </a>
    </p>
  );
};

export default Footer;
