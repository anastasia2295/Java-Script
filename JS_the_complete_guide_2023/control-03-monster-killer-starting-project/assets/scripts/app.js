const ATTACK_VALUE = 10
const STRONG_ATTACK_VALUE = 17
const MONSTER_ATTACK_VALUE = 14
const HEAL_VALUE = 20

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currenPlayerHealth = chosenMaxLife
let hasBonusLife = true

adjustHealthBars(chosenMaxLife)

function endRound(){
    const initialPlayerLife = currenPlayerHealth
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currenPlayerHealth -= playerDamage

    if (currenPlayerHealth <=0 && hasBonusLife){
        hasBonusLife = false
        currenPlayerHealth = initialPlayerLife
        setPlayerHealth(initialPlayerLife)
        alert("You bonus life")  
    }

    if (currentMonsterHealth <=0 && currenPlayerHealth>0){
        alert("You win!")
    }else if(currenPlayerHealth <=0 && currentMonsterHealth>0){
        alert("You lost")
    }else if(currenPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert("You have a draw")
}
}

function attackMonster (mode){
    let maxDamage
    if(mode === "ATTACK"){
        maxDamage = ATTACK_VALUE
    }else if (mode === "STRONG_ATTACK"){
        maxDamage = STRONG_ATTACK_VALUE
    }
        const demage = dealMonsterDamage(maxDamage)
        currentMonsterHealth -= demage
        endRound()
        }
    

function attackHandler(){
    attackMonster("ATTACK")
}

function strongAttackHandler () {
    attackMonster("STRONG_ATTACK")
}

function healPlayerHandler(){
    let healValue 
    if(currenPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert ("You can not heal to more")
        healValue = chosenMaxLife - currenPlayerHealth
    }else {
        healValue = HEAL_VALUE
    }
    increasePlayerHealth(HEAL_VALUE)
currenPlayerHealth += HEAL_VALUE
endRound()
}

attackBtn.addEventListener("click", attackHandler)
strongAttackBtn.addEventListener("click", strongAttackHandler)
healBtn.addEventListener("click", healPlayerHandler)