export function handleCopy(dataToCopy: string) {
  if (dataToCopy) {
    navigator.clipboard.writeText(dataToCopy)
  }
}
