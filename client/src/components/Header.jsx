import reactImage from "../../public/images/react.png";

const Header = () => {
  return (
    <div className="flex w-full justify-center items-center text-8xl mt-10">
      <h1>Todo React</h1>
      <img src={reactImage} alt="react" className="w-28 h-auto ml-10"/>
    </div>
  );
};

export default Header;
