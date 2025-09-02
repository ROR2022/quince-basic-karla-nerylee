"use client"

//import { useState } from "react"


import AudioPlayer from "../components/AudioPlayer"
import BasicCTA from "../components/sections/BasicCTA"
import {BasicHero, BasicCountdown, BasicEventDetails, BasicGiftOptions, BasicAttendance } from "@/components/sections/basic"
import ParentsSection from "../components/sections/ParentsSection"
//import InvitationEnvelope from "../components/sections/InvitationEnvelope"
//import WelcomeMessage from "../components/sections/InvitationWelcome"
//import DecorationElement from "../components/DecorationElement"
//import { PremiumGallery } from "@/components/sections/PremiumGallery"
//import CustomInvitations from "@/components/sections/CustomInvitations/components/CustomInvitations"

export default function WeddingInvitation() {
  //const [isOpenInvitation, setIsOpenInvitation] = useState(false);
  //const [isWelcomeMessageVisible, setIsWelcomeMessageVisible] = useState(false);

  /* const handleOpenInvitation = () => {
    setIsOpenInvitation(true);
    //setIsWelcomeMessageVisible(true);
  }; */

  /* const handleContinue = () => {
    setIsWelcomeMessageVisible(false);
  }; */

  /* if(!isOpenInvitation) {
    return (
      <InvitationEnvelope onOpen={handleOpenInvitation} />
    )
  } */

  /* if (isWelcomeMessageVisible) {
    return <WelcomeMessage onContinue={handleContinue} />
  } */

  
  // Color Palo de Rosa #e3aaaa
  return (
    <div 
    style={{
      //background: 'linear-gradient(135deg, #f7e6e6, #e3aaaa)',
    }}
    className="min-h-screen bg-sky-200">
      <BasicHero />
      <BasicCountdown />
      <ParentsSection />
      <BasicEventDetails />
      {/* <BasicGiftOptions /> */}
      <BasicAttendance />
      <BasicCTA />
      
      {/* 🎵 Reproductor de audio fijo */}
       <AudioPlayer /> 
    </div>
  )
}
