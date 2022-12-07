import "./write.css"
import { MdAddAPhoto } from 'react-icons/md';
import { useContext, useState } from "react";
import { Context } from "../../context/context"
import axios from "axios"
import { Navigate } from "react-router-dom"

let initState = {
    title:"",
    desc:"",
}

export default function Write() {
    const [post, setPost] = useState(initState);
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);
    const [navigate, setNavigate] = useState(false);

    const handleChange = (e)=>{
        const {name, value} = e.target
        setPost({...post, [name]:value})
    }
    // var navigateUrl ;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        let newPost = {
            username: user.username,
            ...post,
        }
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            newPost.photo = filename;
            try{
                await axios.post("http://localhost:3050/upload", data)
            } catch(err) {
                console.log(err,"err")
            }
        }

        try {
            await axios.post("http://localhost:3050/posts", newPost)
            setNavigate(true);
        } catch (error) {
            console.log(error,"error")
        }
    }
    // console.log(navigateUrl);
    if(navigate){
        return <Navigate to="/" />
    }

    return (
        <div className="write">
            {file && (
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <MdAddAPhoto className="writeIcon"/>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}  onChange={(e)=>setFile(e.target.files[0])} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} name="title" value={post.title} onChange={handleChange} required/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." className="writeInput writeText" name="desc" value={post.desc} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="writeSubmit">Publish</button>
            </form> 
        </div>
    )
}
