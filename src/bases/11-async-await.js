const getImagen = async() => {
    try {
        const apiKey= 'ctZA7pQkchgyL2suUr2PK3vmswSMHYJ2';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img')
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //Manejo del error
    }
}
    getImagen()
