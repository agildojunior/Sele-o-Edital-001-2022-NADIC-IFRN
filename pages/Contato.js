import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/maincontainer.module.css'

import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'

export default function Contato() {
  return (
        <>
        <div className={styles.principal}>

        <div className={styles.container2}>
            <h1>VoteOnline</h1>
            <h2>Bem-vindo</h2>
            <p>entre agora ou Cadastre-se para participar de eleições online!</p>
                <Link href="/Entrar"><a className={styles.btn}>Entrar</a></Link>
        </div>

        <div className={styles.containerpg2}>
            
              <Navbar />

            <div className={styles.contatoprincipal}>

              <div className={styles.contatodiv}>
                <h1><AiOutlineInstagram/></h1>
                <h2>instagram</h2>
                <h3>Siga nossa pagina no instagram. @VoteOnlineOficial</h3>
              </div>
              <div className={styles.contatodiv}>
                <h1><BsFillTelephoneFill/></h1>
                <h2>Telefone</h2>
                <h3>Voce pode ligar para. 9999999999999</h3>
              </div>
              <div className={styles.contatodiv}>
                <h1><AiOutlineMail/></h1>
                <h2>Email</h2>
                <h3>Tem alguma duvida? VoteOnline@Email.com</h3>
              </div>

            </div>

        </div>

        </div>
        </>
  )
}
