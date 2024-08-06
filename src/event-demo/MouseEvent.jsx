import axios from "axios";
import { useEffect, useState } from "react";
import './mouse-demo.css';


export function MouseDemo(){

    const [images, setImages] = useState([{img_src:''}]);
    const [previewSource, setPreviewSource] = useState('m1.jpg');

    function LoadImages(){
        axios.get('mobiles.json')
        .then(response=> {
            setImages(response.data);
        })
    }

    useEffect(()=>{

        LoadImages();

    },[])

    function GeneratePreview(e){
        setPreviewSource(e.target.src);
    }

    return(
        <div className="container-fluid">
            <div className="mt-4 row">
                <div className="col-2">
                    {
                        images.map(image=>
                            <img onMouseOver={GeneratePreview} key={image.img_src} className="d-block my-3" width="50%" src={image.img_src} />
                        )
                    }
                </div>
                <div className="col-10">
                    <img  width="350" src={previewSource} className="mt-4" height="450"/>
                </div>
            </div>
        </div>
    )
}