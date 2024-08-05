'use client'

import Header from "@/components/header/header"
import Sidebar from "@/components/sidebar"
import Content from "@/components/content/content"
import ContentContext from "@/components/ContentContext"

import { useEffect, useReducer, useState } from "react"
import { useRouter } from 'next/navigation'
import contentReducer from "@/components/contentReducer"


import { usePathname } from "next/navigation"
import useToast from "toasty-react"

import '../styles/global.css'

export default function Layout({ children }) {
  const pathname = usePathname()
  const initialValues = {
    isClosed: pathname == "/", //whether the content component is open or closed
    isInitialized: false, //whether isClosed is setup for the first time on each page render
  }

  const [contentValues, dispatch] = useReducer(contentReducer,  initialValues)
  const router = useRouter()

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

  const [Toast, open, Location] = useToast()

  //update toast location based on whether the main content component is open or closed
  useEffect(() => {
    Location.update(contentValues.isClosed ? Location.topLeft : Location.bottomLeft)
    // toastDispatch({ type: "updateLocation", location: contentValues.isClosed ? "topLeft" : "bottomLeft" })
  }, [contentValues.isClosed, Location])

  /**
   * Send the user to the request page and coordinates the needed animations
   * @param {string} link the page you want to go to
   * @param {boolean} contentIsClosed whether the content component will be open on the requested page
   */
  function goToLink(link, contentIsClosed) {
    if(contentIsClosed != contentValues.isClosed) {
      dispatch({ type: "update", isClosed: contentIsClosed })
      setTimeout(() => router.push(link), 700)
    } else {
      router.push(link)
    }
  }

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
        <Toast />
        <ContentContext.Provider value={ dispatch }>
          <Header location={ contentValues.isClosed ? "center" : "top" } isInitialized={ contentValues.isInitialized } openToast={ open } />
          <Sidebar goToLink={ goToLink } />
          <Content isClosed={ contentValues.isClosed } isInitialized={ contentValues.isInitialized } >
            {children}
          </Content>
        </ContentContext.Provider>
      </body>
    </html>
  )
}