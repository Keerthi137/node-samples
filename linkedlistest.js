const keerthislinkedlist = require("./data-structures/keerthi-linkedlist");
const alist = new keerthislinkedlist();
alist.append("abc");
alist.append("def");
alist.append("ghi");
console.log(alist.toArray());

const plist = new keerthislinkedlist();
plist.preppend("abc");
plist.preppend("def");
plist.preppend("ghi");
console.log(plist.toArray());

const rlist = new keerthislinkedlist();
rlist.append("123");
rlist.append("456");
rlist.append("789");
rlist.remove("789");
console.log(rlist.toArray());

const customList = new keerthislinkedlist();
customList.append("b");
customList.append("c");
customList.append("z");
customList.append("d");
customList.preppend("a")
customList.remove("z");
console.log(customList.toArray());

