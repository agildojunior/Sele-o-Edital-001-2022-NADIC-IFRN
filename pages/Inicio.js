import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/maincontainer.module.css'

export default function Inicio({ children }) {
  return (
        <>
        <div className={styles.principal}>

        <div className={styles.container2}>
            <h1>VoteOnline</h1>
            <h2>Bem-vindo</h2>
            <p>entre agora ou Cadastre-se para participar de eleições online!</p>

                <Link href="/Entrar"><a className={styles.btn}>Entrar</a></Link>
                
        </div>
        <div className={styles.container}>
            <Navbar />

        </div>

        </div>
        </>
  )
}
