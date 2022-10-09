// Constant
const pawPatrolRangerImg = document.querySelector("#dog-cookie-img")

const dogCookieCounterNumber = document.querySelector("#dog-cookie-total")
const btns = document.querySelectorAll('.btn')
const addOneExtraClickBtn = document.querySelector("#add-one-extra-click")
const costOfAddByOneBtn = document.querySelector("#add-by-one-start-price")
const howManyAddByOneAddOns = document.querySelector("#how-many-add-by-one")

const addOneExtraGrandmaBtn = document.querySelector("#dog-bone-auto-clicker")
const costOfGrandmaBtn = document.querySelector("#dog-bone-start-price")
const howManyDogBones = document.querySelector("#how-many-dog-bones")

const autoClickerBtn = document.querySelector("#auto-clicker")
const priceOfAutoClickerBtn = document.querySelector("#auto-click-start-price")
const howManyAutoClickAddOns = document.querySelector("#auto-clickers")

const newColorsToggleBtn = document.querySelector("#day-night-toggle-btn")

const nextGoal = document.querySelector("#goal")

// Event Listeners
pawPatrolRangerImg.addEventListener("click", addOneToTotalDogCookieAmount)

addOneExtraClickBtn.addEventListener("click",buyAddOneExtraClick)
addOneExtraGrandmaBtn.addEventListener("click",buyDogBone)
autoClickerBtn.addEventListener("click",buyAutoClick)
newColorsToggleBtn.addEventListener("click",newColorsToggleButton)

// Variables
let totalDogCookiesNumber = 0;
let startPriceAddOneExtraClickBtn = 27;
let startPriceAutoClickerBtn = 15;

let startPriceDogBoneBtn = 150;
let addOneExtraClickStart = 0
let autoClickersStart = 0;
let grandmaStart = 0;

// Increment cookie counter by one
function addOneToTotalDogCookieAmount()
{
    let totalDogCookiesNumber = dogCookieCounterNumber.innerHTML
    totalDogCookiesNumber++
    dogCookieCounterNumber.innerHTML = totalDogCookiesNumber;

    displayDogBoneBtn()
    displayAddByTwoBtn()
    displayAutoClickerBtn()
    displayRubbleImg()
    displayRockyImg()
    displayMarshallImg ()

}

//Display

// Display multiply by two Button, when cookie counter number is 27 or more
function displayAddByTwoBtn()
{
    if (dogCookieCounterNumber.innerHTML >= 27)
    {
        addOneExtraClickBtn.classList.add('show')
    }
    else
    {
        addOneExtraClickBtn.classList.remove('show')
    }
}

// Display auto clicker Button, when cookie counter number is 15 or more
function displayAutoClickerBtn()
{

    if(dogCookieCounterNumber.innerText >= startPriceAutoClickerBtn)
    {
        autoClickerBtn.classList.add('show')
    }
    else
    {
        autoClickerBtn.classList.remove('show')
    }
}

// Display grandma Button, when cookie counter number is 150 or more
function displayDogBoneBtn()
{
    if (dogCookieCounterNumber.innerHTML >= 150)
    {
        addOneExtraGrandmaBtn.classList.add('show')
    }
    else
    {
        addOneExtraGrandmaBtn.classList.remove('show')
    }
}

// Buy Buttons
// Pressing the auto clicker button, https://www.youtube.com/watch?v=d-AbDEwpp6g

// Substracting the buttons cost, with the total cookie amount

function buyAddOneExtraClick()
{
    dogCookieCounterNumber.innerText = dogCookieCounterNumber.innerText - startPriceAddOneExtraClickBtn;
    displayAddByTwoBtn()
}

function buyAutoClick()
{

// Det giver ikke mening i mit hoved hvorfor det her ikke virker.
// Fordi der kommer stadig virkelig mange decimaler.

    howManyAutoClickAddOns.innerHTML++;
    generateAutoClick()
    displayAutoClickerBtn()
    return Math.ceil(priceOfAutoClickerBtn.innerHTML *= 1.25);

}

function buyDogBone ()
{
    howManyDogBones.innerHTML++;
    generateDogBone()
    displayDogBoneBtn()
    return Math.ceil(costOfGrandmaBtn.innerHTML *= 1.25)


}

// Auto clicks
// Generating the auto click function with an interval for both auto click button and grandma button
function generateAutoClick ()
{
    dogCookieCounterNumber.innerText = dogCookieCounterNumber.innerText - startPriceAutoClickerBtn;
    setInterval( ()=>
    {
        dogCookieCounterNumber.innerHTML++
    },3000)
}

function generateDogBone ()
{
    dogCookieCounterNumber.innerText = dogCookieCounterNumber.innerText - startPriceDogBoneBtn ;
    setInterval( ()=>
    {
        dogCookieCounterNumber.innerHTML++
        displayDogBoneBtn()
    },500)

}

// Day and Night Toggle Button
function newColorsToggleButton ()
{
    document.body.classList.toggle('night')

    btns.forEach((btn) =>
    {
        btn.classList.toggle('night')
    })
}

// Display new doggos (Rubble, RockyBalboa, )

function displayRubbleImg ()
{
    if (dogCookieCounterNumber.innerHTML >= 250)
    {
        pawPatrolRangerImg.src = "Rubble-58b89ffd3df78c353cd095eb-removebg-preview.png";
        nextGoal.innerText = 730;
    }
}

function displayRockyImg ()
{
    if (dogCookieCounterNumber.innerHTML >= 730)
    {
        pawPatrolRangerImg.src = "e6c626e4393b998205b31ab7751e0361-removebg-preview.png";
        nextGoal.innerText = 1500;
    }
}

function  displayMarshallImg ()
{
    if (dogCookieCounterNumber.innerHTML >= 1500)
    {
        pawPatrolRangerImg.src = "988766d3e55193296da774c450eda136-removebg-preview.png";
        pawPatrolRangerImg.style.width = "15%" ;
        nextGoal.innerText =" Thanks for playing " ;
    }
}