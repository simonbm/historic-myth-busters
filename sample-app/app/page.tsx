"use client"

import Link from "next/link"
import BlackSecretButton from "@/components/blacksecretbutton"
import HmbSubscribeButton from "@/components/hmbsubscribebutton"
import { Card, CardContent } from "@/components/ui/card"
import { History } from "lucide-react"
import Image from 'next/image';


export default function LandingPage() {


  return (
    <div className="flex flex-col min-h-screen bg-[#f6f0e7]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <History className="h-6 w-6 mr-2" />
          <span className="font-bold">Historic Myth Busters</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#featured">
            Featured Videos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#subscribe">
            Subscribe
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#black-secret">
            Black Secret Program
          </Link>
        </nav>
      </header>
      <main className="flex-1 bg-[#c98a50]">
        <section className="relative w-full min-h-[400px] max-h-[600px] flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="absolute inset-0 z-0">
            <Image
              src="/12891_updated.jpg"
              alt="Historic background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60" />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Historic Myth Busters
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-x1">
                  Unraveling history&apos;s greatest mysteries and debunking myths one video at a time. <br />Powered by the Black Secret
                </p>
              </div>
              <div className="space-x-4">
                <BlackSecretButton />
                <HmbSubscribeButton />
              </div>
            </div>
          </div>
        </section>
        <section id="featured" className="w-full py-12 md:py-24 lg:py-32 bg-[#f6f0e7]  flex items-center justify-center">
          <div className="container px-4 md:px-6 justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Featured Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {[
                {
                  title: "Songhai Empire",
                  description: "Diving into the Songhai Empire, one of Africa's ...",
                  thumbnail: "/a-youtube-thumbnail-with-a-photo-of-the-sankore-mo-2ccYiBR3RdOBeT_7ju-paw-K-fkCFc-QYCFdr8Jnhw1tg.png",
                  videoID: "L_LqrUMHipI&t"
                },
                {
                  title: "Benin City's 10,000 Mile Wal",
                  description: "Discover the incredible story of Benin City, a ..",
                  thumbnail: "/a-youtube-video-cover-with-the-text-history-myth-b-zAd5Nx2sTpG1PadvsO8tgg-BORmhD5-Tn-popEvA2w_aA.png",
                  videoID: "QPQaG1fKhHA&"
                },
                {
                  title: "The Columbus Myth",
                  description: "The Columbus Myth Before 1492: Uncovering America's True...",
                  thumbnail: "a-youtube-intro-with-the-text-history-myth-busters-A7etgVGDSfKjsRdlMEbnJg-i998FezVSrWDD5HNI_w8mw.png",
                  videoID: "hCDboxAbAdo"
                }
              ].map((video, i) => (
                <Link key={i} href={`https://www.youtube.com/watch?v=${video.videoID}`} target="_blank" rel="noopener noreferrer">
                  <Card key={i} className="bg-[#623431] transition-transform hover:scale-105 cursor-pointer">
                    <CardContent className="p-4" >
                      <img
                        alt={`Featured video: ${video.title}`}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        height="200"
                        src={`${video.thumbnail}`}
                        style={{
                          aspectRatio: "16/9",
                          objectFit: "cover",
                        }}
                        width="300"
                      />
                      <h3 className="text-xl font-bold mb-2 text-white">{video.title}</h3>
                      <p className="text-gray-600 text-white">{video.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#b6896a]  flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Channel</h2>
                <p className="text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  &ldquo;<b>Historic Myth Busters</b>&rdquo; is a channel dedicated to unearthing and celebrating the rich tapestry of Black history, challenging misconceptions, and empowering individuals with knowledge. Drawing inspiration from the Black Secret Education Project, this channel illuminates Africa&apos;s wonders and the global contributions of Black people.
                </p>
                <ul className="text-black list-disc list-inside space-y-2 mt-4">
                  <li>Uncover hidden historical truths: Explore lesser-known aspects of Black history and bring them to light.</li>
                  <li>Challenge common misconceptions: Address and debunk myths and stereotypes about Black history and culture.</li>
                  <li>Celebrate Black achievements: Highlight the significant contributions of Black individuals throughout history.</li>
                  <li>Educate and empower viewers: Provide accurate, well-researched information to inspire and inform our audience.</li>
                  <li>Promote cultural understanding: Foster appreciation for the diversity and richness of Black heritage worldwide.</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Channel Logo"
                  className="rounded-lg object-cover"
                  height="300"
                  src="dajale_a_portrait_of_an_attractive_black_male_writer_in_the_sty_b68d23c0-8fb1-43f3-ac3b-7e62dbee20ea.png"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="black-secret" className="w-full py-12 md:py-24 lg:py-32 bg-[#f6f0e7] text-white flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl">
                  Discover The Black Secret Program
                </h2>
                <p className="mx-auto max-w-[700px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Access to the most comprehensive online African & Black History course available.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <BlackSecretButton />
              </div>
            </div>
          </div>
        </section>
        <section id="subscribe" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Community of History Enthusiasts
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our channel and never miss a new video. Be part of our journey to uncover historical truths!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <HmbSubscribeButton />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Historic Myth Busters. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}