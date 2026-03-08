import { Link } from 'react-router-dom';
import './Pages.css';

const productCategories = [
  {
    title: 'Category One',
    description: 'High-quality products designed for professional use. Durable, reliable, and built to last.',
    items: ['Product A', 'Product B', 'Product C'],
  },
  {
    title: 'Category Two',
    description: 'Solutions tailored to meet industry standards and your specific requirements.',
    items: ['Product X', 'Product Y', 'Product Z'],
  },
  {
    title: 'Category Three',
    description: 'Innovative offerings that combine performance with value.',
    items: ['Product 1', 'Product 2', 'Product 3'],
  },
];

export default function Products() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Our Products</h1>
          <p className="lead">
            Explore our range of quality products and find the right solution for your needs.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {productCategories.map((category, index) => (
            <div key={index} className="product-category">
              <h2>{category.title}</h2>
              <p className="category-desc">{category.description}</p>
              <ul className="product-list">
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="section section-light">
        <div className="container text-center">
          <p className="section-lead">Need a custom solution or bulk quote?</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
