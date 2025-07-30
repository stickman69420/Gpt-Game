function sub() {
  const Ip = localStorage.getItem("IP")
  let Iprocess = Ip;
  console.log(Iprocess);
  for (let i = 0; i < Ip.length; i+=2) {
    Iprocess[i+1] = Ip[i];
    console.log(Iprocess);
    Iprocess[i]= Ip[i+1];
    console.log(Iprocess);
  }
  console.log(Iprocess);
}
