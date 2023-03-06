import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (

    <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, tienda de guitarras, blog de musica y mas'}
    >
        <main className="contenedor">
            <h2 className="heading">Nosotros</h2>
            <div className={styles.contenido}>
              <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Sobre Nosotros" />
              <div>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non pulvinar neque laoreet suspendisse interdum. In iaculis nunc sed augue lacus viverra vitae congue. Felis donec et odio pellentesque diam. Enim blandit volutpat maecenas volutpat. Eu sem integer vitae justo eget magna fermentum. Dictumst quisque sagittis purus sit. Praesent tristique magna sit amet. Dignissim suspendisse in est ante in nibh. Ultrices vitae auctor eu augue ut lectus. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Amet commodo nulla facilisi nullam vehicula. Parturient montes nascetur ridiculus mus mauris vitae ultricies.
                </p>

                <p>
                  Felis donec et odio pellentesque diam. Enim blandit volutpat maecenas volutpat. Eu sem integer vitae justo eget magna fermentum. Dictumst quisque sagittis purus sit. Praesent tristique magna sit amet. Dignissim suspendisse in est ante in nibh. Ultrices vitae auctor eu augue ut lectus.
                </p>
              </div>
            </div>
        </main>
    </Layout>
  )
}

