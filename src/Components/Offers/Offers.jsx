import React from 'react'
import styles from "../Offers/Offers.module.css"
import { CoContext } from "../../Context/ComodaContext";
import { useContext, useState, useReducer } from 'react'
import { useInView } from "react-intersection-observer"
import { useSpring, animated, easings } from "@react-spring/web"
import Item from '../Item/Item';

function Offers() {

  const [ref, inView] = useInView({triggerOnce: false})
  const [ref2, inView2] = useInView({triggerOnce: false})

  const animaOffer1 = useSpring({
    opacity: inView ? 1 : 0,
    marginLeft: inView ? "0px" : "100px",
    config: {duration: 600, easing: easings.easeOutCirc}
  })
  const animaOffer2 = useSpring({
    opacity: inView ? 1 : 0,
    marginRight: inView ? "0px" : "100px",
    config: {duration: 600, easing: easings.easeOutCirc}
  })
  const animaOffer3 = useSpring({
    opacity: inView2 ? 1 : 0,
    scale: inView2 ? 1 : 0,
    config: {duration: 600, easing: easings.easeOutCirc}
  })

  const { buscarProductos, busqueda, ofertas, vendidos, ordenarPPrecio, ordenarPVendidios, ordenarPNombre } = useContext(CoContext);
  const [nombreP, setNombreP] = useState("")
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

  return (
    <div className={styles.Offers} id='idoffers'>
      <div className={styles.News}>
        <div className={styles.contTittle}>Recomendados</div>
        <animated.div className={styles.Popular} ref={ref} style={animaOffer1}>
          <div className={styles.contPopular}>
            <div className={styles.newsTittle}>Los mas vendidos</div>
            <div className={styles.newsContent}>
              {vendidos[vendidos.length - 1] !== undefined && <Item key={0} datoItem={vendidos[vendidos.length - 1]}></Item>}
              {vendidos[vendidos.length - 2] !== undefined && <Item key={1} datoItem={vendidos[vendidos.length - 2]}></Item>}
              {vendidos[vendidos.length - 3] !== undefined && <Item key={2} datoItem={vendidos[vendidos.length - 3]}></Item>}
            </div>
          </div>
        </animated.div>
        <animated.div className={styles.BO} ref={ref} style={animaOffer2}>
          <div className={styles.contBO}>
            <div className={styles.newsTittle}>Ofertas</div>
            <div className={styles.newsContent}>
              {ofertas.map((item) => <Item key={ofertas.indexOf(item)} datoItem={item}></Item>)}
            </div>
          </div>
        </animated.div>
      </div>
      <div className={styles.Products}>
        <div className={styles.contProducts}>
          <animated.div className={styles.panelProducts} ref={ref2} style={animaOffer3}>
            <div className={styles.contTittle2}>Productos</div>
            <div className={styles.contSearch}>              
              <div className={styles.contInput}>
                <input type="text" placeholder='Ingrese su busqueda ...' onChange={(e) => setNombreP(e.target.value)}/>
                <div className={styles.botonBuscar} onClick={(e) => {e.preventDefault(); buscarProductos(nombreP)}}>Buscar</div>
              </div>              
            </div>
            <div className={styles.panel2}>
              <div className={styles.contFiltros}>
                <div className={styles.filtro} onClick={() => {ordenarPPrecio(busqueda); forceUpdate();}}>Ordenar por Precio</div>
                <div className={styles.filtro} onClick={() => {ordenarPNombre(busqueda); forceUpdate();}}>Ordenar por Nombre</div>
                <div className={styles.filtro} onClick={() => {ordenarPVendidios(busqueda); forceUpdate();}}>Ordenar por mas vendidos</div>
              </div>
              <div className={styles.contItems}>
                {busqueda.map((item) => <Item key={busqueda.indexOf(item)} datoItem={item}></Item>)}
              </div>
            </div>
          </animated.div>
        </div>
      </div>
      <div className={styles.OffersPanel3}></div>
    </div>
  )
}

export default Offers