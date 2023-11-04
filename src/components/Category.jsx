const Category = ({ category, index }) => {
  return (
    <li className="category-container" key={index}>
      <h2>{category.category}</h2>
      <ul className="img-container">
        {category.images.map((url) => {
          return (
            <li key={url}>
              <img src={url} alt="images" />
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default Category;
