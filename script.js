



// const addItem = async(item)=>{
//     await randomDelay();
//     let div = document.createElement('div');
//     div.innerHTML = item;
//     document.body.append(div);
//      }
    

// const randomDelay=()=>{
//     return new Promise((resolve, reject)=>{
//         timeout = 1 + 6 *    Math.random();
//         // a+b-a*math.random(0-1)
//         setTimeout(() => {
//             resolve()
//         }, timeout*1000);
//     })
// }
// // function randomColor(){
// //     let red =  Math.random()*256;
// //     let green =  Math.random()*256;
// //     let blue =  Math.random()*256;
// //     return `rgb(${red},${green},${blue})`;
// // }

// async function main()
// {

//  let t =  setInterval(() => {
//         let last = document.body.getElementsByTagName('div');
//         last = last[last.length-1]
//         if(last.innerHTML.endsWith('...'))
//         {
// last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
//         }
//         else
//         {
//             last.innerHTML = last.innerHTML + ".";
//         }
//         // last.style.color =  randomColor()
        
//     }, 1000);

// let text = ["Initializing Hacking now reading your data.....",
// "Reading Your Files......",
// "Password Files Detected.....",
// "Sending all Password and Personal Files to Server..." ,"Cleaning up...."
// ]

// for(const item of text)
//  {
// await addItem(item)
//  }
//  await randomDelay()
//  clearInterval(t);
// }

// main()

const addItem=async(item)=>{
     await randomDelay();
    let div = document.createElement('div');
    div.innerHTML = item;
    document.body.append(div)

}

const randomDelay=()=>{
    return new Promise((resolve,reject)=>{
        timeout = 1+6 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeout*1000);
    })
}

async function main()
{
 let t = setInterval(() => {
    let last = document.getElementsByTagName('div');
    last = last[last.length-1];
    if(last.innerHTML.endsWith('...'))
    {
        last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
    }
    else
    {
        last.innerHTML=last.innerHTML + '.'
    }

 }, 1000);

let text = [ "Initializing Hacking now reading your data...",
"Reading Your Files...",
"Password Files Detected...",
"Sending all Password and Personal Files to Server..." ,
"Cleaning up..."]

for (const item of text) {
 await   addItem(item)
}
await randomDelay();
}

main()