let display = document.getElementById('display');
let buttons = Array.from( document.getElementsByClassName('button'));
//console.log(buttons);
buttons.map(btn => {
    btn.addEventListener('click', (e) => {
        /*
        console.log("clicked");
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
        */

        switch(e.target.innerText){
            case 'AC':
                if(display.innerHTML){
                display.innerHTML = '';
                }
                break;
                /*
            case '':
                display.innerHTML = 
                break;
                */
            case 'DEL':
                if(display.innerHTML){
                display.innerHTML = display.innerHTML.slice(0,-1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});                                                                                     