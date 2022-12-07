import './home.css'
import Header from '../../components/header/Header'
import { Posts } from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
      getPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search])

  const getPosts = async () =>{
    axios.get("http://localhost:3050/posts"+search)
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
