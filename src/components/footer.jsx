import './footer.css'

function Footer() {
    return(
        <footer id='footer'>
            <div className="footer1">
                <div className="logo">
                    <a href="#">Street88</a>
                </div>
                <p className='tel'>+998 90 980 77 23</p>    
            </div>

            <div className="footer2">
                <a href="#menu">Меню</a>
                <a href="#about">О нас</a>
                <a href="#footer">Контакты</a>
                <a href="https:instagram.com">Instagram</a>
                <a href="https:facebook.com">Facebook</a>
                <a href="https:telegram.com">Telegram Bot</a>
            </div>

            <div className="footer3">
                <p>Сайт разработан в целях обучения © PROWEB 2019</p>
            </div>
                <br />

        </footer>
    )
}

export default Footer