const nameSpan = document.querySelector('#myName')

function getName(){
    let info = prompt("isminizi giriniz")
    let name = info.toUpperCase()
    if(info != null){
    nameSpan.innerHTML = `${name}`
    }
}

function getTime(){
    let date = new Date()
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay();

    if (day == 1) {
        day = "Pazartesi";
      } else if (day == 2) {
        day = "Salı";
      } else if (day == 3) {
        day = "Çarşamba";
      } else if (day == 4) {
        day = "Perşembe";
      } else if (day == 5) {
        day = "Cuma";
      } else if (day == 6) {
        day = "Cumartesi";
      } else if (day == 7) {
        day = "Pazar";
      }
    
      hour = hour < 10 ? "0" + hour : hour;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      second = second < 10 ? "0" + second : second;

      let time = hour + ":" + minutes + ":" + second + " " + day;
      document.getElementById("myClock").innerText = time;
      

      setTimeout(getTime, 1000);

}
getName()
getTime()

