import Link from 'next/link'
import styles from '../styles/maincontainer.module.css'

import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'

export default function Eleicao() {
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

        <div className={styles.containerpglogado}>

            <h1 className={styles.h1titulobranco}>Eleição</h1>

            <div className={styles.votareleição}>
                <h2>Titulo da eleição</h2>
                <p>descrição sobre a eleção descrição sobre a eleção, descrição sobre.</p>
                
                <form action="" method="">

                <div className={styles.ParticipantesEleicaoprincipal}>

                    <div className={styles.ParticipanteEleicao}>
                        <h2>nome do participante</h2>
                        <p>descrição sobre o participantedescrição sobre o participante.</p>
                        <input className={styles.votaropcao} type="radio" id="voto" name="participante1" value="votar"></input>
                    </div>

                    <div className={styles.ParticipanteEleicao}>
                        <h2>nome do participante</h2>
                        <p>descrição sobre o participantedescrição sobre o participante.</p>
                        <input className={styles.votaropcao} type="radio" id="voto" name="participante1" value="votar"></input>
                    </div>

                </div>

                <div className={styles.ParticipantesEleicaoprincipal}>
                    <h3>Digite seu CPF</h3>
                    <label for=''>
                        <input type="text" id="nome" name="nome" placeholder='XXX.XXX.XXX-XX' />
                    </label>
                    <button className={styles.btn6}>Votar</button>
                </div>
                </form>

            </div>
            
            
        </div>

        </div>
        </>
  )
}
