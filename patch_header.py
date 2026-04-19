import re

with open("src/components/layout/Header.tsx", "r") as f:
    content = f.read()

navItems_block = """  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Berita", href: "#" },
    { label: "Tentang", href: "#" },
    {
      label: "Produk",
      href: "#",
      children: [
        { label: "Studio", href: "https://studio.monoframe.id" },
        { label: "Monodev", href: "https://monodev.monoframe.id" },
        { label: "Monobox", href: "https://monobox.monoframe.id" },
        { label: "Mono Creative", href: "https://monocreative.monoframe.id" },
      ]
    },
    { label: "Kontak", href: "#" },
  ]

"""

content = content.replace(navItems_block, '')

outer_navItems = """const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Berita", href: "#" },
  { label: "Tentang", href: "#" },
  {
    label: "Produk",
    href: "#",
    children: [
      { label: "Studio", href: "/studio" },
      { label: "Monodev", href: "/monodev" },
      { label: "Monobox", href: "/monobox" },
      { label: "Mono Creative", href: "/monocreative" },
    ]
  },
  { label: "Kontak", href: "#" },
]"""

corrected_outer_navItems = """const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Berita", href: "#" },
  { label: "Tentang", href: "#" },
  {
    label: "Produk",
    href: "#",
    children: [
      { label: "Studio", href: "https://studio.monoframe.id" },
      { label: "Monodev", href: "https://monodev.monoframe.id" },
      { label: "Monobox", href: "https://monobox.monoframe.id" },
      { label: "Mono Creative", href: "https://monocreative.monoframe.id" },
    ]
  },
  { label: "Kontak", href: "#" },
]"""

content = content.replace(outer_navItems, corrected_outer_navItems)

with open("src/components/layout/Header.tsx", "w") as f:
    f.write(content)
