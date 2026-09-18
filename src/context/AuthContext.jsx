import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AUTH_STORAGE_KEY = 'yb_auth_session_v1';

const INITIAL_ORDERS = [
  {
    id: "YB-9824",
    date: "September 10, 2026",
    status: "Delivered",
    trackingNumber: "DHL-9082341-NG",
    carrier: "DHL Express Luxury Courier",
    deliveryDate: "September 12, 2026",
    shippingAddress: {
      fullName: "Alexander Oladipo",
      street: "14 Alexander Avenue, Old Ikoyi",
      city: "Lagos",
      country: "Nigeria"
    },
    items: [
      {
        id: "yb-ring-001",
        name: "Radiance Signet Ring",
        price: 95000,
        quantity: 1,
        selectedColor: "18K Gold",
        selectedSize: "US 9",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop"
      },
      {
        id: "yb-cuff-015",
        name: "Architectural Ear Cuff (Pair)",
        price: 52000,
        quantity: 1,
        selectedColor: "Gold",
        selectedSize: "Universal Fit",
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop"
      }
    ],
    total: 147000
  },
  {
    id: "YB-7410",
    date: "July 22, 2026",
    status: "Delivered",
    trackingNumber: "DHL-7819230-NG",
    carrier: "DHL Express Luxury Courier",
    deliveryDate: "July 24, 2026",
    shippingAddress: {
      fullName: "Alexander Oladipo",
      street: "14 Alexander Avenue, Old Ikoyi",
      city: "Lagos",
      country: "Nigeria"
    },
    items: [
      {
        id: "yb-sun-003",
        name: "Atlas Sculpted Square Sunglasses",
        price: 125000,
        quantity: 1,
        selectedColor: "Deep Obsidian",
        selectedSize: "One Size",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop"
      }
    ],
    total: 125000
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(AUTH_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load user auth', e);
    }
    // Default simulated VIP client profile
    return {
      name: "Alexander Oladipo",
      email: "alexander.oladipo@jeden.com",
      phone: "+234 802 890 1142",
      tier: "Private Client Circle",
      memberSince: "2025",
      addresses: [
        {
          id: "addr-1",
          isDefault: true,
          label: "Primary Residence",
          fullName: "Alexander Oladipo",
          street: "14 Alexander Avenue, Old Ikoyi",
          city: "Lagos",
          state: "Lagos State",
          country: "Nigeria",
          phone: "+234 802 890 1142"
        },
        {
          id: "addr-2",
          isDefault: false,
          label: "London Residence",
          fullName: "Alexander Oladipo",
          street: "28 Berkeley Square, Mayfair",
          city: "London",
          state: "Greater London",
          country: "United Kingdom",
          phone: "+44 20 7946 0912"
        }
      ]
    };
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('yb_user_orders_v1');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch (e) {
      return INITIAL_ORDERS;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('yb_user_orders_v1', JSON.stringify(orders));
  }, [orders]);

  const login = (email, password) => {
    const mockUser = {
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      email,
      phone: "+234 803 000 1234",
      tier: "Private Client Circle",
      memberSince: "2026",
      addresses: [
        {
          id: "addr-new",
          isDefault: true,
          label: "Home Address",
          fullName: email.split('@')[0].replace('.', ' ').toUpperCase(),
          street: "Victoria Island",
          city: "Lagos",
          country: "Nigeria"
        }
      ]
    };
    setUser(mockUser);
    return true;
  };

  const register = (name, email, password) => {
    const newUser = {
      name,
      email,
      phone: "+234 800 000 0000",
      tier: "Private Client Circle",
      memberSince: "2026",
      addresses: []
    };
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const addOrder = (newOrder) => {
    setOrders(prev => [newOrder, ...prev]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        orders,
        login,
        register,
        logout,
        addOrder
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
