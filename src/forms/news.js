

let url = "https://newsapi.org/v2/top-headlines?q=it&country=us&category=business&apiKey=261f191c064f425baafde212648635d8";

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}