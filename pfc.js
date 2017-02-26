function choix(choixU) {
    
    var choixIA = Math.floor(Math.random() * 3);
    console.log(choixIA);
    
    if (choixIA == choixU) {
        egalite();
    }else{
        if (choixU == 0 && choixIA == 1) {
            win(0,1);
        }
        
        if (choixU == 1 && choixIA == 2) {
            win(1,2);
        }
        
        if (choixU == 2 && choixIA == 0) {
            win(2,0);
        }
    }
    
}

function win(choixU, choixIA) {
    alert('GG');
}