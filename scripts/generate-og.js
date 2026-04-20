import { createCanvas } from "canvas";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, "../public/og-image.png");

const W = 1200;
const H = 630;

const canvas = createCanvas(W, H);
const ctx = canvas.getContext("2d");

// Background
ctx.fillStyle = "#0A0A0A";
ctx.fillRect(0, 0, W, H);

// Subtle grid lines
ctx.strokeStyle = "rgba(255,255,255,0.04)";
ctx.lineWidth = 1;
for (let x = 0; x < W; x += 40) {
  ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
}
for (let y = 0; y < H; y += 40) {
  ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
}

// Accent glow blob
const grad = ctx.createRadialGradient(600, 315, 0, 600, 315, 400);
grad.addColorStop(0, "rgba(0,255,136,0.08)");
grad.addColorStop(1, "rgba(0,255,136,0)");
ctx.fillStyle = grad;
ctx.fillRect(0, 0, W, H);

// Logo text
ctx.fillStyle = "#FFFFFF";
ctx.font = "bold 72px sans-serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("Z3Connect", W / 2, H / 2 - 50);

// Tagline
ctx.fillStyle = "#00FF88";
ctx.font = "bold 34px sans-serif";
ctx.fillText("Custom Software, Shipped in Weeks", W / 2, H / 2 + 40);

// URL
ctx.fillStyle = "rgba(255,255,255,0.35)";
ctx.font = "22px sans-serif";
ctx.fillText("z3connect.com", W / 2, H / 2 + 110);

writeFileSync(OUTPUT, canvas.toBuffer("image/png"));
console.log("OG image written to", OUTPUT);
