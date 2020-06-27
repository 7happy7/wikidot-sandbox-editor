var reload = document.querySelector("#reload");
var update = document.querySelector("#update");

var list = document.querySelector("#list");

var word = document.querySelector("#word");
var add = document.querySelector("#new");


reload.onclick = function() {
    _rel();
}
word.oninput = function() {
    if(word.value.length) {
        add.removeAttribute("disabled");
    }else {
        add.setAttribute("disabled", "");
    }
}
add.onclick = function() {
    if(!word.value.length) {
        return;
    }
    var li = document.createElement("li");
    li.setAttribute("class", "new");
    list.appendChild(li);
    var sp = document.createElement("span");
    li.appendChild(sp);
    var bt = document.createElement("button");
    li.appendChild(bt);
    sp.innerText = word.value;
    bt.innerText = "×";
    bt.onclick = function(e) {
        var a = e.target;
        while(a.tagName !== "LI") {
            a = a.parentNode;
        }
        a.setAttribute("class", "del");
    }
    add.setAttribute("disabled", "");
    word.value = "";
}

function _rel() {
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {type: 'get'}, function(item){
            list.innerHTML = "";
            for(var i of item){
                var li = document.createElement("li");
                list.appendChild(li);
                
                var sp = document.createElement("span");
                li.appendChild(sp);
                var bt = document.createElement("button");
                li.appendChild(bt);
                
                sp.innerText = i;
                bt.innerText = "×";
                bt.onclick = function(e) {
                    var a = e.target;
                    while(a.tagName !== "LI") {
                        a = a.parentNode;
                    }
                    a.setAttribute("class", "del");
                }
            }
        });
    });
}
