import axios from "axios";

const SearchImages = async (term)=>{
  const response = await axios.get('https://api.unsplash.com/search/photos',{
    headers: {
      Authorization: 'Client-ID qTZVL5PGAbdZorDIH7Vl7j4jOMcBKiuN90eQJVS45NY'
    },
    params: {
      query: term
    }
  });
  // console.log(response.data.results);
  return response.data.results;
}

export default SearchImages;
