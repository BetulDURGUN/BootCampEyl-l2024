function saatiGoster(){
    const zaman=new Date();
    const divSaat =document.getElementById("saat");
    divSaat.textContent=zaman.toLocaleDateString("tr");
}

//her 1000msde bir bu metodu çalıştırır.
saatiGoster();
setInterval(saatiGoster, 1000);