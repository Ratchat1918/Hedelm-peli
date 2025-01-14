const panos=document.getElementById("panos_input");
let nykyinen_saldo=50;
const h1_saldo = document.getElementById("h1_saldo");
h1_saldo.textContent = `RAHAA:${nykyinen_saldo}€`;
let ensimainen_pyöräytys=true;
let symboli_lista=[];
//1="7" 2="omena" 3="meloni" 4="päärymä" 5="kirsikka"

function spinWheel(){
    let nykyinen_panos2=panos.value;
    if(nykyinen_panos2>nykyinen_saldo && ensimainen_pyöräytys===false){
        document.getElementById("huomio").textContent="Panos ei saa olla isompi kuin saldo, paina 'Restart alottamaan uudelleen'";
    }else{
        symboli_lista.length=0;
    function generateSlots(){
        for(let x=0;x<5;x++){
            let number = Math.floor((Math.random() * 5) + 1);
            symboli_lista.push(number);
        }
        console.log(symboli_lista);
    }
    function calculateWin(){
        let nykyinen_panos=panos.value;
        let numero1_maara=0;
        let numero2_maara=0;
        let numero3_maara=0;
        let numero4_maara=0;
        let numero5_maara=0;
        for(let x=0; x<symboli_lista.length;x++){
            if(symboli_lista[x]===1){
                document.getElementById(`slot${x}`).innerHTML=`<img src=kuvat/seitseman.png>`;
                numero1_maara+=1;
            }
            else if(symboli_lista[x]===2){
                document.getElementById(`slot${x}`).innerHTML=`<img src=kuvat/omena.png>`;
                numero2_maara+=1;
            }
            else if(symboli_lista[x]===3){
                document.getElementById(`slot${x}`).innerHTML=`<img src=kuvat/meloni.png>`;
                numero3_maara+=1;
            }
            else if(symboli_lista[x]===4){
                document.getElementById(`slot${x}`).innerHTML=`<img src=kuvat/päärymää.png>`;
                numero4_maara+=1;
            }
            else if(symboli_lista[x]===5){
                document.getElementById(`slot${x}`).innerHTML=`<img src=kuvat/karsikka.png>`;
                numero5_maara+=1;
            }
        }
        if(numero1_maara===4){
            nykyinen_panos=nykyinen_panos*10;
            document.getElementById("voitto").textContent = `Voitto:${nykyinen_panos}€`;
            return nykyinen_panos
        }
        else if(numero1_maara===3){
            nykyinen_panos=nykyinen_panos*5;
            document.getElementById("voitto").textContent = `Voitto:${nykyinen_panos}€`;
            return nykyinen_panos
        }
        if(numero2_maara===4){
            nykyinen_panos=nykyinen_panos*6;
            document.getElementById("voitto").textContent = `Voitto:${nykyinen_panos}€`;
            return nykyinen_panos
        }
        if(numero3_maara===3){
            nykyinen_panos=nykyinen_panos*5;
            document.getElementById("voitto").textContent = `Voitto:${nykyinen_panos}€`;
            return nykyinen_panos
        }
        if(numero4_maara===4){
            nykyinen_panos=nykyinen_panos*4;
            document.getElementById("voitto").textContent = `Voitto:${nykyinen_panos}€`;
            return nykyinen_panos
        }
        if(numero5_maara===4){
            nykyinen_panos=nykyinen_panos*3;
            document.getElementById("voitto").textContent = `Voitto:${nykyinen_panos}€`;
            return nykyinen_panos
        }
        else{
            nykyinen_saldo-=nykyinen_panos;
            document.getElementById("h1_saldo").textContent=`RAHAA:${nykyinen_saldo}€`;
            return nykyinen_panos
        }
    }
    ensimainen_pyöräytys=false;
    generateSlots()
    calculateWin()
    }
    
}
function stopKierros(){
    symboli_lista.length=0;
    nykyinen_saldo+=nykyinen_panos;
    for(let x=0;x<5;x++){
        document.getElementById(`slot${x}`).innerHTML="";
    }
}

function restartPeli(){
    window.location.reload();
}



document.getElementById("restartBtn").addEventListener("click",restartPeli);
document.getElementById("stopBtn").addEventListener("click",stopKierros);
document.getElementById("playBtn").addEventListener("click",spinWheel);
