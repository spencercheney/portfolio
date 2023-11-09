'use client'

import useContent from "@/components/UseContent"

export default function main() {
  const content = useContent()
  content.open()

  return (<>about me</>)
}