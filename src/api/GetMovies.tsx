export const GetMovieTitles = async (searchQuery: string) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&type=movie&apikey=be83d040`);

    const post = await APIParser(response);

    console.log('POST');
    console.log(post);

    return post;
}

const APIParser = async (response: Response) => {
    if (response.ok) {
        return await response.json();
      }
    
      return Promise.reject(response);
}