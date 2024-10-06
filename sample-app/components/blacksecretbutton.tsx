'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"
import Link from 'next/link'
import * as gtm from '@/lib/gtm'

export default function BlackSecretButton() {
  const blackSecretClick = () => {
    gtm.event({
      action: 'button_click',
      category: 'User Interaction',
      label: 'The Black Secret',
      value: 1,
    })
    console.log('Black Secret button clicked!')

  }

  return (
    <Link href="https://www.theblacksecret.co.uk/a/2147508849/MGXtzkMu" target="_blank" rel="noopener noreferrer">
      <Button
        className="bg-[#623431] hover:bg-[#b6896a] text-white"
        onClick={blackSecretClick}
      >
        <BookOpen className="mr-2 h-4 w-4" />
        Access The Black Secret Program
      </Button>
    </Link>
  )
}