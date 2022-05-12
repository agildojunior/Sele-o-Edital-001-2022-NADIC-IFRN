import Link from 'next/link'
import styles from '../styles/maincontainer.module.css'

import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'

export default function Bemvindo() {
  return (
        <>
        <div className={styles.principal}>

        <div className={styles.containerlogado}>
            <h1>VoteOnline</h1>
            
                <Link href="/Bemvindo"><a className={styles.btn4}>Inicio</a></Link>
                <Link href="/Eleicoes"><a className={styles.btn4}>Eleições</a></Link>
                <Link href="/Criareleicoes"><a className={styles.btn4}>Criar eleição</a></Link>
                <Link href="/Minhaseleicoes"><a className={styles.btn4}>Minhas Eleições</a></Link>
                <Link href="/Inicio"><a className={styles.btn4}>sair</a></Link>
                
                <p>Seja bem-vindo ao nosso site, participe ou crie eleições agora! </p>

        </div>

        <div className={styles.containerpglogado2}>

            <h1 className={styles.h1titulobranco}>Bem-Vindo</h1>
            <p className={styles.ptextobranco}>Seja bem-vindo ao nosso site, este site em o intuito de  permitir que nossos usuários criem eleições online para as mais diversas situações, tais como: eleger representantes do grêmio, núcleo docentes estruturantes, síndicos de condomínios, etc.<br></br> 
            Todos os usuarios tem o direito de criar ou participar de qualquer eleição, para outras duvidas consulte um de nossos contatos listados logo abaixo.</p>

            <div className={styles.contatologado}>
                
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
