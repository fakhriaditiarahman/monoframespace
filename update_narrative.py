import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# 1. Import MotionValue
import_motion = 'import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"'
content = re.sub(r'import { motion, useScroll, useTransform, useSpring } from "framer-motion"', import_motion, content)

# 2. Fix HeroScene typing
content = content.replace('function HeroScene({ scrollYProgress }: { scrollYProgress: any })', 'function HeroScene({ scrollYProgress }: { scrollYProgress: MotionValue<number> })')

# 3. Replace NarrativeScene
narrative_old = """// ---- SCENE 2: THE PROCESS (TEXT SCRUB) ----
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
}"""

narrative_new = """// ---- SCENE 2: THE PROCESS (TEXT SCRUB) ----
/*
  ⚡ Bolt Optimization:
  1. Extracted NARRATIVE_TEXT and NARRATIVE_WORDS outside the component to prevent expensive split operations and garbage collection on every render.
  2. Extracted NarrativeWord into a separate component to fix React Rules of Hooks violation (calling useTransform inside a .map() loop).
*/
const NARRATIVE_TEXT = "Di Monoframe, kami percaya bahwa setiap momen, baris kode, dan pixel memiliki cerita. Kami menggabungkan seni visual dengan keunggulan teknis untuk menciptakan pengalaman digital yang tak terlupakan.";
const NARRATIVE_WORDS = NARRATIVE_TEXT.split(" ");

function NarrativeWord({ word, index, totalWords, scrollYProgress }: { word: string, index: number, totalWords: number, scrollYProgress: MotionValue<number> }) {
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
}"""

if narrative_old in content:
    content = content.replace(narrative_old, narrative_new)
else:
    print("Could not find exact NarrativeScene match")

with open('src/app/page.tsx', 'w') as f:
    f.write(content)
