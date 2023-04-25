import { ListNode } from "./dataStructure";
function sortList(head: ListNode | null): ListNode | null {
  let arr = new Array<number>();
  let p = head;
  while(p){
    arr.push(p.val);
    p = p.next;
  }
  arr = arr.sort((a,b)=>a-b);
  for(let i=0,p=head;i<arr.length;i++,p=p!.next){
    p!.val = arr[i];
  }
  return head;
};