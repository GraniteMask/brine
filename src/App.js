import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [bids, setBids] = useState([0]);
  const ws = new WebSocket("wss://api-betatestnet.brine.finance/liveorderbookwire")


  useEffect(()=>{
    ws.onmessage = function (event) {
      console.log(event)
      if(event.data){
        const json = JSON.parse(event.data);
        try {
          if ((json.event = "data")) {
            setBids(json.btcusdc);
          }
        } catch (err) {
          console.log(err);
        }
      }
     
    };
  }, [])

  console.log(bids)
  
  return (
    <div className="App">
      <div className="sidenav">
        <div style={{cursor: 'pointer'}}>
          <i className="fa fa-arrow-left" aria-hidden="true" style={{color: "white", marginTop: "5rem"}}></i>
        </div>
      </div>
      <div className='main'>
        <div className="headnav">
          <div className="grid-item">
            <div className='bitcoin'>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png"  className="image"/>
              </div>
              <div className="bitcoin-container">
                <h6 className="bitcoin-text">Bitcoin</h6>
                <h6 className="bitcoin-conversion">BTC/USDC</h6>
              </div>
              <div className="bitcoin-chevron"> 
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="grid-item">
              <div className="last-price">
                <h6 className="last-price-text">Last price</h6>
                <h6 className="last-price-text-value">23,935.32 USDC</h6>
              </div>
          </div>
          <div className="grid-item">
              <div className="last-price">
                <h6 className="last-price-text">24h change</h6>
                <h6 className="last-price-text-value"><i class="fa fa-arrow-up" aria-hidden="true"></i>+0.00%</h6>
              </div>
          </div>
          <div className="grid-item">
              <div className="last-price">
                <h6 className="last-price-text">24h low</h6>
                <h6 className="low-text-value">23,935.32 USDC</h6>
              </div>
          </div>
          <div className="grid-item">
              <div className="last-price">
                <h6 className="last-price-text">24h high</h6>
                <h6 className="low-text-value">23,935.32 USDC</h6>
              </div>
          </div>
          <div className="grid-item">

          </div>
        </div>
        <div className="main-area">
          <div className="chart-orders">
            <div className="charts">

            </div>
            <div className="orders">
              <div className="orders-nav">
                <h6 className="orders-nav-button">All Orders</h6>
                <h6 className="orders-nav-button">Pending Orders</h6>
                <h6 className="orders-nav-button">Trades</h6>
              </div>
              <table className="table">
                <tr >
                  <th className='table-heading'>MARKET</th>
                  <th className='table-heading'>TIME</th>
                  <th className='table-heading'>PRICE</th>
                  <th className='table-heading'>AMOUNT</th>
                  <th className='table-heading'>SIDE</th>
                  <th className='table-heading'>STATUS</th>
                </tr>
                <tr>
                  <td className='table-entries'>BTCUSDC</td>
                  <td className='table-entries'>Sat, Jul 30, 2022 10:24 AM</td>
                  <td className='table-entries'>43,935.32</td>
                  <td className='table-entries'>0.0351</td>
                  <td style={{color: "red"}} className='table-entries'>SELL</td>
                  <td style={{color: "red"}} className='table-entries'>CANCEL</td>
                </tr>
                <tr>
                  <td className='table-entries'>BTCUSDC</td>
                  <td className='table-entries'>Sat, Jul 30, 2022 10:24 AM</td>
                  <td className='table-entries'>43,935.32</td>
                  <td className='table-entries'>0.0351</td>
                  <td style={{color: "rgb(3, 150, 3)"}} className='table-entries'>BUY</td>
                  <td style={{color: "rgb(3, 150, 3)"}} className='table-entries'>DONE</td>
                </tr>
                <tr>
                  <td className='table-entries'>BTCUSDC</td>
                  <td className='table-entries'>Sat, Jul 30, 2022 10:24 AM</td>
                  <td className='table-entries'>43,935.32</td>
                  <td className='table-entries'>0.0351</td>
                  <td style={{color: "rgb(3, 150, 3)"}} className='table-entries'>BUY</td>
                  <td style={{color: "red"}}>CANCEL</td>
                </tr>
                <tr>
                  <td className='table-entries'>BTCUSDC</td>
                  <td className='table-entries'>Sat, Jul 30, 2022 10:24 AM</td>
                  <td className='table-entries'>43,935.32</td>
                  <td className='table-entries'>0.0351</td>
                  <td style={{color: "rgb(3, 150, 3)"}} className='table-entries'>BUY</td>
                  <td style={{color: "red"}} className='table-entries'>CANCEL</td>
                </tr>
                <tr>
                  <td className='table-entries'>BTCUSDC</td>
                  <td className='table-entries'>Sat, Jul 30, 2022 10:24 AM</td>
                  <td className='table-entries'>43,935.32</td>
                  <td className='table-entries'>0.0351</td>
                  <td style={{color: "rgb(3, 150, 3)"}} className='table-entries'>BUY</td>
                  <td style={{color: "red"}} className='table-entries'>CANCEL</td>
                </tr>
                <tr>
                  <td className='table-entries'>BTCUSDC</td>
                  <td className='table-entries'>Sat, Jul 30, 2022 10:24 AM</td>
                  <td className='table-entries'>43,935.32</td>
                  <td className='table-entries'>0.0351</td>
                  <td style={{color: "rgb(3, 150, 3)"}} className='table-entries'>BUY</td>
                  <td style={{color: "red"}} className='table-entries'>CANCEL</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="order-book">
            <div className='orders1'>
              <div className="orders-nav">
                <h6 className="orders-nav-button">ORDER BOOK</h6>
                <h6 className="orders-nav-button">TRADES</h6>
              </div>
              <table className="table">
                <tr >
                  <th className='table-heading'>AMOUNT (BTC)</th>
                  <th className='table-heading'>PRICE (USDC)</th>
                </tr>
                {
                  bids.asks != undefined ? bids.asks.map((each) =>(
                    <tr>
                      <td className='table-entries' style={{color: "red"}}>{each[1]}</td>
                      <td className='table-entries' style={{color: "green"}}>{each[0]}</td>
                    </tr>
                  )) :
                  <p style={{color: "white"}}>"Loading..."</p>
                }
              </table>
            </div>
            <div>

            

            <div className='orders2'>
              <table className="table">
                <tr >
                  <th className='table-heading'>AMOUNT (BTC)</th>
                  <th className='table-heading'>PRICE (USDC)</th>
                </tr>
                {
                  bids.bids != undefined ? bids.bids.map((each) =>(
                    <tr>
                      <td className='table-entries' style={{color: "red"}}>{each[1]}</td>
                      <td className='table-entries' style={{color: "green"}}>{each[0]}</td>
                    </tr>
                  ))
                  :
                  <p style={{color: "white"}}>"Loading..."</p>
                }
              </table>

            </div>
              
            </div>
          </div>
          <div className="buy-sell">
              <div className="orders-nav">
                <h6 className="orders-nav-button" style={{color: "green"}}>Buy</h6>
                <h6 className="orders-nav-button" style={{color: "red"}}>Sell</h6>
              </div>
              <div>
                <div className="last-price background" style={{marginRight: "5rem", marginLeft: "5rem", marginTop: "5rem", padding: "2rem", borderRadius: "10px"}}>
                  <h6 className="last-price-text" >AVAILABLE BALANCE</h6>
                  <h6 className="last-price-text-value" style={{color: "white"}}>0.1407 BTC</h6>
                  <h6 className="last-price-text-value" style={{color: "white"}}>1234.54 USDC</h6>
                </div>
                <div className="last-price background2" style={{marginTop: "2rem", marginRight: "5rem", marginLeft: "5rem", padding: "2rem", borderRadius: "10px", }}>
                  <h6 className="last-price-text" >MARKET</h6>
                </div>
                <div className="last-price background2" style={{marginTop: "2rem", marginRight: "5rem", marginLeft: "5rem", padding: "2rem", borderRadius: "10px", }}>
                  <h6 className="last-price-text" >Amount in USDC</h6>
                  <h6 className="last-price-text">0</h6>
                </div>
                <div className="last-price background3" style={{marginTop: "2rem", marginRight: "5rem", marginLeft: "5rem", padding: "1rem", borderRadius: "10px", }}>
                  <h6 className="last-price-text" style={{color: "white", textAlign: "center"}}>Buy</h6>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
