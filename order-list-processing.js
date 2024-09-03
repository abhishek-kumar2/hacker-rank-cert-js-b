/**
Takes 3 Arguments: an order list OrderList; a Number OrderId; & a String State that is either "Processing" or "Delivered". OrderList is an array of order objects.

Updates The order List Depending on the state and returns the Updated List.

-> If the state is "Processing", It updates the object in the list Having id as OrderId, to have the state "Processing".

-> If the state is "Delivered", It Deletes the object from the list having the id of orderId.

If there is no order with the given orderId then the Function returns the list orderList unchanged.

 */

'use strict';

function processOrderList(orderList, orderId, state) {
    // Write code here
    return state === 'Processing' ?
      orderList.map(item => ({
        ...item,
        state: item.id === orderId ? 'Processing' : item.state
      })) :
      orderList.filter(item => item.id !== orderId);
}