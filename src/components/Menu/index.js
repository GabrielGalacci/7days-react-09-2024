import styles from './index.module.css'

export default function Menu(){
    return (
        <header className={styles.menu}>
            <div>
                <img src='/images/logo.svg' />
            </div>
            <nav>
                <li>
                    <a href="#">Como fazer</a>
                    /
                </li>
                <li>
                    <a href="#">Ofertas</a>
                    /
                </li>
                <li>
                    <a href="#">Depoimentos</a>
                    /
                </li>
                <li>
                    <a href="#">Videos</a>
                    /
                </li>
                <li>
                    <a href="#">Meu carrinho</a>
                    /
                </li>
            </nav>
        </header>
    )
}