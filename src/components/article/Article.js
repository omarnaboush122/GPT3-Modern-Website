import "./article.css";

const Article = ({imgUrl}) => {
  return (
    <div className="gpt3-blog-container-article">
      <div className="gpt3-blog-container-article-image">
        <img src={imgUrl} alt="blog image" />
      </div>
    </div>
  );
}

export default Article;
