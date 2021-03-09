import axios from 'axios';

const url = 'http://localhost:3000/products';

export const fetchData = async (query, categoryId) => {

    let dynamaicUrl = url

    if (query) {
        dynamaicUrl = `${url}?q=${query}`
    } else if (categoryId) {
        dynamaicUrl = `${url}?categoryId=${categoryId}`
    }

    console.log(query, categoryId)
    console.log(dynamaicUrl)

    try {
        const { data } = await axios.get(dynamaicUrl);


        return data
    } catch (e) {
        console.error(e)
    }


}
