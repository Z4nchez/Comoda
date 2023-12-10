import React from 'react'
import styles from "../Description/Description.module.css"
import { useState } from "react"
import { animated, useSpring, easings } from "@react-spring/web"

function Description({dato, cerrar}) {
  
  const [Cantidad, setCantidad] = useState(1);

  const animaDesc = useSpring({
    from:{opacity: 0, scale: 0},
    to:{opacity: 1, scale: 1},
    config: {duration: 400, easing: easings.easeOutCirc}
  })

  return (
    <animated.div className={styles.Description} style={animaDesc}>
        <div className={styles.infoCont}>
            <div className={styles.tittle}>{dato.name}</div>
            <div className={styles.desc}>{dato.desc}</div>
        </div>
        <div className={styles.priceCont}>
            <div className={styles.imgCont}>
                <img src={dato.img} alt="" />
            </div>
            <div className={styles.Details}>
                <div className={styles.detalleCont}>
                    <div className={styles.detalleT}>Precio:</div>
                    <div className={styles.detalleValor}>{`US$ ${dato.price}`}</div>
                </div>
                <div className={styles.detalleCont}>
                    <div className={styles.detalleT}>Descuento:</div>
                    <div className={styles.detalleValor}>{`-${dato.discount}%`}</div>
                </div>
                <div className={styles.detalleCont}>
                    <div className={styles.detalleT}>Cantidad:</div>
                    <div className={styles.detalleValor}>{Cantidad}</div>
                    <div className={styles.buttonC} onClick={() => setCantidad(Cantidad + 1)}>+</div>
                    <div className={styles.buttonC} onClick={() => {Cantidad > 1 ? setCantidad(Cantidad - 1): setCantidad(1)}}>-</div>
                </div>
                <div className={styles.detalleCont}>
                    <div className={styles.detalleT}>Precio Final:</div>
                    <div className={styles.detalleValor}>{`US$ ${(dato.price) * Cantidad}`}</div>
                </div>
            </div>
        </div>
        <div className={styles.buttonCont}>
            <div className={styles.button} onClick={() => cerrar(false)}>Cancelar</div>
            <div className={styles.button} onClick={() => {cerrar(false); console.log(`Su compra de ${Cantidad} ${dato.name} fué exitosa`)}}>Comprar</div>
        </div>
    </animated.div>
  )
}

export default Description