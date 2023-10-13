import Image from 'next/image'
import styles from './page.module.css'
import Head from '../components/head'
import Footer from './foot'

export default function Home() {
  return (
    <html lang='en'>
      <div>
        <body>
        <Head />
        <h1>MCFC</h1>
        <h2>Welcome to the Multicultural Food Club website!</h2>
        <div>
          <h3>About Us</h3>
          <p>We love food and we exploit the University of Minnesota - Twin Cities for funds to get free food because they exploit us with tuition.</p>
        </div>
        <Footer />
        </body>
      </div>
    </html>
    
  )
}
