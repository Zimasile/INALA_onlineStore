let products = [
    {
        "id": 1,
        "description": "Dress",
        "design": "plus size",
        "size": "30-34",
        "color": "purple",
        "price": "1 000",
        "image-url": "https://i.postimg.cc/C5VLNpvF/312161614-147791677962904-8794326037841940307-n.jpg"
    },
    {
        "id": 2,
        "description": "Dress",
        "design": "plus size",
        "size": "30-34",
        "color": "yellow",
        "price": "1 000",
        "image-url": "https://i.postimg.cc/Nj1FP49s/311987402-147784904630248-4843105992973323708-n.jpg"
    },
    {
        "id": 3,
        "description": "Dress",
        "design": "plus size",
        "size": "30-34",
        "color": "black with white floral",
        "price": "1 000",
        "image-url": "https://i.postimg.cc/Gmh3qCCQ/312025777-147386548003417-7561275927352785044-n.jpg"
    },
    {
        "id": 4,
        "description": "dress",
        "design": "plus size",
        "size": "30-36",
        "color": "Black & black and goldish",
        "price": "1 000",
        "image-url": "https://i.postimg.cc/44bybYQ9/312230677-147780027964069-1962493219002362187-n.jpg"
    },
    {
        "id": 5,
        "description": "Dress",
        "design": "Slim",
        "size": "26-30",
        "color": "Black",
        "price": "1 200",
        "image-url": "https://i.postimg.cc/hvTgZdVd/306778188-136477075761031-2819533161889739751-n.jpg"
    },
    {
        "id": 6,
        "description": "Dress",
        "design": "Slim",
        "size": "26-30",
        "color": "dark-green",
        "price": "1 200",
        "image-url": "https://i.postimg.cc/rwn6JJ7H/306801021-136477082427697-4596670800144649092-n.jpg"
    },
    {
        "id": 7,
        "description": "Dress",
        "design": "Slim",
        "size": "28-32",
        "color": "Orange",
        "price": "1200",
        "image-url": "https://i.postimg.cc/1zmtgJwY/306833579-136463679095704-2639895560092509327-n.jpg"
    },
    {
        "id": 8,
        "description": "Dress",
        "design": "Slim",
        "size": "28-32",
        "color": "White",
        "price": "1200", 
        "image-url": "https://i.postimg.cc/02Z72W6r/306905149-136464419095630-5417287620612295914-n.jpg"
    },
    {
        "id": 9,
        "description": "Blazer",
        "design": "Formal",
        "size": "Medium",
        "color": "Blue",
        "price": "800",
        "image-url": "https://i.postimg.cc/ydwf1VNm/301357706-131383799603692-2016116021559828040-n.jpg"
    },
    {
        "id": 10,
        "description": "Blazer",
        "design": "Formal",
        "size": "Medium",
        "color": "Black",
        "price": "800",
        "image-url": "https://i.postimg.cc/v8Kzd8KD/301388117-131383782937027-7170277627433445644-n.jpg"
    }
]
let wrapper = document.querySelector('.card-wrapper');

async function fetchData() {
    const data = await fetch('');
    const results = await data.json();
    return results.results;
}

async function readData() {
    let results = await fetchData();
    results.forEach((record)=>{
        wrapper.innerHTML += `
        <div class="card">
            <img src="${record.picture.large}" class="card-img-top" alt="$      {record.name.first}">
            <div class="card-body">
                <h5 class="card-title">${record.name.title} ${record.name.first} ${record.name.last}</h5>
                <p class="card-text">Gender: ${record.gender} and am ${record.dob.age} years old</p>
            </div>
        </div>
        `
    })
}

readData();
