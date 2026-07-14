
const offensePlayers=[

"김민준",
"박준호",
"이도윤",
"정우성"

];

let currentPlay="";

let passer="";
let runner="";

function selectPlay(type){

    currentPlay=type;

    let html="<h3>";

    html+=type;

    html+=" 선택</h3>";

    offensePlayers.forEach(player=>{

        html+=`

        <div class="player"

        onclick="playerSelected('${player}')">

        ${player}

        </div>

        `;

    });

    document.getElementById("playArea").innerHTML=html;

}

function playerSelected(player){

    if(currentPlay=="PASS"){

        passer=player;

        selectReceiver();

    }

    if(currentPlay=="RUN"){

        runner=player;

        finishRun();

    }

}

function selectReceiver(){

    let html="<h3>캐처 선택</h3>";

    offensePlayers.forEach(player=>{

        if(player!=passer){

            html+=`

            <div class="player"

            onclick="finishPass('${player}')">

            ${player}

            </div>

            `;

        }

    });

    document.getElementById("playArea").innerHTML=html;

}

function finishPass(receiver){

    addLog(

        `🏈 PASS

        ${passer}

        →

        ${receiver}`

    );

}

function finishRun(){

    addLog(

        `🏃 RUN

        ${runner}`

    );

}

function addLog(text){

    let log=document.getElementById("playLog");

    log.innerHTML=

    "<div class='log'>"

    +text+

    "</div>"

    +log.innerHTML;

    document.getElementById("playArea").innerHTML="";

}