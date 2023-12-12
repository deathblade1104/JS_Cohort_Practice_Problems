
const callbackFunc = (resolve,i) =>{
  console.log(i);
  resolve();
}

const helper = (i) =>{
  return new Promise((resolve,reject) => {
    setTimeout(()=>callbackFunc(resolve,i),1000);

    if(i>30)
    reject();
  });
}

const Couter = async()=>{
  for(let i=1;i<=30;i++){
    await helper(i);
  }
}

Couter();