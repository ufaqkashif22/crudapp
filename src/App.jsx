import { Posts } from "./components/Posts"
import { PostProvider } from "./context/PostContext"

const App = () => {

  return (
    <>
    <PostProvider>
    <section className="main-sec min-h-screen bg-gray-900 p-5 w-full h-auto flex flex-col justify-center items-center ">
    <Posts/>
    </section>
    </PostProvider>
    
    </>
  )
}

export default App
