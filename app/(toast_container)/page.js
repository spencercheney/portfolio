'use client'

import useContent from "@/components/UseContent"
import { useEffect } from "react"

export default function main() {
  const contentDispatch = useContent()

  useEffect(() => {
    contentDispatch({type: "close"})
  },  [])
  
  return (<></>)
}