import { useSelector } from "react-redux";
import Bagitem from "../components/Bagitem";
import Bagsummary from "../components/Bagsummary";


const Bag = () =>{
   const bagItems=useSelector(state => state.bag);
    const items=useSelector(state => state.items);
    const finalItems=items.filter(item =>{
      const itemIndex=bagItems.indexOf(item.id);
      return itemIndex>=0;
    })
  return(<>
     
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
        </div>
        {finalItems.map(item=><Bagitem key={item.id}item={item}/>)};
        
        <Bagsummary/>
        </div>

    </main>
    
    
  </>)
}

export default  Bag;