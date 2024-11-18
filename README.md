# webpro_06
2024/11/18

## このプログラムについて

## ファイル一覧

ファイル名 | 作ったシステム 
gakusyoku | 学食の値段あてクイズ
dochinote | どっちの手に入ってるかクイズ

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/public/(ファイル名).htmlにアクセスする
1. 自分の手を入力する

### じゃんけん

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"条件に合うか"}
win["勝ち"]
loose["負け"]

start --> if
if -->|yes| win
win --> end1
if -->|no| loose
loose --> end1
```
### 学食クイズ

学食クイズとは,選んだ学食の商品の値段を当てるというものである.

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
win["350円"]
loose["50円"]

start --> win
win --> end1
start --> loose
loose --> end1
```




### どっちの手に入ってるかクイズ

どっちの手に入ってるかクイズとは片方の手に当たりが入っていて,そのあたりを当てるゲームである.


```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"条件に合うか"}
win["あたり"]
loose["ハズレ"]

start --> if
if -->|yes| win
win --> end1
if -->|no| loose
loose --> end1
```
