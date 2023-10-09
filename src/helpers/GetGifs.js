
export const GetGifs = async (category) => {
    const apiKey = '7aWMsFjnAcYVnn9bjeNagFGhMi2MyU93'
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${apiKey}`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

   return gifs;


}
