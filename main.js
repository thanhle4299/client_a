// main.js

// 1. 「dotenv」モジュールの利用
require('dotenv').config();

// 2. Messengerクラスの読み込み
const Messenger = require('./messenger');

// 3. Messengerクラスのインスタンスを作成
const messenger = new Messenger();

// 4. 引数の取得
const name = process.env.NAME;
const number = process.env.NUMBER;

// 5. 「create」メソッドを実行してメッセージを生成
const messageResult = messenger.create(name, number);

// 6. 「fs」モジュールを利用して、結果を外部ファイル「result.txt」に書き出す
const fs = require('fs');

// メッセージの結果をコンソールに表示
console.log('Message Result:', messageResult);

// 結果を外部ファイル「result.txt」に書き出す
fs.writeFile('result.txt', messageResult, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('Result has been written to result.txt');
  }
});
