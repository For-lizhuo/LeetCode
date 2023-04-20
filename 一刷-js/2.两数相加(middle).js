// 给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// 示例 1：
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
// 示例 2：
// 输入：l1 = [0], l2 = [0]
// 输出：[0]
// 示例 3：
// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]
//  
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/add-two-numbers
/**
 * Definition for singly-linked list.
 * function Listl3(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {Listl3} l1
 * @param {Listl3} l2
 * @return {Listl3}
 */
//使用两个指针
//时间复杂度O(l1.length+l2.length)
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0,null);
    Node = l3;
    let temp = 0;
    while(l1!=null&&l2!=null){
        if(l1.val+l2.val+temp<10){
            Node.val = l1.val+l2.val+temp;
            temp=0;
        }
        else{
            Node.val = l1.val+l2.val+temp-10;
            temp=1;
        }
        l1 = l1.next;
        l2 = l2.next;
        if(!(l1==null&&l2==null)){
            Node.next = new ListNode(0,null);
            Node = Node.next;
        }    
    }
    while(l1!=null){
        if(l1.val+temp<10){
            Node.val = l1.val+temp;
            temp=0;
        }
        else{
            Node.val = l1.val+temp-10;
            temp=1;
        }
        l1 = l1.next;
        if(l1!=null){
            Node.next = new ListNode(0,null);
            Node = Node.next;
        }
    }
    while(l2!=null){
        if(l2.val+temp<10){
            Node.val = l2.val+temp;
            temp=0;
        }
        else{
            Node.val = l2.val+temp-10;
            temp=1;
        }
        l2 = l2.next;
        if(l2!=null){
            Node.next = new ListNode(0,null);
            Node = Node.next;
            continue;
        }
    }
    if(temp==1){
        Node.next = new ListNode(1,null);
        Node = Node.next;
    }
    return l3;
};