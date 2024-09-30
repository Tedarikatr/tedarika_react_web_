import "./style/hero.sass"

const Hero  = () => {
    return (
        <div className="hero-box-container">
            <div className="hero-box">
                <div className="hero-content">
                    <h1>
                        Tedarika <br />
                        Çok Yakında
                    </h1>
                    <p>
                        Heyecan  verici yeniliklerle dolu web sitemiz çok yakında sizlerle! Tedarika  olarak, size en iyi tedarik çözümlerini sunmak için sabırsızlanıyoruz.
                    </p>
                    <div className="hero-action-buttons">
                        <button>
                            <img src="./images/platform-icon/android_icon.png" alt="Android Icon" />
                            <span>Google Play</span>
                        </button>
                        <button>
                            <img src="./images/platform-icon/apple_icon.png" alt="Apple Icon" />
                            <span>App Store</span>
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="./images/phones-hero.png" alt="Phone Hero Big Image" />
                </div>

                <div className="hero-content-mobile">
                    <div className="hero-mobile">
                        <div className="text">
                            <h1>
                                Tedarika <br />
                                Çok Yakında
                            </h1>
                            <p>
                                Heyecan  verici yeniliklerle dolu web sitemiz çok yakında sizlerle! Tedarika  olarak, size en iyi tedarik çözümlerini sunmak için sabırsızlanıyoruz.
                            </p>
                        </div>
                        <div className="hero-mobile-image">
                            <img src="./images/phones-hero.png" alt="Phone Hero Big Image" />
                        </div>
                    </div>
                    <div className="hero-action-buttons">
                        <button>
                            <img src="./images/platform-icon/android_icon.png" alt="Android Icon" />
                            <span>Google Play</span>
                        </button>
                        <button>
                            <img src="./images/platform-icon/apple_icon.png" alt="Apple Icon" />
                            <span>App Store</span>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Hero