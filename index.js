const puppeteer = require("puppeteer");
let cpage;

const browseropenpromise = puppeteer.launch({headless : false,
slowMo : true,
});

    browseropenpromise.then(function (browser){
        //currently opened tabs
        let pagePromise = browser.pages();
        return pagePromise
    }).then(function (browserpages){
        cpage = browserpages[0];
        let gotopromise = cpage.goto("https://www.google.com");
        return gotopromise;
    }).then(function(){
        let elementwaitpromise = cpage.waitForSelector("#APjFqb", { visible : true});
        return elementwaitpromise;
    }).then(function(){
        console.log("Reached google homepage");
        let keyboardpromise = cpage.type("#APjFqb", "Github Prakhar Sharma JSS");
        return keyboardpromise;
    }).then(function(){
        let enterpromise = cpage.keyboard.press("Enter");
        return enterpromise;
    }).then(function(){
        let elewaitpromise = cpage.waitForSelector("#rso > div:nth-child(2) > div > div > div > div:nth-child(1) > div > div > div.Z26q7c.UK95Uc.jGGQ5e > div > a > h3", { visible : true});
        return elewaitpromise;
    }).then(function(){
        let clickpromise = cpage.click("#rso > div:nth-child(2) > div > div > div > div:nth-child(1) > div > div > div.Z26q7c.UK95Uc.jGGQ5e > div > a > h3");
        return clickpromise;
    }).catch(function(err) {
        console.log(err);
    })

