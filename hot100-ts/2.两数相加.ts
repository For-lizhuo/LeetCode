export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let pointer:ListNode = new ListNode();
  let res = pointer;
  let carry:number = 0;
  while(l1&&l2){
    pointer.next = new ListNode();
    pointer = <ListNode>pointer.next;
    pointer.val = (l1.val+l2.val+carry)%10;
    carry = (l1.val+l2.val+carry)>=10?1:0;
    l1 = l1.next;
    l2 = l2.next;
  }
  while(l1){
    pointer.next = new ListNode();
    pointer = <ListNode>pointer.next;
    pointer.val = (l1.val+carry)%10;
    carry = (l1.val+carry)>=10?1:0;
    l1 = l1.next;
  }
  while(l2){
    pointer.next = new ListNode();
    pointer = <ListNode>pointer.next;
    pointer.val = (l2.val+carry)%10;
    carry = (l2.val+carry)>=10?1:0;
    l2 = l2.next;
  }
  if(carry){
    pointer.next = new ListNode();
    pointer = <ListNode>pointer.next;
    pointer.val = carry;
  }
  return res.next;
};