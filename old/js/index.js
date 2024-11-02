// 変数
let gameInfo = {
  damage: {
    win: -5,
    draw: 0,
    lose: 5,
  },
  hardExtra: {
    level: 5,
    text: 'わざわざ神社に参拝に来ておいてお賽銭が0円とは…。<br>これは<span>ただ</span>で返すわけにはいかんのう…!<br><span>天罰じゃ！覚悟せい!!!</span>',
    delayTime: 2500,
    npc: {
      hp: 100,
    },
    player: {
      hp: 50,
    },
  },
  hard: {
    level: 4,
    text: '10円…ちっとばかし懐が寒い感じがするが、<br>まあ近頃はこんなものかのう…。<br>よくきたの。少し遊んでやろう。',
    delayTime: 3000,
    npc: {
      hp: 70,
    },
    player: {
      hp: 50,
    },
  },
  normal: {
    level: 3,
    text: '50円!おお嬉しいのう。<br>気持ちが大事とはよくいうが、<br>それでもつい見返りは求めてしまうものじゃの…。<br>よくきたの。少し遊んでやろう。',
    delayTime: 3000,
    npc: {
      hp: 50,

    },
    player: {
      hp: 50,
    },
  },
  easy: {
    level: 2,
    text: '100円!おお嬉しいのう。<br>かなり奮発してくれたようじゃの。<br>何か困ってることでもあるのかの？<br>願い事の前に、気分転換に少し遊ばぬか？',
    delayTime: 3500,
    npc: {
      hp: 30,

    },
    player: {
      hp: 40
    },
  },
  easyExtra: {
    level: 1,
    text: 'せ…千円！？！？<br>間違って入れてしまったのかの？<br>それとも風で飛ばされて…<br>え？自分で入れた？なんということじゃ…<br>これはしっかりもてなしをせねば…！',
    delayTime: 4000,
    npc: {
      hp: 15,

    },
    player: {
      hp: 30,
    },
  }
};
let mode;
let result;
let plHP;
let npcHP;
// 関数
// モード決定
function selectStory (offeringMoney) {
  let text;
  switch (offeringMoney) {
    case "0円":
      mode = "hardExtra";
      text = gameInfo[mode].text;
      $(".talk-text").css("padding", "60px 20px");
      $(".talk-text").html(text);
      npcHP = gameInfo[mode].npc.hp;
      $(".hp-num__npc").html(npcHP);
      plHP = gameInfo[mode].player.hp;
      $(".hp-num__player").html(plHP);
      break;
    case "10円":
      mode = "hard";
      text = gameInfo[mode].text;
      $(".talk-text").css("padding", "70px 20px");
      $(".talk-text").html(text);
      npcHP = gameInfo[mode].npc.hp;
      $(".hp-num__npc").html(npcHP);
      plHP = gameInfo[mode].player.hp;
      $(".hp-num__player").html(plHP);
      break;
    case "50円":
      mode = "normal";
      text = gameInfo[mode].text;
      $(".talk-text").css("padding", "50px 20px");
      $(".talk-text").html(text);
      npcHP = gameInfo[mode].npc.hp;
      $(".hp-num__npc").html(npcHP);
      plHP = gameInfo[mode].player.hp;
      $(".hp-num__player").html(plHP);
      break;
    case "100円":
      mode = "easy";
      text = gameInfo[mode].text;
      $(".talk-text").css("padding", "45px 20px");
      $(".talk-text").html(text);
      npcHP = gameInfo[mode].npc.hp;
      $(".hp-num__npc").html(npcHP);
      plHP = gameInfo[mode].player.hp;
      $(".hp-num__player").html(plHP);
      break;
    case "1000円":
      mode = "easyExtra";
      text = gameInfo[mode].text;
      $(".talk-text").css("padding", "35px 20px");
      $(".talk-text").html(text);
      npcHP = gameInfo[mode].npc.hp;
      plHP = gameInfo[mode].player.hp;
      $(".hp-num__npc").html(npcHP);
      $(".hp-num__player").html(plHP);
      break;
  }
}

