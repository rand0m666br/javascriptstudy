let vo = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];
let ho = new InputEvent("input",{bubbles: true});
for (let i=0; i<=10;i++){
    vo.innerHTML = "teste";
    vo.dispatchEvent(ho);
    document.getElementsByClassName("_4sWnG")[0].click();
}