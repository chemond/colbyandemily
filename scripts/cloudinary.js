const getPhotosByTag = function (tag) {
    fetch(`https://res.cloudinary.com/dtn50ayte/image/list/${tag}.json`)
                        .then(response => response.json() )
                        .then(data => {
                            data.resources.forEach(photo => {
                                getPhotoByID(photo.public_id, photo.format, tag)
                            }); 
                        });
        
}

const getPhotoByID = function (photoID, format, tag) {
    console.log(`${tag}-row`);
    const imgRow = document.getElementById(`${tag}-row`);
    fetch(`https://res.cloudinary.com/dtn50ayte/image/upload/h_600,f_auto/${photoID}.${format}`)
        .then(response =>  {
            let img = document.createElement('img')
            img.setAttribute('src', response.url)
            img.setAttribute('id', photoID)
            img.setAttribute('onClick', 'displayModal(this.id)')
            img.setAttribute('class', 'img-fluid')
            img.setAttribute('alt', photoID)

            imgRow.appendChild(img)
        })

}

getPhotosByTag('brideandgroom');
getPhotosByTag('details');
getPhotosByTag('family');
getPhotosByTag('bridalparty');
getPhotosByTag('preparation');
getPhotosByTag('ceremony');
getPhotosByTag('reception');