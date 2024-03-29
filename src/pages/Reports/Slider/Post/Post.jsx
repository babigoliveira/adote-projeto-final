import "./Post-style.css";

function Post({ image, children }) {
  return (
    <>
      <div className="post-card">
        <img className="post-image" src={image} />
        <div className="post">
          <p className="post-text">{children}</p>
        </div>
      </div>
    </>
  );
}

export default Post;
