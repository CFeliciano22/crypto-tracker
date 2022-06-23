import './coinHeader.scss'

const coinHeader = () => {
    return (
       
             <div className='coin-header__cointainer'>
                <div className='coin-header__row'>
                    <div className='coin'>
                        <p className='coin-name'>Coin</p>
                        <p>Symbol</p>
                        
                    </div>
                    <div className='coin-data'>
                        <p className='coin-price'>Price</p>
                        <p className='coin-volume'>24h Volume</p>
                        <p className='coin-percent'>24h Change</p>
                        <p className='coin-marketcap'>Market Cap</p>
                    </div>
                </div>
            </div>
     
        )
}

export default coinHeader