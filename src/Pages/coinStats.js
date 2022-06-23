const coinStats = ({}) => {
    return (
        <div className="coinstats-container">
            <div className="coinstats-name__container">
                <h1 className="coinstats-title"></h1>
                <p className="coinstats-symbol"></p>
            </div>
            <div className="coinstats-data__container">
                <p className="coinstats-price"></p>
                <p className="coinstats-change"></p>
                <div className="coinstats-data__info">
                    <p className="coinstats-marketcap"></p>
                    <p className="coinstats-volume"></p>
                    <p className="coinstats-circulating"></p>
                    <p className="coinstats-total"></p>
                </div>
            </div>
                <div className="coinstats-price-stats__container">
                    <h2 className="coinstats-price-stats__title">Price Stats</h2>
                    <p className="coinstats-price"></p>
                    <p className="coinstats-change-high-low"></p>
                    <p className="coinstats-volume"></p>
                    <p className="coinstats-marketcap-rank"></p>
                    <p className="coinstats-marketcap"></p>
                    <p className="coinstats-alltimehigh"></p>
                    <p className="coinstats-alltimelow"></p>
                </div>
        
        </div>
    )
}

export default coinStats;