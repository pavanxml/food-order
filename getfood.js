function process(data){
    
    let mainContainer = document.getElementById("main-container")
    for(eachrow of data){
        console.log(eachrow.recipe)
        let recipe = eachrow.recipe
        let price = eachrow.price
        let imageUrl = eachrow.image
        let card  = document.createElement("div")
        card.classList.add("contain")
        let image = document.createElement("img")
        image.src = `${imageUrl}`
        card.appendChild(image)
        let heading = document.createElement("h4")
        heading.textContent = `${recipe}`
        card.appendChild(heading)
        let para = document.createElement("p")
        para.textContent = `Price ${price}/rs`
        card.appendChild(para)
        mainContainer.appendChild(card)






    }




   
}





fetch("getfood.php").then(response=>response.json()).then(data => process(data)).error(console.log("Fetch Error"));