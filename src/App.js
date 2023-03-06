import './App.css';
import FilterContextComponent from './Context/FilterContext';
import ProductGallery from './Components/ProductGallery';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="App">
      <FilterContextComponent>
        <div className="content-holder">
          <SideBar />
          <ProductGallery></ProductGallery>
        </div>
      </FilterContextComponent>
    </div>
  );
}

export default App;
