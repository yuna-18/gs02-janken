const ModeSelect = () => {
  return (
    <div className="pay__container is-active">
      <div className="text__outer">
        <p>お賽銭を入れよう！</p>
      </div>
      <div className="btn__outer">
        <button type="button" name="pay-0" value="0円" className="btn pay-btn no-pay">入れない</button>
        <button type="button" name="pay-10" value="10円" className="btn pay-btn"><img src="./img/money_10.png" alt="10円"/></button>
        <button type="button" name="pay-50" value="50円" className="btn pay-btn"><img src="./img/money_50.png" alt="50円"/></button>
        <button type="button" name="pay-100" value="100円" className="btn pay-btn"><img src="./img/money_100.png" alt="100円"/></button>
        <button type="button" name="pay-1000" value="1000円" className="btn pay-btn"><img src="./img/money_1000_kitazato.png" alt="1000money_1000_kitazato.png円"/></button>
      </div>
    </div>
  );
};

export default ModeSelect;