# Crafticom

Crafticom is a modern e-commerce platform designed to connect artisans with craft enthusiasts. The platform provides a seamless interface for artisans to showcase their handmade products and for customers to discover unique handcrafted treasures.

## Features

- **User Authentication**
  - Secure signup and login system
  - Role-based access (Craftizen, Artisan, Admin)
  - Password recovery functionality
  - Phone number and email verification

- **Artisan Features**
  - Personalized artisan profiles
  - Product management system
  - Custom storefront customization
  - Order management

- **Customer Features (Craftizen)**
  - Product discovery and browsing
  - User profiles
  - Shopping cart functionality
  - Secure payment integration

- **Admin Dashboard**
  - Craft management
  - Platform monitoring

## Tech Stack

- **Frontend**
  - Next.js 15.3.3
  - React 19
  - Tailwind CSS
  - Radix UI Components
  - TypeScript

- **Backend**
  - Next.js API Routes
  - MongoDB with Mongoose
  - JWT Authentication
  - Argon2 for password hashing

- **Security**
  - JWT-based authentication
  - Secure password handling
  - Input validation
  - Protected API routes

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- MongoDB instance
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd crafticom
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `/src/app` - Next.js pages and routing
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and database connection
- `/src/models` - MongoDB schemas
- `/src/types` - TypeScript type definitions
- `/public` - Static assets

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License


## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI Components from [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)