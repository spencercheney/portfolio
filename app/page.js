"use client"

import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
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
      <Header headerLocation={headerLocation} />
      <Sidebar moveHeader={moveHeader} />
    </>
  )
}