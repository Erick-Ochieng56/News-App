/* eslint-disable react/prop-types */
import image from '../assets/image.webp'


const NewsItems = ({ title, description, src, url }) => {
    return (
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3" style={{ width: '20rem' }}>
        <img src={src? src:image} style={{height:"200px", width:"300px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description?description.slice(0,90):"this is breaking news"}</p>
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    );
  };
  
  export default NewsItems;
  