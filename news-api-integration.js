class NewsAPIIntegration {
    constructor() {
        this.newsApiKey = 'YOUR_NEWS_API_KEY';
        this.baseUrl = 'https://newsapi.org/v2';
    }

    async fetchFromNewsAPI(keyword = 'war') {
        try {
            const response = await fetch(
                `${this.baseUrl}/everything?q=${keyword}&sortBy=publishedAt&language=en&apiKey=${this.newsApiKey}`
            );
            const data = await response.json();
            
            if (data.articles) {
                return data.articles.map(article => ({
                    title: article.title,
                    description: article.description || article.content,
                    source: article.source.name,
                    url: article.url,
                    image: article.urlToImage,
                    publishedAt: new Date(article.publishedAt).toLocaleTimeString('tr-TR')
                }));
            }
            return [];
        } catch (error) {
            console.error('NewsAPI Hatası:', error);
            return [];
        }
    }

    async getAggregatedNews() {
        const newsApiResults = await this.fetchFromNewsAPI('conflict');
        return newsApiResults.slice(0, 50);
    }
}

const newsAPI = new NewsAPIIntegration();
