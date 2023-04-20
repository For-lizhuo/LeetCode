import { ListNode } from "./dataStructure/index";
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if(!headA||!headB) return null;
  let p:ListNode|null = headA,q:ListNode|null = headB;
  while(p!==q){
    p = p?p.next:headB;
    q = q?q.next:headA;
  }
  return p;
};