// NPCじゃんけんの選択
function npcJanken () {
  let choice = Math.floor(Math.random() * 3) + 1;

  switch (choice) {
    case 1:
      $(".npc-choice__inner").html('<button type="button" name="npc-gu" value="グー" class=" btn battle-btn npc"><img src="img/janken_gu.png" alt="グー"></button>');
      break;
    case 2:
      $(".npc-choice__inner").html('<button type="button" name="npc-choki" value="チョキ" class="btn battle-btn npc"><img src="img/janken_choki.png" alt="チョキ"></button>');
      break;
    case 3:
      $(".npc-choice__inner").html('<button type="button" name="npc-pa" value="パー" class=" btn battle-btn npc"><img src="img/janken_pa.png" alt="パー"></button>');
      break;
  }
}

// 勝ち負け判定
function battleJudge (playerChoice, npcChoice) {
  if (playerChoice === npcChoice) {
    return gameInfo.damage.draw;
  } else if (playerChoice !== npcChoice) {
    switch (playerChoice) {
      case "グー":
        switch (npcChoice) {
          case "チョキ":
            return gameInfo.damage.win;
          case "パー":
            return gameInfo.damage.lose;
        }
      case "チョキ":
        switch (npcChoice) {
          case "パー":
            return gameInfo.damage.win;
          case "グー":
            return gameInfo.damage.lose;
        }
      case "パー":
        switch (npcChoice) {
          case "グー":
            return gameInfo.damage.win;
          case "チョキ":
            return gameInfo.damage.lose;
        }
    }
  }
}

function calcDamage (damage) {
  // lose
  if (damage > 0) {
    plHP -= damage;
    $(".hp-num__player").text(plHP);
    if (plHP <= 0) {
      $(".ready").html("");
      $(".result").html("YOU LOSE").css("color", "navy");
    }
    // win
  } else if (damage < 0) {
    npcHP += damage;
    $(".hp-num__npc").text(npcHP);
    if (npcHP <= 0) {
      $(".ready").html("");
      $(".result").html("YOU WIN").css("color", "red");
    }
  }
}

// ゲーム進行管理
$(function () {
  let offeringMoney = "";
  // レベル選択
  $(".pay-btn").on("click", function () {
    offeringMoney = $(this).val();
    $(".dialog__container").addClass("is-active");
  });

  // 進行キャンセル・レベル選択リセット
  $(".dialog-btn.close-btn, .dialog-btn.no").on("click", function () {
    offeringMoney = "";
    $(".dialog__container").removeClass("is-active");
  });

  // 進行
  $(".dialog-btn.yes").on("click", function () {
    // モード選択非表示・ダイアログ非表示
    $(".pay__container").removeClass("is-active");
    $(".dialog__container").removeClass("is-active");
    // レベル決定
    selectStory(offeringMoney);
    // 戦闘準備　セリフ表示
    $(".npc__outer, .talk__inner").addClass("is-active");

    // 戦闘準備画面
    setTimeout(function () {
    $(".talk__inner").removeClass("is-active");
      $(".battle__container .btn__outer").addClass("is-active");
      $(".hp__inner").addClass("is-active");
      $(".text__container").addClass("is-active");
      $(".ready").html("じゃんけん…");
    }, gameInfo[mode].delayTime);
  });


  // 戦闘中
  $(".battle-btn.player").on("click", function () {
    if (plHP > 0 && npcHP > 0) {
      $(".ready").html("じゃんけん…");
      let playerChoice = $(this).attr('value');
      $(this).addClass("is-select");
      npcJanken();
      let npcChoice = $(".battle-btn.npc").attr('value');
      $(".ready").html("ぽん！");
      $(".battle-btn.npc").addClass("is-active");

      let damage = battleJudge(playerChoice, npcChoice);
      // 一定の遅延後にダメージ計算を行う
      setTimeout(() => {
        calcDamage(damage);
        // ここで次のターンに進む
        if (plHP > 0 && npcHP > 0) {
          $(".ready").html("じゃんけん…"); // メッセージを戻す
          $(".battle-btn.player").removeClass("is-select");
          $(".npc-choice__inner").html("");
        }
      }, 1500); // 1秒の遅延
    }
  });
});

