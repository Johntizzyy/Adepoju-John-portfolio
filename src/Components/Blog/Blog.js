import "./Blog.css";
import img from "../../Assets/dpp.jpg";
import blog from "../../Assets/blog.png";

function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-header">
        {" "}
        <h1>Blog</h1>
        <img src={blog} />
      </div>

      <div className="blog">
        <div className="blog-1">
          <img src={img} />
          <h2>This is for blog 1</h2>
          <p>This is blog one paragraph</p>
        </div>
        <div className="blog-2">
          <img src={img} />
          <h2>This is for blog 2</h2>
          <p>This is blog two paragraph</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
