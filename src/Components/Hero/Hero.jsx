import React from 'react'
import styles from "../Hero/Hero.module.css"
import { animated, useSpring, easings } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

function Hero() {

  const [ref, inView] = useInView({triggerOnce: false})

  const animaHero = useSpring({
    opacity: inView ? 1: 0,
    config: {duration: 3000, easing: easings.easeOutCirc}
  })
  
  return (
    <animated.div  className={styles.Hero} id='idhome' style={animaHero} ref={ref}>
      <div className={styles.tittleCont}>
        <h2>UNA VIDA MAS CÓMODA</h2>
        <p>Los mejores muebles para tu hogar</p>
      </div>
    </animated.div>
  )
}

export default Hero