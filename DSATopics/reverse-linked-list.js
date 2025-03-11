class Node{
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}


/** 
   Pre    curr   next
    |      |      |      |
    O -->  O -->  O -->  O

*/

// using the 3-pointer approach
function reverseLinkedList(head){

    if( !head || !head.next ) return head

    let pre = null
    let curr = head

    while( curr ){
        let next = curr.next
        
        curr.next = pre
        pre = curr

        curr = next
    }

    return pre
}


const head = new Node(1)
head.next = new Node(3)
head.next.next = new Node(2)
head.next.next.next = new Node(4)

console.log( head )

let revlist = reverseLinkedList( head )
console.log( revlist )