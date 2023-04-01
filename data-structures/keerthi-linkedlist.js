class keerthinode {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}
class keerthislinkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(data) {
        const knode = new keerthinode(data)
        if (!this.head) {
            this.head = knode;
            this.tail = knode;
        } else {
            this.tail.next= knode;
            this.tail=knode;
        }
        this.length++
    }
    preppend(data){
        const knode = new keerthinode(data)
        if (!this.head) {
            this.head = knode;
            this.tail = knode;
        } else {
            knode.next = this.head;
            this.head = knode;
        }
    }
    remove(data){
        const knode = new keerthinode(data)
        if (!this.head){
            return null;
        }
        let currentnode= this.head;
        let previousode =null;
        while(currentnode){
            if(currentnode.value == data){
                if(!previousode){
                    this.head = this.head.next;
                }
                else{
                    previousode.next=currentnode.next;
                }
            }
            this.length--;
            previousode= currentnode;
            currentnode = currentnode.next;
        }
      return null;  
     }
    toArray(){
        const nodes = [];
        let currentnode = this.head;
        while(currentnode)
        {
            nodes.push(currentnode.value);
            currentnode = currentnode.next
        }
        return nodes;
    }
}

module.exports = keerthislinkedlist;

