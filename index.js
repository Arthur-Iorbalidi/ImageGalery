let url = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=VxlfJhGqZp_q8IUTwj5kS7i0rppc4i2AHgpGQKNf3Hw';

const gallery = document.querySelector('.imgs_grid');

function ShowImgs(data) {
    for(let i = 0; i < data.results.length; i++) {
        const img = document.createElement('img');
        img.classList.add('img');
        img.src = data.results[i].urls.regular;
        img.alt = `image`;
        gallery.append(img);
    }
}

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    ShowImgs(data);
}

function DeleteImgs() {
    const imgs = document.querySelectorAll('img');
    for(let i = 0; i < imgs.length; i++) {
        imgs[i].remove();
    }
}

getData();

const searchBtn = document.querySelector('.search-icon');
const request = document.getElementById('input')
searchBtn.addEventListener('click', function() {
    if(request.value != '') {
        url = 'https://api.unsplash.com/search/photos?query=' + request.value + '&per_page=30&orientation=landscape&client_id=VxlfJhGqZp_q8IUTwj5kS7i0rppc4i2AHgpGQKNf3Hw';
        DeleteImgs();
        getData();
    }
})

request.addEventListener("keypress", function(event) {
    if(event.key === "Enter" && request.value != '') {
        url = 'https://api.unsplash.com/search/photos?query=' + request.value + '&per_page=30&orientation=landscape&client_id=VxlfJhGqZp_q8IUTwj5kS7i0rppc4i2AHgpGQKNf3Hw';
        DeleteImgs();
        getData();
    }
})

const BtnCross = document.querySelector('.cross')
function CrossVisible() {
    if(request.value != '') {
        BtnCross.classList.add('show');
    }
    else {
        BtnCross.classList.remove('show');
    }
}
BtnCross.addEventListener("click", function() {
    request.value = '';
    BtnCross.classList.remove('show');
})

const grid = document.querySelector('.imgs_grid')
grid.addEventListener('click', function(event) {
    if(event.target.closest('img')) {
        window.open(event.target.src, '_blank');
    }
})