// 計算ボタンを取得
const calcBtn = document.getElementById('calcBtn');

// ボタンをクリックしたときの処理
calcBtn.addEventListener('click', function() {

  // 入力値を取得
  const side = parseFloat(document.getElementById('side').value);

  // 入力値が空または0以下の場合はアラートを表示
  if (isNaN(side) || side <= 0) {
    alert('正しい数値を入力してください');
    return;
  }

  // 計算
  // 外接円の直径 = 辺の長さ × 2
  const outer = side * 2;

  // 内接円の直径 = 辺の長さ × √3
  const inner = side * Math.sqrt(3);

  // 結果を小数点第2位まで表示
  document.getElementById('outer').textContent = outer.toFixed(2) + ' mm';
  document.getElementById('inner').textContent = inner.toFixed(2) + ' mm';

});