// async-await

// const getImagen = async() => {
//   const apiKey = "FbLRzDZS3JkoI8430fzq8QqBLCg4awhd";
//   const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//   const { data } = await resp.json();
//   const { url } = await data.images.original;
//   const img = document.createElement('img');
//   img.src = url;
//   document.body.append( img );
// }

const getImagen = async() => {
  try {
    const apiKey = "FbLRzDZS3JkoI8430fzq8QqBLCg4awhd";
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url } = await data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
  } catch (error) {
    //manejo del error
    console.error(error);
  }
}

getImagen();

//Promesas
// peticion
//   .then((resp) => resp.json())
//   .then(({data}) => {
//     // console.log(data.images.original.url)
//     const { url } = data.images.original;
//     // console.log(url);
//     const img = document.createElement('img');
//     img.src = url;
//     document.body.append( img );
//   })
//   .catch(console.warn());