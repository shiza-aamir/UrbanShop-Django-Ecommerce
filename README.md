
# UrbanShop - Full-Stack E-commerce Platform 🛍️

**UrbanShop** is a comprehensive e-commerce web application built using the **Django** framework. This project demonstrates end-to-end full-stack development capabilities, from database modeling and secure authentication to a responsive frontend user interface.

*This project was developed as part of the Full-Stack Developer Internship with **CodeAlpha**.*

## 🎯 Project Features & Modules

The application is structured around two main Django apps: `shop` (Core E-commerce logic) and `accounts` (User Management).

### ⚙️ Core Features:

| Feature | App | Description |
| :--- | :--- | :--- |
| **User Authentication** | `accounts` | Secure registration (`register.html`), login (`login.html`), and profile viewing (`profile.html`). |
| **Product Catalog** | `shop` | Displays all products (`product_list.html`) and individual product details (`product_detail.html`). |
| **Shopping Cart** | `shop` | Functionality for adding/removing items and managing quantities in the cart (`cart.html`). |
| **Order Management** | `shop` | Handles checkout and displays order success/details (`order_success.html`). |
| **Admin Panel** | `shop` & `accounts` | Full CRUD operations for products and user management (via `admin.py`). |


## 🛠️ Technical Stack & Structure

### Technologies Used
* **Backend Framework:** Django (Python)
* **Database:** SQLite (local development)
* **Frontend:** HTML5, CSS3 (`style.css`), JavaScript (`main.js`)
* **Templating:** Django Template Language, utilizing a `base.html` structure.

### Project Directory Structure
UrbanShop/
├── urbanshop/ (Project Configuration)
│ ├── settings.py
│ └── urls.py (Project-level URL routing)
├── shop/ (Core E-commerce App)
│ ├── models.py (Product, Order, Cart data models)
│ ├── views.py (Logic for product lists, cart actions, checkout)
│ ├── urls.py (App-level URL routing)
│ ├── templates/shop/ (HTML templates for shopping)
│ └── admin.py (Admin panel configuration)
├── accounts/ (User Management App)
│ ├── views.py (Logic for user registration, login, profile)
│ ├── urls.py (App-level URL routing)
│ └── templates/accounts/ (HTML templates for auth)
├── templates/ (Base templates)
│ └── base.html (Main template with navigation)
├── static/ (Static files)
│ ├── css/style.css
│ ├── js/main.js
│ └── images/
├── media/ (User-uploaded files)
│ └── products/
├── manage.py
├── requirements.txt (Dependencies)
└── db.sqlite3 (Database file)

## 🚀 Getting Started (Local Installation)

Follow these steps to set up and run the **UrbanShop** project on your local machine.

### Prerequisites
* Python 3.8+
* Pip (Python package installer)

### Installation Guide

1.  **Clone the Repository:**
    ```bash
    git clone [Your_Repo_URL_Here]
    cd UrbanShop-Django-Ecommerce
    ```

2.  **Create & Activate Virtual Environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # Use 'venv\Scripts\activate' on Windows
    ```

3.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Apply Migrations:**
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

5.  **Create a Superuser (Optional, for Admin Access):**
    ```bash
    python manage.py createsuperuser
    ```

6.  **Run the Server:**
    ```bash
    python manage.py runserver
    ```
    The application will now be running at `http://127.0.0.1:8000/`.


## 📱 User Flow

1. **Browse Products** → View all available products on the products page
2. **User Registration/Login** → Create account or login to existing account
3. **Add to Cart** → Select products and add them to shopping cart
4. **Checkout** → Complete purchase and receive order confirmation
5. **View Profile** → Access order history and account information


## 🗄️ Database Models

### Shop App Models:
- **Product** - Name, description, price, image, category, stock
- **Order** - User, total amount, order status, timestamps
- **OrderItem** - Links orders to products with quantities

### Accounts App Models:
- **User** - Django's built-in user model
- **Profile** - Extended user information (bio, profile picture, etc.)


## 🌟 Project Achievements

* ✅ **Full-stack Django application** with proper MVC architecture
* ✅ **Secure user authentication** system with registration/login
* ✅ **Shopping cart functionality** with session management
* ✅ **Order processing system** with database persistence
* ✅ **Responsive frontend design** with professional UI/UX
* ✅ **Admin panel** for product and user management
* ✅ **Image handling** for product photos
* ✅ **Database relationships** between users, products, and orders


## 🔗 Links

- [**Live Demo**](https://www.linkedin.com/posts/shiza-aamir-4805a1267_fullstackdeveloper-djangoproject-ecommerce-activity-7386095723584507904-k50-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFnn2ABOlqxZKOiB5-I11nfl0DygZOU1EI)]

---

## 👨‍💻 Developer

**Shiza Aamir**
- 📧 [Email](shizaaamir3@gmail.com)
- 💼 [LinkedIn](www.linkedin.com/in/shiza-aamir-4805a1267)
