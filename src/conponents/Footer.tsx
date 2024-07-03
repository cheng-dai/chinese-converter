const Footer = () => {
  return (
    <p className="fixed bottom-2  w-full text-center font-mono text-sm">
      {" "}
      Powered by{" "}
      <a
        href="https://github.com/BYVoid/OpenCC"
        className="text-blue-500 hover:underline"
      >
        OpenCC
      </a>{" "}
      &{" "}
      <a href="https://chengdai.dev" className="text-blue-500 hover:underline">
        Cheng
      </a>
    </p>
  );
};

export default Footer;
