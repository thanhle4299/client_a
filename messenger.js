// messenger.js

class Messenger {
    // 既存のメソッドやプロパティをここに定義する
  
    // createメソッドの追加
    create(name, number) {
      // 引数からメッセージを生成
      const message = `${name}の学籍番号は${number}です。`;
      return message;
    }
  }
  
  // Messengerクラスをエクスポート
  module.exports = Messenger;
  