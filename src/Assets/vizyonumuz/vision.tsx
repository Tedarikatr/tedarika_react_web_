import "./style/vision.sass"

const Vision = () => {
    return (
        <div id="vision-container" className="vision-container">
            <div className="content-header">
                <div className="head-title">
                    <h3>Hakkımızda</h3>
                </div>
                <p>
                    Tedarika, 2019 yılında faaliyete geçen Coşkunlar İç ve
                    Dış Ticaret Limited Şirketi'nin yıllar süren sektörel tecrübesi üzerine
                    inşa edilmiştir. Tedarika olarak amacımız, Türkiye’de toptan ticaret
                    süreçlerini dijital dönüşümle yeniden şekillendirerek, üreticilerden
                    perakendecilere kadar geniş bir yelpazede yer alan işletmelerin
                    daha verimli, ekonomik ve sürdürülebilir bir ticaret deneyimi
                    yaşamasını sağlamaktır. Yüksek teknoloji ve kullanıcı dostu
                    çözümlerle, yerel ve global pazarlarda işletmelerin rekabet gücünü
                    artırmayı hedefliyoruz.
                </p>
            </div>
            <div className="vision-boxs">
                <div className="box-content">
                    <div className="image">
                        <img src="./images/vision-icon/vision.png" alt="" />
                    </div>
                    <div className="text">
                        <h3>Vizyon</h3>
                        <p> 
                            Türkiye’nin ve dünyanın önde gelen toptan ticaret
                            platformu olmak.
                        </p>
                    </div>
                </div>
                <div className="box-content">
                    <div className="image">
                        <img src="./images/vision-icon/vision-2.png" alt="" />
                    </div>
                    <div className="text">
                        <h3>Amaç</h3>
                        <p>
                            Türkiye’de toptan ticaret süreçlerini çağdaşlaştırarak, yerel
                            ve uluslararası pazarlarda rekabet gücünü artırmak.
                        </p>
                    </div>
                </div>
                <div className="box-content">
                    <div className="image">
                        <img src="./images/vision-icon/vision-3.png" alt="" />
                    </div>
                    <div className="text">
                        <h3>Misyon</h3>
                        <p>
                            Üreticiden nihai tüketiciye kadar olan tedarik zincirini
                            dijitalleştirerek daha verimli, ekonomik ve sürdürülebilir bir ticaret
                            ortamı sağlamak.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;