import Link from 'next/link'
import styles from '../styles/maincontainer.module.css'

import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'

export default function Criareleicoes() {
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

            <h1 className={styles.h1titulobranco}>Criar uma eleição</h1>
            
            <div className={styles.criandoEleicao}>
                
            <form action="" method="">

              <div className={styles.colunacriareleicao}>
                <h2>Titulo</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Titulo...' />
                </label>
                <h2>Quantidade de candidatos</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Quantidade...' />
                </label>
                <h2>Descrição</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Descrição...' />
                </label>
                <h2>Data inicial</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='dd/mm/aaaa' />
                </label>
                <h2>Data final</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='dd/mm/aaaa' />
                </label>
                <br></br>
                <button className={styles.btn6}>Criar eleição</button>
              </div>

              <div className={styles.colunacriareleicao}>
                <h2>Candidato 1</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Nome...' />
                </label>
                <h2>CPF</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='XXX.XXX.XXX-XX' />
                </label>
                <h2>Data de Nascimento</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='dd/mm/aaaa' />
                </label>
                <h2>Estado</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Estado...' />
                </label>
                <h2>Cidade</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Cidade...' />
                </label>
                <h2>Rua</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Rua...' />
                </label>
              </div>

              <div className={styles.colunacriareleicao}>
                <h2>Candidato 2</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Nome...' />
                </label>
                <h2>CPF</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='XXX.XXX.XXX-XX' />
                </label>
                <h2>Data de Nascimento</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='dd/mm/aaaa' />
                </label>
                <h2>Estado</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Estado...' />
                </label>
                <h2>Cidade</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Cidade...' />
                </label>
                <h2>Rua</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Rua...' />
                </label>
              </div>

              <div className={styles.colunacriareleicao}>
                <h2>Candidato 3</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Nome...' />
                </label>
                <h2>CPF</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='XXX.XXX.XXX-XX' />
                </label>
                <h2>Data de Nascimento</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='dd/mm/aaaa' />
                </label>
                <h2>Estado</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Estado...' />
                </label>
                <h2>Cidade</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Cidade...' />
                </label>
                <h2>Rua</h2>
                <label for=''>
                  <input type="text" id="nome" name="nome" placeholder='Rua...' />
                </label>
              </div>
              
            </form>

            </div>

        </div>

        </div>
        </>
  )
}
