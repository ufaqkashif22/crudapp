/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
import { useContext, useEffect, useState } from "react"

import { PostContext } from "../context/PostContext";

// eslint-disable-next-line react/prop-types, no-unused-vars
export const Form = ({ editData, setEditData }) =>{
    const { addPostData,updatePost } = useContext(PostContext); // Access the context function
    const [addData,setAddData]=useState({
        title:"",
        body:"",
    });
     // If editData is not null, populate the form with its values
  useEffect(() => {
    if (editData) {
      setAddData({
        title: editData.title,
        body: editData.body,
      });
    }
  }, [editData]);

    const handleInputChange=(e)=>{
        const { name, value } = e.target;
     
        setAddData((prev)=>{
            return{
            ...prev,
            [name]:value,
        }
        })

        }

        //form submission//
        const handleForm =(e)=>{
            e.preventDefault();
            if (editData) {
                // If editData exists, update the post
                updatePost(editData.id, addData);
              } else {
                // Otherwise, add a new post
                addPostData(addData);
              }
    
            setAddData({title:"",body:""})
            setEditData(null); // Clear the edit state after submission
          
        }
    
    return(
        <>
        <form onSubmit={handleForm} className="flex gap-5">
           <div>
            <label htmlFor="title"></label>
            <input type="text"
            autoComplete="off"
            id="title"
            name="title" 
            placeholder="Add Title"
            className="w-64 text-[#212f3d] border-0.1 border-gray-500 py-[0.5rem] px-[1.2rem]"
            value={addData.title}
            onChange={handleInputChange}
             />
           </div>

           <div>
            <label htmlFor="body"></label>
            <input type="text"
            autoComplete="off"
            id="body"
            name="body" 
            placeholder="Add Post"
             className="w-64 text-[#212f3d] border-0.1 border-gray-500 py-[0.5rem] px-[1.2rem]"
             value={addData.body}
             onChange={handleInputChange}
             />
           </div>
           <button type="submit" className="bg-green-500  hover:bg-green-600 text-white py-1 px-4 rounded">
           {editData ? "Update" : "Add"}
           </button>
           </form>
        </>
    )
}