const process = require('process');

function measure() {
  const used = process.memoryUsage();
  return Math.round(used.heapUsed / 1024 / 1024 * 100) / 100 + ' MB';
}

console.log('Initial:', measure());

const text = "Di Monoframe, kami percaya bahwa setiap momen, baris kode, dan pixel memiliki cerita. Kami menggabungkan seni visual dengan keunggulan teknis untuk menciptakan pengalaman digital yang tak terlupakan.";

const ITERATIONS = 100000;

console.log('--- Loop With Split Inside ---');
for (let i = 0; i < ITERATIONS; i++) {
  const words = text.split(" ");
}
console.log('After Loop Inside:', measure());

if (global.gc) { global.gc(); }
console.log('After GC:', measure());

console.log('--- Loop With Split Outside ---');
const wordsOutside = text.split(" ");
for (let i = 0; i < ITERATIONS; i++) {
  const words = wordsOutside;
}
console.log('After Loop Outside:', measure());

if (global.gc) { global.gc(); }
console.log('After GC:', measure());
