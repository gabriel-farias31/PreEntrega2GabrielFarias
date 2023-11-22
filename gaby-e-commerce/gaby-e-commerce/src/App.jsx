
import './App.css';
import NavBar from './components/NavBar/NavBar';
//import CartWidget from './components/cartwidget/cartWidget';
import ItemListConteiner from './components/itemListConteiner/itemListConteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';

function App() {
  

  return (
    <div className="App">
<BrouserRoute>
<NavBar />
<Routes>
  <Route path='/' element={<ItemListConteiner/>}/>
  <Route path='/category/:categoryId' element={<ItemListConteiner/>}/>
  <Route path='/item/:itemId' element={<ItemDetailConteiner/>}/>
  <Route path='*' element={<H1>Error 404</H1>}/>
</Routes>
</BrouserRoute>

    </div>
  );
    


  
}

export default App
