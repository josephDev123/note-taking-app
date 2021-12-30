import { v4 as uuidv4 } from 'uuid';

export function SendDataToLocalStorage(reduxStore){
    try{
    return  localStorage.setItem("store", JSON.stringify(reduxStore));
    }catch(e){
      console.log(e.message);
    }
 
}

export function getDataFromLocalStorage(){
  try{
    return localStorage.getItem("store")?JSON.parse(localStorage.getItem("store")):[];
  }catch(e){
    console.log(e.message);
  }

}