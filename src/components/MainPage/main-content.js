import React from "react"
import HeroBox from "./hero-box/hero-box"
import './code-academy.css'
import Facts from "./facts/fatcs"
import Header from "../Header/header"

export default function MainContent() {

  let serviceListContent = [
    {
      title: 'Studentams',
      text1: 'Ar žengi pirmą ar kažkelintą žingsnį link tech išsilavinimo – mes tau padėsim!',
      text2: 'Tiesiausias kelias link karjeros – per mus. 🏁 CodeAcademy programavimo kursai'
    },
    {
      title: 'NeStudentams',
      text1: 'Esame geriausias kompanijų draugas Edutech erdvėje.      Kelsime Jūsų darbuotojų kompetenciją bei atrasime talentus. 📈',
      text2: 'CodeAcademy programavimo kursai'
    },
  ]

  let heroBoxTitleContent = [
    {
      title: 'Programuok savo ateitį!®',
      text: 'CodeAcademy programavimo kursai – tiesiausias kelias technologinės karjeros link'
    }
  ]

  let factsData = [
    {
      title: 'CodeAcademy pulsas',
      text1: 'Manome, jog technologinis išsilavinimas privalo sekti šiandienos ir rytojaus darbo rinkos tendencijas bei būti prieinamas kiekvienam. 🙌',
      text2: 'Šiuo principu vadovaudamiesi, kas dieną savo studentams atveriame naujas galimybes.🔝',
    }
  ]

  let factsListData = [
    {
      value: '1298',
      text:'Šiuo metu mokosi studentų'
    },
    {
      value: '4762',
      text:'Viso baigė studentų'
    },
    {
      value: '80%',
      text:'Baigę Pažengusių studijas įsidarbino'
    },
    {
      value: 'Front-End',
      text:'Populiariausia programa'
    },

  ]

  return (
    <>
    <Header> </Header>
    <main className="main-page-content">
      
      <HeroBox 
      serviceList={serviceListContent}
      heroTitle={heroBoxTitleContent}
      ></HeroBox>

      <Facts
      factsHeader={factsData}
      factsList={factsListData}
      ></Facts>
    </main>
    </>
  )
}