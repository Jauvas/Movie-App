const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2b0cd248239b6f6b47bdeef117762eaf&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedbl.org/3/search/movie?&api_key=2b0cd248239b6f6b47bdeef117762eaf&query=';


const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');

ReturnMovies(APILINK);

function ReturnMovies(url){
    fetch(url).then(res => res.json())
        .then(function(data){
            data.results.forEach(element => {
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card')

                const div_row = document.createElement('div');
                div_row.setAttribute('class', 'row')

                const div_column = document.createElement('div');
                div_column.setAttribute('class', 'column')

                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail')
                image.setAttribute('id', 'image')

                const title = document.createElement('h3');
                title.setAttribute('id', 'card')
            
                title.innerHTML = `${element.title}`;
                image.src = IMGPATH + element.poster_path;

                div_card.appendChild(image);
                div_card.appendChild(title);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);
                main.appendChild(div_row);

                
            });
        });
        
} 


form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const SearchItem = search.value;

    if(SearchItem){
        ReturnMovies(SEARCHAPI + SearchItem);
        // search.value ='';
    }
});