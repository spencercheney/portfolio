import '../styles/global.css'

export default function Layout({
  children, // will be a page or nested layout
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}