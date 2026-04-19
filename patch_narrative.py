import re

with open("src/app/page.tsx", "r") as f:
    content = f.read()

# 1. Update imports
content = content.replace('import { motion, useScroll, useTransform, useSpring } from "framer-motion"',
                          'import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"')

# 2. Extract NarrativeWord, text, words
replacement = """// ⚡ Bolt Optimization: Extracted text and words to module scope
// 💡 What: Moved static string and array creation outside the component
// 🎯 Why: Prevents unnecessary memory allocation on every render
// 📊 Impact: Minor memory optimization during high-frequency scroll events
const NARRATIVE_TEXT = "Di Monoframe, kami percaya bahwa setiap momen, baris kode, dan pixel memiliki cerita. Kami menggabungkan seni visual dengan keunggulan teknis untuk menciptakan pengalaman digital yang tak terlupakan."
const NARRATIVE_WORDS = NARRATIVE_TEXT.split(" ")

// ⚡ Bolt Optimization: Extracted NarrativeWord component
// 💡 What: Extracted the word mapping into a separate component
// 🎯 Why: Fixes a severe React hooks violation where useTransform was called inside a map loop
// 📊 Impact: Prevents memory leaks, hook order instability, and potential crashes during re-renders
function NarrativeWord({ word, index, totalWords, scrollYProgress }: { word: string, index: number, totalWords: number, scrollYProgress: MotionValue<number> }) {
  const start = index / totalWords
  const end = start + (1 / totalWords)
  const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1])

  return (
    <motion.span style={{ opacity }} className="text-blue-950">
      {word}
    </motion.span>
  )
}

// ---- SCENE 2: THE PROCESS (TEXT SCRUB) ----
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

# Use regex to find and replace the NarrativeScene
pattern = r"// ---- SCENE 2: THE PROCESS \(TEXT SCRUB\) ----\nfunction NarrativeScene\(\) \{.*?\n\}\n"
content = re.sub(pattern, replacement + "\n", content, flags=re.DOTALL)

with open("src/app/page.tsx", "w") as f:
    f.write(content)
