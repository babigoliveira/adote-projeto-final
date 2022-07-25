import "./Post-style.css";

function Post({ image, title, children }) {
  return (
    <>
      <div className="post-card">
        <img className="post-image" src={image} />
        <div className="post">
          <p className="post-title">{title}</p>
          <p className="post-text">{children}</p>
        </div>
      </div>
    </>
  );
}

export default Post;
