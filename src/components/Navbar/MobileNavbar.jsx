import { Menu, X, Search, Globe, User, MessageCircle, ShoppingBag, DollarSign, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedDrawer, setExpandedDrawer] = useState(null);

  const menuItems = [
    {
      title: "Categories",
      items: ["Visualization", "Surgical power", "Arthroscopy", "Sports Medicine", "Laparoscopy"]
    },
    {
      title: "Manufacturers",
      items: ["Arthrex", "Con-Med", "Stryker", "Olympus", "Medtronic"]
    },
    {
      title: "Deals",
      items: ["All Deals", "Weakly Deals", "clearance Deals"]
    },
    {
      title: "About",
      items: ["About Us", "Our Team", "History"]
    },
    {
      title: "Services",
      items: ["Asset Management"]
    },
    {
      title: "Support",
      items: ["FAQ", "Contact", "Help Center"]
    }
  ];

  const simpleItems = [
    "Contact Us",
    "Sell Equipment",
    "Inventory Lists",
    "Catalogs"
  ];

  return (
    <div className="md:hidden w-full bg-white p-4 shadow-sm relative z-[60]">
      {/* Top Row: Menu Toggle and Icons */}
      <div className="flex justify-between items-center mb-4">
        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-9 h-9" />
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center h-14">
          <img 
            src="logo.png" 
            alt="Company Logo" 
              className="h-10 w-10 object-contain transform scale-[6.5] translate-x-15"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
         
          <MessageCircle className="w-8 h-8 cursor-pointer" />
          <div className="relative cursor-pointer">
            <ShoppingBag className="w-8 h-8" />
            <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-8 pr-4 py-2 rounded-full bg-gray-100 text-sm placeholder-gray-500 focus:outline-none"
        />
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      </div>

      {/* Mobile Menu Overlay + Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 transition-opacity duration-300 opacity-100 z-40"
          onClick={() => setMenuOpen(false)}
        >
          {/* Drawer */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-between items-center p-4 border-b">
              <div className="font-medium text-gray-900 text-lg">Menu</div>
              <button onClick={() => setMenuOpen(false)}>
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Menu Items with Drawers */}
            <nav className="p-4 space-y-1">
              <ul className="space-y-1 text-gray-700">
                {/* Drawer Items */}
                {menuItems.map((item, index) => (
                  <li key={index} className="border-b border-gray-200">
                    <button 
                      className="w-full flex justify-between items-center py-3 px-2 hover:bg-gray-100 rounded"
                      onClick={() => setExpandedDrawer(expandedDrawer === index ? null : index)}
                    >
                      <span>{item.title}</span>
                      <ChevronRight 
                        className={`w-5 h-5 transition-transform ${expandedDrawer === index ? 'rotate-90' : ''}`}
                      />
                    </button>
                    {expandedDrawer === index && (
                      <ul className="pl-4 py-2 space-y-2">
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex} className="py-1 px-2 hover:bg-gray-100 rounded">
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                {/* Simple Items (no drawers) */}
                {simpleItems.map((item, index) => (
                  <li key={`simple-${index}`} className="border-b border-gray-200">
                    <div className="py-3 px-2 hover:bg-gray-100 rounded">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
