function sub() {
  const Ip = localStorage.getItem("IP")
  let Iprocess = "";
  console.log(Iprocess);
  for (let i = 0; i < Ip.length; i+=2) {
    Iprocess += Ip[i+1]
    Iprocess += Ip[i]
  }
  console.log(Iprocess);
}
