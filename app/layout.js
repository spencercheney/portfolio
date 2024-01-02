'use client'

import ToastProvider from '@/components/toast/ToastProvider'

import '../styles/global.css'

export default function Layout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Ropa+Sans&family=STIX+Two+Text&display=swap" rel="stylesheet"/>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </head>
      <body>
        <ToastProvider>{ children }</ToastProvider>
      </body>
    </html>
  )
}