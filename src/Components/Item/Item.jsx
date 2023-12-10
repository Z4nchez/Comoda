import React from 'react'
import styles from "../Item/Item.module.css"
import { animated, useSpring, easings } from "@react-spring/web"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import Description from '../Description/Description'

function Item({datoItem}) {

  const [ref, inView] = useInView({triggerOnce: false})

  const animaItem = useSpring({
    opacity: inView ? 1 : 0,
    width: inView ? "100%" : "50%",
    config: {duration: 600, easing: easings.easeOutCirc}
  })

  const [opDetalle, setOpDetalle] = useState(false)

  return (
    <animated.div className={styles.Item} ref={ref} style={animaItem}>
        <div className={styles.ItemCont} onClick={() => setOpDetalle(true)}>
            <img src={datoItem.img} alt="Imagen Producto" />
            <div className={styles.infoCont}>
                <div className={styles.descCont}>
                    <div className={styles.name}>{datoItem.name}</div>
                    <div className={styles.desc}>{datoItem.desc}</div>
                </div>
                <div className={styles.priceCont}>
                    <div className={styles.price}>{`US$ ${datoItem.price}`}</div>
                    <div className={styles.discount}>{`-${datoItem.discount}%`}</div>
                    <div className={styles.sold}>{`${datoItem.sold} vendidos`}</div>
                </div>
            </div>           
        </div>
        {opDetalle === true && <Description dato={datoItem} cerrar={setOpDetalle}></Description>}
    </animated.div>
  )
}

export default Item