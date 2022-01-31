import { getAllEvents, parseEpoch } from "../EventListApp/utils.js";


let renderTestData = (async() => {
    try {
        const placeHolderElement = document.querySelector('p');
        const dataFromAPI = await getAllEvents();
        let str = ''
        dataFromAPI.map((obj,i) => str += `
        <li id = ${i} >
        <input type='text' value='${obj.eventName}' disabled='disabled'>
        <input type='text' value='${parseEpoch(+obj.startDate)}' disabled='disabled'>
        <input type='text' value='${parseEpoch(+obj.endDate)}' disabled='disabled'>
        <button> Edit </button>
        <button> Delete </button>
        </li>
        `)
       
        placeHolderElement.innerHTML = str;
        
    } catch (error) {
        console.log(error)
        
    }
})()




