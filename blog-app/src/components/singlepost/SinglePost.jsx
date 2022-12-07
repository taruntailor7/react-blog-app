import "./singlePost.css"
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { NavLink, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context"
import axios from "axios";

export default function SinglePost() {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const PF = "http://localhost:3050/images/";
    const {user} = useContext(Context)
    
    useEffect(()=>{
        getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getPost = ()=>{
        axios.get(`http://localhost:3050/posts/${postId}`)
        .then((response)=>setPost(response.data))
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
                        <RiDeleteBinLine className="singlePostIcon"/>
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