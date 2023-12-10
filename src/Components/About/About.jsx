import React from 'react'
import styles from "../About/About.module.css"
import {animated, useSpring, easings} from "@react-spring/web"
import { useInView } from "react-intersection-observer"

function About() {

  const [ref, inView] = useInView({triggerOnce: false});
  const [ref2, inView2] = useInView({triggerOnce: false});

  const animaTexto = useSpring({
    opacity: inView ? 1 : 0,
    marginTop: inView ? "0px" : "100px"
  })
  const animaTexto2 = useSpring({
    opacity: inView2 ? 1 : 0,
    scale: inView2 ? 1 : 0,
    config: {duration: 600, easing: easings.easeOutCirc}
  })

  return (
    <div className={styles.About} id='idabout'>
        <div className={styles.contTittle}>
            <div className={styles.logoCont}>
                <img src="logo2.svg" alt="logo" />
            </div>
            <div className={styles.contDesc}>
                <animated.h2 style={animaTexto} ref={ref}>Acerca de Nosotros</animated.h2>
                <animated.p style={animaTexto} ref={ref}>Somos una empresa dedicada a la fabricacion, distribucion y venta de muebles para el hogar. Llevamos mas de 20 años en el rubro trabajando con distribuidores y clientes finales, ofreciendo productos de calidad artesanal y a buen precio. Una casa agradable es una casa cómoda.</animated.p>
            </div>
        </div>
        <div className={styles.contPanel}>
            <div className={styles.contA1}>
                <animated.div className={styles.contAD} style={animaTexto2} ref={ref2}>
                    <img src="fabrica.jpg" alt="fábrica" />
                    <p>Contamos con aserraderos e instalaciones de carpinterias y tapizados para la fabrica de nuestros propios muebles.</p>
                </animated.div>
            </div>
            <div className={styles.contA2}>
                <animated.div className={styles.contAD} style={animaTexto2} ref={ref2}>
                    <img src="local.jpg" alt="local" />
                    <p>En nuestros locales podras encontrar productos de fabricación propia, y tambien muebles importados del extrangero con tendencias unicas de otras regiones del mundo.</p>
                </animated.div>
            </div>
            <div className={styles.contA3}>
                <animated.div className={styles.contAD} style={animaTexto2} ref={ref2}>
                    <img src="transporte.jpg" alt="transporte" />
                    <p>Hacemos envios a domicilio a todo el país con seguro de daños y garantias de hasta 12 meses.</p>
                </animated.div>
            </div>
        </div>
        
    </div>
  )
}

export default About