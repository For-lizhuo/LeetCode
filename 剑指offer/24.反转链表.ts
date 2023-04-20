import { ListNode } from "./dataStructure/index";
function reverseList(head: ListNode | null): ListNode | null {
  let preHead = new ListNode();
  let p = head;
  while(p){
    p = head?.next as ListNode;
    head!.next = preHead.next;
    preHead.next = head;
    head = p;
  }
  return preHead?.next;
};