'use client'

import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import Container from "@/components/container"
import useToast from "@/components/toast/useToast"
import ContentContext from "@/components/ContentContext"

import { useState, useMemo, useRef, useEffect } from "react"
import { useRouter } from 'next/navigation'

export default function Layout({ children }) {
  const [contentIsOpen, setContentIsOpen] = useState(false)
  // const [contentIsInitialized, setContentIsInitialized] = useState(false)
  const contentIsInitialized = useRef(false)

  const toastDispatch = useToast()
  const router = useRouter()

  useEffect(() => {
    toastDispatch({ type: "updateLocation", location: contentIsOpen ? "bottomLeft" : "topLeft" })
  }, [contentIsOpen])

  function goToLink(link, open) {
    if(open != contentIsOpen) {
      setContentIsOpen(!contentIsOpen)
      setTimeout(() => router.push(link), 300)
    } else {
      router.push(link)
    }
  }

  function openContent() {
    setContentIsOpen(true)
    contentIsInitialized.current = true
  }

  function closeContent() {
    setContentIsOpen(false)
    contentIsInitialized.current = true
  }

  const contextValue = useMemo(() => ({ open: openContent, close: closeContent }), [])

  return (
    <ContentContext.Provider value={ contextValue }>
      <Header location={ contentIsOpen ? "top" : "center" } initialized={ contentIsInitialized.current } />
      <Sidebar goToLink={ goToLink } />
      <Container open={ contentIsOpen } initialized={ contentIsInitialized.current } >
        {children}
      </Container>
    </ContentContext.Provider>
  )
}