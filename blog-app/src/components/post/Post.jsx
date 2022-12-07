import "./post.css"

export const Post = ({post}) => {
  return (
    <div className="post">
      {post.photo && (
        <img 
        className="postImg" 
        src={post.photo} 
        alt="" />
      )}
      <div className="postInfo">
          <div className="postCats">
              <span className="postCat">Music</span>
              <span className="postCat">Life</span>
          </div>
          <span className="postTitle">{post.title}</span>
          <hr />
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
          <p className="postDesc">{post.desc}</p>
      </div>
    </div>
  )
}
