import Layout from "../components/layout"
import Post from "../components/post"
import styles from '../styles/grid.module.css'

export default function Blog({posts}) {
  return (

    <Layout
        title={'Blog'}
        description={'Articulos de musica, guitarras, etc.'}
    >
        <main className="contenedor">
          <h1 className="heading">Blog</h1>
          <div className={`contenedor ${styles.grid}`}> 
            {posts?.map(post => (
                <Post key={post.id} 
                      post={post} 
                />
            ))}
          </div>
        </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const url = `${process.env.API_URL}/posts?populate=imagen`

  const resultado = await fetch(url)
  const {data: posts} = await resultado.json()

  return {
    props: {
      posts
    }
  }
}