import Image from 'next/image'
import "./style.css"
import Head from '../components/header/head'
import Footer from '../components/footer/foot'
import LoginForm from '../components/login-form'

export default function Home() {
  return (
    <html lang='en'>
      
      <div>
        <body>
        <Head />
        <section className="data">
        <section className="home-information">
          <h1 className="title">
            Multicultural <br></br>Food Club
          </h1>
          Student led review website for restaurants on the University 
          of Minnesota-Twin Cities campus.
        </section>
        <section className="logo">
        <Image
          src="/mcfc.png"
          width={500}
          height={500}
          alt="lol"
          className=""
                    />
        </section>
        </section>
        <Footer />
        </body>
      </div>
    </html>
    
  )
}
