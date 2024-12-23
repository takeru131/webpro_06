const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  // 今はダミーで人間の勝ちにしておく
  let judgement = ''; // 勝敗の結果を格納する変数
  total += 1;         // 総試合数は毎回増加
  
  if (hand === cpu) {
    judgement = 'あいこ';
  } else if (
    (hand === 'グー' && cpu === 'チョキ') ||
    (hand === 'チョキ' && cpu === 'パー') ||
    (hand === 'パー' && cpu === 'グー')
  ) {
    judgement = '勝ち';
    win += 1; // ユーザーが勝った場合、勝利数を増加
  } else {
    judgement = '負け';
  }
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});
//どっちの手に入ってるかゲーム
app.get("/dochinote", (req, res) => {

  console.log({choice, win, total});

  if( req.query.radio1 ) selected = "あたり";
  if( req.query.radio2 ) selected = "ハズレ";
  let judgement = ''; // 勝敗の結果を格納する変数
  total += 1;         // 総試合数は毎回増加
  
  if (choice === radio1) {
    judgement = '当たり';
    win += 1; // ユーザーが勝った場合、勝利数を増加
  } else {
    judgement = 'ハズレ';
  }
  
  res.render("dochinote", { choice, judgement});
});

app.get("/onajime", (req, res) => {

    // 自分と敵のサイコロの目をランダムに生成
    const yourDice = Math.floor(Math.random() * 6) + 1;
    const enemyDice = Math.floor(Math.random() * 6) + 1;

    // 勝敗判定
    let result = '';
    if (yourDice == enemyDice) {
        result = '同じ目が出ました！あなたの勝ち！';
      } else {
        result = '敵の勝ち！';
      }
    // 結果を result.ejs に渡してレンダリング
    res.render('onajime', { yourDice, enemyDice, result });
});




  



app.listen(8080, () => console.log("Example app listening on port 8080!"));
