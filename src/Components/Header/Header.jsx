import React from 'react'
import styles from "../Header/Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"
import { CoContext } from "../../Context/ComodaContext";
import { useContext } from 'react'
import { animated, useSpring, config, easings } from '@react-spring/web'

function Header() {

  const { setMenuH, menuH, scrollH } = useContext(CoContext);

  const animaH = useSpring(scrollH === true ? {
    from: {backgroundColor: "rgba(0, 0, 0, 0.2)", borderBottom: "1px solid rgba(161, 142, 131, 0.2)"},
    to: {backgroundColor : "rgb(0, 0, 0)", borderBottom: "1px solid rgba(161, 142, 131, 0.4)"},
    config: config.default
  }:{
    from: {backgroundColor: "rgb(0, 0, 0)", borderBottom: "1px solid rgba(161, 142, 131, 0.4)"},
    to: {backgroundColor : "rgba(0, 0, 0, 0.2)", borderBottom: "1px solid rgba(161, 142, 131, 0.2)"},
    config: config.default
  })

  const animaLink = useSpring({
    from: {width: "20%", opacity: 0},
    to: {width: "80%", opacity: 1},
    config: {duration: 1500, easing: easings.easeInOutCirc}
  })

  function actionMenu(){
    if (menuH === false){
      setMenuH(true)
    }
    else{
      setMenuH(false)
    }
  }
  
  return (
    <animated.div className={styles.Header} style={animaH}>
        <div className={styles.logoCont}>
            <img src="logo2.svg" alt="logo" />
        </div>
        <div className={styles.menuCont}>
            <animated.div className={styles.menuList} style={animaLink}>
                <a href="#idhome" >Inicio</a>
                <a href="#idabout" >Acerca de</a>
                <a href="#idoffers">Productos</a>
                <a href="#idlocation">Contacto</a>
            </animated.div>
            <div className={styles.contIcon}>
              <FontAwesomeIcon icon={faBars} className={styles.menuIcon} onClick={actionMenu}/>
            </div>
        </div>
    </animated.div>
  )
}

export default Header