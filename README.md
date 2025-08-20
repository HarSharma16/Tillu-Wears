# 🛍️ E-Commerce Website

A full-stack e-commerce platform built with React.js, Node.js, and MongoDB. This project features a modern, responsive design with complete user authentication, product management, shopping cart functionality, and admin panel.

## ✨ Features

### 🛒 User Features
- **Product Browsing**: Browse products with categories and filters
- **Product Search**: Search products by name and description
- **Product Details**: View detailed product information with multiple images
- **Shopping Cart**: Add/remove items with size selection and quantity management
- **User Authentication**: Secure login/signup with JWT tokens
- **Order Management**: View order history and track orders
- **Responsive Design**: Mobile-friendly interface

### 🔐 Authentication & Security
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes for authenticated users
- Secure token storage

### 🛍️ Shopping Experience
- **Add to Cart**: Select product size and add to cart
- **Cart Persistence**: Cart items saved locally and in database
- **Quantity Management**: Update quantities in cart
- **Cart Synchronization**: Cart syncs across devices when logged in
- **Checkout Process**: Complete order placement flow

### 👨‍💼 Admin Features
- **Product Management**: Add, edit, and remove products
- **Image Upload**: Cloudinary integration for product images
- **Inventory Management**: Track product availability
- **Order Processing**: Manage customer orders

## 🛠️ Technologies Used

### Frontend
- **React.js** - UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Toastify** - Toast notifications
- **Vite** - Build tool and development server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Multer** - File upload middleware
- **Cloudinary** - Cloud image storage

### Database
- **MongoDB** - Document-based database
- **Mongoose ODM** - Object Document Mapping

### Deployment & Tools
- **Git** - Version control
- **npm** - Package manager
- **Environment Variables** - Secure configuration management

## 📁 Project Structure

```
E-Commerce App/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context for state management
│   │   ├── assets/         # Images and static files
│   │   └── App.jsx         # Main app component
│   └── package.json
├── backend/                 # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── config/           # Configuration files
│   └── server.js         # Main server file
└── admin/                 # Admin panel
    ├── src/
    │   ├── components/    # Admin components
    │   ├── pages/        # Admin pages
    │   └── App.jsx       # Admin app
    └── package.json
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB database
- Cloudinary account (for image uploads)

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd E-Commerce-App/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   ADMIN_EMAIL=your_admin_email
   ADMIN_PASSWORD=your_admin_password
   ```

4. **Start the server**
   ```bash
   npm run server
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the frontend directory:
   ```env
   VITE_BACKEND_URL=http://localhost:5000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

### Admin Panel Setup

1. **Navigate to admin directory**
   ```bash
   cd ../admin
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the admin panel**
   ```bash
   npm run dev
   ```

## 📱 Usage

### For Users
1. **Browse Products**: Visit the homepage to see featured products
2. **Search & Filter**: Use the search bar and category filters
3. **Product Details**: Click on any product to view details
4. **Add to Cart**: Select size and add items to cart
5. **Checkout**: Proceed to checkout and place orders
6. **Account**: Create account to save cart and view orders

### For Admins
1. **Login**: Access admin panel with admin credentials
2. **Add Products**: Upload product images and details
3. **Manage Inventory**: Update product information
4. **Process Orders**: View and manage customer orders

## 🔧 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/admin` - Admin login

### Products
- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add new product (admin only)
- `POST /api/product/remove` - Remove product (admin only)
- `POST /api/product/single` - Get single product details

### Cart
- `POST /api/cart/add` - Add item to cart
- `GET /api/cart/get` - Get user's cart
- `PUT /api/cart/update` - Update cart item quantity
- `DELETE /api/cart/remove` - Remove item from cart

## 🎨 Key Features Implementation

### Shopping Cart
- **Local Storage**: Cart persists across browser sessions
- **Database Sync**: Cart syncs with database when user is logged in
- **Real-time Updates**: Cart count updates immediately
- **Size Selection**: Products require size selection before adding

### Product Management
- **Image Upload**: Multiple images per product via Cloudinary
- **Category Filtering**: Filter by Men, Women, Kids categories
- **Search Functionality**: Search by product name and description
- **Best Sellers**: Featured products section

### User Experience
- **Responsive Design**: Works on all device sizes
- **Loading States**: Smooth loading animations
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Success/error feedback

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for password security
- **Protected Routes**: Admin-only access to sensitive endpoints
- **Input Validation**: Server-side validation for all inputs
- **CORS Configuration**: Proper cross-origin resource sharing

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or local MongoDB
2. Configure environment variables
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy to Vercel, Netlify, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Har Sharma**
- GitHub: [@HarSharma16](https://github.com/HarSharma16)
- Email: harsharma16072004@gmail.com

## 🙏 Acknowledgments

- React.js community for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- MongoDB for the flexible database solution
- All open-source contributors whose packages made this project possible

---

⭐ **Star this repository if you found it helpful!**
