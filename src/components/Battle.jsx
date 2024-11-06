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