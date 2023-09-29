import './App.css';
import config from './utility/config.json'
const FOOTERNAME = "Developed by gayatri";
function App() {
  return (
    <div className="container ">
      <h1 className='heading bg-warning'>{config.title}</h1>
      <h2>{config.desc}</h2>

      <h2> Some Popular Sweet here....😋😋😋😋😋</h2>
      <div style={{display:"flex" ,flexDirection:config.direction,flex:"wrap"}}>
     {
      config.products.map((productdata,index)=>{
        const {img,name,price}=productdata
        return(
      <div className='cardsweet' key={index}>
            <img src={img} className='primg'/>
            <h3>{name}</h3>
            <h4>price :{price}</h4>
            <button className='btn btn-warning'>Buy Now</button>
          </div>
        )
      })
     }
     </div>
     <div className='bg-warning fs-3 p-4 text-center'>
     <h2> {FOOTERNAME}</h2>
     </div>
    </div>
  );
}
export default App;
