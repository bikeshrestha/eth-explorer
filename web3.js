// Generated by LiveScript 1.5.0
(function(){
  var rpcendpoint, Web3, web3;
  rpcendpoint = require('./app/config.json');
  Web3 = require('web3');
  web3 = new Web3();
  //loop through all the rpcenpint available at config.json file and connect to first available
  for (var key in rpcendpoint){
      web3.setProvider(new web3.providers.HttpProvider(rpcendpoint[key]));
      if(web3.isConnected()){
          console.log("connected to :", rpcendpoint[key]);
        break;
      }
  }
  module.exports = web3;
}).call(this);
