import React from 'react'
import Style from "./project.module.css"
import Image from "next/image"

function Projects() {
  return (
    <section className={Style.section} id='projects'>
      <h1>PROJECTS</h1>
      <div className={Style.projects}>
        <div className={Style.card}>
          <div className={Style.imagecard}>
            <Image src="/cal.jpg.png" layout='fill' alt=""></Image>
          </div>
        </div>

        <div className={Style.card}>
          <div className={Style.imagecard}>
            <Image src="/smash.jpg.png" layout='fill' alt=""></Image>
          </div>
        </div>

        <div className={Style.card}>
          <div className={Style.imagecard}>
            <Image src="/hangman.png" layout='fill' alt=""></Image>
          </div>
        </div>

        <div className={Style.card}>
          <div className={Style.imagecard}>
            <Image src="/rps.png" layout='fill' alt=""></Image>
          </div>
        </div>

        <div className={Style.card}>
          <div className={Style.imagecard}>
            <Image src="/portfolio.png" layout='fill' alt=""></Image>
          </div>
        </div>

        <div className={Style.card}>
          <div className={Style.imagecard}>
            <Image src="/tiktak.png" layout='fill' alt=""></Image>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
