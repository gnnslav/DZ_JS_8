
const content = document.querySelector('.content');

const api = 'https://api.themoviedb.org/';
const apiRes = '3/search/movie';
const apiResPop = '3/movie/popular';
const apiResTop = '3/movie/top_rated';
const apiResUp = '3/movie/upcoming';
const apiKey = 'f24a0fd18f52218851075901c5a108a0';
const apiUrl = `${api}${apiRes}?api_key=${apiKey}`;
const urlImg = `https://image.tmdb.org/t/p/w500/`;

const fetchPoster = (search) => {
	return fetch(`${apiUrl}&query=${search}`)
	.then(response =>{
		console.log(response);
		if(response.ok){
			return response.json();
		}
		throw new Error('error' + response.status.Text);
	})
	.catch(err => console.log(err));
};
	
const renderGallery = (results, parent) =>{
	let poster = '';
	results.forEach(result =>{
		poster += `
			<div class="box">
					<div class="rating">${result.vote_average}</div>
					<div ><img src="${urlImg}${result.poster_path}" alt="${result.title}" class="img"></div>
					<div class="title">${result.title}</div>
					<div class="cont">${result.overview}</div>
					<div class="data">${result.release_date}</div>
					<div class="plus">+</div>
			</div>
		`;
	});
	content.innerHTML = poster;
}	

const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
submit.addEventListener('click', (event) => {
	event.preventDefault();
	const posters = fetchPoster(input.value);
	posters.then(data =>{
		renderGallery(data.results, content);
		console.log((data));
	});
});

// Task 4

const fetchPop = () => {
	return fetch(`${api}${apiResPop}?api_key=${apiKey}`)
	.then(response =>{
		console.log(response);
		if(response.ok){
			return response.json();
		}
		throw new Error('error' + response.status.Text);
	})
	.catch(err => console.log(err));
};
	
const fetchTop = () => {
	return fetch(`${api}${apiResTop}?api_key=${apiKey}`)
	.then(response =>{
		console.log(response);
		if(response.ok){
			return response.json();
		}
		throw new Error('error' + response.status.Text);
	})
	.catch(err => console.log(err));
};
const fetchUp = () => {
	return fetch(`${api}${apiResUp}?api_key=${apiKey}`)
	.then(response =>{
		console.log(response);
		if(response.ok){
			return response.json();
		}
		throw new Error('error' + response.status.Text);
	})
	.catch(err => console.log(err));
};

const renderGalleryBtn = (results, content) =>{
	let poster = '';
	results.forEach(result =>{
		poster += `
			<div class="box">
					<div class="rating">${result.vote_average}</div>
					<div ><img src="${urlImg}${result.poster_path}" alt="${result.title}" class="img"></div>
					<div class="title">${result.original_title}</div>
					<div class="cont">${result.overview}</div>
					<div class="data">${result.release_date}</div>
					<div class="plus">+</div>
			</div>
		`;
	});
	content.innerHTML = poster;
}	

const popular = document.querySelector('#popular');
popular.addEventListener('click', ()=> {
	const postersPop = fetchPop();
	postersPop.then(data =>{
		renderGalleryBtn(data.results, content);
		console.log((data));
	});
});

const topRated = document.querySelector('#top');
topRated.addEventListener('click', ()=> {
	const postersTop = fetchTop();
	postersTop.then(data =>{
		renderGalleryBtn(data.results, content);
		console.log((data));
	});
});

const upcoming = document.querySelector('#latest');
upcoming.addEventListener('click', ()=> {
	const postersUp = fetchUp();
	postersUp.then(data =>{
		renderGalleryBtn(data.results, content);
		console.log((data));
	});
});






