import Layout from "../components/layout"
import Guitarra from "../components/guitarra"
import styles from "../styles/grid.module.css"

export default function Tienda({guitarras}) {

  return (

    <Layout
        title={'Tienda'}
        description={'Tienda principal de las guitarras'}
    >
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>

          <div className={styles.grid}>
            {guitarras?.map(guitarra => (
              <Guitarra
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
            ))}
          </div>
        </main>
    </Layout>
  )
}

// export async function getStaticProps() {
//   const url = `${process.env.API_URL}/guitarras?populate=imagen`

//   const resultado = await fetch(url)
//   const {data: guitarras} = await resultado.json()

//   return {
//     props: {
//       guitarras
//     }
//   }
// }

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras?populate=imagen`

  const resultado = await fetch(url)
  const {data: guitarras} = await resultado.json()

  return {
    props: {
      guitarras
    }
  }
}