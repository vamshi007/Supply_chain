var contract;
var address;
var abi;
$(document).ready(() => {
  web3 = new Web3(web3.currentProvider);
  address = "0xac2ffbea67203a432c8cb7dd3d3b0d34a754f501";
  abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_Product_id",
        "type": "string"
      },
      {
        "name": "_product_name",
        "type": "string"
      },
      {
        "name": "_id",
        "type": "string"
      },
      {
        "name": "_seller_name",
        "type": "string"
      },
      {
        "name": "_dispatch",
        "type": "string"
      },
      {
        "name": "_shipping",
        "type": "string"
      },
      {
        "name": "_out_for_delivery",
        "type": "string"
      },
      {
        "name": "_delivered",
        "type": "string"
      }
    ],
    "name": "fillProduct",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "string"
      },
      {
        "name": "_dispatch",
        "type": "string"
      },
      {
        "name": "_shipping",
        "type": "string"
      },
      {
        "name": "_out_for_delivery",
        "type": "string"
      },
      {
        "name": "_delivered",
        "type": "string"
      }
    ],
    "name": "Updateproduct",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_id",
        "type": "string"
      }
    ],
    "name": "tracking",
    "outputs": [
      {
        "components": [
          {
            "name": "Product_id",
            "type": "string"
          },
          {
            "name": "product_name",
            "type": "string"
          },
          {
            "name": "_id",
            "type": "string"
          },
          {
            "name": "seller_name",
            "type": "string"
          },
          {
            "name": "dispatch",
            "type": "string"
          },
          {
            "name": "shipping",
            "type": "string"
          },
          {
            "name": "out_for_delivery",
            "type": "string"
          },
          {
            "name": "delivered",
            "type": "string"
          }
        ],
        "name": "",
        "type": "tuple"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
  contract = new web3.eth.Contract(abi, address);
  ethereum.enable();
  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var queries = queryString.split("&");
  user = queries[0];
  web3.eth.getAccounts().then((accounts) => {
    var acc = accounts[0];
    return contract.methods
      .tracking(user)
      .call({ from: acc })
      .then((x) => {
        //$("#percent").html(x[0])
        $("#m_2").html(x.dispatch);
        $("#m_3").html(x.shipping);
        $("#m_4").html(x.out_for_delivery);
        $("#m_5").html(x.delivered);
      });
  });
  //contract.methods.getStudent().call().then(function(id){
  //  $("#percent").html(id[0]);
  //})
});
$("#but_home").click(() => {
  window.location.href = "index.html";
});
/*$("#but_get").click(() => {
    web3.eth.getAccounts().then(function(accounts){
        acc = accounts[0];
        //console.log(acc)
        return contract.methods.set("siddhi").send({from:"0xf578F4218ff70197723133dc779ACb0b994B30B2"});
    }).then(function(val){
        console.log(val);
    }).catch(function(val){
        console.log(val);
    })
    console.log(acc);
})*/
