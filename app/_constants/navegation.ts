interface NavItem {
  label: string
  href: string
}


export const navItems: NavItem[] = [
  { label: "Página Inicial", href: "/" },
  { label: "Empreendimentos", href: "/property" },
  { label: "Sobre Nós", href: "/#about" },
  { label: "Fale Conosco", href: "/contact" },
]
