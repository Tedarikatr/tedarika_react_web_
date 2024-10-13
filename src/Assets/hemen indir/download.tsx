import "./style/download.sass"

const Download = () => {
    return (
        <div className="download-container">
            <div className="text-content">
                <h2>
                    Tedarika'yı Çok Yakında İndir
                </h2>
                <p>
                    Tedarika, çok yakında Google Play ve App Store'da! HORECA sektöründe tedarikçileri ve işletmeleri buluşturan en kapsamlı dijital pazaryerine erişim için hazır olun. Tedarika ile işletmenizin ihtiyaçlarını kolayca karşılayın ve ticaretin yeni standartlarına adım atın. Bizi takip edin ve ilk indirenlerden biri olun!
                </p>
                <div className="action-button">
                    <button disabled>
                        <img src="./images/platform-icon/android_icon.png" alt="Android Icon" />
                        <span>Google Play (Yakında)</span>
                    </button>
                    <button disabled>
                        <img src="./images/platform-icon/apple_icon.png" alt="Apple Icon" />
                        <span>App Store (Yakında)</span>
                    </button>
                </div>
            </div>
            <div className="image">
                <img src="./images/iPhone 14 1.png" alt="Iphone Image" />
            </div>
        </div>
    );
};

export default Download;
