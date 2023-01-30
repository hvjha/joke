const btnEl = document.getElementById('btn')
const jokeEl = document.getElementById('joke')

const apikey = "zhnBZyiTs2+l911q+Mw8hg==8EvhjbfTlG8i9jOj";

const options = {
    method: "GET",
    headers:{
        "X-Api-key":apikey,
    }
};
 const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getjoke(){

try {
    jokeEl.innerText = "updating...";
    btnEl.disabled = true;
    btnEl.innerText="loading..."
    const response = await fetch(apiURL,options);
    const data=await response.json();
    btnEl.disabled = false;
    btnEl.innerText="Tell me a joke"
    // console.log(data[0].joke);
    jokeEl.innerText=data[0].joke; 
} catch (error) {
    jokeEl.innerText="An error occured try, after sometimes";
    btnEl.disabled = false;
    btnEl.innerText="Tell me a joke"
    console.log("error occured")
}

   
}

btnEl.addEventListener("click",getjoke);