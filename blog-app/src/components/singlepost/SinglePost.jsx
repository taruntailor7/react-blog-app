import "./singlePost.css"
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Navigate, NavLink, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context"
import axios from "axios";

export default function SinglePost() {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [navigate, setNavigate] = useState(false)
    const PF = "http://localhost:3050/images/";
    const {user} = useContext(Context)
    
    useEffect(()=>{
        getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getPost = ()=>{
        axios.get(`http://localhost:3050/posts/${postId}`)
        .then((response)=>setPost(response.data))
        .catch(error=>console.log(error))
    }

    const handleClick = ()=>{
        axios.delete(`http://localhost:3050/posts/${postId}`, {data: {username:user.username}})
        .then((response)=>{
            alert(response.data.message)
            setNavigate(true)
        })
        .catch(error=>console.log(error))
    }
    
    if(navigate){
        return <Navigate to="/" />
    }

    return (
        <div className="singlePost">
        <div className="singlePostWrapper">
            {post.photo && (
                <img src={PF+post.photo} alt="" className="singlePostImg" />
            )}
            <h1 className="singlePostTitle">
                {post.title}
                {post.username === user?.username && (
                    <div className="singlePostEdit">
                        <BiEdit className="singlePostIcon"/>
                        <RiDeleteBinLine className="singlePostIcon" onClick={handleClick}/>
                    </div>
                )}
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author : <NavLink to={`/?user=${post.username}`} className="link"><b>{post.username}</b></NavLink>
                </span>
                <span className="singlePostDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className="singlePostDesc">{post.desc}</p>
        </div>
        </div>
    )
}