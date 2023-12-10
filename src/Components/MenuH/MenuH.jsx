import React from 'react'
import { CoContext } from "../../Context/ComodaContext";
import { useContext } from 'react'
import styles from "../MenuH/MenuH.module.css"
import {animated, useSpring, easings} from "@react-spring/web"

function MenuH() {

  const animaMenuH = useSpring({
    from: {opacity: 0, height: "20vh"},
    to: {opacity: 1, height: "100vh"},
    config: {duration: 600, easing: easings.easeOutCirc}
  })

  const { setMenuH } = useContext(CoContext);

  return (
    <animated.div className={styles.menu} style={animaMenuH}>
        <div className={styles.menuCont}>
          <a className={styles.link} href='#idhome' onClick={() => setMenuH(false)}>Inicio</a>
          <a className={styles.link} href='#idabout' onClick={() => setMenuH(false)}>Acerca de</a>
          <a className={styles.link} href='#idoffers' onClick={() => setMenuH(false)}>Productos</a>
          <a className={styles.link} href='#idlocation' onClick={() => setMenuH(false)}>Contacto</a>
        </div>
    </animated.div>
  )
}

export default MenuH