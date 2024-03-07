// 获取画布
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

// 设置画布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 设置木星属性
const jupiter = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 100,
  color: 'rgb(255, 184, 77)',
  orbitRadius: 200,
  orbitSpeed: 0.01,
  angle: 0
};

// 动画函数
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 画木星轨道
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, jupiter.orbitRadius, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.stroke();

  // 更新木星位置
  jupiter.x = canvas.width / 2 + Math.cos(jupiter.angle) * jupiter.orbitRadius;
  jupiter.y = canvas.height / 2 + Math.sin(jupiter.angle) * jupiter.orbitRadius;
  
  // 画木星
  ctx.beginPath();
  ctx.arc(jupiter.x, jupiter.y, jupiter.radius, 0, Math.PI * 2);
  ctx.fillStyle = jupiter.color;
  ctx.fill();
  
  // 更新木星角度
  jupiter.angle += jupiter.orbitSpeed;
}

// 启动动画
animate();
