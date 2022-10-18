import { useState } from 'react';
import "./wishlist.css"

const WishList = () =>{
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    const handleTextChange = (e) =>{
        console.log(e.target.value);
        setText(e.target.value);
    }

    const addToList=()=>{
        let copy=list; //create a copy of the list
        copy.push(text); //add new element to the copy 
        setList(copy); //overwrite the list with the copy
        console.log(list); //print the list
        setText(""); //clear the textbar
    }
    return(
        <div className='wish-list'>
            <h4>My Wish List</h4>
            <div>
                <input type="text" onChange={handleTextChange} value={text}/>
                <button onClick={addToList}>Add</button>
            </div>
            <ul>
                {list.map(t => <li key={t}>{t}</li>)}
            </ul>
        </div>
    );
}

export default WishList;