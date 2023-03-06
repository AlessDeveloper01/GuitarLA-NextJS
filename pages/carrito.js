import { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "@/components/layout"
import styles from "@/styles/carrito.module.css"

export default function Carrito({carrito, actualizarCantidad, eliminarProducto}) {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.precio * producto.cantidad), 0)
        setTotal(calculoTotal);
    }, [carrito]);

  return (
    <Layout
        title="Carrito"
        description="Carrito de compras"
    >

        <main className="contenedor">
            <h1 className="heading">Carrito de compras</h1>

                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Productos</h2>

                        {carrito.length === 0 ? ( <p>No hay productos en el carrito</p> ) : ( 
                            carrito.map(producto => (
                                <div key={producto.id} className={styles.producto}>
                                    <div>
                                        <Image width={250} height={400} src={producto.imagen} alt={`Imagen de la guitarra ${producto.nombre}`}/>
                                    </div>
                                    <div>
                                        <p className={styles.nombre}>{producto.nombre}</p>
                                    
                                        <div className={styles.cantidad}>
                                            <p>Cantidad: </p>
                                            <select className={styles.select} onChange={e => actualizarCantidad({
                                                id: producto.id,
                                                cantidad: parseInt(e.target.value)
                                            })}
                                            value={producto.cantidad}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>

                                        <p className={styles.precio}>$ <span>{producto.precio}</span></p>
                                        <p className={styles.subtotal}>Subtotal: $ {producto.cantidad * producto.precio}</p>

                                    </div>

                                    <button className={styles.eliminar} type='button' onClick={() => eliminarProducto(producto.id)}>X</button>
                                </div>
                            ))
                        )}
                    </div>

                    <aside className={styles.resumen}>
                        <h2>Resumen del pedido</h2>
                        <p>Total a pagar: $ {total}</p>
                    </aside>

                </div>
        </main>
    
    </Layout>
  )
}
