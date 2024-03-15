function add_text() {
    let zaText = document.getElementById('textboxInput').value.trim();
    if (zaText !== "") {
        var parentDiv = document.querySelector(".List");
        var newdiv = document.createElement("div");
        var textSpan = document.createElement('span')
        var textNode = document.createTextNode(zaText);
        textSpan.appendChild(textNode)
        textSpan.style.marginTop = '5px';
        var tick = document.createElement("button");
        tick.innerHTML = "✓";
        tick.id = 'tick';
        tick.style.backgroundColor = 'lightgreen';
        tick.style.color = 'white'
        tick.style.height = '30px'
        tick.style.width = '30px'
        tick.style.marginRight = '10px'
        tick.style.marginLeft = '10px'
        tick.style.borderRadius = '50%'
        tick.onclick = function() {
            textNode.parentElement.style.textDecoration = 'line-through';
        }
        var cross = document.createElement('button');
        cross.innerHTML = 'X'
        cross.id = 'cross'
        cross.style.backgroundColor = 'red';
        cross.style.color = 'white'
        cross.style.height = '30px'
        cross.style.width = '30px'
        cross.style.borderRadius = '50%'
        cross.onclick = function() {
            newdiv.remove();
        }
        newdiv.appendChild(textSpan);
        newdiv.appendChild(tick);
        newdiv.appendChild(cross);
        parentDiv.appendChild(newdiv);
        document.querySelector('.textbox').reset();
    } 
}
document.getElementById("additem").addEventListener('click',add_text);
document.querySelector(".textbox").addEventListener("submit",function(event) {
    event.preventDefault();
    add_text();
});


