main();

function main() {
  const canvas = document.getElementById('glcanvas');

  const gl = canvas.getContext('webgl');

  if (!gl) {
    alert('あなたのブラウザではwebglが使えません');
    return;
  }
  // 指定した色で塗りつぶす
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // 塗りつぶしの実行
  gl.clear(gl.COLOR_BUFFER_BIT);
}
