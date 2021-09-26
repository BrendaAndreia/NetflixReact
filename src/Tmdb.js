const API_KEY = '5b94642adc2d0e3d45ce51f3ccb0b0e4';
const API_BASE = 'https://api.themoviedb.org/3';

/*
-originais da netflix
-recomendados (trending)
-em alta(top rated)
-açao, comedia, terror, romance, documentários
*/
const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}
export default  {
    getHomeList: async () => {
        return[
             {
                slug:'originals',
                title:'Originais da Netflix',
                items: await basicFetch(`/discover/tv?api_key=${API_KEY}&with_network=213`)
            },
            {
                slug:'trending',
                title:'Recomendados para Você',
                 items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
            },
            //  {
            //     slug:'toprated',
            //     title:'Em alta',
            //     items: await basicFetch(`movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
            // },
            {
                slug:'action',
                title:'Ação',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=28`)
            },
            {
                slug:'comedy',
                title:'Comédia',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=35`)
            },
            {
                slug:'horror',
                title:'Terror',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=27`)
            },
            {
                slug:'romance',
                title:'Romance',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=10749`)
            },
            {
                slug:'documentary',
                title:'Documentários',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=99`)
            },
        ];
    },
    
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}&language=pt-BR`)
                break;
                default:
                    break;
            }   
        }
        return info;
    }
}
