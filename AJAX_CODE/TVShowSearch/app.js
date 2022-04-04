const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // extract the content in the form cell
    const searchTerm = form.elements.query.value;
    // set up and key-value string to pass on to the axios.get function
    // using the name of the property params
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)    // call makeImage function
    // empty the input in the end
    form.elements.query.value = '';
})

// grab the image of each show
const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}