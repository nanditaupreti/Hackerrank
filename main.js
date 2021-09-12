let puppeteer=require("puppeteer");
const answers=require("./codes");
// creates headless browser
let browserStartPromise = puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized","--disable notification"]
});
let page,browser;

(async function fn(){
    try{
        let browserObj=await browserStartPromise;
        browser=browserObj;
        console.log("browser opened");
        page=await browserObj.newPage();
        await page.goto("https://www.google.com/");
        await page.type("input[title='Search']","hackerrank");
        await page.keyboard.press('Enter',{delay:100});
        await waitAndClick(".LC20lb.DKV0Md",page);
        await waitAndClick("#menu-item-2887",page);
        await waitAndClick("a[href='https://www.hackerrank.com/login?h_r=login&h_l=body_middle_left_button']",page);
        await page.waitForSelector("#input-1",{visible:true});
        await page.type("#input-1","neyone5359@mom2kid.com",{delay:100});
        await page.keyboard.press('Enter',{delay:500});
        await page.waitForSelector("#input-2",{visible:true});
        await page.type("#input-2","12345678910",{delay:100});
        await page.keyboard.press('Enter',{delay:100});
        await waitAndClick(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled",page);
        await waitAndClick('a[data-attr1="warmup"]',page);
        await page.waitForSelector(".content--list_body");
        let questionArr= await page.$$(".content--list_body");
        // for(let i=0;i<questionArr.length;i++){
            await questionSolver(answers.array[0],page,questionArr[0]);
        // }
           
    }
    catch(err){
       console.log("err"+err);
    }
})()


 function waitAndClick(selector,cpage){
    (async function fn(){
    try{
    await cpage.waitForSelector(selector,{visible:true});
    await cpage.click(selector,{delay:100})
    }
    catch(err){
        console.log("err"+err);
    }
    
})()
 }
// function waitAndClick(selector,cPage){
//     return new Promise(function(resolve,reject){
//         waitForModalPromise.then(function(){
//             return clickModal;
//         }).then(function(){
//             resolve();
//         }).catch(function(err){
//             reject(err);
//         })

        
//     })
// }
function questionSolver(answer,page,Allquestion){
    (async function fn(){
   try{

       await  Allquestion.click();
       await  page.waitFor(3000)
       await  page.click(".checkbox-wrap",page);
       await page.type(".custom-input.theme-old.size-medium",answer);
       await page.keyboard.down('Control');
       await page.keyboard.press('A');
       await page.keyboard.press('x');;
       await page.keyboard.up('Control');
       await page.click(".hr-monaco-editor-parent",page);
       await page.keyboard.down('Control');
       await page.keyboard.press('A');
       await page.keyboard.press('v');
       await page.keyboard.up('Control');
       await page.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled",page);
       await page.waitForSelector(".ui-card.submission-congratulations.ui-layer-2",page);
       await page.click('a[data-attr1="Warm-up Challenges"]');
       await page.waitFor(3000);
    }
    catch(err){
        console.log("err"+err);
    }

})()
}
// function questionSolver(answer,page,Allquestion){
//     return new Promise(function(resolve,reject){ 
        
//             clickQuestion.then (function(){
//             return wait;
//         }).then (function(){
//              return waitForElementPromise
//     }).then (function(){
//             return waitForElementPromise;
//            }).then(function (){ 
//              return ctrl;
//             }).then(function (){ 
//             return ctrl;
//            }).then(function (){ 
//             return ctrl;
//            }).then(function (){ 
//                 return ctrl;
//            })
//         .then(function (){ 
//             console.log("wait again");
//             return waitForElementPromise;
//         }).then(function (){ 
        
//          return ctrl;
//         }).then(function (){ 
           
//             return ctrl;
//            }).then(function (){ 
           
//             return ctrl;
//            }).then(function (){ 
           
//             return ctrl;
//         }).then(function (){ 
//             console.log("wait again");
            
//             return waitForElementPromise;
//         }).then(function (){ 
//             console.log("wait again");
            
//             return waitForElementPromise;
//         }).then(function (){ 
//             console.log("wait again");
           
//             return waitForElementPromise;
//         }).then (function(){
           
//             return wait;
//         }).then(function (){
//             resolve();
//         }).catch(function(err){
//             reject(err);
        
//     })
// })
//     }

//handles if any element is not present

// function handleIfNotPresent(selector,cPage){
//    return new Promise(function(resolve,reject){
//        let wPromise=waitAndClick(selector,cPage);
//        waitAndClickPromise.then(function(){
//            resolve();
//        })
//        waitAndClickPromise.catch(function(err){
//            resolve();
//        })
//    })
// }