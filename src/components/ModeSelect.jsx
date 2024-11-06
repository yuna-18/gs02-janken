import React from 'react';
import { useMode } from '../contexts/ModeContext';

const ModeSelect = () => {
  const { mode, setMode } = useMode(); // modeとsetModeを取得

  const modeChange = (e) => {
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
      default:
        setMode('');
    }
  };
  
  return (
    <div className="pay__container is-active">
      <div className="text__outer">
        <p>お賽銭を入れよう！</p>
      </div>
      <div className="btn__outer">
        <button type="button" onClick={modeChange} name="pay-0" value="0円" className="btn pay-btn no-pay">入れない</button>
        <button type="button" onClick={modeChange} name="pay-10" value="10円" className="btn pay-btn"><img src="./img/money_10.png" alt="10円" /></button>
        <button type="button" onClick={modeChange} name="pay-50" value="50円" className="btn pay-btn"><img src="./img/money_50.png" alt="50円" /></button>
        <button type="button" onClick={modeChange} name="pay-100" value="100円" className="btn pay-btn"><img src="./img/money_100.png" alt="100円" /></button>
        <button type="button" onClick={modeChange} name="pay-1000" value="1000円" className="btn pay-btn"><img src="./img/money_1000_kitazato.png" alt="1000円" /></button>
      </div>
    </div>
  );
};

export default ModeSelect;

// // モード決定
// function modeChange (offeringMoney) {
//   let text;
//   switch (offeringMoney) {
//     case "0円":
//       mode = "hardExtra";
//       text = GAME_INFO[mode].text;
//       $(".talk-text").css("padding", "60px 20px");
//       $(".talk-text").html(text);
//       npcHP = GAME_INFO[mode].npc.hp;
//       $(".hp-num__npc").html(npcHP);
//       plHP = GAME_INFO[mode].player.hp;
//       $(".hp-num__player").html(plHP);
//       break;
//     case "10円":
//       mode = "hard";
//       text = GAME_INFO[mode].text;
//       $(".talk-text").css("padding", "70px 20px");
//       $(".talk-text").html(text);
//       npcHP = GAME_INFO[mode].npc.hp;
//       $(".hp-num__npc").html(npcHP);
//       plHP = GAME_INFO[mode].player.hp;
//       $(".hp-num__player").html(plHP);
//       break;
//     case "50円":
//       mode = "normal";
//       text = GAME_INFO[mode].text;
//       $(".talk-text").css("padding", "50px 20px");
//       $(".talk-text").html(text);
//       npcHP = GAME_INFO[mode].npc.hp;
//       $(".hp-num__npc").html(npcHP);
//       plHP = GAME_INFO[mode].player.hp;
//       $(".hp-num__player").html(plHP);
//       break;
//     case "100円":
//       mode = "easy";
//       text = GAME_INFO[mode].text;
//       $(".talk-text").css("padding", "45px 20px");
//       $(".talk-text").html(text);
//       npcHP = GAME_INFO[mode].npc.hp;
//       $(".hp-num__npc").html(npcHP);
//       plHP = GAME_INFO[mode].player.hp;
//       $(".hp-num__player").html(plHP);
//       break;
//     case "1000円":
//       mode = "easyExtra";
//       text = GAME_INFO[mode].text;
//       $(".talk-text").css("padding", "35px 20px");
//       $(".talk-text").html(text);
//       npcHP = GAME_INFO[mode].npc.hp;
//       plHP = GAME_INFO[mode].player.hp;
//       $(".hp-num__npc").html(npcHP);
//       $(".hp-num__player").html(plHP);
//       break;
//   }
// }