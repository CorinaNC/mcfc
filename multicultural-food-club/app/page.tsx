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
        <Footer />
        </body>
      </div>
    </html>
    
  )
}
