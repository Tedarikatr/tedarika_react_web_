import "./style/download.sass"

const Download = () => {
    return (
        <div className="download-container">
            <div className="text-content">
                <h2>
                    Tedarika'yı Hemen İndir
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
                </p>
                <div className="action-button">
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
            <div className="image">
                <img src="./images/iPhone 14 1.png" alt="Iphone Image" />
            </div>
        </div>
    );
};

export default Download;