"use client"

import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import Container from "@/components/container"
import { useState } from "react"

export default function main() {
  const [headerLocation, setHeaderLocation] = useState("center")

  function moveHeader() {
    if(headerLocation == "top") {
      setHeaderLocation("center")
    } else {
      setHeaderLocation("top")
    }
  }

  return (
    <>
      <Header location={headerLocation} />
      <Sidebar moveHeader={moveHeader} />
      <Container open={headerLocation == "top"} />
    </>
  )
}