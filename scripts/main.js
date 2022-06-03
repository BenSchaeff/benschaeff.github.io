//change image when clicked
let myImage = document.querySelector('img');

myImage.onclick = function() 
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cass.jpg')
    {
        myImage.setAttribute('src', 'images/cass2.jpg');
    }
    else
    {
        myImage.setAttribute('src', 'images/cass.jpg');
    }
}
//personalized greeting
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName()
{
    let myName = prompt('Please enter your name. ');
    if(!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Learn about Cassiopeia - ' + myName;
    }
}
//if no name is present then prompt user for one
if(!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Learn about Cassiopeia - ' + storedName
}
//
myButton.onclick = function()
{
    setUserName();
}