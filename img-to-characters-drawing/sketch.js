const densityValues = "N@#W$&;:,    "

let photo;

function preload(){
    photo = loadImage('20210921_160348_ccexpress.jpeg')
}

function setup(){
    noCanvas()
    photo.loadPixels()
    background(0)
    
    const len = densityValues.length
    console.log(len)
    for(let row = 0; row < photo.height; row++){
        let entire_row_values = ""
        for(let col = 0; col < photo.width; col++){
            const pxIndex = (col + row * photo.width) * 4
            const avg = (photo.pixels[pxIndex + 0] + photo.pixels[pxIndex + 1] + photo.pixels[pxIndex + 2]) / 3
            const displayValueIndex = floor(map(avg, 0, 255, len, 0))
            const c = densityValues.charAt(displayValueIndex)
            if (c == ' '){
                entire_row_values += '&nbsp'
            }
            else{
                entire_row_values += c
            }
        }
        createDiv(entire_row_values)
    }
}
