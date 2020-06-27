var reload = document.querySelector("#reload");
var update = document.querySelector("#update");
var list = document.querySelector("#list");

reload.onclick = function() {
    rel();
}
function rel() {
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
                    a.remove();
                }
            }
        });
    });
}
