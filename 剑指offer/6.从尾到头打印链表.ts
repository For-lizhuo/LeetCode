import { ListNode } from "./dataStructure/index";

function reversePrint(head: ListNode | null): number[] {
  let p = new ListNode(),q = head,length:number = 0;
  while(q){
    q = <ListNode>(head?.next);
    (<any>head).next = p.next;
    p.next = head;
    head = q;
    length++;
  }
  let res:Array<number> = new Array(length);
  for(let i=0;i<length;i++){
    res[i] = p.next?.val as number;
    p = p.next as ListNode;
  }
  return res;
};