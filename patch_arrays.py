import re

with open("src/app/page.tsx", "r") as f:
    content = f.read()

# 1. Extract PARTNERS
partners_array = """[
                  { name: "Gojek", url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Gojek_logo_2019.svg" },
                  { name: "Tokopedia", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Tokopedia.svg" },
                  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
                  { name: "BCA", url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg" },
                  { name: "Pertamina", url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Pertamina_Logo.svg" },
                  { name: "GitHub", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
                ]"""

partners_replacement = """// ⚡ Bolt Optimization: Extracted PARTNERS array to module scope
// 💡 What: Moved static array creation outside the AboutScene component
// 🎯 Why: Prevents recreating the array of objects on every render
// 📊 Impact: Minor memory optimization, reduces garbage collection overhead
const PARTNERS = [
  { name: "Gojek", url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Gojek_logo_2019.svg" },
  { name: "Tokopedia", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Tokopedia.svg" },
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "BCA", url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg" },
  { name: "Pertamina", url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Pertamina_Logo.svg" },
  { name: "GitHub", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
];

function AboutScene() {"""

content = content.replace('function AboutScene() {', partners_replacement)
content = content.replace(partners_array + '.map', 'PARTNERS.map')

# 2. Extract SOCIAL_LINKS
socials_array = """[
            { tag: "@monobox.id", name: "Monobox", color: "from-pink-500 to-rose-600", shadow: "shadow-pink-500/20" },
            { tag: "@monodev.id", name: "Monodev", color: "from-blue-600 to-indigo-600", shadow: "shadow-blue-600/20" },
            { tag: "@monoframe.studio", name: "Studio", color: "from-sky-400 to-blue-500", shadow: "shadow-sky-400/20" },
          ]"""

socials_replacement = """// ⚡ Bolt Optimization: Extracted SOCIAL_LINKS array to module scope
// 💡 What: Moved static array creation outside the SocialsScene component
// 🎯 Why: Prevents recreating the array of objects on every render
// 📊 Impact: Minor memory optimization, reduces garbage collection overhead
const SOCIAL_LINKS = [
  { tag: "@monobox.id", name: "Monobox", color: "from-pink-500 to-rose-600", shadow: "shadow-pink-500/20" },
  { tag: "@monodev.id", name: "Monodev", color: "from-blue-600 to-indigo-600", shadow: "shadow-blue-600/20" },
  { tag: "@monoframe.studio", name: "Studio", color: "from-sky-400 to-blue-500", shadow: "shadow-sky-400/20" },
];

// ---- SCENE 7: SOCIALS (SOSIAL MEDIA PRODUK) ----"""

content = content.replace('// ---- SCENE 7: SOCIALS (SOSIAL MEDIA PRODUK) ----', socials_replacement)
content = content.replace(socials_array + '.map', 'SOCIAL_LINKS.map')

with open("src/app/page.tsx", "w") as f:
    f.write(content)
