let inpContent=document.getElementById("country-inp");

// let result=document.getElementById("result");

let searchBtn=document.getElementById("search-btn");

searchBtn.addEventListener("click",()=>{
    let searchCountry=inpContent.value;
    let finalURl=`https://restcountries.com/v3.1/name/${searchCountry}?fullText=true`;
    // console.log(finalURl);
    fetch(finalURl)
    .then((Response)=>{return Response.json()})
    .then((data)=>{
        // console.log(data[0]);
        // console.log(data[0].capital.join(' ')
        // );

        // console.log(data[0].continents[0]);

        // console.log((Object.values(data[0].name))[0]);

        // console.log(data[0].flags.svg);

        // console.log(Object.values(data[0].
        //     languages).toString().split(" ").join(" "));


        // console.log(Object.keys(data[0].currencies
        // )[0]);

        // console.log(data[0].population);

        // console.log(data[0].currencies[Object.keys(data[0].currencies
        // )].name);
        
        result.innerHTML=`
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${Object.values(data[0].name)[0]}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
            <h4>Capital:</h4>
            <span>${data[0].capital.join(' ')}</span>
            </div>
        </div>

        <div class="wrapper">
            <div class="data-wrapper">
            <h4>Continent:</h4>
            <span>${data[0].continents[0]}</span>
            </div>
        </div>

        <div class="wrapper">
            <div class="data-wrapper">
            <h4>Common Language:</h4>
            <span>${Object.values(data[0].
                languages).toString().split(" ").join(" ")}</span>
            </div>
        </div>

        <div class="wrapper">
            <div class="data-wrapper">
            <h4>Currency:</h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies
            )].name}-${Object.keys(data[0].currencies
            )[0]}</span>
            </div>
        </div>

        <div class="wrapper">
            <div class="data-wrapper">
            <h4>Population:</h4>
            <span>${data[0].population}</span>
            </div>
        </div>       
        `

        });
})



// console.log(finalURl);