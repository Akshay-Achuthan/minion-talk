var btn=document.querySelector("#btnclick")

var txtinput=document.querySelector("#txtarea")

var outputdiv=document.querySelector("#output")

var serverurl="https://api.funtranslations.com/translate/minion.json"

function getserverurl(input)
{
    return serverurl + "?" + "text=" + input
}

function errorHandler(error)
{
    console.log("error occured",error)
    alert("oops!! something went wrong")
}

function main()
{
    var inputtxt=txtinput.value;
    fetch(getserverurl(inputtxt))
    .then(response => response.json())
    .then(json => {
        var translatedtxt=json.contents.translated;
        outputdiv.innerText=translatedtxt;
    })
.catch(errorHandler)
};

btn.addEventListener("click",main)