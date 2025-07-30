function sub() {
  const Ip = localstorage.getItem("IP")
  let Iprocess = Ip;
  console.log(Iprocess);
  for (let i = 0; i < Ip.length; i+=2) {
    Iprocess[i+1] = Ip[i];
    Iprocess[i]= Ip[i+1];
  }
  console.log(Iprocess);
}
