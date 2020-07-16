import React, {createContext} from "react";
import img1 from "../images/photos/1.png"
import img2 from "../images/photos/2.png"
import img3 from "../images/photos/3.png"
import img4 from "../images/photos/4.png"
import img5 from "../images/photos/5.png"
import img6 from "../images/photos/6.png"
import img7 from "../images/photos/7.png"
import img8 from "../images/photos/8.png"

let initialState = [
    {
        id: 1,
        src: img1,
    },
    {
        id: 2,
        src: img2,
    },
    {
        id: 3,
        src: img3,
    },
    {
        id: 4,
        src: img4,
    },
    {
        id: 5,
        src: img5,
    },
    {
        id: 6,
        src: img6,
    },
    {
        id: 7,
        src: img7,
    },
    {
        id: 8,
        src: img8,
    },
    {
        id: 9,
        src: img1,
    },
    {
        id: 10,
        src: img2,
    },
    {
        id: 11,
        src: img3,
    },
    {
        id: 12,
        src: img4,
    }

]


const images = initialState.map(image => {
    return image.src
})


const photos = images.map(image => {
    const height = 1.2
    const randomSize = Math.random() * height + 1
    return {
        src: image,
        width: randomSize,
        height: height,
    }
})

export const photosContext = createContext(photos)