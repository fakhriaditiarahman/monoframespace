const ITERATIONS = 1000000;
const text = "Di Monoframe, kami percaya bahwa setiap momen, baris kode, dan pixel memiliki cerita. Kami menggabungkan seni visual dengan keunggulan teknis untuk menciptakan pengalaman digital yang tak terlupakan.";

console.time("split inside loop");
for (let i = 0; i < ITERATIONS; i++) {
  const words = text.split(" ");
}
console.timeEnd("split inside loop");

const wordsOutside = text.split(" ");
console.time("split outside loop");
for (let i = 0; i < ITERATIONS; i++) {
  const words = wordsOutside;
}
console.timeEnd("split outside loop");
