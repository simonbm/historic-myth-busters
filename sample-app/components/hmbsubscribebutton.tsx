'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"

import Link from 'next/link'
import * as gtm from '@/lib/gtm'


export default function HmbSubscribeButton() {
    const hmbSubscribeClick = () => {
        gtm.event({
            action: 'button_click',
            category: 'User Interaction',
            label: 'HMB Subscribe',
            value: 1,
        })
        console.log('HMB Subscribe button clicked!')
    }

    return (
        <Link href="https://www.youtube.com/@DajaMythBusters?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
            <Button className="bg-red-600 hover:bg-red-700"
                onClick={hmbSubscribeClick} >
                <Youtube className="mr-2 h-4 w-4" />
                Subscribe
            </Button>
        </Link>
    )
}