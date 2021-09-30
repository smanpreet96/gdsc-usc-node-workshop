async function getData(url) {
    let response = await fetch(url, {method: 'GET', mode: 'cors'});
    if(response.ok) {
        data = response.json();
        console.log(data.message);
        return data;
    }
}

function displayDog() {
    let dogURL = 'http://127.0.0.1:3000/api/dog';
    getData(dogURL).then(data => {
        let dogImg = document.getElementById('dogImg');
        dogImg.src = data.message;

        // Programmatically generate images
        // let dogDiv = document.getElementById("dogDiv");
        // let dogImg = document.createElement('img');
        // dogImg.src = data.message;
        // dogDiv.appendChild(dogImg);
    });
}