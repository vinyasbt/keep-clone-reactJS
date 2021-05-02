import React, { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';

function CreateArea({submitButton,onAdd}){
    const[note,setNote]=useState({
        title:'',
        content:''
    })
    function handleChange(e){
        const{name,value}=e.target
        setNote(prevvalue=>{
            return{
                ...prevvalue,
                [name]:value
            }
        })

    }
    function submitButton(event){
        onAdd(note);
        setNote({
            title:'',
            content:''
        })
        event.preventDefault();
    }
    return(
        <div>
            <form>
                <input value={note.title} type="text" placeholder="Title" name="title"
                onChange={handleChange} />
                <p>
                    <textarea value={note.content} name="content"
                    placeholder="Take a note.."
                    onChange={handleChange}></textarea>
                </p>
                <button onClick={submitButton}><IoIosAdd size={35}/></button>
            </form>
        </div>
    );
}

export default CreateArea;