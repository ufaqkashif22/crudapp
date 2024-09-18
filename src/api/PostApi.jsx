import axios from "axios";

const api= axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"  
})
///GET  METHOD//
export const getPost =()=>{
   return api.get("/posts")
}

///DELETE METHOD///
export const postDelete =(id)=>{
    return api.delete(`/posts/${id}`)
 }

 /// POST METHOD//
export const postData =(post)=>{
    return api.post("/posts",post)
 }

 // PUT method for updating a post
export const updatePostData = (id, updatedPost) => {
    return api.put(`/posts/${id}`, updatedPost);
  }

