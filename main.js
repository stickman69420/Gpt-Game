function sub() {
  const Ip = (localStorage.getItem("IP")).replaceAll(".","")
  let Iprocess = "";
  console.log(Ip);
  for (let i = 0; i < Ip.length-1; i+=2) {
    Iprocess += 9-(Ip[i+1])
    Iprocess += Math.floor(Math.random()*10)
    Iprocess += Ip[i]
  }
  console.log(Iprocess);
}
