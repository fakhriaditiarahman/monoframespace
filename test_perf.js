console.time("inline split");
for(let i = 0; i < 10000; i++) {
  const text = "Di Monoframe, kami percaya bahwa setiap momen, baris kode, dan pixel memiliki cerita. Kami menggabungkan seni visual dengan keunggulan teknis untuk menciptakan pengalaman digital yang tak terlupakan."
  const words = text.split(" ")
}
console.timeEnd("inline split");

const textStatic = "Di Monoframe, kami percaya bahwa setiap momen, baris kode, dan pixel memiliki cerita. Kami menggabungkan seni visual dengan keunggulan teknis untuk menciptakan pengalaman digital yang tak terlupakan."
const wordsStatic = textStatic.split(" ")
console.time("static split");
for(let i = 0; i < 10000; i++) {
  const words = wordsStatic;
}
console.timeEnd("static split");
