let moves = ["up", "left", "right", "down"]

let enemyImg = document.querySelector(".enemy-img")
let enemyHP = 3;
let streak = 0;
let x = -1;

function move(moveNum){
    let yourMove = moves[moveNum]
    let x = [Math.floor(Math.random() * moves.length)]
    while (moves[x] == null){
        x = [Math.floor(Math.random() * moves.length)]
    }
    let enemyMove = moves[x]
    let luck = Math.random()
    if (luck <= 0.7){
        enemyMove = yourMove
    }
    console.log(luck)
    enemyImg.src = `./assests/point-${enemyMove}.png`
    
    if (yourMove == enemyMove){
        streak += 1;
        console.log("streak: "+streak)
        console.log(yourMove)
        moves[moveNum] = null
        console.log(moves)
        if (streak == 4){
            if (enemyHP > 0){
                enemyHP -= 1;
                console.log(enemyHP)
                for (let i = 0; i <= enemyHP; i++){
                    document.getElementById(`heart${enemyHP+1}`).classList.add("grayscale")
                }
                moves = ["up", "left", "right", "down"]
                streak = 0
            }
        }
    }
    else{
        streak = 0; 
        moves = ["up", "left", "right", "down"]
        console.log("streak: "+streak)
        console.log(yourMove)
        console.log(moves)
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'w'){
        move(0)
    }
    if (event.key == 'a'){
        move(1)
    }
    if (event.key == 'd'){
        move(2)
    }
    if (event.key == 's'){
        move(3)
    }
})
