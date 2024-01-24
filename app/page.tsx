import Image from 'next/image'
import styles from './page.module.css'
import Head from '../components/head'
import Footer from '../components/foot'
import LoginForm from '../components/login-form'

export default function Home() {
  return (
    <html lang='en'>
      
      <div>
      <LoginForm />
        <body>
        <Head />
        <h1>MCFC</h1>
        <h2>Welcome to the Multicultural Food Club website!</h2>
        <div>
          <h3>About Us</h3>
          <p>We love food!</p>
        </div>
        <Footer />
        </body>
      </div>
    </html>
    
  )
}
