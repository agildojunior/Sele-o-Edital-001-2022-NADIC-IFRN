import Link from 'next/link'
import styles from '../styles/maincontainer.module.css'

import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'

export default function Entrar({ children }) {
  return (
        <>
        <div className={styles.pgentrar}>
        
            <div className={styles.entrarlogin}>
              <h1>Entrar agora</h1>

              <form action="" method="">
                <h2>Seu email</h2>
                <label for=''>
                <i><AiOutlineMail/></i>
                  <input type="email" id="nome" name="nome" placeholder='Digite seu email...' />
                </label>
                
                <h2>Sua senha</h2>
                <label for=''>
                <i><RiLockPasswordLine/></i>
                  <input type="password" id="nome" name="nome" placeholder='Digite sua senha...' />
                </label>
                <Link href="/Bemvindo"><button className={styles.btn3}>Entrar</button></Link>
                
              </form>
            </div>
              
        </div>
        </>
  )
}
