import './home.css'
import Header from '../../components/header/Header'
import { Posts } from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
      getPosts();
  },[])

  const getPosts = async () =>{
    axios.get("http://localhost:3050/posts")
    .then((res)=>setPosts(res.data.data))
  }

  return (
      <>
        <Header />
        <div className="home">
          <Posts posts={posts}/>
          <Sidebar />
        </div>
      </>
  )
}
