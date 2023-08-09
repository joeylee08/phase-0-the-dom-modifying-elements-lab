let main = document.querySelector("main");
main.remove();

let newHeader = document.createElement("h1");
newHeader.textContent = "RICKY BOBBY is the champion";
newHeader.id = "victory";
document.body.append(newHeader);
