import './header.css'


function Header () {
    return(
        <header>
            <nav>
                <div className="logo">
                    <a href="#">Street88</a>
                </div>


                <ul>
                    <li>
                        <a href="#">Корзина</a>
                        <a href="#menu">Меню</a>
                        <a href="#about">О нас</a>
                        <a href="#footer">Контакты</a>
                    </li>
                </ul>

            </nav>

            <div className='box'>
                <br />
                <h1>Большой гамбургер</h1>
                <br /><br />
                <h2>Говядина</h2>
                <br /> <br /><br />
                <p>Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее распространенной «быстрой» еды в США, от отравления которой ежедневно на больничных койках оказываются десятки тысяч американцев</p>
                <br /><br /><br /><br />
                <button className='price'>14 500</button>
            </div>

        </header>
    )
}

export default Header