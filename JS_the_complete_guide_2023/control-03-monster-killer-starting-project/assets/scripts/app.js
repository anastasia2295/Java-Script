const ATTACK_VALUE = 10
const STRONG_ATTACK_VALUE = 17
const MONSTER_ATTACK_VALUE = 14
const HEAL_VALUE = 20

const MODE_ATTACK = "ATTACK"
const MODE_STRONG_ATTACK = "STRONG_ATTACK"
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK"
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK"
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK"
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL"
const LOG_EVENT_GAME_OVER = "GAME_OVER"

const enteredValue = prompt("Максимальное значение жизни", "100")
let chosenMaxLife = parseInt(enteredValue)
let battleLog = []

if (isNaN(chosenMaxLife) || chosenMaxLife <=0) {
    chosenMaxLife = 100
}

let currentMonsterHealth = chosenMaxLife
let currenPlayerHealth = chosenMaxLife
let hasBonusLife = true

adjustHealthBars(chosenMaxLife)

function writeToLog(ev, val, monsterHealth, playerHealth){
let logEntry 
if(ev === LOG_EVENT_PLAYER_ATTACK){
    logEntry = {
        event: ev,
        value: val,
        target: "MONSTER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    }
} else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
    logEntry = {
        event: ev,
        value: val,
        target: "MONSTER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
}
 } else if (ev === LOG_EVENT_MONSTER_ATTACK){
    logEntry = {
        event: ev,
        value: val,
        target: "PLAYER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
 } 
} else if(ev === LOG_EVENT_PLAYER_HEAL){
    logEntry = {
        event: ev,
        value: val,
        target: "PLAYER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
}
} else if( ev === LOG_EVENT_GAME_OVER){
    logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
}
}
battleLog.push(logEntry)
}


function reset(){
   currentMonsterHealth = chosenMaxLife
   currenPlayerHealth = chosenMaxLife
   resetGame(chosenMaxLife)
}

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
if (currentMonsterHealth <= 0 || currenPlayerHealth <= 0){
    reset()
}
}

function attackMonster (mode){
    let maxDamage
    if(mode === MODE_ATTACK){
        maxDamage = ATTACK_VALUE
    }else if (mode === MODE_STRONG_ATTACK){
        maxDamage = STRONG_ATTACK_VALUE
    }
        const demage = dealMonsterDamage(maxDamage)
        currentMonsterHealth -= demage
        endRound()
        }
    

function attackHandler(){
    attackMonster(MODE_ATTACK)
}

function strongAttackHandler () {
    attackMonster(MODE_STRONG_ATTACK)
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