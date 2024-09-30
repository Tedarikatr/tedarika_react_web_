import "./style/footer.sass"

const Footer = () => {
    return (
        <footer>
            <div className="social-media">
                <img src="./images/12 1.png" alt="tedarika logo" />
                <span>Sosyal Medya Hesaplarımız</span>
                <div className="icons">
                    <img src="./images/footer/instagram.png" alt="" />
                    <img src="./images/footer/facebook-f.png" alt="" />
                    <img src="./images/footer/twitter.png" alt="" />
                    <img src="./images/footer/linkedin-in.png" alt="" />
                    <img src="./images/footer/youtube.png" alt="" />
                </div>
            </div>
            <div className="trust-shopping">
                <h4>Güvenli Alışveriş</h4>
                <div className="icons">
                    <img src="./images/footer/trust-shop.png" alt="" />
                </div>
            </div>
            <div className="trust-sertificate">
                <h4>Güvenli Sertifikaları</h4>
                <div className="icons">
                    <img src="./images/footer/trust-sertificate.png" alt="" />
                </div>
            </div>
            <div className="information">
                <h3>Bilgilendirme</h3>
                <a href="#">Şirket Bilgilerimiz</a>
                <a href="#">Sıkça Sorulan Sorular (SSS)</a>
                <a href="#">Destek Kanalları</a>
            </div>
        </footer>
    );
};

export default Footer;