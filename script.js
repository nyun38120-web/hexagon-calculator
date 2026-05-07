// ==================
// タブ切り替え
// ==================
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {

    // タブボタンの切り替え
    tabBtns.forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');

    // コンテンツの切り替え
    tabContents.forEach(function (c) { c.classList.remove('active'); });
    document.getElementById(btn.dataset.tab).classList.add('active');

  });
});


// ==================
// 六角形の計算
// ==================
const hexCalcBtn = document.getElementById('hexCalcBtn');

hexCalcBtn.addEventListener('click', function () {

  // 入力値を取得
  const side = parseFloat(document.getElementById('hex-side').value);

  // 入力値が空または0以下の場合はアラートを表示
  if (isNaN(side) || side <= 0) {
    alert('正しい数値を入力してください');
    return;
  }

  // 外接円の直径 = 対辺 / √3 * 2
  const outer = side / Math.sqrt(3) * 2;

  // 内接円の直径
  const inner = side;

  // 結果を小数点第4位まで表示
  document.getElementById('hex-outer').textContent = outer.toFixed(4) + ' mm';
  document.getElementById('hex-inner').textContent = inner.toFixed(4) + ' mm';

});


// ==================
// 四角形の計算
// ==================
const sqCalcBtn = document.getElementById('sqCalcBtn');

sqCalcBtn.addEventListener('click', function () {

  // 入力値を取得
  const diagonal = parseFloat(document.getElementById('sq-diagonal').value);
  const chamfer = parseFloat(document.getElementById('sq-chamfer').value);

  // 対角線の入力チェック
  if (isNaN(diagonal) || diagonal <= 0) {
    alert('正しい対角線の長さを入力してください');
    return;
  }

  // 面取りの入力チェック
  if (isNaN(chamfer) || chamfer < 0) {
    alert('面取りは0以上の数値を入力してください');
    return;
  }

  // 一辺の長さ
  const side = diagonal;

  // 外接円の直径 = √2 × a
  const outer = Math.sqrt(2) * side;

  // 外接円の半径 R = √2 × a / 2
  const R = outer / 2;

  // 外接円の面積 = π × R²
  const outerArea = Math.PI * Math.pow(R, 2);

  // 内接円の直径 = 一辺の長さ
  const inner = side;

  // 面取り後の外接円の直径
  const chamferOuter = chamfer === 0
    ? outer
    : Math.sqrt(
      Math.pow(side / 2 - chamfer, 2) +
      Math.pow(side / 2 - chamfer, 2)
    ) * 2;

  // 結果を小数点第4位まで表示
  document.getElementById('sq-outer').textContent = outer.toFixed(4) + ' mm';
  document.getElementById('sq-inner').textContent = inner.toFixed(4) + ' mm';
  document.getElementById('sq-chamfer-outer').textContent = chamferOuter.toFixed(4) + ' mm';

});