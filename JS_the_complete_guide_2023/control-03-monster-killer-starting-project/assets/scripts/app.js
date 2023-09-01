const ATTACK_VALUE = 10
const MONSTER_ATTACK_VALUE = 14

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currenPlayerHealth = chosenMaxLife

adjustHealthBars(chosenMaxLife)

function attackHandler(){
    const demage = dealMonsterDamage(ATTACK_VALUE)
    currentMonsterHealth -= demage
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currenPlayerHealth -= playerDamage
    if (currentMonsterHealth <=0 && currenPlayerHealth>0){
        alert("You win!")
    }else if(currenPlayerHealth <=0 && currentMonsterHealth>0){
        alert("You lost")
    }else if(currenPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert("You have a draw")
    }

}

attackBtn.addEventListener("click", attackHandler)