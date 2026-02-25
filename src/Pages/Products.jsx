import { useState } from "react";
import { 
  Heart, ShoppingCart, Edit2, Save, X, Star, 
  Plus, Minus, Trash2, Camera, Package, Search,
  Filter, ChevronLeft, ChevronRight, Eye
} from "lucide-react";
import "../Styles/Product.css";

// Sample cake data with images (30+ cakes)
const initialCakes = [
  // Chocolate Cakes (8)
  {
    id: 1,
    name: "Classic Chocolate Cake",
    category: "Chocolate",
    price: 450,
    originalPrice: 500,
    rating: 4.8,
    reviews: 124,
    stock: 15,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Rich chocolate layers with creamy chocolate frosting",
    ingredients: ["Flour", "Cocoa", "Sugar", "Eggs", "Butter"],
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 2,
    name: "Red Velvet Cake",
    category: "Chocolate",
    price: 550,
    originalPrice: 600,
    rating: 4.9,
    reviews: 98,
    stock: 10,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Classic red velvet with cream cheese frosting",
    ingredients: ["Flour", "Cocoa", "Buttermilk", "Cream Cheese"],
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 3,
    name: "Black Forest Cake",
    category: "Chocolate",
    price: 580,
    originalPrice: 620,
    rating: 4.8,
    reviews: 112,
    stock: 12,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Chocolate sponge with cherries and whipped cream",
    ingredients: ["Chocolate", "Cherries", "Whipped Cream", "Flour"],
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 4,
    name: "Chocolate Truffle Cake",
    category: "Chocolate",
    price: 650,
    originalPrice: 700,
    rating: 4.9,
    reviews: 156,
    stock: 8,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Decadent chocolate truffle with ganache",
    ingredients: ["Dark Chocolate", "Cream", "Butter", "Sugar"],
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 5,
    name: "Molten Lava Cake",
    category: "Chocolate",
    price: 380,
    originalPrice: 420,
    rating: 4.7,
    reviews: 89,
    stock: 20,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1604357209793-fca5dca89b97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Warm chocolate cake with gooey center",
    ingredients: ["Chocolate", "Butter", "Eggs", "Flour"],
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 6,
    name: "German Chocolate Cake",
    category: "Chocolate",
    price: 590,
    originalPrice: 640,
    rating: 4.6,
    reviews: 67,
    stock: 7,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Coconut-pecan frosting between chocolate layers",
    ingredients: ["Coconut", "Pecans", "Chocolate", "Caramel"],
    isVegetarian: true,
    isPopular: false
  },
  {
    id: 7,
    name: "Death by Chocolate",
    category: "Chocolate",
    price: 720,
    originalPrice: 780,
    rating: 4.9,
    reviews: 203,
    stock: 5,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Ultimate chocolate overload with fudge and brownie bits",
    ingredients: ["Dark Chocolate", "Brownie", "Fudge", "Cocoa"],
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 8,
    name: "Chocolate Mousse Cake",
    category: "Chocolate",
    price: 520,
    originalPrice: 560,
    rating: 4.7,
    reviews: 78,
    stock: 9,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1557971370-d2c2a5a1b9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Light and airy chocolate mousse on chocolate base",
    ingredients: ["Chocolate", "Eggs", "Cream", "Sugar"],
    isVegetarian: true,
    isPopular: false
  },

  // Fruit Cakes (6)
  {
    id: 9,
    name: "Fresh Fruit Cake",
    category: "Fruit",
    price: 650,
    originalPrice: 700,
    rating: 4.7,
    reviews: 76,
    stock: 8,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Light vanilla sponge topped with fresh seasonal fruits",
    ingredients: ["Flour", "Vanilla", "Fresh Cream", "Mixed Fruits"],
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 10,
    name: "Mango Delight Cake",
    category: "Fruit",
    price: 580,
    originalPrice: 620,
    rating: 4.8,
    reviews: 92,
    stock: 11,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Fresh mango pulp layered with cream sponge",
    ingredients: ["Mango", "Cream", "Flour", "Sugar"],
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 11,
    name: "Strawberry Shortcake",
    category: "Fruit",
    price: 520,
    originalPrice: 560,
    rating: 4.6,
    reviews: 84,
    stock: 14,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1464305795437-1f4c2e98bf7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Layers of sponge, fresh strawberries and cream",
    ingredients: ["Strawberries", "Cream", "Flour", "Vanilla"],
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 12,
    name: "Blueberry Cheesecake",
    category: "Fruit",
    price: 680,
    originalPrice: 740,
    rating: 4.9,
    reviews: 134,
    stock: 6,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Creamy cheesecake topped with blueberry compote",
    ingredients: ["Cream Cheese", "Blueberries", "Graham Crackers"],
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 13,
    name: "Pineapple Upside Down",
    category: "Fruit",
    price: 480,
    originalPrice: 520,
    rating: 4.5,
    reviews: 56,
    stock: 9,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Caramelized pineapple rings on buttery cake",
    ingredients: ["Pineapple", "Brown Sugar", "Butter", "Cherries"],
    isVegetarian: true,
    isPopular: false
  },
  {
    id: 14,
    name: "Mixed Berry Cake",
    category: "Fruit",
    price: 590,
    originalPrice: 640,
    rating: 4.7,
    reviews: 71,
    stock: 7,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Vanilla cake with mixed berries and cream",
    ingredients: ["Raspberries", "Blueberries", "Strawberries", "Cream"],
    isVegetarian: true,
    isPopular: false
  },

  // Classic Cakes (6)
  {
    id: 15,
    name: "Vanilla Bean Cake",
    category: "Classic",
    price: 380,
    originalPrice: 420,
    rating: 4.6,
    reviews: 89,
    stock: 20,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Simple vanilla cake with real vanilla beans",
    ingredients: ["Flour", "Vanilla Beans", "Sugar", "Eggs", "Butter"],
    isVegetarian: true,
    isPopular: false
  },
  {
    id: 16,
    name: "Butter Pound Cake",
    category: "Classic",
    price: 320,
    originalPrice: 350,
    rating: 4.5,
    reviews: 67,
    stock: 18,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Rich, dense butter cake with crispy crust",
    ingredients: ["Butter", "Flour", "Sugar", "Eggs", "Vanilla"],
    isVegetarian: true,
    isPopular: false
  },
  {
    id: 17,
    name: "Marble Cake",
    category: "Classic",
    price: 420,
    originalPrice: 460,
    rating: 4.6,
    reviews: 73,
    stock: 12,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1588195538326-cb1e9f80a1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Swirls of vanilla and chocolate in every slice",
    ingredients: ["Flour", "Cocoa", "Vanilla", "Butter"],
    isVegetarian: true,
    isPopular: false
  },
  {
    id: 18,
    name: "Coffee Walnut Cake",
    category: "Classic",
    price: 480,
    originalPrice: 520,
    rating: 4.7,
    reviews: 82,
    stock: 9,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Coffee-infused sponge with crunchy walnuts",
    ingredients: ["Coffee", "Walnuts", "Flour", "Butter"],
    isVegetarian: true,
    isPopular: false
  },
  {
    id: 19,
    name: "Honey Cake",
    category: "Classic",
    price: 440,
    originalPrice: 480,
    rating: 4.5,
    reviews: 48,
    stock: 10,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Sweet honey layers with cream cheese frosting",
    ingredients: ["Honey", "Flour", "Cream Cheese", "Cinnamon"],
    isVegetarian: true,
    isPopular: false
  },
  {
    id: 20,
    name: "Coconut Cake",
    category: "Classic",
    price: 460,
    originalPrice: 500,
    rating: 4.6,
    reviews: 58,
    stock: 11,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1605808197672-ee5e7c6e3e6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Fluffy coconut cake with coconut flakes",
    ingredients: ["Coconut", "Flour", "Milk", "Sugar"],
    isVegetarian: true,
    isPopular: false
  },

  // Specialty Cakes (6)
  {
    id: 21,
    name: "Tiramisu Cake",
    category: "Specialty",
    price: 680,
    originalPrice: 720,
    rating: 4.9,
    reviews: 143,
    stock: 5,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Coffee-infused cake with mascarpone cream",
    ingredients: ["Coffee", "Mascarpone", "Cocoa", "Ladyfingers"],
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 22,
    name: "Carrot Walnut Cake",
    category: "Specialty",
    price: 520,
    originalPrice: 560,
    rating: 4.7,
    reviews: 67,
    stock: 7,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7e4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Moist carrot cake with walnuts and cream cheese frosting",
    ingredients: ["Carrots", "Walnuts", "Cinnamon", "Cream Cheese"],
    isVegetarian: true,
    isPopular: false
  },
  {
    id: 23,
    name: "Banana Cake",
    category: "Specialty",
    price: 420,
    originalPrice: 460,
    rating: 4.6,
    reviews: 89,
    stock: 13,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Moist banana cake with cream cheese frosting",
    ingredients: ["Bananas", "Flour", "Cream Cheese", "Walnuts"],
    isVegetarian: true,
    isPopular: false
  },
  {
    id: 24,
    name: "Pistachio Cake",
    category: "Specialty",
    price: 620,
    originalPrice: 680,
    rating: 4.8,
    reviews: 92,
    stock: 6,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Nutty pistachio cake with rose water",
    ingredients: ["Pistachios", "Rose Water", "Flour", "Cardamom"],
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 25,
    name: "Rum Cake",
    category: "Specialty",
    price: 580,
    originalPrice: 620,
    rating: 4.7,
    reviews: 71,
    stock: 8,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1605808197672-ee5e7c6e3e6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Rich cake soaked in rum syrup",
    ingredients: ["Rum", "Flour", "Butter", "Brown Sugar"],
    isVegetarian: false,
    isPopular: false
  },
  {
    id: 26,
    name: "Chai Spice Cake",
    category: "Specialty",
    price: 490,
    originalPrice: 530,
    rating: 4.6,
    reviews: 54,
    stock: 9,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Warm spiced chai flavors with cream cheese frosting",
    ingredients: ["Cardamom", "Cinnamon", "Ginger", "Cloves"],
    isVegetarian: true,
    isPopular: false
  },

  // Citrus Cakes (4)
  {
    id: 27,
    name: "Lemon Drizzle Cake",
    category: "Citrus",
    price: 420,
    originalPrice: 460,
    rating: 4.5,
    reviews: 54,
    stock: 9,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1605808197672-ee5e7c6e3e6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Zesty lemon cake with sweet lemon glaze",
    ingredients: ["Lemon", "Flour", "Sugar", "Eggs", "Butter"],
    isVegetarian: true,
    isPopular: false
  },
  {
    id: 28,
    name: "Orange Cake",
    category: "Citrus",
    price: 440,
    originalPrice: 480,
    rating: 4.6,
    reviews: 62,
    stock: 11,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Fresh orange flavored cake with orange glaze",
    ingredients: ["Orange", "Flour", "Butter", "Sugar"],
    isVegetarian: true,
    isPopular: false
  },
  {
    id: 29,
    name: "Key Lime Cake",
    category: "Citrus",
    price: 480,
    originalPrice: 520,
    rating: 4.7,
    reviews: 48,
    stock: 7,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1604357209793-fca5dca89b97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Tangy key lime cake with lime cream frosting",
    ingredients: ["Key Lime", "Flour", "Cream Cheese", "Sugar"],
    isVegetarian: true,
    isPopular: false
  },
  {
    id: 30,
    name: "Grapefruit Cake",
    category: "Citrus",
    price: 460,
    originalPrice: 500,
    rating: 4.4,
    reviews: 36,
    stock: 6,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1588195538326-cb1e9f80a1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Unique grapefruit flavored cake with citrus glaze",
    ingredients: ["Grapefruit", "Flour", "Butter", "Sugar"],
    isVegetarian: true,
    isPopular: false
  },

  // Coffee Cakes (4)
  {
    id: 31,
    name: "Espresso Cake",
    category: "Coffee",
    price: 520,
    originalPrice: 560,
    rating: 4.8,
    reviews: 86,
    stock: 8,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Strong espresso flavor with coffee buttercream",
    ingredients: ["Espresso", "Flour", "Butter", "Coffee Beans"],
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 32,
    name: "Mocha Cake",
    category: "Coffee",
    price: 540,
    originalPrice: 580,
    rating: 4.7,
    reviews: 72,
    stock: 7,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Chocolate and coffee combination",
    ingredients: ["Coffee", "Chocolate", "Flour", "Cream"],
    isVegetarian: true,
    isPopular: false
  },
  {
    id: 33,
    name: "Irish Coffee Cake",
    category: "Coffee",
    price: 590,
    originalPrice: 640,
    rating: 4.8,
    reviews: 58,
    stock: 5,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Coffee cake with Irish cream liqueur",
    ingredients: ["Irish Cream", "Coffee", "Flour", "Cream"],
    isVegetarian: false,
    isPopular: false
  },
  {
    id: 34,
    name: "Caramel Latte Cake",
    category: "Coffee",
    price: 560,
    originalPrice: 600,
    rating: 4.7,
    reviews: 63,
    stock: 6,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Coffee cake with caramel drizzle",
    ingredients: ["Coffee", "Caramel", "Flour", "Butter"],
    isVegetarian: true,
    isPopular: false
  }
];

