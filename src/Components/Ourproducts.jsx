import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/OurProducts.css";

const CATEGORIES = [
  {
    id: 1, name: "Cakes", route: "/cakes",
    items: [
      { id: 11, name: "Chocolate Cake",    image: "https://images.unsplash.com/photo-1606893995103-a431bce9c219?w=400&auto=format" },
      { id: 12, name: "Black Forest Cake", image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&auto=format" },
      { id: 13, name: "Mango Cake",        image: "https://images.unsplash.com/photo-1627308595171-d1b5d671a41f?w=400&auto=format" },
      { id: 14, name: "Red Velvet Cake",   image: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=400&auto=format" },
      { id: 15, name: "Pineapple Cake",    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&auto=format" },
      { id: 16, name: "Butterscotch Cake", image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&auto=format" },
    ],
  },
  {
    id: 2, name: "Bento Cakes", route: "/bentocakes",
    items: [
      { id: 21, name: "Chocolate Bento",      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format" },
      { id: 22, name: "Strawberry Bento",     image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&auto=format" },
      { id: 23, name: "Custom Message Bento", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&auto=format" },
    ],
  },
  {
    id: 3, name: "Cup Cakes", route: "/cupcakes",
    items: [
      { id: 31, name: "Chocolate Cupcakes",  image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&auto=format" },
      { id: 32, name: "Vanilla Cupcakes",    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&auto=format" },
      { id: 33, name: "Red Velvet Cupcakes", image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=400&auto=format" },
      { id: 34, name: "Lemon Cupcakes",      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&auto=format" },
    ],
  },
  {
    id: 4, name: "Brownie", route: "/brownie",
    items: [
      { id: 41, name: "Walnut Brownie",          image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format" },
      { id: 42, name: "Chocolate Fudge Brownie", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format" },
      { id: 43, name: "Blondie",                 image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&auto=format" },
    ],
  },
  {
    id: 5, name: "Jar Cake", route: "/jarcake",
    items: [
      { id: 51, name: "Chocolate Jar Cake",  image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&auto=format" },
      { id: 52, name: "Strawberry Jar Cake", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&auto=format" },
      { id: 53, name: "Oreo Jar Cake",       image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format" },
    ],
  },
  {
    id: 6, name: "Cookies", route: "/cookies",
    items: [
      { id: 61, name: "Chocolate Chip", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&auto=format" },
      { id: 62, name: "Oatmeal",        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format" },
      { id: 63, name: "Sugar Cookies",  image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&auto=format" },
    ],
  },
  {
    id: 7, name: "Celebration Cake", route: "/celebration",
    items: [
      { id: 71, name: "Birthday Cake",    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&auto=format" },
      { id: 72, name: "Anniversary Cake", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format" },
      { id: 73, name: "Wedding Cake",     image: "https://images.unsplash.com/photo-1522767131594-6b7c1a1f9f6b?w=400&auto=format" },
    ],
  },
  {
    id: 8, name: "Desserts", route: "/desserts",
    items: [
      { id: 81, name: "Tiramisu",   image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&auto=format" },
      { id: 82, name: "Cheesecake", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&auto=format" },
      { id: 83, name: "Mousse",     image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format" },
    ],
  },
  {
    id: 9, name: "Chocolates", route: "/chocolates",
    items: [
      { id: 91, name: "Dark Chocolate",      image: "https://images.unsplash.com/photo-1606312619071-d5b523a1fdbd?w=400&auto=format" },
      { id: 92, name: "Milk Chocolate",      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&auto=format" },
      { id: 93, name: "Assorted Chocolates", image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&auto=format" },
    ],
  },
];


function CategoryRow({ category, navigate }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 210, behavior: "smooth" });
  };

  return (
    <div className="op-row">

      <div className="op-row-header">
        <h3 className="op-row-title">
          <span className="op-row-accent" />
          {category.name}
        </h3>
        <div className="op-row-actions">
          <button className="op-arrow-btn" onClick={() => scroll(-1)} aria-label="Scroll left">
            <FaChevronLeft />
          </button>
          <button className="op-arrow-btn" onClick={() => scroll(1)} aria-label="Scroll right">
            <FaChevronRight />
          </button>
          <button className="op-viewall-btn" onClick={() => navigate(category.route)}>
            View All <FaChevronRight />
          </button>
        </div>
      </div>


      <div className="op-track" ref={trackRef}>
        {category.items.map((item) => (
          <div
            key={item.id}
            className="op-card"
            onClick={() => navigate(category.route)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate(category.route)}
          >

            <div className="op-card-img">
              <img src={item.image} alt={item.name} loading="lazy" />
              <div className="op-card-overlay">
                <span>Order Now</span>
              </div>
            </div>
            <p className="op-card-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


function OurProducts() {
  const navigate = useNavigate();

  return (
    <section className="op-section">
      <div className="op-container">
        <div className="op-heading">
          <h2 className="op-title">Our <span className="op-highlight">Products</span></h2>
          <p className="op-subtitle">Explore our delicious range of freshly baked treats</p>
        </div>

        <div className="op-list">
          {CATEGORIES.map((cat) => (
            <CategoryRow key={cat.id} category={cat} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProducts;