import React, {useState, useEffect} from 'react';
import {GAME_INFO} from "../constants.js";
import {useMode} from '../contexts/ModeContext';
import {useBattle} from '../contexts/BattleContext';

const Battle = () => {
  const {mode, setMode} = useMode(); // modeとsetModeを取得
  // バトル開始のタイミング
  const {battleStart, setBattleStart} = useBattle(); // modeとsetModeを取得


  const modeData = mode && GAME_INFO[mode] ? GAME_INFO[mode] : null;
  // ゲーム前の演出開始タイミング
  const [preGameEffectStart, setPreGameEffectStart] = useState(false);
  const [npcHP, setNpcHP] = useState(0);
  const [plHP, setPlHP] = useState(0);
  const [startDelay, setStartDelay] = useState(0);
  //モードごとにテキスト位置調整
  const textClass = `text-${mode}`;
  const [npcTalkText, setNpcTalktext] = useState('');

  //じゃんけんぽんのテキスト
  const [jankenText, setJankenText] = useState("じゃんけん…")
  const [selectedBtn, setSelectedBtn] = useState(null);
  const [selectedNPCBtn, setSelectedNPCBtn] = useState(null);
  const [finish, setFinish] = useState(false);

  // NPC
  const [npcBtnName, setNPCBtnName] = useState("");
  const [npcBtnValue, setNPCBtnValue] = useState(null);
  const [npcBtnSrc, setNPCBtnSrc] = useState("");
  const [npcBtnAlt, setNPCBtnAlt] = useState("");
  const [npcBtnVisible, setNPCBtnVisible] = useState(false);

  // ゲーム前演出進行・値設定
  useEffect(() => {
    if (modeData && modeData.delayTime) {
      setTimeout(() => {
        setStartDelay(modeData.delayTime);
        setNpcTalktext(modeData.text);
        setNpcHP(modeData.npc.hp);
        setPlHP(modeData.player.hp);
        setPreGameEffectStart(true);
      }, 1000);
    }
  }, [mode]);

  // バトル開始前の演出終了後
  useEffect(() => {
    if (!preGameEffectStart) return;

    // setTimeoutでstartDelay後にpreGameEffectStartをfalseにする
    const timeoutId = setTimeout(() => {
      setPreGameEffectStart(false); // 演出終了
    }, startDelay);

    return () => clearTimeout(timeoutId); // クリーンアップ
  }, [preGameEffectStart, startDelay]);

  // バトル開始の設定
  useEffect(() => {
    if (!preGameEffectStart && mode !== "") { // preGameEffectStartがfalseになったらバトルを開始

      const timeoutId = setTimeout(() => {
        setBattleStart(true); // バトルを開始

      }, 0); // 1秒後にbattleStartをtrue

      return () => clearTimeout(timeoutId);
    }  // クリーンアップ
  }, [preGameEffectStart, 1500]);


  // バトル中の処理
  const Attack = (e) => {

    if (plHP > 0 && npcHP > 0) {
      setJankenText("じゃんけん…");
      setSelectedBtn(e.currentTarget.value);
      npcJanken();
      setJankenText("ぽん！"); // ここで "ぽん！" に変更
      setNPCBtnVisible(true);
      
        // const timeoutId = setTimeout(() => {
        // }, 500);

      //   return () => clearTimeout(timeoutId); // クリーンアップ
      // }, [selectedBtn]); // selectedBtn が変更されたときだけ実行
    };
  };

  // NPCのじゃんけんの結果
  const npcJanken = () => {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
      case 0:
        setNPCBtnName("npc-gu");
        setNPCBtnValue("0");
        setNPCBtnSrc("img/janken_gu.png");
        setNPCBtnAlt("グー");
        return 0;
      case 1:
        setNPCBtnName("npc-choki");
        setNPCBtnValue("1");
        setNPCBtnSrc("img/janken_choki.png");
        setNPCBtnAlt("チョキ");
        return 1;
      case 2:
        setNPCBtnName("npc-pa");
        setNPCBtnValue("1");
        setNPCBtnSrc("img/janken_pa.png");
        setNPCBtnAlt("パー");
        return 2;
    }
  };

  return (
    <>
      <div className="battle__container">
        <div className="npc__outer">
          <div className={`chara__inner  ${(preGameEffectStart || battleStart) ? 'is-active' : ''}`}>
            <img src="img/god.png" alt="神様" />
          </div>
          <div className={`talk__inner ${preGameEffectStart ? 'is-active' : ''}`}>
            <p className={`talk-text ${textClass}`} dangerouslySetInnerHTML={{__html: npcTalkText}} />
          </div>
          <div className="npc-choice__inner">
            <button type="button" name={npcBtnName} value={npcBtnValue} className={`btn battle-btn npc ${npcBtnVisible ? 'is-active' : '' }`}><img src={npcBtnSrc} alt={npcBtnAlt} /></button>
          </div>
        </div>
        <div className={`hp__inner npc ${battleStart ? 'is-active' : ''}`}>
          <p>HP</p>
          <p className="hp-num__npc">{npcHP}</p>
        </div>

        <div className={`player__outer ${battleStart ? 'is-active' : ''}`}>
          <div className={`hp__inner player`}>
            <p>HP</p>
            <p className="hp-num__player">{plHP}</p>
          </div>
          <div className={`btn__outer`}>
            <button type="button" onClick={Attack} name="player-gu" value="0" className={`btn battle-btn player ${selectedBtn === "0" ? 'is-select' : ''} `}><img src="img/janken_gu.png" alt="グー" /></button>
            <button type="button" onClick={Attack} name="player-choki" value="1" className={`btn battle-btn player ${selectedBtn === "1" ? 'is-select' : ''} `}><img src="img/janken_choki.png" alt="チョキ" /></button>
            <button type="button" onClick={Attack} name="player-pa" value="2" className={`btn battle-btn player ${selectedBtn === "2" ? 'is-select' : ''} `}><img src="img/janken_pa.png" alt="パー" /></button>
          </div>
        </div>
      </div>
      <div className={`text__container ${battleStart ? 'is-active' : ""}`}>
        <p className="ready">{jankenText}</p>
        <p className="result"></p>
      </div>
    </>
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