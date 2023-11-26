let word = document.querySelector("input")
let syn = document.querySelector(".answer")
let meanings = document.querySelector(".def")
let ex = document.querySelector(".eg")
async function synonyms(){
    syn.innerHTML = ''
    const url = `https://wordsapiv1.p.rapidapi.com/words/${word.value}/synonyms`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '02d93d461emsh7d5cb160636c145p198a05jsnf1f6c07f9284',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = JSON.parse(await response.text());
        console.log(result);
        for (let i = 0; i < result.synonyms.length; i++){
            syn.innerHTML += `<p>${i + 1}. ${result.synonyms[i]}</p>` 
        }
    } catch (error) {
        console.error(error);
    }
}
async function definition(){
    meanings.innerHTML = ''
    const url = `https://wordsapiv1.p.rapidapi.com/words/${word.value}/definitions`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '02d93d461emsh7d5cb160636c145p198a05jsnf1f6c07f9284',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = JSON.parse(await response.text());
        console.log(result);
        for (let i = 0; i < result.definitions.length; i++){
            meanings.innerHTML += `<p>${i + 1}. ${result.definitions[i].definition}</p>` 
        }
    } catch (error) {
        console.error(error);
    }
}
async function example(){
    ex.innerHTML = ''
    const url = `https://wordsapiv1.p.rapidapi.com/words/${word.value}/examples`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '02d93d461emsh7d5cb160636c145p198a05jsnf1f6c07f9284',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = JSON.parse(await response.text());
        console.log(result);
        for (let i = 0; i < result.examples.length; i++){
            ex.innerHTML += `<p>${i + 1}. ${result.examples[i]}</p>` 
        }
    } catch (error) {
        console.error(error);
    }
}
function sendData(){
    synonyms()
    definition()
    example()
}