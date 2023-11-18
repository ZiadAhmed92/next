import Layout from '@/Components/Layout'
import '@/styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'



export default function App({ Component, pageProps }) {
  return (
  <>
  <Layout>

     <Component {...pageProps} />
  </Layout>
 
  </>
  )
}
