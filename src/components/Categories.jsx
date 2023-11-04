import Category from "./Category";

const Categories = ({ data }) => {
  const arrayOfCategories = [...data];

  return (
    <main className="container">
      <ul className="categories-container">
        {arrayOfCategories.map((category, index) => {
          return <Category category={category} index={index} />;
        })}
      </ul>
    </main>
  );
};

export default Categories;
