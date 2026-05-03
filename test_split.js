console.time('split-inside-loop');
for(let i=0; i<1000; i++) {
  const text = "Di Monoframe, kami percaya bahwa setiap momen, baris kode, dan pixel memiliki cerita. Kami menggabungkan seni visual dengan keunggulan teknis untuk menciptakan pengalaman digital yang tak terlupakan."
  const words = text.split(" ")
}
console.timeEnd('split-inside-loop');
