export async function getAllEvents(){

   const events = await fetch("http://localhost:3000/events")
    .then((response) => response.json())
    console.log(events[0])
    return events;

}

export function parseEpoch(num){

    return JSON.stringify(new Date(num)).replace('"', '').split('T')[0];
}

