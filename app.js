"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// --- データ置き場（配列） ---
// 1. 家計簿データ
let accounts = [
    { id: 1, date: "2024-01-15", item: "食費", amount: 1500 },
    { id: 2, date: "2024-01-16", item: "交通費", amount: 600 }
];
// 2. 体調データ
let healths = [
    { id: 1, date: "2024-01-15", temp: 36.5, condition: "良好" }
];
// 3. 課題データ
let tasks = [
    { id: 1, subject: "Webプロ", title: "最終課題", limit: "2024-01-30" }
];

let nextId = 100; // ID生成用

// --- ルーティング ---

// トップページ（メニュー画面）
app.get("/", (req, res) => {
    console.log("アクセスが来ました！！！");  // ← ★この行を追加
    res.render("index");
});

// ==========================
// 1. 家計簿システム (/account)
// ==========================
app.get("/account", (req, res) => {
    res.render("account/list", { accounts: accounts });
});
app.get("/account/create", (req, res) => {
    res.render("account/create");
});
app.post("/account/create", (req, res) => {
    accounts.push({
        id: nextId++,
        date: req.body.date,
        item: req.body.item,
        amount: req.body.amount
    });
    res.redirect("/account");
});

// ==========================
// 2. 体調管理システム (/health)
// ==========================
app.get("/health", (req, res) => {
    res.render("health/list", { healths: healths });
});
// ※今回は一覧表示のみ実装（必要なら追加・詳細は家計簿と同じ要領で作成）

// ==========================
// 3. 課題管理システム (/tasks)
// ==========================
app.get("/tasks", (req, res) => {
    res.render("tasks/list", { tasks: tasks });
});

// サーバ起動
app.listen(8080, () => {
    console.log("Example app listening on port 8080!");
});