import axios from 'axios';

const url = 'http://localhost:3000/products';

export const fetchData = async () => {
    // const changeableUrl = country ? `${url}/countries/${country}` : url
    // data: { id, name, price, isShipmentFree, categoryId }

    try {
        const { data } = await axios.get(url);

        
        return data
    } catch (e) {
        console.error(e)
    }


}


// export const fetchDailyData = async () => {
//     try {
//         const { data } = await axios.get(`${url}/daily`);

//         const modifiedData = data.map((dailyData) => ({
//             confirmed: dailyData.confirmed.total,
//             deaths: dailyData.deaths.total,
//             date: dailyData.reportDate
//         }))
//         return modifiedData
//     } catch (e) {
//         console.error(e)
//     }


// }


// export const fetchCountries = async () => {
//     try {
//         const { data: { countries } } = await axios.get(`${url}/countries`);
//         return countries.map((country => country.name))
//     } catch (e) {
//         console.error(e)
//     }


// }