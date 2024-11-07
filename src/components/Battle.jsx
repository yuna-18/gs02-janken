import React, {useState, useEffect} from 'react';
import {GAME_INFO} from "../constants.js";
import {useMode} from '../contexts/ModeContext';

const Battle = () => {
  const {mode, setMode} = useMode(); // modeとsetModeを取得


  // const PreGame = () => {
  const modeData = GAME_INFO[mode];
  const [preGameEffectStart, setPreGameEffectStart] = useState(false); // ゲーム前の演出開始時間を調整
  const [npcHP, setNpcHP] = useState(0);
  const [plHP, setPlHP] = useState(0);
  const textClass = `text-${mode}`; //モードごとにテキスト位置調整
  const [npcTalkText, setNpcTalktext] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setNpcTalktext(modeData.text);
      setNpcHP(modeData.npc.hp);
      setPlHP(modeData.player.hp);
      setPreGameEffectStart(true);
    }, 1000);
  }, [mode]);

  // };

  return (
    <div className="battle__container">
      <div className={`npc__outer ${preGameEffectStart ? 'is-active' : ''}`}>
        <div className="chara__inner">
          <img src="img/god.png" alt="神様" />
        </div>
        <div className={`talk__inner ${preGameEffectStart ? 'is-active' : ''}`}>
          <p className={`talk-text ${textClass}`} dangerouslySetInnerHTML={{__html: npcTalkText}} />
        </div>
        <div className="npc-choice__inner"></div>
        <div className="hp__inner">
          <p>HP</p>
          <p className="hp-num__npc">{npcHP}</p>
        </div>
      </div>

      <div className="hp__inner player">
        <p>HP</p>
        <p className="hp-num__player">{plHP}</p>
      </div>
      <div className="btn__outer">
        <button type="button" name="player-gu" value="グー" className="btn battle-btn player"><img src="img/janken_gu.png" alt="グー" /></button>
        <button type="button" name="player-choki" value="チョキ" className=" btn battle-btn player"><img src="img/janken_choki.png" alt="チョキ" /></button>
        <button type="button" name="player-pa" value="パー" className=" btn battle-btn player"><img src="img/janken_pa.png" alt="パー" /></button>
      </div>
    </div>
  );
};

export default Battle;
// // NPCじゃんけんの選択
// function npcJanken () {
//   let choice = Math.floor(Math.random() * 3) + 1;

//   switch (choice) {
//     case 1:
//       $(".npc-choice__inner").html('<button type="button" name="npc-gu" value="グー" class=" btn battle-btn npc"><img src="img/janken_gu.png" alt="グー"></button>');
//       break;
//     case 2:
//       $(".npc-choice__inner").html('<button type="button" name="npc-choki" value="チョキ" class="btn battle-btn npc"><img src="img/janken_choki.png" alt="チョキ"></button>');
//       break;
//     case 3:
//       $(".npc-choice__inner").html('<button type="button" name="npc-pa" value="パー" class=" btn battle-btn npc"><img src="img/janken_pa.png" alt="パー"></button>');
//       break;
//   }
// }
// // 勝ち負け判定
// function battleJudge (playerChoice, npcChoice) {
//   if (playerChoice === npcChoice) {
//     return gameInfo.damage.draw;
//   } else if (playerChoice !== npcChoice) {
//     switch (playerChoice) {
//       case "グー":
//         switch (npcChoice) {
//           case "チョキ":
//             return gameInfo.damage.win;
//           case "パー":
//             return gameInfo.damage.lose;
//         }
//       case "チョキ":
//         switch (npcChoice) {
//           case "パー":
//             return gameInfo.damage.win;
//           case "グー":
//             return gameInfo.damage.lose;
//         }
//       case "パー":
//         switch (npcChoice) {
//           case "グー":
//             return gameInfo.damage.win;
//           case "チョキ":
//             return gameInfo.damage.lose;
//         }
//     }
//   }
// }

// function calcDamage (damage) {
//   // lose
//   if (damage > 0) {
//     plHP -= damage;
//     $(".hp-num__player").text(plHP);
//     if (plHP <= 0) {
//       $(".ready").html("");
//       $(".result").html("YOU LOSE").css("color", "navy");
//     }
//     // win
//   } else if (damage < 0) {
//     npcHP += damage;
//     $(".hp-num__npc").text(npcHP);
//     if (npcHP <= 0) {
//       $(".ready").html("");
//       $(".result").html("YOU WIN").css("color", "red");
//     }
//   }
// }