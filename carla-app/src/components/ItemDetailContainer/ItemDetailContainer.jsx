import React, {useState, useEffect} from "react";

import ItemDetail from "../ItemDetail/ItemDetail";

import Productos from "../Productos";


export const ItemDetailContainer = () => {

const [data, setData] = useState ({});

useEffect (() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
          resolve(Productos);
        }, 2000);
    });
    getData.then(res => setData(res));   
}, [])


    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;