import { ListNode } from "./dataStructure/index";

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let slow = head,fast = head;
  while(k){
    fast = fast?.next as ListNode;
    k--;
  }
  while(fast){
    slow = slow?.next as ListNode;
    fast = fast?.next as ListNode;
  }
  return slow;
};