import type { County } from "../../Types/GeneralTypes";



const fetchCounties = async (url: string): Promise<County[]> => {

    let fetched: County[];
    var response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    if(response.ok) {
        fetched = await response.json();
    } else {
        fetched = [];
    }
    return fetched;

}

export default fetchCounties;