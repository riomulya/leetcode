// Definisi linked list node
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Fungsi untuk menggandakan nilai dari linked list node
function duplicateValue(node) {
  node.val *= 2;
}

// Membuat linked list
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

// Memasukkan linked list ke dalam fungsi
duplicateValue(node1);

// Melihat hasil perubahan nilai linked list di luar fungsi
console.log(node1.val); // Output: 2 (nilai node1 berubah)
console.log(node1.next.val); // Output: 2 (nilai node2 tidak berubah)
console.log(node1.next.next.val); // Output: 3 (nilai node3 tidak berubah)
