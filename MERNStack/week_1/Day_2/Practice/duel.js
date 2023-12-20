class Card{
    constructor(name,cost){
        this.name=name
        this.cost=cost
    }
}
class Unit extends Card{
    constructor(name,cost,power,resilience){
        super(name,cost);
        this.power=power
        this.resilience=resilience;
    }
    attack(target) {
        console.log(`${this.name} attacks ${target.name} for ${this.power} damage.`);
        target.resilience -= this.power;
    }
}
const mohsen = new Unit("Mohsen",15,10,20)
const mehrez = new Unit("Mohrezen",15,10,20)

mohsen.attack(mehrez)

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost)
        this.text=text
        this.stat=stat
        this.magnitude=magnitude
    }
    play( target ) {
        if( target instanceof Unit ) {
            console.log(this.text)
        } else {
            throw new Error( "Target must be a unit!" );}
        }
}
const redBeltCard= new Unit("Red Belt Ninja",3,3,4);
console.log(redBeltCard)

const blackBeltCard= new Unit("Black Belt Ninja",4,5,4);
console.log(blackBeltCard)

const hardAlgorithm= new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience","+3");
console.log(hardAlgorithm)

const unhandled= new Effect("Unhandled Promise Rejection",1,"Reduce target's resilience by 3","resilience","-2");
console.log(unhandled)

const pairProgramming= new Effect("Pair Programming",3,"increase target's power by 2","power","+2");
console.log(pairProgramming)

unhandled.play(redBeltCard)
pairProgramming.play(redBeltCard);
redBeltCard.attack(blackBeltCard)