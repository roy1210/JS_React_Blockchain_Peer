import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/blockchainLogo.png';

class App extends Component {
  state = { walletInfo: {} };

  //  To connect to API (express server)
  //  Run without wrote in render methods
  // fetch: implemented as a promise
  componentDidMount() {
    fetch(`${document.location.origin}/api/wallet-info`).then(response =>
      response.json().then(json => this.setState({ walletInfo: json }))
    );
  }

  render() {
    const { address, balance } = this.state.walletInfo;

    return (
      <div className='App'>
        <img className='logo' src={logo} />
        <br />
        <div>Welcome to the Blockchain</div>
        <br />
        <div>
          <Link to='/blocks'>Blocks</Link>
        </div>
        <div>
          <Link to='/conduct-transaction'>Conduct a Transaction</Link>
        </div>
        <div>
          <Link to='/transaction-pool'>Transaction-pool</Link>
        </div>

        <div className='WalletInfo'>
          <h4>Wallet address :</h4>
          <h5>{address}</h5>

          <h4>Wallet balance :</h4>
          <h5>{balance}</h5>
        </div>
      </div>
    );
  }
}

export default App;
