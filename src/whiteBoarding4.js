//Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

//Input: [1,2,4], [1,3,4]
//Output: [1,1,2,3,4,4]

function sortedTwoArrays (arr1, arr2){ 
  let combinedArr = arr1.concat(arr2); 
  return combinedArr.sort();
}

sortedTwoArrays([1,2,4], [1,3,4]); 



// **
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(l1, l2) {
    
// };

