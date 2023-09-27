import './Header.css'
import Link from 'next/link'


const Header = () => {
  return (
    <header id="header">
        <h1 style={style.titulo}>Logo</h1>
        <nav>
            <ul>
                <li><Link style={style.linkMenu} href={'/'}>Home</Link></li>
                <li><Link style={style.linkMenu} href={'/quem-somos'}>Quem Somos</Link></li>
                <li><Link style={style.linkMenu} href={'/contatos'}>Contato</Link></li>
                <li><Link style={style.linkMenu} href={'/membros'}>Membros</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header

const style = {
  linkMenu: {
    textDecoration: 'none',
    color: '#FFF',
    fontSize: '18px'
  }, 
  titulo: {
    fontSize: '40px'
  }
}