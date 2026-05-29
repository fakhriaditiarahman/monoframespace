const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/page.tsx');
let code = fs.readFileSync(filePath, 'utf8');

const search = `// ---- SCENE 2: THE PROCESS (TEXT SCRUB) ----
function NarrativeScene() {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  })

  const text = "Di Monoframe, kami percaya bahwa setiap momen, baris kode, dan pixel memiliki cerita. Kami menggabungkan seni visual dengan keunggulan teknis untuk menciptakan pengalaman digital yang tak terlupakan."
  const words = text.split(" ")

  return (
    <section ref={containerRef} className="py-32 md:py-64 bg-blue-50 relative z-20">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center md:text-left">
        <p className="text-3xl md:text-[4vw] font-black uppercase tracking-tighter leading-[1.1] flex flex-wrap gap-x-[1vw] gap-y-2 md:gap-y-4 justify-center md:justify-start">
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + (1 / words.length)
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1])
            return (
              <motion.span key={i} style={{ opacity }} className="text-blue-950">
                {word}
              </motion.span>
            )
          })}
        </p>
      </div>
    </section>
  )
}`;

const replace = `// ---- SCENE 2: THE PROCESS (TEXT SCRUB) ----

/*
 * ⚡ Bolt Optimization:
 * 1. Moved static text and split operation outside the component to prevent
 *    re-evaluating on every render and reduce garbage collection pressure.
 * 2. Extracted the word map into a separate component (NarrativeWord) to ensure
 *    Framer Motion's useTransform complies with React's Rules of Hooks.
 *    Calling hooks inside a .map() loop is an anti-pattern.
 */
const NARRATIVE_TEXT = "Di Monoframe, kami percaya bahwa setiap momen, baris kode, dan pixel memiliki cerita. Kami menggabungkan seni visual dengan keunggulan teknis untuk menciptakan pengalaman digital yang tak terlupakan.";
const NARRATIVE_WORDS = NARRATIVE_TEXT.split(" ");

function NarrativeWord({
  word,
  index,
  totalWords,
  scrollYProgress
}: {
  word: string,
  index: number,
  totalWords: number,
  scrollYProgress: any
}) {
  const start = index / totalWords;
  const end = start + (1 / totalWords);
  const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

  return (
    <motion.span style={{ opacity }} className="text-blue-950">
      {word}
    </motion.span>
  );
}

function NarrativeScene() {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  })

  return (
    <section ref={containerRef} className="py-32 md:py-64 bg-blue-50 relative z-20">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center md:text-left">
        <p className="text-3xl md:text-[4vw] font-black uppercase tracking-tighter leading-[1.1] flex flex-wrap gap-x-[1vw] gap-y-2 md:gap-y-4 justify-center md:justify-start">
          {NARRATIVE_WORDS.map((word, i) => (
            <NarrativeWord
              key={i}
              word={word}
              index={i}
              totalWords={NARRATIVE_WORDS.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  )
}`;

code = code.replace(search, replace);
fs.writeFileSync(filePath, code);
console.log('Patched src/app/page.tsx');
