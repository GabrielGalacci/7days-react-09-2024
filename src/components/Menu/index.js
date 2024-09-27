import { Header, NavMenu } from './styles'

export default function Menu(){
    return (
        <Header>
            <div>
                <img src='/images/logo.svg' />
            </div>
            <NavMenu>
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
            </NavMenu>
        </Header>
    )
}