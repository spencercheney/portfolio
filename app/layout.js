import '../styles/global.css'

export default function Layout({
  children, // will be a page or nested layout
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Ropa+Sans&family=STIX+Two+Text&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}