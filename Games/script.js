let turn = "X";
let info = document.getElementsByClassName("info")[0]

const changeturn = () => {
    let a = Math.floor(Math.random() * 2);
    console.log(a)
    if (a == 1) {
        return ("X");
    }
    if (a == 0) {
        return ("O");
    }

};

const checkwin = () => {
    let board = document.getElementsByClassName("h1");
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < wins.length; i++) {
        const [a, b, c] = wins[i];

        if (board[a].textContent && board[a].textContent === board[b].textContent && board[a].textContent === board[c].textContent) {
            return board[a].textContent;
        }
    }

    return null;
};
let gameactive = "true"
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let elem = element.querySelector(".h1");
    element.addEventListener("click", () => {
        if (elem.innerText === "" && gameactive == "true") {
            elem.innerText = turn;
            turn = changeturn();
            if (checkwin() == "X") {
                info.innerText = "X is The Winner"
                gameactive = "false"
            }
            if (checkwin() == "O") {
                info.innerText = "O is The Winner"
                gameactive = "false"
            }
        }
    });
});
let form = document.getElementById("myform");
form.addEventListener("click", () => {
    location.reload()
})