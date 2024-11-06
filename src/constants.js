// データ定数
export const GAME_INFO = {
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