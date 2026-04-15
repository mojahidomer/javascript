
class Account {
    #balance =0;
    static count = 0;
   
    constructor(){
        Account.count+=1;
    }
    addBalance(num){
        this.#balance = this.#balance + num
    }
    getBalance(){
        return this.#balance;
    }
}



console.log(Account.count);

let mojahid = new Account()

let mojahid2 = new Account()

let mojahid3 = new Account()
let mojahid4 = new Account()
let mojahid5 = new Account()

mojahid5.addBalance(100)
mojahid5.addBalance(100)
mojahid5.addBalance(100)


console.log(Account.count,mojahid2.getBalance(),mojahid5.getBalance());
// consoe


