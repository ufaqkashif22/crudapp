/* eslint-disable react/prop-types */
import  { createContext, useState, useEffect } from "react";
import { getPost,postData,postDelete, updatePostData } from "../api/PostApi"; // Adjust the import path as necessary

// Create Context
export const PostContext = createContext();

// Provider Component
export const PostProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [idCounter, setIdCounter] = useState(101); // Initial ID counter for new posts
///get post method
  const getPostData = async () => {
    try {
      const res = await getPost();
      setDatas(res.data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };
    // Delete post method///
    const deletePost = async (id) => {
        try {
          await postDelete(id);
          // Update state by removing the deleted post
          setDatas((prevDatas) => prevDatas.filter((post) => post.id !== id));
        } catch (error) {
          console.error("Failed to delete post:", error);
        }
      };
        // Add new post method
        const addPostData = async (newPost) => {
            try {
              // Assign the current idCounter as the new post's ID
              const postWithId = { ...newPost, id: idCounter };
              setDatas((prevDatas) => [...prevDatas, postWithId]);
        
              // Simulate the API call (the API doesn't return a real `id`, so we manage it locally)
              await postData(postWithId);
              
              // Increment the ID counter for the next post
              setIdCounter((prevCounter) => prevCounter + 1);
            } catch (error) {
              console.error("Failed to add post:", error);
            }
          };

////put method updated data///
  const updatePost = async (id, updatedPost) => {
    try {
      const res = await updatePostData(id, updatedPost);
      if (res.status === 200) {
        setDatas((prevDatas) =>
          prevDatas.map((post) => (post.id === id ? res.data : post))
        );
      }
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <PostContext.Provider value={{ datas, loading ,deletePost,addPostData,setDatas,updatePost}}>
      {children}
    </PostContext.Provider>
  );
};
