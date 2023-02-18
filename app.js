
// function getData(url) { ///Task1
//     let result = fetch(url);
//     result.then(response => {
//         if (response.ok) {
//             return response.json();
            
//         }
//     })
// // .then(data => console.log(data.filter( title => title.title[0] === 'a')));
//     }
// getData('https://jsonplaceholder.typicode.com/todos');

// async function getData(url) { ///Task2
//     try {
//         let result = await fetch(url);
//         if (result.ok) {
//             let response = await result.json();
//             const arrA = response.filter(title => title.title[0] === 'a');
//             console.log(arrA);
//             const arrAB = response.filter(title => title.title[0] + title.title[1] === 'ab');
//             console.log(arrAB);
//             }
        
//          else {}
//     } catch (e) {
//         console.log(e.message);
//     }
// }

// getData('https://jsonplaceholder.typicode.com/todos');

// let div = document.getElementById('.user-a');///Task3
// // let blockA = document.createElement('ul');
// const blockA = document.querySelector('.user-a')

// div.innerHTML = blockA;
// div.before(blockA);

// const userAB = document.querySelector('.user-ab');
// function getData(url) {
//     let result = fetch(url);
//     result.then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//     })
    
//         .then(data => {
//             console.log(data.filter(title => title.title[0] === 'a'))
//                 .forEach(a => blockA.innerHTML += JSON.stringify(a)),
//                 console.log(data.filter(title => title.title[0] + title.title[1] === 'ab'))
//                     .forEach(ab => blockAB.innerHTML += JSON.stringify(ab))
//             const blockA = document.querySelector('.user-a');
            
//         });
   
// }
// getData('https://jsonplaceholder.typicode.com/todos');
 

// async function getData(url) { ///Task 3
//     try {
//         let result = await fetch(url);
//         if (result.ok) {
//             let response = await result.json();
//             const arrA = response.filter(title => title.title[0] === 'a');
//             const arrAB = response.filter(title => title.title[0] + title.title[1] === 'ab');
//             const blockA = document.querySelector('.user-a');
//             const blockAB = document.querySelector('.user-ab');
//             arrA.forEach( e => {
//                 let p = document.createElement('p');
//                 p.innerHTML = JSON.stringify(e);
//                 blockA.append(p);

//             });
//             arrAB.forEach(e => {
//                 let p = document.createElement('p');
//                 p.innerHTML = JSON.stringify(e);
//                 blockAB.append(p);

//             });
//         } else {}
//     } catch (e) {
//         console.log(e.message);
//     }
// }

// getData('https://jsonplaceholder.typicode.com/todos');



// let btn = document.querySelector('.add-a'); //Task 4
// let btn2 = document.querySelector('.add-b');
// let btn3 = document.querySelector('.add-all');
// async function getData(url) { 
//     try {
//         let result = await fetch(url);
//         if (result.ok) {
//             let response = await result.json();
//             const arrA = response.filter(title => title.title[0] === 'a');
//             const arrAB = response.filter(title => title.title[0] + title.title[1] === 'ab');
//             const blockA = document.querySelector('.user-a');
//             const blockAB = document.querySelector('.user-ab');
//             arrA.forEach( e => {
//                 let p = document.createElement('p');
//                 p.innerHTML = JSON.stringify(e);
//                 blockA.append(p);

//             });
//             arrAB.forEach(e => {
//                 let p = document.createElement('p');
//                 p.innerHTML = JSON.stringify(e);
//                 blockAB.append(p);

//             });
//         } else { }
//     } catch (e) {
//         console.log(e.message);
//     }
    
// }
// btn.addEventListener('click', blockA);
// btn2.addEventListener('click', blockAB);
// btn3.addEventListener('click', ()=> { blockA + blockAB});

// getData('https://jsonplaceholder.typicode.com/todos');
