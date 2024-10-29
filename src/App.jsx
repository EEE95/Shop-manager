import {useState, useEffect} from 'react'; //impotere useState og use Effect hooks fra react
import ShopInput from './ShopInput'
import ShopList from './ShopList'
import './App.css'

function App() {
    const storedShopItems = JSON.parse(localStorage.getItem('shopItems')) || [];
    const storedShops = JSON.parse(localStorage.getItem('shops')) || []; 

    const [shopItems, setShopItems] = useState(storedShopItems);
    const [shops, setShops] = useState(storedShops);

    //opdater localstorage når varer/shopItems ændres
    useEffect(() => {
      localStorage.setItem('shopItems', JSON.stringify(shopItems));
    }, [shopItems]);

    //opdater localstorage når butikker/shops ændres
    useEffect(() => {
      localStorage.setItem('shops', JSON.stringify(shops))
    }, [shops]);

  return ShopInput();
}

export default App
