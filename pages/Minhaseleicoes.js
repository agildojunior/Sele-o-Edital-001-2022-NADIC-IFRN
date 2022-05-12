import Link from 'next/link'
import styles from '../styles/maincontainer.module.css'

import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'

export default function Minhaseleicoes() {
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

            <h1 className={styles.h1titulobranco}>Minhas Eleições</h1>

            <Link href="/Eleicao"><div className={styles.listaeleição}>
                <h2>Titulo da eleição</h2>
                <p>Aqui fica uma pequena descrição sobre a eleição, Aqui fica uma pequena descrição sobre a eleição Aqui fica uma pequena descrição sobre a eleição.</p>
            </div></Link>
            <Link href="/Eleicao"><div className={styles.listaeleição}>
                <h2>Titulo da eleição</h2>
                <p>Aqui fica uma pequena descrição sobre a eleição, Aqui fica uma pequena descrição sobre a eleição Aqui fica uma pequena descrição sobre a eleição.</p>
            </div></Link>
            <Link href="/Eleicao"><div className={styles.listaeleição}>
                <h2>Titulo da eleição</h2>
                <p>Aqui fica uma pequena descrição sobre a eleição, Aqui fica uma pequena descrição sobre a eleição Aqui fica uma pequena descrição sobre a eleição.</p>
            </div></Link>
            
        </div>

        </div>
        </>
  )
}
