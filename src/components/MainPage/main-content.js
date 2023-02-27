import React from "react"
import HeroBox from "./hero-box/hero-box"
import './code-academy.css'
import Facts from "./facts/fatcs"
import Header from "../Header/header"

export default function MainContent() {
  return (
    <>
    <Header> </Header>
    <main className="main-page-content">
      <HeroBox></HeroBox>
      <Facts></Facts>
    </main>
    </>
  )
}