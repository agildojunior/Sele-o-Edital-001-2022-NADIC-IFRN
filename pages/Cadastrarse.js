import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/maincontainer.module.css'

import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'

export default function Cadastrarse({ children }) {
  return (
        <>
        <div className={styles.principal}>

        <div className={styles.container2}>
            <h1>VoteOnline</h1>
            <h2>Bem-vindo</h2>
            <p>entre agora ou Cadastre-se para participar de eleições online!</p>

                <Link href="/Entrar"><a className={styles.btn}>Entrar</a></Link>
                
        </div>
        <div className={styles.containerpg3}>
          
            <Navbar />

            <div className={styles.cadastroprincipal}>
              <h1>Criar sua conta</h1>

              <form action="/send-data-here" method="post">
                
                <label for=''>
                  <i><AiOutlineUser/></i>
                  <input type="text" id="nome" name="nome" placeholder='Digite seu nome...' />
                </label>

                <label for=''>
                <i><AiOutlineMail/></i>
                  <input type="email" id="nome" name="nome" placeholder='Digite seu email...' />
                </label>
                
                <label for=''>
                <i><RiLockPasswordLine/></i>
                  <input type="password" id="nome" name="nome" placeholder='Digite sua senha...' />
                </label>
                <Link href="#"><button className={styles.btn2}>Cadastrar</button></Link>
                
              </form>
            </div>
              
            
        </div>

        </div>
        </>
  )
}
