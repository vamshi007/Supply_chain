pragma solidity ^0.5.1;
pragma experimental ABIEncoderV2;
contract Product{
    mapping(string => Details) product;
    
    struct Details{
        string Product_id;
        string product_name;
        string _id;
        string seller_name;
        string dispatch;
        string shipping;
        string out_for_delivery;
        string delivered;
    }
    constructor() public{
        product['BCT0570'].Product_id="116";
        product['BCT0570'].product_name='cotton seeds';
        product['BCT0570']._id="1232";
        product['BCT0570'].seller_name='vamshi';
        product['BCT0570'].dispatch="yes";
        product['BCT0570'].shipping="yes";
        product['BCT0570'].out_for_delivery="no";
        product['BCT0570'].delivered="no";
    }
    function fillProduct(string memory _Product_id,string memory _product_name,string memory _id,string memory _seller_name,string memory _dispatch,string memory _shipping,string memory _out_for_delivery,string memory _delivered)public{
     product[_id]=Details(_Product_id,_product_name,_id,_seller_name,_dispatch,_shipping,_out_for_delivery,_delivered);        
   }
    function tracking(string memory _id) public view returns(Details memory){
        return (product[_id]);
    }
    function Updateproduct(string memory _id,string memory _dispatch,string memory _shipping,string memory _out_for_delivery,string memory _delivered) public {
     product[_id].dispatch=_dispatch;
     product[_id].shipping=_shipping;
     product[_id].out_for_delivery=_out_for_delivery;
     product[_id].delivered=_delivered;
    }
    
}
