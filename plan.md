1. **Fix Rules of Hooks violation and optimize NarrativeScene in `src/app/page.tsx`**
   - Use `replace_with_git_merge_diff` to modify `src/app/page.tsx`.
   - Add `MotionValue` to the `framer-motion` import.
   - Update `HeroScene` props to use `MotionValue<number>` instead of `any`.
   - Move the static `text` and `words = text.split(" ")` definition outside of `NarrativeScene` to the global scope to eliminate repetitive calculation and reduce garbage collection pressure on every render.
   - Extract the inline `.map()` loop item into a new `NarrativeWord` component that accepts `word`, `index`, `totalWords`, and `scrollYProgress` (typed as `MotionValue<number>`).
   - Call `useTransform` at the top level of the `NarrativeWord` component, thereby fixing the React Rules of Hooks violation.
   - Add inline comments explaining the performance optimization (avoiding hook rules violation, extracting static array calculation outside the render loop).
   - Use `sed -n '50,110p' src/app/page.tsx` to verify the modifications.

2. **Update `.jules/bolt.md` with learning**
   - Use `run_in_bash_session` to append a new entry to `.jules/bolt.md` detailing that calling hooks like `useTransform` inside an array `.map()` in the render function violates React Rules of Hooks, and that extracting static variables/splits outside the render function improves GC performance.
   - Verify with `cat .jules/bolt.md`.

3. **Run builds and tests**
   - Execute `run_in_bash_session` with `pnpm build` and `pnpm lint` to verify code compiles and the linter passes without errors.

4. **Frontend Verification**
   - Use `run_in_bash_session` to install Playwright dependencies (`pip install playwright && playwright install chromium`).
   - Use `run_in_bash_session` to start the Next.js development server in the background: `pnpm dev &` and add a `sleep 10` to allow the server to start.
   - Use `run_in_bash_session` to create a python script using `cat << 'EOF' > verify.py` that visits `http://localhost:3000`, scrolls down progressively to trigger the scroll-driven animations in `NarrativeScene`, captures a screenshot to `/home/jules/verification/screenshots/narrative.png`, and saves a video to `/home/jules/verification/videos`.
   - Execute the script using `python verify.py`.
   - Verify generated files with `ls /home/jules/verification/screenshots` and `ls /home/jules/verification/videos`.
   - Call `frontend_verification_instructions` and then `frontend_verification_complete` with the paths to the screenshot and video.
   - Use `run_in_bash_session` to kill the Next.js dev server: `kill $(lsof -t -i :3000) 2>/dev/null || true`.

5. **Complete pre-commit steps**
   - Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.

6. **Submit PR**
   - Submit the PR with the title `⚡ Bolt: Fix Rules of Hooks violation and optimize NarrativeScene` and an appropriate description containing `💡 What`, `🎯 Why`, `📊 Impact`, and `🔬 Measurement`.
