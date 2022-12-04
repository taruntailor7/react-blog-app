import "./post.css"

export const Post = () => {
  return (
    <div className="post">
        <img className="postImg" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
            Lorem ipsum dolor
            </span>
            <hr />
            <span className="postDate">1 houe ago</span>
            <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, 
            veniam minima? Porro nemo rem, sunt nihil cum fugit inventore est
            delectus praesentium modi ab, quisquam dolorum earum qui facilis fuga.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, 
            veniam minima? Porro nemo rem, sunt nihil cum fugit inventore est
            delectus praesentium modi ab, quisquam dolorum earum qui facilis fuga.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, 
            veniam minima? Porro nemo rem, sunt nihil cum fugit inventore est
            delectus praesentium modi ab, quisquam dolorum earum qui facilis fuga.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, 
            veniam minima? Porro nemo rem, sunt nihil cum fugit inventore est
            delectus praesentium modi ab, quisquam dolorum earum qui facilis fuga.
            </p>
        </div>
    </div>
  )
}
