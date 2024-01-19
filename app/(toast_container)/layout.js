'use client'

import Header from "@/components/header/header"
import Sidebar from "@/components/sidebar"
import Content from "@/components/content/content"
import useToast from "@/components/toast/useToast"
import ContentContext from "@/components/ContentContext"

import { useEffect, useReducer } from "react"
import { useRouter } from 'next/navigation'
import contentReducer from "@/components/contentReducer"


import { usePathname } from "next/navigation"

export default function Layout({ children }) {
  const pathname = usePathname()
  const initialValues = {
    isClosed: true, //whether the content component is open or closed
    isInitialized: false, //whether isClosed is setup for the first time on each page render
    headerLocation: pathname == "/" ? "center" : "top" //where the header (name and icon) will be displayed
  }

  const [contentValues, dispatch] = useReducer(contentReducer,  initialValues)
  const toastDispatch = useToast()
  const router = useRouter()

  //update toast location based on whether the main content component is open or closed
  useEffect(() => {
    toastDispatch({ type: "updateLocation", location: contentValues.isClosed ? "topLeft" : "bottomLeft" })
  }, [contentValues.isClosed])

  /**
   * Send the user to the request page and coordinates the needed animations
   * @param {string} link the page you want to go to
   * @param {boolean} contentIsClosed whether the content component will be open on the requested page
   */
  function goToLink(link, contentIsClosed) {
    if(contentIsClosed != contentValues.isClosed) {
      dispatch({ type: "update", isClosed: contentIsClosed })
      setTimeout(() => router.push(link), 300)
    } else {
      router.push(link)
    }
  }

  return (
    <ContentContext.Provider value={ dispatch }>
      <Header location={ contentValues.headerLocation } isInitialized={ contentValues.isInitialized } />
      <Sidebar goToLink={ goToLink } />
      <Content isClosed={ contentValues.isClosed } isInitialized={ contentValues.isInitialized } >
        {children}
      </Content>
    </ContentContext.Provider>
  )
}