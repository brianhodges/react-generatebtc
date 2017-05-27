import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var bitcore = require('bitcore-lib');
var QRCode = require('qrcode.react');

var priv_key = new bitcore.PrivateKey();
var wif_priv_key = priv_key.toWIF();
var pub_key = priv_key.toPublicKey();
var address = priv_key.toAddress();

class Address extends React.Component {
  render() {
    return (
      <div className="btc">
        <b>Address (compressed):</b><br/>
        {address.toString()}<br/><br/>
        <QRCode value={address.toString()}/><br/><br/><br/><br/>
        
        <b>Public Key (compressed):</b><br/>
        {pub_key.toString()}<br/><br/><br/><br/>
        
        <b>Private Key:</b><br/>
        {priv_key.toString()}<br/><br/>
        <QRCode value={priv_key.toString()}/><br/><br/>
        <b>Private Key (WIF Compressed):</b><br/>
        {wif_priv_key.toString()}<br/><br/>
        <QRCode value={wif_priv_key.toString()}/><br/>
      </div>
    );
  }
}

ReactDOM.render(
  <Address />, document.getElementById('home')
);

