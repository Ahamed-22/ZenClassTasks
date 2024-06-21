
function oddOrEven(num = 0){
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) resolve ('Even Number')
        else reject('odd Number')    
    })
}

async function run(num = 0){
    let result = 0 ;
    try{
      result = await oddOrEven(num);
      console.log(result);
    }catch(error){
        console.log(error);
    }
}

run(10);
run(3);
run(18);
run(103274);
run(1034);