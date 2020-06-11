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
  //contract.methods.getStudent().call().then(function(id){
  //  $("#percent").html(id[0]);
  //})
});
$("#but_get").click(() => {
  web3.eth.getAccounts().then((accounts) => {
    var acc = accounts[0];
    let product_id = $("#1").val();
    let product_Name = $("#2").val();
    let farmar_id = $("#3").val();
    let seller_name = $("#4").val();
    let dispatch = $("#5").val();
    let ship = $("#6").val();
    let ofd = $("#7").val();
    let delivered = $("#8").val();
    return contract.methods
      .fillProduct(
        product_id,
        product_Name,
        farmar_id,
        seller_name,
        dispatch,
        ship,
        ofd,
        delivered
      )
      .send({ from: acc });
  });
});
$("#but_home").click(() => {
  $("input:text").val("");
  window.location.href = "index.html";
});
