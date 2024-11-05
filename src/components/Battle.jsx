const Battle = () => {
  return (
    <div className="battle__container">
      <div className="npc__outer">
        <div className="chara__inner">
          <img src="img/god.png" alt="神様"/>
        </div>
        <div className="talk__inner">
          <p className="talk-text"></p>
        </div>
        <div className="npc-choice__inner"></div>
        <div className="hp__inner">
          <p>HP</p>
          <p className="hp-num__npc"></p>
        </div>
      </div>

      <div className="hp__inner player">
        <p>HP</p>
        <p className="hp-num__player"></p>
      </div>
      <div className="btn__outer">
        <button type="button" name="player-gu" value="グー" className="btn battle-btn player"><img src="img/janken_gu.png" alt="グー"/></button>
        <button type="button" name="player-choki" value="チョキ" className=" btn battle-btn player"><img src="img/janken_choki.png" alt="チョキ"/></button>
        <button type="button" name="player-pa" value="パー" className=" btn battle-btn player"><img src="img/janken_pa.png" alt="パー"/></button>
      </div>
    </div>
  )
}

export default Battle