import { createContext } from "react"
import { useState, useEffect } from "react";
import datos from "../productos.json"

export const CoContext = createContext();

export function CoContextProvider (props) {

    const [productos, setProductos] = useState(datos);
    const [ofertas, setOfertas] = useState([])
    const [vendidos, setVendidos] = useState([])
    const [busqueda, setBusqueda] = useState([])
    const [menuH, setMenuH] = useState(false)
    const [scrollH, setScrollH] = useState(false)
    

    function buscarProductos(ocurrencia) {
        setBusqueda(productos.filter(producto => producto.name.includes(ocurrencia) === true));
    }

    function ordenarPPrecio (lista){
        if (lista.length > 0){
            setBusqueda(lista.sort(function(a, b){
                if (a.price > b.price) {
                    return 1;
                  }
                  if (a.price < b.price) {
                    return -1;
                  }
                  return 0;
            }))
        }          
    }
    function ordenarPVendidios (lista){
        if (lista.length > 0){
            setBusqueda(lista.sort(function(b, a){
                if (a.sold > b.sold) {
                    return 1;
                  }
                  if (a.sold < b.sold) {
                    return -1;
                  }
                  return 0;
            }))
        }  
    }
    function ordenarPNombre (lista){
        if (lista.length > 0){
            setBusqueda(lista.sort(function(a, b){
                if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                  return 0;
            }))
        }         
    }

    useEffect(() => {
        setOfertas(productos.filter(producto => producto.discount > 0));
        setVendidos(datos.sort(function(a, b) {
            if (a.sold > b.sold) {
              return 1;
            }
            if (a.sold < b.sold) {
              return -1;
            }
            return 0;
        }));
    }, [productos])

    return (<CoContext.Provider value={{
        productos,
        ofertas,
        vendidos,
        busqueda,
        menuH,
        scrollH,
        ordenarPPrecio,
        ordenarPVendidios,
        ordenarPNombre,
        setScrollH,
        setMenuH,
        buscarProductos,
        setProductos,
        setBusqueda,
        setVendidos,
        setOfertas
    }}>{props.children}</CoContext.Provider>)
}