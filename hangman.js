window.onload = function() {
    let alphabet=['a','b','c','d','e','f','g',
    'h','i','j','k','l','m','n','o','p',
    'q','r','s','t','u','v','w','x','y','z'
    ];
    let al_leng=alphabet.length;
    let word_div;
    let jbBtn;
    let jbBtnText;
    create_alphabetbtn();
    select_type();

    function create_alphabetbtn(){
        for(let i=0;i<al_leng;i++){
            jbBtn = document.createElement('button');
            jbBtnText = document.createTextNode(alphabet[i]);
            jbBtn.appendChild(jbBtnText);
            document.getElementById("al_btn").append(jbBtn);
        }
    }

    function start(){
        document.getElementById("game_ready").style.display="none";
        document.getElementById("game_play").style.display="flex";
    }

    function select_type(){
        let ready=document.getElementsByClassName('game_type')[0];
        ready.childNodes[1].onclick=function(){
            question(1);
            start();
        }
        ready.childNodes[3].onclick=function(){
            question(2);
            start();
        }
        ready.childNodes[5].onclick=function(){
            question(3);
            start();
        }
        ready.childNodes[7].onclick=function(){
            question(4);
            start();
        }
    }

    function question(array){
        switch(array){
            case 1:
                let arr1=[
                    "apple","watermelon","grape"
                    ,"banana","orange","peach"
                    ,"melon","blueberry","grapefruit"
                    ,"prune","lemon","strawberry"
                    ,"mango","kiwi","cherry","lime"];
                    play(arr1);
                break;
            case 2:
                let arr2=[
                    "cat","dog","lion","tiger"
                    ,"squirrel","ostrich","kangaroo"
                    ,"koala","rhinoceros","hippo"
                    ,"crocodile","monkey","bear"
                    ,"pig","fox","elephant"
                    ];
                play(arr2);
                break;
            case 3:
                let arr3=[
                    "korea","china","russia","suisse"
                    ,"india","maldives","vietnam"
                    ,"singapore","greece","norway"
                    ,"netherlands","france","italy"
                    ,"canada","sweden","tunisia"
                    ];
                play(arr3);
                break;
            case 4:
                let arr4=[
                    "bee","ant","butterfly","dragonfly"
                    ,"cicada","beetles","ladybugs"
                    ,"lucanidae","cricket","larva"
                    ,"snail","spider","orthoptera"
                    ,"fly","worm","flea"
                    ];
                play(arr4);
                break;
        }
    }
    function play(array){
        let arr_leng=array.length;
        let randnum=Math.floor(Math.random()*arr_leng);
        let word=array[randnum];
        let word_leng=word.length;
        let btn=document.getElementsByTagName('button');
        let wrong=0;
        let correct=0;

        for(let i=0;i<word_leng;i++){
            create_word();
        }
        for(let i=0;i<al_leng;i++){
            playing(i);
        }
        function playing(i){
            btn[i].onclick=function(){
                for(let j=0;j<word_leng;j++){
                    if(alphabet[i]==word[j]){
                        document.getElementsByClassName('word')[j].innerHTML=word[j];
                        correct++;
                        if(correct==word_leng){
                            for(let i=0;i<al_leng;i++){
                                btn_lock(i);
                            }
                            fc("correct answer");
                        }
                    }
                }
                if(word.indexOf(alphabet[i])==-1){
                    wrong++;
                    if(wrong>=10){
                        for(let i=0;i<al_leng;i++){
                            btn_lock(i);
                        }
                        fc("wrong answer");
                    }
                    document.getElementsByTagName("img")[1].src="images/"+wrong+".png";
                }
            }
            
            btn[i].addEventListener("click", function () {
                btn_lock(i);
            });
        }
        document.getElementById("reset").onclick=function(){
            re();
        }
        document.getElementById("replay").onclick=function(){
            re();
            replay();
        }






        /* function */
        function replay(){
            document.getElementById("game_ready").style.display="flex";
            document.getElementById("game_play").style.display="none";
            var cell = document.getElementById("word_layout");
            while ( cell.hasChildNodes() ) {
                cell.removeChild( cell.firstChild ); 
            }
        }
        function create_word(){
            word_div=document.createElement('div');
            word_div.classList.add("word");
            document.getElementById("word_layout").appendChild(word_div);
        }
        function fc(fc){
            document.getElementsByClassName('wr_co')[0].innerHTML=fc;
        }
        function btn_lock(i){
            btn[i].style.backgroundColor = 'gray';
            btn[i].disabled = true;
        }
        function re(){
            wrong=0;
            correct=0;
            for(let i=0;i<al_leng;i++){
                btn[i].style.backgroundColor = '';
                btn[i].disabled = false;
            }
            document.getElementsByTagName("img")[1].src="images/"+wrong+".png";
            document.getElementsByClassName('wr_co')[0].innerHTML="";
            for(let j=0;j<word_leng;j++){
                document.getElementsByClassName('word')[j].innerHTML="";
            }
        }
    }
}