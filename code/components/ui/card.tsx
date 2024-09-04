import React from 'react';
import '@/app/template/card.css';

const Card = () => {
    return (
        <div className="card-container">
            {/* BitCoin */}
            <div className="card">
                <div className="card-header">
                    <img src="https://eor7ztmv4pb.exactdn.com/wp-content/uploads/2022/12/Screenshot-2022-12-13-125348.jpg?strip=all&lossy=1&ssl=1" alt="Strategy Icon" className="card-icon" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Strategy Icon" className="title-icon" />
                        <div>
                            <h3>ETH-BTC price surge</h3>
                            <p className="card-description">ETH and BTC slow moving momentum strategy</p>
                        </div>
                    </div>
                    <div className="card-stats">
                        <div className="stat">
                            <span className="stat-label">Annual return</span>
                            <span className="stat-value">+72.8%</span>
                        </div>
                        <div className="stat">
                            <span className="stat-label">TVL</span>
                            <span className="stat-value">$227.5K</span>
                        </div>
                        <div className="stat">
                            <span className="stat-label">Age</span>
                            <span className="stat-value">21 days</span>
                        </div>
                        <div className="stat">
                            <span className="stat-label">Sharpe</span>
                            <span className="stat-value">1.73</span>
                        </div>
                    </div>
                    <button className="view-strategy-btn">View strategy</button>
                </div>
            </div>
            {/* CrowdStrike */}
            <div className="card">
                <div className="card-header">
                    <img src="https://i.insider.com/65fda53f895d822030334972?width=700" alt="Strategy Icon" className="card-icon" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <img src="https://raw.githubusercontent.com/CrowdStrike/falconpy/main/docs/asset/csfalcon.png" alt="Strategy Icon" className="title-icon" />
                        <div>
                            <h3>CrowdStrike</h3>
                            <p className="card-description">ETH and BTC slow moving momentum strategy</p>
                        </div>
                    </div>
                    <div className="card-stats">
                        <div className="stat">
                            <span className="stat-label">Annual return</span>
                            <span className="stat-value">+72.8%</span>
                        </div>
                        <div className="stat">
                            <span className="stat-label">TVL</span>
                            <span className="stat-value">$227.5K</span>
                        </div>
                        <div className="stat">
                            <span className="stat-label">Age</span>
                            <span className="stat-value">21 days</span>
                        </div>
                        <div className="stat">
                            <span className="stat-label">Sharpe</span>
                            <span className="stat-value">1.73</span>
                        </div>
                    </div>
                    <button className="view-strategy-btn">View strategy</button>
                </div>
            </div>
            {/* Doge Coin */}
            <div className="card">
                <div className="card-header">
                    <img src="data:image/jpeg;base64,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" alt="Strategy Icon" className="card-icon" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <img src="https://static.vecteezy.com/system/resources/previews/024/239/834/non_2x/dogecoin-doge-crypto-free-png.png" alt="Strategy Icon" className="title-icon" />
                        <div>
                            <h3>Doge Coin</h3>
                            <p className="card-description">ETH and BTC slow moving momentum strategy</p>
                        </div>
                    </div>
                    <div className="card-stats">
                        <div className="stat">
                            <span className="stat-label">Annual return</span>
                            <span className="stat-value">+72.8%</span>
                        </div>
                        <div className="stat">
                            <span className="stat-label">TVL</span>
                            <span className="stat-value">$227.5K</span>
                        </div>
                        <div className="stat">
                            <span className="stat-label">Age</span>
                            <span className="stat-value">21 days</span>
                        </div>
                        <div className="stat">
                            <span className="stat-label">Sharpe</span>
                            <span className="stat-value">1.73</span>
                        </div>
                    </div>
                    <button className="view-strategy-btn">View strategy</button>
                </div>
            </div>
            {/* Repeat the Card component for other cards */}
        </div>
    );
};

export { Card };
