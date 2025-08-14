import {useSelector, useDispatch } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { MdOutlineAddCircle } from "react-icons/md";
import { IoTrashBinSharp } from "react-icons/io5";
const Homeitem = ({item}) =>{
  const dispatch=useDispatch();

  const bagItems=useSelector(store => store.bag);
  const elementFound =bagItems.indexOf(item.id) >= 0;

  const handleAddToBag =()=>{
    dispatch(bagActions.addtoBag(item.id));
  }

  const handleRemove =()=>{
    dispatch(bagActions.removeFromBag(item.id));
  }

  return(<>
  <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">(${item.discount_percentage}% OFF)</span>
      </div>
{elementFound ? <button type="button" className="btn btn-add-bag btn-danger" onClick={handleRemove}><IoTrashBinSharp />Remove</button> :  <button type="button" className="btn btn-add-bag btn-success" onClick={handleAddToBag}><MdOutlineAddCircle/>Add to Bag</button>}
     

    </div>`
  </>)
}
export default Homeitem;