import ModeSelect from "./ModeSelect";
import Dialog from "./Dialog";
import Battle from "./Battle";
import Text from "./Text";

const Contents = () => {
  return (
    <>
      <ModeSelect />
      <Dialog />
      <Battle />
      <Text />
    </>
  );
};

export default Contents;

// // ゲーム進行管理
// $(function () {
//   let offeringMoney = "";
//   // レベル選択
//   $(".pay-btn").on("click", function () {
//     offeringMoney = $(this).val();
//     $(".dialog__container").addClass("is-active");
//   });

//   // 進行キャンセル・レベル選択リセット
//   $(".dialog-btn.close-btn, .dialog-btn.no").on("click", function () {
//     offeringMoney = "";
//     $(".dialog__container").removeClass("is-active");
//   });

//   // 進行
//   $(".dialog-btn.yes").on("click", function () {
//     // モード選択非表示・ダイアログ非表示
//     $(".pay__container").removeClass("is-active");
//     $(".dialog__container").removeClass("is-active");
//     // レベル決定
//     selectStory(offeringMoney);
//     // 戦闘準備　セリフ表示
//     $(".npc__outer, .talk__inner").addClass("is-active");

//     // 戦闘準備画面
//     setTimeout(function () {
//     $(".talk__inner").removeClass("is-active");
//       $(".battle__container .btn__outer").addClass("is-active");
//       $(".hp__inner").addClass("is-active");
//       $(".text__container").addClass("is-active");
//       $(".ready").html("じゃんけん…");
//     }, gameInfo[mode].delayTime);
//   });


//   // 戦闘中
//   $(".battle-btn.player").on("click", function () {
//     if (plHP > 0 && npcHP > 0) {
//       $(".ready").html("じゃんけん…");
//       let playerChoice = $(this).attr('value');
//       $(this).addClass("is-select");
//       npcJanken();
//       let npcChoice = $(".battle-btn.npc").attr('value');
//       $(".ready").html("ぽん！");
//       $(".battle-btn.npc").addClass("is-active");

//       let damage = battleJudge(playerChoice, npcChoice);
//       // 一定の遅延後にダメージ計算を行う
//       setTimeout(() => {
//         calcDamage(damage);
//         // ここで次のターンに進む
//         if (plHP > 0 && npcHP > 0) {
//           $(".ready").html("じゃんけん…"); // メッセージを戻す
//           $(".battle-btn.player").removeClass("is-select");
//           $(".npc-choice__inner").html("");
//         }
//       }, 1500); // 1秒の遅延
//     }
//   });
// });