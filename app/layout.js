'use client'

import ToastProvider from '@/components/toast/ToastProvider'

import '../styles/global.css'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Layout({ children }) {
  const pathname = usePathname()
  const [title, setTitle] = useState("Spencer Cheney")

  useEffect(() => {
    switch(pathname) {
      case "/aboutMe":
        setTitle("Spencer Cheney - About Me")
        break
      case "/contactMe":
        setTitle("Spencer Cheney - Contact Me")
        break
      case "/projects":
        setTitle("Spencer Cheney - Projects")
        break
      default:
        setTitle("Spencer Cheney")
        break
    }
  })

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Ropa+Sans&family=STIX+Two+Text&display=swap" rel="stylesheet"/>
        <title>{title}</title>
      </head>
      <body>
        <ToastProvider>{ children }</ToastProvider>
      </body>
    </html>
  )
}