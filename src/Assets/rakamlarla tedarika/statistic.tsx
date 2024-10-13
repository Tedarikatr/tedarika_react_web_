import "./style/statistic.sass"

const Statistic = () => {
    return (
        <div id="statistic-container" className="statistic-container">
            <div className="statistic-box">
                <div className="head-title">
                    <h3>
                        Rakamlarla Tedarika
                    </h3>
                </div>
                <div className="statistic-content">
                    <div className="statistic-item">
                        <h1>100 Bin</h1>
                        <p>İndirme Sayısı</p>
                    </div>
                    <div className="statistic-item">
                        <h1>5 Bin</h1>
                        <p>Alıcı Kullanıcı Sayısı</p>
                    </div>
                    <div className="statistic-item">
                        <h1>2 Bin</h1>
                        <p>Satıcı Kullanıcı Sayısı</p>
                    </div>
                    <div className="statistic-item">
                        <h1>20 Milyon</h1>
                        <p>TL İşlem Hacmi</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Statistic;