import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Market.module.css";

const MOCK_COINS = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "64,231.50",
    change: "+1.24%",
    marketCap: "1.2T",
    volume: "35.2B",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "3,452.12",
    change: "-0.45%",
    marketCap: "415.2B",
    volume: "12.1B",
  },
  {
    id: 3,
    name: "Solana",
    symbol: "SOL",
    price: "145.82",
    change: "+5.67%",
    marketCap: "65.4B",
    volume: "4.2B",
  },
  {
    id: 4,
    name: "Cardano",
    symbol: "ADA",
    price: "0.45",
    change: "+2.11%",
    marketCap: "16.2B",
    volume: "1.1B",
  },
  {
    id: 5,
    name: "Polkadot",
    symbol: "DOT",
    price: "7.23",
    change: "-1.23%",
    marketCap: "10.4B",
    volume: "0.8B",
  },
  {
    id: 6,
    name: "Chainlink",
    symbol: "LINK",
    price: "18.45",
    change: "+3.45%",
    marketCap: "10.8B",
    volume: "0.9B",
  },
  {
    id: 7,
    name: "Polygon",
    symbol: "MATIC",
    price: "0.72",
    change: "+0.12%",
    marketCap: "6.7B",
    volume: "0.5B",
  },
  {
    id: 8,
    name: "Avalanche",
    symbol: "AVAX",
    price: "38.12",
    change: "-2.34%",
    marketCap: "14.3B",
    volume: "1.2B",
  },
];

export default function MarketPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className={styles.main}>
        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.title}>Market Overview</h1>
            <p className={styles.subtitle}>
              Real-time updates on your favorite cryptocurrencies.
            </p>
          </header>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.label}>Global Market Cap</span>
              <span className={styles.value}>$2.45T</span>
              <span className={styles.trendUp}>+2.3% in 24h</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.label}>24h Trading Volume</span>
              <span className={styles.value}>$84.2B</span>
              <span className={styles.trendDown}>-5.1% in 24h</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.label}>BTC Dominance</span>
              <span className={styles.value}>52.1%</span>
              <span className={styles.trendUp}>+0.4% in 24h</span>
            </div>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>24h Change</th>
                  <th>Market Cap</th>
                  <th>Volume (24h)</th>
                  <th>Trade</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_COINS.map((coin) => (
                  <tr key={coin.id}>
                    <td>{coin.id}</td>
                    <td>
                      <div className={styles.coinInfo}>
                        <div className={styles.coinIcon}>{coin.symbol[0]}</div>
                        <div>
                          <div className={styles.coinName}>{coin.name}</div>
                          <div className={styles.coinSymbol}>{coin.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.price}>${coin.price}</td>
                    <td
                      className={
                        coin.change.startsWith("+")
                          ? styles.changeUp
                          : styles.changeDown
                      }
                    >
                      {coin.change}
                    </td>
                    <td>${coin.marketCap}</td>
                    <td>${coin.volume}</td>
                    <td>
                      <button className={styles.tradeBtn}>Trade</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
