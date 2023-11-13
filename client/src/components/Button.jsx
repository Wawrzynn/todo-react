const Button = ({ children, onClick }) => {
  return (
    <button className="mt-5 px-5 py-3 rounded-md shadow-md hover:bg-cyan-300" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
