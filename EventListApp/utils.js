export async function getAllEvents(){

   const events = await fetch("http://localhost:3000/events")
    .then((response) => response.json())
    console.log(events[0])
    return events;

}

export function parseEpoch(num){

    return JSON.stringify(new Date(num)).replace('"', '').split('T')[0];
}

export function htmlContent(data){

    let str = ''
        data.map((obj,i) => str += `
        <li id = ${i} >
        <input type='text' value='${obj.eventName}' disabled='disabled'>
        <input type='date' value='${parseEpoch(+obj.startDate)}' disabled='disabled'>
        <input type='date' value='${parseEpoch(+obj.endDate)}' disabled='disabled'>
        <button> Edit </button>
        <button> Delete </button>
        </li>
        `)
        return str;
}

