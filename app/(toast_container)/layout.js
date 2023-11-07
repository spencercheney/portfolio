'use client'

import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import Container from "@/components/container"
import useToast from "@/components/toast/useToast"

import { useState } from "react"

export default function Layout({ children }) {
  const [contentIsOpen, setContentIsOpen] = useState(false)
  const toast = useToast()

  function toggleContent() {
    var location
    setContentIsOpen(prevState => {
      location = prevState ? "topLeft" : "bottomLeft"
      return !prevState
    })
    toast.close()
      .then( () => toast.updateLocation(location) )
  }

  return (
    <>
      <Header location={ contentIsOpen ? "top" : "center" } />
      <Sidebar moveHeader={ toggleContent } />
      <Container open={ contentIsOpen } />
      {children}
    </>
  )
}