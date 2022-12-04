import "./singlePost.css"
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';

export default function SinglePost() {
    return (
        <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <div className="singlePostEdit">
                    <BiEdit className="singlePostIcon"/>
                    <RiDeleteBinLine className="singlePostIcon"/>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author : <b>Nikki </b>
                </span>
                <span className="singlePostDate">
                    1 hour ago
                </span>
            </div>
            <p className="singlePostDesc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
                similique magni iste qui tempore voluptatum dicta velit vitae rerum. 
                Consequatur excepturi deleniti corrupti doloribus quasi distinctio aut 
                veritatis neque sed.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
                similique magni iste qui tempore voluptatum dicta velit vitae rerum. 
                Consequatur excepturi deleniti corrupti doloribus quasi distinctio aut 
                veritatis neque sed.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
                similique magni iste qui tempore voluptatum dicta velit vitae rerum. 
                Consequatur excepturi deleniti corrupti doloribus quasi distinctio aut 
                veritatis neque sed.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
                similique magni iste qui tempore voluptatum dicta velit vitae rerum. 
                Consequatur excepturi deleniti corrupti doloribus quasi distinctio aut 
                veritatis neque sed.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
                similique magni iste qui tempore voluptatum dicta velit vitae rerum. 
                Consequatur excepturi deleniti corrupti doloribus quasi distinctio aut 
                veritatis neque sed.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
                similique magni iste qui tempore voluptatum dicta velit vitae rerum. 
                Consequatur excepturi deleniti corrupti doloribus quasi distinctio aut 
                veritatis neque sed.
            </p>
        </div>
        </div>
    )
}