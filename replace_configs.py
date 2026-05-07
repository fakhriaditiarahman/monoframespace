import sys

filepath = "src/app/page.tsx"

with open(filepath, "r") as f:
    content = f.read()

search_about = """              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 items-center justify-items-center">
                {[
                  { name: "Gojek", url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Gojek_logo_2019.svg" },
                  { name: "Tokopedia", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Tokopedia.svg" },
                  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
                  { name: "BCA", url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg" },
                  { name: "Pertamina", url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Pertamina_Logo.svg" },
                  { name: "GitHub", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
                ].map((partner, i) => ("""

replace_about = """              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 items-center justify-items-center">
                {PARTNERS.map((partner, i) => ("""

search_socials = """        <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto gap-6 md:gap-8 max-w-5xl">
          {[
            { tag: "@monobox.id", name: "Monobox", color: "from-pink-500 to-rose-600", shadow: "shadow-pink-500/20" },
            { tag: "@monodev.id", name: "Monodev", color: "from-blue-600 to-indigo-600", shadow: "shadow-blue-600/20" },
            { tag: "@monoframe.studio", name: "Studio", color: "from-sky-400 to-blue-500", shadow: "shadow-sky-400/20" },
          ].map((soc, i) => ("""

replace_socials = """        <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto gap-6 md:gap-8 max-w-5xl">
          {SOCIAL_LINKS.map((soc, i) => ("""

search_faq = """const FAQ_DUMMY = [
  { q: "Apakah saya bisa memesan layanan Monobox untuk acara di luar kota?", a: "Saat ini kami fokus melayani area [Nama Kota] dan sekitarnya. Namun, untuk acara berskala besar di luar kota, silakan hubungi tim kami untuk mendiskusikan kemungkinan logistik." },
  { q: "Berapa lama proses pembuatan website di Monodev?", a: "Waktu pengerjaan bervariasi bergantung pada kompleksitas proyek. Untuk website Company Profile standar, biasanya memakan waktu 2-3 minggu. Sedangkan untuk aplikasi web custom bisa memakan waktu 1-3 bulan." },
  { q: "Apakah Monoframe Studio menyediakan jasa makeup artist (MUA)?", a: "Kami memiliki rekanan MUA profesional yang bisa ditambahkan ke dalam paket pemotretan Anda dengan biaya tambahan. Silakan sampaikan kebutuhan ini saat melakukan pemesanan sesi." },
  { q: "Bagaimana sistem pembayaran untuk layanan joki tugas Monodev?", a: "Kami menerapkan sistem down payment (DP) sebesar 50% di awal, dan pelunasan 50% setelah tugas selesai dikerjakan dan diperlihatkan hasilnya." },
]"""

replace_faq = """// ⚡ Bolt Optimization: Extracted static arrays outside component bodies to prevent recreation on every render
const PARTNERS = [
  { name: "Gojek", url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Gojek_logo_2019.svg" },
  { name: "Tokopedia", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Tokopedia.svg" },
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "BCA", url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg" },
  { name: "Pertamina", url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Pertamina_Logo.svg" },
  { name: "GitHub", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
];

const SOCIAL_LINKS = [
  { tag: "@monobox.id", name: "Monobox", color: "from-pink-500 to-rose-600", shadow: "shadow-pink-500/20" },
  { tag: "@monodev.id", name: "Monodev", color: "from-blue-600 to-indigo-600", shadow: "shadow-blue-600/20" },
  { tag: "@monoframe.studio", name: "Studio", color: "from-sky-400 to-blue-500", shadow: "shadow-sky-400/20" },
];

const FAQ_DUMMY = [
  { q: "Apakah saya bisa memesan layanan Monobox untuk acara di luar kota?", a: "Saat ini kami fokus melayani area [Nama Kota] dan sekitarnya. Namun, untuk acara berskala besar di luar kota, silakan hubungi tim kami untuk mendiskusikan kemungkinan logistik." },
  { q: "Berapa lama proses pembuatan website di Monodev?", a: "Waktu pengerjaan bervariasi bergantung pada kompleksitas proyek. Untuk website Company Profile standar, biasanya memakan waktu 2-3 minggu. Sedangkan untuk aplikasi web custom bisa memakan waktu 1-3 bulan." },
  { q: "Apakah Monoframe Studio menyediakan jasa makeup artist (MUA)?", a: "Kami memiliki rekanan MUA profesional yang bisa ditambahkan ke dalam paket pemotretan Anda dengan biaya tambahan. Silakan sampaikan kebutuhan ini saat melakukan pemesanan sesi." },
  { q: "Bagaimana sistem pembayaran untuk layanan joki tugas Monodev?", a: "Kami menerapkan sistem down payment (DP) sebesar 50% di awal, dan pelunasan 50% setelah tugas selesai dikerjakan dan diperlihatkan hasilnya." },
]"""

if search_about in content and search_socials in content and search_faq in content:
    content = content.replace(search_about, replace_about)
    content = content.replace(search_socials, replace_socials)
    content = content.replace(search_faq, replace_faq)
    with open(filepath, "w") as f:
        f.write(content)
    print("Replaced static configs successfully.")
else:
    print("Search blocks not found.", search_about in content, search_socials in content, search_faq in content)
