export function scrollToSection(sectionId: string) {
  return (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }
}
