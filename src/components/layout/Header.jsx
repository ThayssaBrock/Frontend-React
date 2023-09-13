import './Header.css'

const Header = () => {
  return (
    <header id="header">
        <h1>Logo</h1>
        <nav>
            <ul>
                <li><a href="http://localhost:3000/">Home</a></li>
                <li><a href="http://localhost:3000/quem-somos">Quem Somos</a></li>
                <li><a href="http://localhost:3000/contatos">Contato</a></li>
                <li><a href="http://localhost:3000/membros">Membros</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header