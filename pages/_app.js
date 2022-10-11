import { Toaster } from 'react-hot-toast' 

//for notification pop up
import '../styles/globals.css'
import Layout from '../components/Layout'
import { StateContext } from '../context/StateContext' 

//to implement accessing the states in the entire application by wrapping the entire app with StateContext
//to pass the data to every single component if need be
 
function MyApp({ Component, pageProps }) {
  return ( 
  <StateContext>
    <Layout>
      <Toaster/>
      <Component {...pageProps} />
    </Layout>
  </StateContext>
  )
}
export default MyApp