const categories = ["All", "Chocolate", "Fruit", "Classic", "Specialty", "Citrus", "Coffee"];

function Product() {
  const [cakes, setCakes] = useState(initialCakes);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCake, setSelectedCake] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const itemsPerPage = 9;

  // Filter and search cakes
  const filteredCakes = cakes.filter(cake => {
    const matchesSearch = cake.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cake.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || cake.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort cakes
  const sortedCakes = [...filteredCakes].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return b.reviews - a.reviews; // popular by default
  });

  // Pagination
  const totalPages = Math.ceil(sortedCakes.length / itemsPerPage);
  const paginatedCakes = sortedCakes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Edit handlers
  const startEditing = (cake) => {
    setEditingId(cake.id);
    setEditForm({
      name: cake.name,
      price: cake.price,
      stock: cake.stock,
      description: cake.description
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveEditing = (id) => {
    setCakes(cakes.map(cake => 
      cake.id === id ? { ...cake, ...editForm } : cake
    ));
    setEditingId(null);
    setEditForm({});
  };

  const handleEditChange = (field, value) => {
    setEditForm({ ...editForm, [field]: value });
  };

  // Update stock
  const updateStock = (id, change) => {
    setCakes(cakes.map(cake =>
      cake.id === id ? { ...cake, stock: Math.max(0, cake.stock + change) } : cake
    ));
  };

  // Toggle favorite
  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  // Add to cart
  const addToCart = (cake) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === cake.id);
      if (existing) {
        return prev.map(item =>
          item.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...cake, quantity: 1 }];
    });
  };

  // View details
  const viewDetails = (cake) => {
    setSelectedCake(cake);
    setShowDetailModal(true);
  };

  return (
    <div className="product-container">
      {/* Header */}
      <div className="product-header">
        <div>
          <h1 className="product-title">Cake Collection</h1>
          <p className="product-subtitle">Browse our delicious {cakes.length}+ cakes</p>
        </div>
        <div className="cart-badge">
          <ShoppingCart size={20} />
          <span className="cart-count">{cart.length}</span>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="filter-bar">
        <div className="search-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search cakes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-actions">
          <select 
            className="filter-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select 
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Top Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>

          <div className="view-toggle">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <Package size={18} />
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <Filter size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="stats-row">
        <div className="stat-chip">
          <span>Total Cakes</span>
          <strong>{cakes.length}</strong>
        </div>
        <div className="stat-chip">
          <span>In Stock</span>
          <strong>{cakes.reduce((acc, cake) => acc + cake.stock, 0)}</strong>
        </div>
        <div className="stat-chip">
          <span>Avg Price</span>
          <strong>₹{(cakes.reduce((acc, cake) => acc + cake.price, 0) / cakes.length).toFixed(0)}</strong>
        </div>
        <div className="stat-chip">
          <span>Categories</span>
          <strong>{categories.length - 1}</strong>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
        {paginatedCakes.map(cake => (
          <div key={cake.id} className="product-card">
            {/* Favorite Button */}
            <button 
              className={`favorite-btn ${favorites.includes(cake.id) ? 'active' : ''}`}
              onClick={() => toggleFavorite(cake.id)}
            >
              <Heart size={16} fill={favorites.includes(cake.id) ? "#ef4444" : "none"} />
            </button>

            {/* Image Container */}
            <div className="product-image-container">
              <img 
                src={cake.image} 
                alt={cake.name}
                className="product-image"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
              {cake.isPopular && <span className="popular-badge">🔥 Popular</span>}
              {cake.stock < 5 && <span className="stock-badge low">Low Stock</span>}
              
              {/* Image Actions */}
              <div className="image-actions">
                <button className="image-action-btn" onClick={() => viewDetails(cake)}>
                  <Eye size={16} />
                </button>
                <button className="image-action-btn" onClick={() => addToCart(cake)}>
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <div className="product-category">{cake.category}</div>
              
              {editingId === cake.id ? (
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => handleEditChange('name', e.target.value)}
                  className="edit-input"
                  placeholder="Cake name"
                />
              ) : (
                <h3 className="product-name">{cake.name}</h3>
              )}

              {/* Rating */}
              <div className="product-rating">
                <Star size={14} fill="#fbbf24" color="#fbbf24" />
                <span>{cake.rating}</span>
                <span className="reviews">({cake.reviews} reviews)</span>
              </div>

              {/* Price Section */}
              <div className="price-section">
                {editingId === cake.id ? (
                  <div className="edit-price">
                    <span>₹</span>
                    <input
                      type="number"
                      value={editForm.price}
                      onChange={(e) => handleEditChange('price', Number(e.target.value))}
                      className="price-input"
                      min="0"
                    />
                  </div>
                ) : (
                  <div className="price-display">
                    <span className="current-price">₹{cake.price}</span>
                    {cake.originalPrice > cake.price && (
                      <span className="original-price">₹{cake.originalPrice}</span>
                    )}
                  </div>
                )}
                
                {cake.originalPrice > cake.price && (
                  <span className="discount-badge">
                    {Math.round(((cake.originalPrice - cake.price) / cake.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>

              {/* Description */}
              {editingId === cake.id ? (
                <textarea
                  value={editForm.description}
                  onChange={(e) => handleEditChange('description', e.target.value)}
                  className="edit-textarea"
                  placeholder="Description"
                  rows="2"
                />
              ) : (
                <p className="product-description">{cake.description}</p>
              )}

              {/* Stock Control */}
              <div className="stock-control">
                <span className="stock-label">Stock:</span>
                {editingId === cake.id ? (
                  <input
                    type="number"
                    value={editForm.stock}
                    onChange={(e) => handleEditChange('stock', Number(e.target.value))}
                    className="stock-input"
                    min="0"
                  />
                ) : (
                  <div className="stock-display">
                    <span className={`stock-value ${cake.stock < 5 ? 'low' : ''}`}>
                      {cake.stock} {cake.unit}
                    </span>
                    <div className="stock-buttons">
                      <button 
                        className="stock-btn"
                        onClick={() => updateStock(cake.id, -1)}
                        disabled={cake.stock <= 0}
                      >
                        <Minus size={12} />
                      </button>
                      <button 
                        className="stock-btn"
                        onClick={() => updateStock(cake.id, 1)}
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="product-actions">
                {editingId === cake.id ? (
                  <>
                    <button className="action-btn save" onClick={() => saveEditing(cake.id)}>
                      <Save size={14} />
                      <span>Save</span>
                    </button>
                    <button className="action-btn cancel" onClick={cancelEditing}>
                      <X size={14} />
                      <span>Cancel</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button className="action-btn edit" onClick={() => startEditing(cake)}>
                      <Edit2 size={14} />
                      <span>Edit</span>
                    </button>
                    <button className="action-btn cart" onClick={() => addToCart(cake)}>
                      <ShoppingCart size={14} />
                      <span>Add</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={16} />
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* Detail Modal */}
      {showDetailModal && selectedCake && (
        <div className="modal-overlay" onClick={() => setShowDetailModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDetailModal(false)}>
              <X size={20} />
            </button>
            
            <div className="modal-grid">
              <div className="modal-image">
                <img src={selectedCake.image} alt={selectedCake.name} />
              </div>
              
              <div className="modal-details">
                <div className="modal-category">{selectedCake.category}</div>
                <h2 className="modal-title">{selectedCake.name}</h2>
                
                <div className="modal-rating">
                  <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  <span>{selectedCake.rating}</span>
                  <span>({selectedCake.reviews} reviews)</span>
                </div>
                
                <div className="modal-price">
                  <span className="modal-current">₹{selectedCake.price}</span>
                  {selectedCake.originalPrice > selectedCake.price && (
                    <span className="modal-original">₹{selectedCake.originalPrice}</span>
                  )}
                </div>
                
                <p className="modal-description">{selectedCake.description}</p>
                
                <div className="modal-ingredients">
                  <h4>Ingredients</h4>
                  <div className="ingredients-list">
                    {selectedCake.ingredients.map((ing, i) => (
                      <span key={i} className="ingredient-tag">{ing}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-stock">
                  <span>Stock: </span>
                  <span className={`stock-badge ${selectedCake.stock < 5 ? 'low' : 'good'}`}>
                    {selectedCake.stock} {selectedCake.unit}
                  </span>
                </div>
                
                <div className="modal-actions">
                  <button 
                    className="modal-btn primary"
                    onClick={() => {
                      addToCart(selectedCake);
                      setShowDetailModal(false);
                    }}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                  <button 
                    className="modal-btn secondary"
                    onClick={() => toggleFavorite(selectedCake.id)}
                  >
                    <Heart 
                      size={16} 
                      fill={favorites.includes(selectedCake.id) ? "#ef4444" : "none"} 
                    />
                    {favorites.includes(selectedCake.id) ? 'Favorited' : 'Add to Favorites'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;