import { ListNode } from "./dataStructure";

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  let preHead = new ListNode(0,head);
  let p = preHead;
  while(p.next?.val!==val){
    if(p.next)p = p.next;
    else return null;
  }
  p.next = p.next.next;
  return preHead.next;
};