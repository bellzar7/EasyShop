import {useState, useEffect} from "react";
import Preloader from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Card} from "./Card";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

    useEffect(function getGoods() {
        fetch('https://fortniteapi.io/v1/shop?lang=en', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '19239bc4-8be4fb1a-cd6d0255-18a2d105',
            },
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
           setGoods(data?.featured);
           setLoading(false)
        })
    }, [])


    return <main className='container content'>
        <Card quantity={order.length}/>
        {loading ? <Preloader/> : <GoodsList goods={goods} />}
    </main>

}

export default Shop;