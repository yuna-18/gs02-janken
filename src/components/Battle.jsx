import React, {useState, useEffect, useRef} from 'react';
import {GAME_INFO} from "../constants.js";
import {useMode, useGame} from '../contexts/ModeContext';
import {useBattle} from '../contexts/BattleContext';

const Battle = () => {
  const {mode, setMode} = useMode(); // modeとsetModeを取得
  const {game, setGame} = useGame(); // gameとsetGameを取得
  // バトル開始のタイミング
  const {battleStart, setBattleStart} = useBattle(); // modeとsetModeを取得
  const isBattling = useRef(false);
  const [isFinished, setIsFinished] = useState(false);


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
  const [jankenText, setJankenText] = useState("じゃんけん…");
  const [resultText, setResultText] = useState("");
  const [selectedBtn, setSelectedBtn] = useState(null);

  // Npc
  // button属性
  const [npcBtnName, setNpcBtnName] = useState("");
  const [npcBtnValue, setNpcBtnValue] = useState("");
  const [npcBtnSrc, setNpcBtnSrc] = useState("");
  const [npcBtnAlt, setNpcBtnAlt] = useState("");
  // button表示非表示
  const [npcBtnVisible, setNpcBtnVisible] = useState(false);

  // ゲーム前演出進行・値設定
  useEffect(() => {
    if (modeData && modeData.delayTime) {
      setTimeout(() => {
        setNpcTalktext(modeData.text);
        setStartDelay(modeData.delayTime);
        setPreGameEffectStart(true);
        setNpcHP(modeData.npc.hp);
        setPlHP(modeData.player.hp);
      }, 100);
    }
  }, [game]);

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
    if (!preGameEffectStart && game) { // preGameEffectStartがfalseになったらバトルを開始

      const timeoutId = setTimeout(() => {
        setBattleStart(true); // バトルを開始

      }, 0); // 1秒後にbattleStartをtrue

      return () => clearTimeout(timeoutId);
    }  // クリーンアップ
  }, [preGameEffectStart, 1500]);


  // バトル中の処理
  const Attack = (e) => {

    if (plHP > 0 && npcHP > 0 && !isBattling.current) {
      isBattling.current = true;
      setJankenText("じゃんけん…");
      setSelectedBtn(e.currentTarget.value);
      NpcJanken();

      setJankenText("ぽん！"); // ここで "ぽん！" に変更
      setNpcBtnVisible(true);

      setTimeout(() => {
        if (plHP > 0 && npcHP > 0) {
          setJankenText("じゃんけん…");
          //プレイヤー選択初期化
          setSelectedBtn(null);
          isBattling.current = false;
          // NPCの出す手を非表示
          setNpcBtnVisible(false);
          // NPCの出す手を初期化
          setNpcBtnName("");
          setNpcBtnValue(null);
          setNpcBtnSrc("");
          setNpcBtnAlt("");
        }
      }, 2000);
    };
  };

  // selectedBtn と npcBtnValue が揃ったタイミングで Judge 関数を呼び出す
  useEffect(() => {
    if (selectedBtn && npcBtnValue !== null) {
      const timeoutId = setTimeout(() => {
        Judge(selectedBtn, npcBtnValue);
      }, 1500);

      return () => clearTimeout(timeoutId); // クリーンアップ
    }
  }, [selectedBtn, npcBtnValue]); // selectedBtn と npcBtnValue の変更を監視

  // Npcのじゃんけんの結果
  const NpcJanken = () => {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
      case 0:
        setNpcBtnName("npc-gu");
        setNpcBtnValue(0);
        setNpcBtnSrc("img/janken_gu.png");
        setNpcBtnAlt("グー");
        break;
      case 1:
        setNpcBtnName("npc-choki");
        setNpcBtnValue(1);
        setNpcBtnSrc("img/janken_choki.png");
        setNpcBtnAlt("チョキ");
        break;
      case 2:
        setNpcBtnName("npc-pa");
        setNpcBtnValue(2);
        setNpcBtnSrc("img/janken_pa.png");
        setNpcBtnAlt("パー");
        break;
    }
  };

  const Judge = (selectedBtn, npcBtnValue) => {
    if (selectedBtn !== npcBtnValue) {
      // Player wins
      if (selectedBtn - npcBtnValue === -1 || selectedBtn - npcBtnValue === 2) {
        setNpcHP((prevNpcHP) => prevNpcHP - 5);
        // player lose
      } else if (selectedBtn - npcBtnValue === 1 || selectedBtn - npcBtnValue === -2) {
        setPlHP((prevPlHP) => prevPlHP - 5);
      }
      // draw
    } else {
      setNpcHP((prevNpcHP) => prevNpcHP - 0);
      setPlHP((prevPlHP) => prevPlHP - 0);
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
            <button type="button" name={npcBtnName} value={npcBtnValue} className={`btn battle-btn npc ${npcBtnVisible ? 'is-active' : ''}`}><img src={npcBtnSrc} alt={npcBtnAlt} /></button>
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
        <p className="result">{resultText}</p>
      </div>
    </>
  );
};

export default Battle;