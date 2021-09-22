// Üstünü çizme

var myNodeList = document.getElementsByTagName("LI");
var i;
for (i =0; i <myNodeList.length ; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// Geçerli liste öğesini gizlemek için bir kapat düğmesine tıklayın

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Bir liste öğesine tıklandığında "işaretli" bir sembol ekleyin

var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false);

//"Ekle" düğmesine tıkladığınızda yeni bir liste öğesi oluşturun

function newElement(){
    
    var list = document.querySelector('ul');
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;


  
    if(inputValue === "" || inputValue === null){

        $(document).ready(function(){
            $('.error').toast('show');
        });

        inputValue.pop();
    
    }
    else{ 
         $(document).ready(function(){
                $('.success').toast('show');
            });
          
        document.getElementById("list").value = "";
        /*
        li.innerText = document.getElementById("myInput").value;
        list.appendChild(li);
        li.appendChild(t);*/
    }

    var t = document.createTextNode(inputValue);    
    li.innerText = document.getElementById("myInput").value;
    list.appendChild(li);
    li.appendChild(t);

    
    
    document.getElementById('myInput').value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i = 0; i< close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}


