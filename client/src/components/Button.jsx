const Button = ({ children, onClick }) => {
  return (
    <button className="mr-10 mt-5 px-5 py-3 rounded-md shadow-md" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
