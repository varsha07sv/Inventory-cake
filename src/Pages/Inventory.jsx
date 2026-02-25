import "../Styles/Inventory.css";
import { useState, useRef, useEffect } from "react";
import Tesseract from "tesseract.js";
import { 
  AlertTriangle, Plus, Search, Trash2, Package, Cake, Box, SprayCan, Wrench,
  TrendingUp, TrendingDown, Flame, Layers, Edit, Target, Heart, 
  Camera, Upload, CheckCircle, RefreshCw, Barcode,
  Calendar, Clock, X, Maximize2, Minimize2, Zap
} from "lucide-react";

const categories = [
  "Raw Ingredients",
  "Finished Products",
  "Packaging", 
  "Cleaning Supplies",
  "Equipment"
];

const categoryColors = {
  "Raw Ingredients": { primary: "#10b981", light: "#d1fae5" },
  "Finished Products": { primary: "#f59e0b", light: "#fef3c7" },
  "Packaging": { primary: "#3b82f6", light: "#dbeafe" },
  "Cleaning Supplies": { primary: "#06b6d4", light: "#cffafe" },
  "Equipment": { primary: "#8b5cf6", light: "#ede9fe" }
};

const categoryIcons = {
  "Raw Ingredients": Package,
  "Finished Products": Cake,
  "Packaging": Box,
  "Cleaning Supplies": SprayCan,
  "Equipment": Wrench
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Raw Ingredients");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const [showScanner, setShowScanner] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scanSuccess, setScanSuccess] = useState(null);
  const [lastScanned, setLastScanned] = useState(null);
  const [scannedItems, setScannedItems] = useState([]);
  const [showScanHistory, setShowScanHistory] = useState(false);
  const [scannerFullscreen, setScannerFullscreen] = useState(false);
  const [scannerError, setScannerError] = useState(null);
  const [manualBarcode, setManualBarcode] = useState("");
  const [showManualEntry, setShowManualEntry] = useState(false);
  
 
  const [showInvoiceScanner, setShowInvoiceScanner] = useState(false);
  const [invoiceLoading, setInvoiceLoading] = useState(false);
  const [invoiceItems, setInvoiceItems] = useState([]);
  
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const scanIntervalRef = useRef(null);
  const [scannerInitialized, setScannerInitialized] = useState(false);

  const [items, setItems] = useState({
    "Raw Ingredients": [
      { id: 1, name: "All-purpose flour", stock: 20, unit: "kg", minStock: 10, price: 45, supplier: "Flour Mills Co.", barcode: "8901234567890", lastUpdated: "2024-02-20" },
      { id: 2, name: "Cake flour", stock: 15, unit: "kg", minStock: 8, price: 55, supplier: "Flour Mills Co.", barcode: "8901234567891", lastUpdated: "2024-02-20" },
      { id: 3, name: "White sugar", stock: 25, unit: "kg", minStock: 15, price: 40, supplier: "Sweet Supplies Inc.", barcode: "8901234567892", lastUpdated: "2024-02-19" },
      { id: 4, name: "Brown sugar", stock: 10, unit: "kg", minStock: 8, price: 45, supplier: "Sweet Supplies Inc.", barcode: "8901234567893", lastUpdated: "2024-02-19" },
      { id: 5, name: "Powdered sugar", stock: 8, unit: "kg", minStock: 5, price: 50, supplier: "Sweet Supplies Inc.", barcode: "8901234567894", lastUpdated: "2024-02-18" },
      { id: 6, name: "Unsalted butter", stock: 12, unit: "blocks", minStock: 8, price: 320, supplier: "Dairy Best", barcode: "8901234567895", lastUpdated: "2024-02-18" },
      { id: 7, name: "Salted butter", stock: 8, unit: "blocks", minStock: 5, price: 310, supplier: "Dairy Best", barcode: "8901234567896", lastUpdated: "2024-02-17" },
      { id: 8, name: "Eggs (large)", stock: 30, unit: "dozen", minStock: 15, price: 70, supplier: "Fresh Farms", barcode: "8901234567897", lastUpdated: "2024-02-20" },
      { id: 9, name: "Milk", stock: 15, unit: "liters", minStock: 10, price: 55, supplier: "Dairy Best", barcode: "8901234567898", lastUpdated: "2024-02-20" },
      { id: 10, name: "Heavy cream", stock: 8, unit: "liters", minStock: 5, price: 180, supplier: "Dairy Best", barcode: "8901234567899", lastUpdated: "2024-02-19" },
      { id: 11, name: "Baking powder", stock: 12, unit: "boxes", minStock: 6, price: 85, supplier: "BakeGoods", barcode: "8901234567900", lastUpdated: "2024-02-19" },
      { id: 12, name: "Baking soda", stock: 10, unit: "boxes", minStock: 5, price: 45, supplier: "BakeGoods", barcode: "8901234567901", lastUpdated: "2024-02-18" },
      { id: 13, name: "Vanilla extract", stock: 7, unit: "bottles", minStock: 4, price: 95, supplier: "Flavor House", barcode: "8901234567902", lastUpdated: "2024-02-18" },
      { id: 14, name: "Almond extract", stock: 5, unit: "bottles", minStock: 3, price: 110, supplier: "Flavor House", barcode: "8901234567903", lastUpdated: "2024-02-17" },
      { id: 15, name: "Cocoa powder", stock: 9, unit: "kg", minStock: 5, price: 280, supplier: "ChocoDelight", barcode: "8901234567904", lastUpdated: "2024-02-20" },
      { id: 16, name: "Salt", stock: 25, unit: "kg", minStock: 10, price: 20, supplier: "Spice World", barcode: "8901234567905", lastUpdated: "2024-02-20" },
      { id: 17, name: "Cinnamon", stock: 6, unit: "kg", minStock: 3, price: 150, supplier: "Spice World", barcode: "8901234567906", lastUpdated: "2024-02-19" },
      { id: 18, name: "Nutmeg", stock: 4, unit: "kg", minStock: 2, price: 220, supplier: "Spice World", barcode: "8901234567907", lastUpdated: "2024-02-19" },
      { id: 19, name: "Yeast", stock: 15, unit: "packs", minStock: 8, price: 35, supplier: "BakeGoods", barcode: "8901234567908", lastUpdated: "2024-02-18" },
      { id: 20, name: "Vegetable oil", stock: 18, unit: "liters", minStock: 10, price: 110, supplier: "Oil Co.", barcode: "8901234567909", lastUpdated: "2024-02-18" },
    ],
    "Finished Products": [
      { id: 21, name: "Chocolate cake", stock: 5, unit: "pcs", minStock: 3, price: 450, barcode: "FIN001", lastUpdated: "2024-02-20" },
      { id: 22, name: "Vanilla cake", stock: 8, unit: "pcs", minStock: 4, price: 420, barcode: "FIN002", lastUpdated: "2024-02-20" },
      { id: 23, name: "Red velvet cake", stock: 3, unit: "pcs", minStock: 2, price: 480, barcode: "FIN003", lastUpdated: "2024-02-19" },
      { id: 24, name: "Black forest cake", stock: 4, unit: "pcs", minStock: 2, price: 520, barcode: "FIN004", lastUpdated: "2024-02-19" },
      { id: 25, name: "Cheesecake", stock: 3, unit: "pcs", minStock: 2, price: 550, barcode: "FIN005", lastUpdated: "2024-02-18" },
      { id: 26, name: "Cupcakes (dozen)", stock: 6, unit: "boxes", minStock: 4, price: 360, barcode: "FIN006", lastUpdated: "2024-02-20" },
      { id: 27, name: "Brownies (dozen)", stock: 5, unit: "boxes", minStock: 3, price: 300, barcode: "FIN007", lastUpdated: "2024-02-20" },
      { id: 28, name: "Cookies (dozen)", stock: 7, unit: "boxes", minStock: 4, price: 240, barcode: "FIN008", lastUpdated: "2024-02-19" },
      { id: 29, name: "Macarons (dozen)", stock: 4, unit: "boxes", minStock: 2, price: 480, barcode: "FIN009", lastUpdated: "2024-02-19" },
      { id: 30, name: "Croissants", stock: 12, unit: "pcs", minStock: 6, price: 60, barcode: "FIN010", lastUpdated: "2024-02-18" },
    ],
    "Packaging": [
      { id: 31, name: "Cake boxes (1/2 kg)", stock: 45, unit: "pcs", minStock: 20, price: 25, supplier: "PackPlus", barcode: "PKG001", lastUpdated: "2024-02-20" },
      { id: 32, name: "Cake boxes (1 kg)", stock: 38, unit: "pcs", minStock: 15, price: 30, supplier: "PackPlus", barcode: "PKG002", lastUpdated: "2024-02-20" },
      { id: 33, name: "Cake boxes (2 kg)", stock: 25, unit: "pcs", minStock: 10, price: 40, supplier: "PackPlus", barcode: "PKG003", lastUpdated: "2024-02-19" },
      { id: 34, name: "Cupcake boxes", stock: 30, unit: "pcs", minStock: 15, price: 35, supplier: "PackPlus", barcode: "PKG004", lastUpdated: "2024-02-20" },
      { id: 35, name: "Cookie boxes", stock: 40, unit: "pcs", minStock: 20, price: 28, supplier: "PackPlus", barcode: "PKG005", lastUpdated: "2024-02-19" },
    ],
    "Cleaning Supplies": [
      { id: 36, name: "Dish soap", stock: 12, unit: "bottles", minStock: 6, price: 85, supplier: "CleanCo", barcode: "CLN001", lastUpdated: "2024-02-19" },
      { id: 37, name: "All-purpose cleaner", stock: 10, unit: "bottles", minStock: 5, price: 120, supplier: "CleanCo", barcode: "CLN002", lastUpdated: "2024-02-19" },
      { id: 38, name: "Glass cleaner", stock: 8, unit: "bottles", minStock: 4, price: 95, supplier: "CleanCo", barcode: "CLN003", lastUpdated: "2024-02-18" },
      { id: 39, name: "Disinfectant wipes", stock: 15, unit: "containers", minStock: 8, price: 150, supplier: "CleanCo", barcode: "CLN004", lastUpdated: "2024-02-18" },
      { id: 40, name: "Paper towels", stock: 25, unit: "rolls", minStock: 12, price: 45, supplier: "CleanCo", barcode: "CLN005", lastUpdated: "2024-02-20" },
    ],
    "Equipment": [
      { id: 41, name: "Mixing bowls (set)", stock: 8, unit: "sets", minStock: 4, price: 450, supplier: "KitchenPro", barcode: "EQP001", lastUpdated: "2024-02-18" },
      { id: 42, name: "Measuring cups", stock: 10, unit: "sets", minStock: 5, price: 120, supplier: "KitchenPro", barcode: "EQP002", lastUpdated: "2024-02-18" },
      { id: 43, name: "Measuring spoons", stock: 12, unit: "sets", minStock: 6, price: 80, supplier: "KitchenPro", barcode: "EQP003", lastUpdated: "2024-02-17" },
      { id: 44, name: "Whisks", stock: 15, unit: "pcs", minStock: 8, price: 90, supplier: "KitchenPro", barcode: "EQP004", lastUpdated: "2024-02-17" },
      { id: 45, name: "Spatulas", stock: 18, unit: "pcs", minStock: 9, price: 70, supplier: "KitchenPro", barcode: "EQP005", lastUpdated: "2024-02-20" },
    ],
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/quagga/dist/quagga.min.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
      if (scanIntervalRef.current) {
        clearInterval(scanIntervalRef.current);
      }
      if (window.Quagga) {
        window.Quagga.stop();
      }
    };
  }, []);


  const initializeScanner = async () => {
    setScannerError(null);
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "environment" } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        

        videoRef.current.onloadedmetadata = () => {
          setScannerInitialized(true);
          startScanning();
        };
      }
    } catch (error) {
      setScannerError("Camera access denied. Please allow camera access to scan.");
      console.error("Camera error:", error);
    }
  };

  const startScanning = () => {
    if (!window.Quagga) {
      setTimeout(startScanning, 500);
      return;
    }

    const canvas = canvasRef.current;
    const video = videoRef.current;
    
    if (!canvas || !video) return;

    const context = canvas.getContext('2d');
    
    scanIntervalRef.current = setInterval(() => {
      if (!video.videoWidth) return;
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      window.Quagga.decodeSingle({
        src: canvas.toDataURL(),
        numOfWorkers: 0,
        inputStream: {
          size: 800
        },
        decoder: {
          readers: ["ean_reader", "ean_8_reader", "code_128_reader", "code_39_reader", "upc_reader"]
        }
      }, (result) => {
        if (result && result.codeResult) {
          const barcode = result.codeResult.code;
          handleScannedBarcode(barcode);
        }
      });
    }, 500);
  };
  const handleScannedBarcode = (barcode) => {

    let foundItem = null;
    let foundCategory = null;
    
    Object.entries(items).forEach(([category, categoryItems]) => {
      const item = categoryItems.find(i => i.barcode === barcode);
      if (item) {
        foundItem = item;
        foundCategory = category;
      }
    });

    if (foundItem) {
      const updated = { ...items };
      const itemIndex = updated[foundCategory].findIndex(i => i.id === foundItem.id);
      
      if (itemIndex !== -1) {
        updated[foundCategory][itemIndex].stock += 1; // Add 1 unit
        updated[foundCategory][itemIndex].lastUpdated = new Date().toISOString().split('T')[0];
        
        setItems(updated);
        const newScannedItem = {
          id: foundItem.id,
          name: foundItem.name,
          scannedQty: 1,
          unit: foundItem.unit,
          barcode: barcode,
          timestamp: new Date().toLocaleTimeString()
        };
        
        setScannedItems(prev => [newScannedItem, ...prev].slice(0, 10));
        setLastScanned(new Date().toLocaleString());
        setScanSuccess(`Scanned: ${foundItem.name} (+1 ${foundItem.unit})`);
        
       
        setTimeout(() => setScanSuccess(null), 3000);
        
       
        if (navigator.vibrate) {
          navigator.vibrate(200);
        }
      }
    } else {
      setScanSuccess(`Unknown barcode: ${barcode}`);
      setTimeout(() => setScanSuccess(null), 3000);
    }
  };
  const handleManualBarcode = () => {
    if (!manualBarcode) return;
    handleScannedBarcode(manualBarcode);
    setManualBarcode("");
    setShowManualEntry(false);
  };
  const openScanner = () => {
    setShowScanner(true);
    initializeScanner();
  };
  const closeScanner = () => {
    setShowScanner(false);
    setScannerFullscreen(false);
    setScannerInitialized(false);
    
    if (scanIntervalRef.current) {
      clearInterval(scanIntervalRef.current);
    }
    
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
  };
  const toggleFullscreen = () => {
    setScannerFullscreen(!scannerFullscreen);
  };
  const handleInvoiceUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setInvoiceLoading(true);

    try {
      const result = await Tesseract.recognize(file, "eng");
      const text = result.data.text;

      const lines = text.split("\n");
      const extracted = [];

      lines.forEach((line) => {
        const match = line.match(/(.+)\s+(\d+)\s+(\d+)/);
        if (match) {
          extracted.push({
            name: match[1].trim(),
            quantity: Number(match[2]),
            price: Number(match[3]),
          });
        }
      });

      setInvoiceItems(extracted);
      setShowInvoiceScanner(true);
    } catch (err) {
      alert("Invoice scan failed");
    }

    setInvoiceLoading(false);
  };

  const confirmInvoiceUpdate = () => {
    const updated = { ...items };

    invoiceItems.forEach((invItem) => {
      Object.keys(updated).forEach((category) => {
        const found = updated[category].find(
          (i) =>
            i.name.toLowerCase() === invItem.name.toLowerCase()
        );

        if (found) {
          found.stock += invItem.quantity;
          found.lastUpdated = new Date().toISOString().split("T")[0];
        }
      });
    });

    setItems(updated);
    setShowInvoiceScanner(false);
    setInvoiceItems([]);
    alert("Inventory Updated from Invoice ✅");
  };

  const addItem = () => {
    if (!itemName.trim() || !quantity) return;
    
    const updated = { ...items };
    updated[activeCategory].push({
      id: Date.now(),
      name: itemName.trim(),
      stock: Number(quantity),
      unit: "pcs",
      minStock: 5,
      price: 0,
      supplier: "Manual Entry",
      barcode: `MAN${Date.now()}`,
      lastUpdated: new Date().toISOString().split('T')[0]
    });
    setItems(updated);
    setItemName("");
    setQuantity("");
  };

  const deleteItem = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const updated = { ...items };
      updated[activeCategory] = updated[activeCategory].filter(
        (item) => item.id !== id
      );
      setItems(updated);
    }
  };

  const updateStock = (id, newStock) => {
    if (newStock < 0) return;
    const updated = { ...items };
    const item = updated[activeCategory].find(item => item.id === id);
    if (item) {
      item.stock = Number(newStock);
      item.lastUpdated = new Date().toISOString().split('T')[0];
    }
    setItems(updated);
    setEditingId(null);
  };

  const filteredItems = items[activeCategory].filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = items[activeCategory].length;
  const totalStock = items[activeCategory].reduce((acc, item) => acc + item.stock, 0);
  const lowStockInCategory = items[activeCategory].filter(item => item.stock < (item.minStock || 10)).length;
  const categoryHealth = totalItems ? Math.round((totalItems - lowStockInCategory) / totalItems * 100) : 0;
  
  const lowStockCount = Object.values(items)
    .flat()
    .filter((item) => item.stock < (item.minStock || 10)).length;

  const criticalStockCount = Object.values(items)
    .flat()
    .filter((item) => item.stock < (item.minStock || 10) / 2).length;

  const totalValue = Object.values(items)
    .flat()
    .reduce((acc, item) => acc + (item.stock * (item.price || 0)), 0);

  const getStockStatus = (stock, minStock = 10) => {
    if (stock < minStock / 2) return { 
      label: 'Critical',
      color: '#fee2e2',
      textColor: '#b91c1c',
      border: '#fecaca',
      icon: Flame
    };
    if (stock < minStock) return { 
      label: 'Low',
      color: '#ffedd5',
      textColor: '#9a3412',
      border: '#fed7aa',
      icon: TrendingDown
    };
    if (stock < minStock * 1.5) return { 
      label: 'Medium',
      color: '#fef9c3',
      textColor: '#854d0e',
      border: '#fef08a',
      icon: Target
    };
    return { 
      label: 'Good',
      color: '#dcfce7',
      textColor: '#166534',
      border: '#bbf7d0',
      icon: TrendingUp
    };
  };

  const IconComponent = categoryIcons[activeCategory] || Package;

  return (
    <div className="app">
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <div className="logo-wrapper" style={{ background: `linear-gradient(135deg, ${categoryColors[activeCategory]?.primary || '#8b5cf6'}, #c084fc)` }}>
              <Package className="logo-icon" />
            </div>
            <div>
              <h1 className="logo-text">Inventory Management</h1>
              <p className="logo-subtext">Track and manage your stock efficiently</p>
            </div>
          </div>
          
          <div className="header-stats">
            <div className="stat-badge stat-critical">
              <Flame className="stat-icon" />
              <span>{criticalStockCount} Critical</span>
            </div>
            <div className="stat-badge stat-low">
              <AlertTriangle className="stat-icon" />
              <span>{lowStockCount} Low Stock</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-total">
              <p className="stat-total-value">₹{totalValue.toLocaleString()}</p>
              <p className="stat-total-label">Inventory Value</p>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="tabs-container">
          <nav className="tabs-nav">
            {categories.map((category) => {
              const Icon = categoryIcons[category];
              const isActive = activeCategory === category;
              const color = categoryColors[category]?.primary || '#8b5cf6';
              
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`tab-btn ${isActive ? 'active' : ''}`}
                  style={isActive ? { borderBottomColor: color, color: color } : {}}
                >
                  <Icon className="tab-icon" style={isActive ? { color: color } : {}} />
                  <span>{category}</span>
                  <span className="tab-count" style={isActive ? { background: categoryColors[category]?.light, color: color } : {}}>
                    {items[category].length}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="scanner-section">
          <div className="scanner-header">
            <div className="scanner-title">
              <Zap className="scanner-title-icon" />
              <h2>Barcode & Invoice Scanner</h2>
            </div>
            <div className="scanner-actions">
              <button 
                className="scanner-btn scan-btn"
                onClick={openScanner}
              >
                <Camera />
                <span>Scan Barcode</span>
              </button>
              <button 
                className="scanner-btn upload-btn"
                onClick={() => document.getElementById("invoiceUpload").click()}
              >
                <Upload />
                <span>Scan Invoice</span>
              </button>
              <input
                type="file"
                accept="image/*"
                id="invoiceUpload"
                style={{ display: "none" }}
                onChange={handleInvoiceUpload}
              />
              <button 
                className="scanner-btn upload-btn"
                onClick={() => setShowManualEntry(true)}
              >
                <Barcode />
                <span>Enter Barcode</span>
              </button>
              <button 
                className="scanner-btn history-btn"
                onClick={() => {
                  console.log('History clicked - current state:', showScanHistory);
                  console.log('Scanned items:', scannedItems);
                  setShowScanHistory(!showScanHistory);
                }}
              >
                <Clock />
                <span>History ({scannedItems.length})</span>
              </button>
            </div>
          </div>

         
          {showManualEntry && (
            <div className="manual-barcode">
              <input
                type="text"
                value={manualBarcode}
                onChange={(e) => setManualBarcode(e.target.value)}
                placeholder="Enter barcode number"
                className="barcode-input"
                onKeyPress={(e) => e.key === 'Enter' && handleManualBarcode()}
                autoFocus
              />
              <button onClick={handleManualBarcode} className="barcode-submit">
                <CheckCircle />
              </button>
              <button onClick={() => setShowManualEntry(false)} className="barcode-cancel">
                <X />
              </button>
            </div>
          )}

       
          {scanSuccess && (
            <div className="scan-success">
              <CheckCircle className="success-icon" />
              <span>{scanSuccess}</span>
            </div>
          )}

          {lastScanned && (
            <div className="last-scanned">
              <Calendar className="scanned-icon" />
              <span>Last scan: {lastScanned}</span>
            </div>
          )}

          {showScanHistory && (
            <div className="scan-history">
              <div className="history-header">
                <h3>Recent Scans</h3>
                <button onClick={() => setShowScanHistory(false)} className="history-close-btn">
                  <X size={16} />
                </button>
              </div>
              <div className="history-list">
                {scannedItems.length > 0 ? (
                  scannedItems.map((item, index) => (
                    <div key={index} className="history-item">
                      <div className="history-item-info">
                        <span className="history-item-name">{item.name}</span>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '4px' }}>
                          <span className="history-item-barcode">{item.barcode}</span>
                          <span className="history-item-time">{item.timestamp}</span>
                        </div>
                      </div>
                      <span className="history-item-qty">+{item.scannedQty} {item.unit}</span>
                    </div>
                  ))
                ) : (
                  <div className="empty-history">
                    <p>No scans yet</p>
                    <p className="empty-history-sub">Scan a barcode to see history here</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {showScanner && (
          <div className={`scanner-modal ${scannerFullscreen ? 'fullscreen' : ''}`}>
            <div className="scanner-modal-header">
              <h3>Scan Barcode</h3>
              <div className="scanner-modal-actions">
                <button onClick={toggleFullscreen} className="scanner-modal-btn">
                  {scannerFullscreen ? <Minimize2 /> : <Maximize2 />}
                </button>
                <button onClick={closeScanner} className="scanner-modal-btn close">
                  <X />
                </button>
              </div>
            </div>
            
            <div className="scanner-container">
              <video
                ref={videoRef}
                className="scanner-video"
                playsInline
              />
              <canvas
                ref={canvasRef}
                className="scanner-canvas"
                style={{ display: 'none' }}
              />
              
              {!scannerInitialized && !scannerError && (
                <div className="scanner-loading">
                  <RefreshCw className="spinning" />
                  <p>Initializing camera...</p>
                </div>
              )}
              
              {scannerError && (
                <div className="scanner-error">
                  <AlertTriangle />
                  <p>{scannerError}</p>
                  <button onClick={initializeScanner} className="retry-btn">
                    Try Again
                  </button>
                </div>
              )}
              
              <div className="scanner-overlay">
                <div className="scan-area">
                  <div className="scan-line"></div>
                </div>
                <p className="scan-instruction">
                  Position barcode within the frame
                </p>
              </div>
            </div>
          </div>
        )}

        {showInvoiceScanner && (
          <div className="scanner-modal">
            <div className="scanner-modal-header">
              <h3>Invoice Preview</h3>
              <div className="scanner-modal-actions">
                <button
                  onClick={() => setShowInvoiceScanner(false)}
                  className="scanner-modal-btn close"
                >
                  <X />
                </button>
              </div>
            </div>

            <div className="invoice-preview">
              {invoiceLoading && <p className="invoice-loading">Scanning invoice...</p>}

              {invoiceItems.map((item, index) => (
                <div key={index} className="invoice-item-row">
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => {
                      const updated = [...invoiceItems];
                      updated[index].name = e.target.value;
                      setInvoiceItems(updated);
                    }}
                    placeholder="Item name"
                    className="invoice-input"
                  />
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => {
                      const updated = [...invoiceItems];
                      updated[index].quantity = Number(e.target.value);
                      setInvoiceItems(updated);
                    }}
                    placeholder="Qty"
                    className="invoice-input-small"
                  />
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => {
                      const updated = [...invoiceItems];
                      updated[index].price = Number(e.target.value);
                      setInvoiceItems(updated);
                    }}
                    placeholder="Price"
                    className="invoice-input-small"
                  />
                  <button
                    onClick={() =>
                      setInvoiceItems(invoiceItems.filter((_, i) => i !== index))
                    }
                    className="invoice-remove-btn"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}

              <div className="invoice-actions">
                <button
                  onClick={confirmInvoiceUpdate}
                  className="invoice-confirm-btn"
                  disabled={invoiceItems.length === 0}
                >
                  <CheckCircle />
                  <span>Confirm & Update Inventory</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {criticalStockCount > 0 && (
          <div className="alert-banner">
            <div className="alert-content" style={{ background: `linear-gradient(135deg, #ef4444, #f97316)` }}>
              <div className="alert-icon-wrapper">
                <AlertTriangle className="alert-icon" />
              </div>
              <div className="alert-text">
                <span className="alert-highlight">{criticalStockCount} items</span> have critically low stock! Need immediate attention.
              </div>
              <button className="alert-button">View All</button>
            </div>
          </div>
        )}

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-card-header">
              <div className="stat-icon-wrapper" style={{ background: categoryColors[activeCategory]?.light }}>
                <IconComponent className="stat-card-icon" style={{ color: categoryColors[activeCategory]?.primary }} />
              </div>
              <span className="stat-card-value">{totalItems}</span>
            </div>
            <p className="stat-card-label">Items in {activeCategory}</p>
          </div>

          <div className="stat-card">
            <div className="stat-card-header">
              <div className="stat-icon-wrapper" style={{ background: '#d1fae5' }}>
                <TrendingUp className="stat-card-icon" style={{ color: '#10b981' }} />
              </div>
              <span className="stat-card-value">{totalStock}</span>
            </div>
            <p className="stat-card-label">Total Stock Units</p>
          </div>

          <div className="stat-card">
            <div className="stat-card-header">
              <div className="stat-icon-wrapper" style={{ background: '#fef3c7' }}>
                <Target className="stat-card-icon" style={{ color: '#f59e0b' }} />
              </div>
              <span className="stat-card-value">{lowStockInCategory}</span>
            </div>
            <p className="stat-card-label">Low Stock Items</p>
          </div>

          <div className="stat-card">
            <div className="stat-card-header">
              <div className="stat-icon-wrapper" style={{ background: '#ede9fe' }}>
                <Heart className="stat-card-icon" style={{ color: '#8b5cf6' }} />
              </div>
              <span className="stat-card-value">{categoryHealth}%</span>
            </div>
            <p className="stat-card-label">Category Health</p>
          </div>
        </div>

        <div className="form-card">
          <h2 className="form-title">Add New Item</h2>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Item Name</label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter item name"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="0"
                min="0"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="form-select"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="form-group form-button-group">
              <button
                onClick={addItem}
                disabled={!itemName.trim() || !quantity}
                className="form-button"
                style={{ background: `linear-gradient(135deg, ${categoryColors[activeCategory]?.primary || '#8b5cf6'}, #c084fc)` }}
              >
                <Plus className="button-icon" />
                <span>Add Item</span>
              </button>
            </div>
          </div>
        </div>

        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search items..."
            className="search-input"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm("")} className="search-clear">
              ✕
            </button>
          )}
        </div>

        <div className="table-container">
          <div className="table-header">
            <div className="table-row">
              <div className="table-cell col-4">Item Name</div>
              <div className="table-cell col-2">Barcode</div>
              <div className="table-cell col-2">Stock</div>
              <div className="table-cell col-2">Min Stock</div>
              <div className="table-cell col-1">Status</div>
              <div className="table-cell col-1 text-right">Actions</div>
            </div>
          </div>

          <div className="table-body">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => {
                const status = getStockStatus(item.stock, item.minStock);
                const StatusIcon = status.icon;
                
                return (
                  <div key={item.id} className="table-row table-row-hover">
                    <div className="table-cell col-4">
                      <div className="item-info">
                        <div className="item-dot" style={{ background: categoryColors[activeCategory]?.primary }}></div>
                        <div>
                          <p className="item-name">{item.name}</p>
                          <p className="item-id">{item.supplier || 'No supplier'}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="table-cell col-2">
                      <span className="item-barcode">{item.barcode}</span>
                    </div>
                    
                    <div className="table-cell col-2">
                      {editingId === item.id ? (
                        <input
                          type="number"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onBlur={() => updateStock(item.id, editValue)}
                          onKeyPress={(e) => e.key === 'Enter' && updateStock(item.id, editValue)}
                          className="stock-input"
                          autoFocus
                          min="0"
                        />
                      ) : (
                        <div className="stock-display">
                          <span className="stock-value">{item.stock}</span>
                          <span className="stock-unit">{item.unit}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="table-cell col-2">
                      <span className="min-stock">{item.minStock || 10} {item.unit}</span>
                    </div>
                    
                    <div className="table-cell col-1">
                      <span className="status-badge" style={{ background: status.color, color: status.textColor, borderColor: status.border }}>
                        <StatusIcon className="status-icon" />
                        <span>{status.label}</span>
                      </span>
                    </div>
                    
                    <div className="table-cell col-1 actions">
                      <button
                        onClick={() => {
                          setEditingId(item.id);
                          setEditValue(item.stock);
                        }}
                        className="action-btn edit-btn"
                        title="Edit stock"
                      >
                        <Edit className="action-icon" />
                      </button>
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="action-btn delete-btn"
                        title="Delete item"
                      >
                        <Trash2 className="action-icon" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="empty-state">
                <div className="empty-icon-wrapper">
                  <Package className="empty-icon" />
                </div>
                <p className="empty-title">No items found</p>
                <p className="empty-text">
                  {searchTerm ? 'Try adjusting your search' : 'Add your first item using the form above'}
                </p>
              </div>
            )}
          </div>

          {filteredItems.length > 0 && (
            <div className="table-footer">
              <div className="footer-left">
                Showing <strong>{filteredItems.length}</strong> of <strong>{totalItems}</strong> items
              </div>
              <div className="footer-right">
                <div className="legend-item">
                  <span className="legend-dot" style={{ background: '#22c55e' }}></span>
                  <span>Good</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot" style={{ background: '#eab308' }}></span>
                  <span>Medium</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot" style={{ background: '#f97316' }}></span>
                  <span>Low</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot" style={{ background: '#ef4444' }}></span>
                  <span>Critical</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}