import React, {useState} from 'react';
import {useMode, useGame} from '../contexts/ModeContext';

const ModeSelect = () => {
  const {mode, setMode} = useMode(); // モード保持modeとsetModeを取得
  const {game, setGame} = useGame();//バトル画面遷移フラグ
  const [dialog, setDialog] = useState(false);//ダイアログ表示非表示

  const ModeChange = (e) => {
    setDialog(true);
    switch (e.currentTarget.value) {
      case "0円":
        setMode("hardExtra");
        break;
      case "10円":
        setMode("hard");
        break;
      case "50円":
        setMode("normal");
        break;
      case "100円":
        setMode("easy");
        break;
      case "1000円":
        setMode("easyExtra");
        break;
    }
  };
  
  const StartGame = () => {
    setDialog(false);
    setGame(true);
  }
  
  const CloseDialog = () => {
    setMode("");
    setDialog(false);
  };

  return (
    <>
      <div className={`pay__container ${game ? '' : 'is-active'}`}>
        <div className="text__outer">
          <p>お賽銭を入れよう！</p>
        </div>
        <div className="btn__outer">
          <button type="button" onClick={ModeChange} name="pay-0" value="0円" className="btn pay-btn no-pay">入れない</button>
          <button type="button" onClick={ModeChange} name="pay-10" value="10円" className="btn pay-btn"><img src="./img/money_10.png" alt="10円" /></button>
          <button type="button" onClick={ModeChange} name="pay-50" value="50円" className="btn pay-btn"><img src="./img/money_50.png" alt="50円" /></button>
          <button type="button" onClick={ModeChange} name="pay-100" value="100円" className="btn pay-btn"><img src="./img/money_100.png" alt="100円" /></button>
          <button type="button" onClick={ModeChange} name="pay-1000" value="1000円" className="btn pay-btn"><img src="./img/money_1000_kitazato.png" alt="1000円" /></button>
        </div>
      </div>
      <div className={`dialog__container ${dialog ? 'is-active' : ''}`}>
        <div className="dialog__outer">
          <div className="close-btn dialog-btn" onClick={CloseDialog}>✕</div>
          <div className="dialog__content">
            <p>この金額でよろしいですか？</p>
            <div className="btn__outer">
              <button className="dialog-btn yes" onClick={StartGame}>はい</button>
              <button className="dialog-btn no" onClick={CloseDialog}>いいえ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeSelect;