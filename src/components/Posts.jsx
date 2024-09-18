import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import { Form } from "./Form";



export const Posts =()=>{
    const { datas, loading,deletePost } = useContext(PostContext);
    const [editData, setEditData] = useState(null); // Store the post being edited

    if (loading) {
      return <p className="text-white">Loading...</p>;
    } 
    const handleEdit = (post) => {
        setEditData(post); // Set the post data when "Edit" is clicked
      }; 
   
    return(
        <>
        <section className="section-form p-[0.9rem] bg-custom-dark rounded-lg m-3.2 mx-auto"><Form editData={editData} setEditData={setEditData}  /></section>
        <section className="sect-post w-[90%] pt-12 pb-8">
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
            {
                datas.map((curData)=>{
                    const {id,body,title}=curData
                   return (
                    <li key={id}  className="bg-gray-800 text-white p-5 rounded-lg shadow-lg h-[235px] relative pl-4 mb-4">
                    <div className="absolute left-0 top-0 h-full w-[2px] bg-white"></div>
                    <p>{id}</p>
                    <p className=" card-title text-[1.2rem] font-semibold mt-2 mb-4"><sapn className="text-[1.3rem] mr-2">Title:</sapn>{title}</p>
                    <p className="  card-body text-sm mb-[1.2rem]"><sapn className="text-[1.3rem] mr-2">News:</sapn>{body}</p>
                    <button  onClick={() => handleEdit(curData)} className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded">Edit</button>
                    <button onClick={()=>deletePost(id)} className="bg-red-500 ml-4 hover:bg-red-600 text-white py-1 px-3 rounded ">Delete</button>

                    </li>
                   )     
                })
            }
            </ul>
        </section>
        </>
    )
}