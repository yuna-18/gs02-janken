import Contents from "./Contents";

const Background = () => {
  return (
    <div className="bg__wrapper">
      <div className="bg__container">
        <div className="bg__outer">
          <img src="img/opening.png" alt="神社" />
        </div>
        <Contents />
      </div>
    </div>
  );
};

export default Background;