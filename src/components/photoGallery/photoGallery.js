import React, {Suspense, useCallback, useContext, useEffect, useState} from "react";
import "../../css/gallery.css"
import {photosContext} from "../../state/state";
import Gallery from "react-photo-gallery";
import {Img, useImage} from "react-image";
import SelectedImage from "./selectedImage";

export const PhotoGallery = () => {
    const images = useContext(photosContext)

    const [selectAll, setSelectAll] = useState(false);


    const toggleSelectAll = () => {
        setSelectAll(!selectAll);
    };

    const imageRenderer = useCallback(
        ({ index, left, top, key, photo, animation }) => (
            <SelectedImage
                selected={selectAll ? true : false}
                key={key}
                margin={"2px"}
                index={index}
                photo={photo}
                left={left}
                top={top}
            />
        ),
        [selectAll]
    );

    return <div className="gallery">
        <p>
            <button onClick={toggleSelectAll}>toggle select all</button>
        </p>
        <Gallery photos={images} margin={8} targetRowHeight={(containerWidth) => 220} renderImage={imageRenderer}/>
    </div>
}