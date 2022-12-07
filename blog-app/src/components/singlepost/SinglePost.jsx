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
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    
    useEffect(()=>{
        getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getPost = ()=>{
        axios.get(`http://localhost:3050/posts/${postId}`)
        .then((response)=>{
            setPost(response.data)
            setTitle(response.data.title)
            setDesc(response.data.desc)
        })
        .catch(error=>console.log(error))
    }

    const handleDelete = ()=>{
        axios.delete(`http://localhost:3050/posts/${postId}`, {data: {username:user.username}})
        .then((response)=>{
            alert(response.data.message)
            setNavigate(true)
        })
        .catch(error=>console.log(error))
    }

    const handleUpdate = ()=>{
        axios.put(`http://localhost:3050/posts/${postId}`, {username:user.username, title, desc})
        .then((response)=>{
            alert("Your blog has been updated!")
            setUpdateMode(false)
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
            { updateMode ? (<input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)}/>) : (
                <h1 className="singlePostTitle">
                    {title}
                    {post.username === user?.username && (
                        <div className="singlePostEdit">
                            <BiEdit className="singlePostIcon" onClick={()=>setUpdateMode(true)}/>
                            <RiDeleteBinLine className="singlePostIcon" onClick={handleDelete}/>
                        </div>
                    )}
                </h1>
            )}
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author : <NavLink to={`/?user=${post.username}`} className="link"><b>{post.username}</b></NavLink>
                </span>
                <span className="singlePostDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            { updateMode ? (
                <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
            ) : (
                <p className="singlePostDesc">{desc}</p>
            )}
            {updateMode && (
                <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            )}
        </div>
        </div>
    )
}