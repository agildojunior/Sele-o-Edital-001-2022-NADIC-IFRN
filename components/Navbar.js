import Link from 'next/link'

import styles from '../styles/navbarinicial.module.css'

export default function Navbar() {
  return (
    
      <ul className={styles.navbar}>
        <li>
          <Link href="/Inicio"><a>Inicio</a></Link>
        </li>
        <li>
          <Link href="/Contato"><a>Contato</a></Link>
        </li>
        <li>
          <Link href="/Cadastrarse"><a>Cadastrar</a></Link>
        </li>
      </ul>
    
  )
}