'use client'

import { useEffect, useRef, useState } from "react"
import styles from "@/styles/about_me.module.css"
import imageOfMe from "@/public/me.png"
import Image from "next/image"

export default function main() {
  const infoRef = useRef(null)
  const [info, setInfo] = useState(<div className={styles.imageOfMe}><Image src={imageOfMe} alt="Picture of me, Spencer Cheney" loading="eager"/></div>)

  function updateInfo(e) {
    e.preventDefault()
    const title = e.target.innerText
    switch(title) {
      case "my goal is to make a difference":
        setInfo(
          <p>
            Before I knew what I wanted to do for a living, I knew regardless of how rich or sucessful I became, <span style={{ textDecoration: "underline" }}>I want to make a difference in the world</span>.
            I first decided to get into tech when I was living in Alabama. I got to meet people that worked in all different types of tech careers and they all had one thing in common. Regardless of
            whether they were working in Robotics or in Network Security, <span style={{ textDecoration: "underline" }}>they were all changing the world</span>. Once I returned out West and I started my
            college education with the board study of Computer Engineering. Once I got started I quickly discovered I had a talent for programming and Software Engineering. I found
            out <span style={{ textDecoration: "underline" }}>I can make a difference through software development</span>.
          </p>
        )
        break
      case "database design":
        setInfo(
          <p>
            I worked extensively with SQL databases and a small of NoSQL work. Professionally I have worked with and managed Microsoft SQL Server databases in the R-Matrix and NRC Codes Licensing Dashboard
            projects and Oracle databases in the Transcom project. Personally I've managed a NoSQL Firebase database when working with Razor's Edge Boxing Club. Download my resume to learn more.
          </p>
        )
        break
      case "password encryption":
        setInfo(
          <p>
            To meet the needs of the client in the Transcom project I implemented password encryption using both PBKDF2-HMAC-SHA256 and SHA-512/256 algorithms. Each time a password is save a randomized
            salt is generate and stored with the user's information in the database. To meet future needs of security, admins are able to set the number of iterations the password while go through
            through the algorithm. You can learn more about the Transcom project from my resume.
          </p>
        )
        break
      case "server security":
        setInfo(
          <p>
            To provide a secure environment for the Transcom project I consulted with the client's I.T. department and edited the group policy on their server's in their Development, Test, and Production
            networks to meet CIS standards. Through this process I was able to reach a score of over 95% on the CIS benchmark. Find out more about my work with Transcom on my resume.
          </p>
        )
        break
      case "frontend development":
        setInfo(
          <p>
            With both new and legacy projects I've create highly interactive and responsive websites. This was done through the use of HTML to layout the page, Bootstrap and custom CSS to so the pages have
            a modern styling, and JavaScript to retrieve the data and update/control the pages. I've used JavaScript frameworks such as Vue, React, and Next.js as well as plain JavaScript and HTML depending on
            the needs of the application.
          </p>
        )
        break
      case "interests and hobbies":
        setInfo(
          <p>
            I spend most mornings working out by going through boxing drills on a heavy bag. After work I enjoy playing guitar and learning new songs. My favorite music to play along to is chill pop music,
            similar to Jack Johnson. To unwind I'll often play video games. Some of my favorites are Madden, Fortnite, and the classic Mario Kart Double Dash.
          </p>
        )
        break
    }
    setTimeout(() => infoRef.current.children[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }), 5)
  }

  return (<>
    <section className={styles.text}>
      <p>
        I'm a software engineer and <span className={styles.bold} onClick={updateInfo}>my goal is to make a difference</span>.

        <br/><br/>
        I have a broad education of computers and technology that began with a Bachelor of Science in Computer Engineering and that has continued throughout my career. I have worked through all stages of website
        development. Including the initial <span className={styles.bold} onClick={updateInfo}>database design</span> and continual management. I established website security to meet given standards
        through <span className={styles.bold} onClick={updateInfo}>password encryption</span> and <span className={styles.bold} onClick={updateInfo}>server security</span>.
        All of my software engineering includes an enhanced user experience through user-friendly <span className={styles.bold} onClick={updateInfo}>frontend development</span> and UX design.

        <br/><br/>
        When I'm not creating websites I stay busy with my <span className={styles.bold} onClick={updateInfo}>interests and hobbies</span>.
      </p>
    </section>
    <section className={styles.additionalInfo} ref={infoRef}>{info}</section>
  </>)
}