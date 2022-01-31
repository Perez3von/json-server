import { getAllEvents, parseEpoch, htmlContent } from "../EventListApp/utils.js";


let renderTestData = (async() => {
    try {
        const placeHolderElement = document.querySelector('p');
        const dataFromAPI = await getAllEvents();
        
       
        placeHolderElement.innerHTML = htmlContent(dataFromAPI);
        
    } catch (error) {
        console.log(error)
        
    }
})()




