
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
const Fetchitems = () =>{

 const fetchStatus=useSelector(store => store.fetchStatus);
 const dispatch=useDispatch();

 useEffect(()=>{
  if(fetchStatus.fetchdone) return;
   const controller=new AbortController();
   const signal =controller.signal;
   dispatch(fetchStatusActions. markFetchingStarted());
   fetch("http://localhost:9090/items",{signal})
   .then((res)=>res.json())
   .then(({items})=>{
    dispatch(fetchStatusActions.markFetchDone());
     dispatch(fetchStatusActions. markFetchingFinished());
    dispatch(itemsActions.addInitialItems(items));
   });

   return ()=>{
    controller.abort();
   };
 },[fetchStatus]);

  return(<></>)
}
export default Fetchitems;