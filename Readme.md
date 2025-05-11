# Book Service

## Overview
The book service is responsible for managing the catalog of books, search/filter books by category, price, author and handle stock availability

## ⚙️ Setup Instructions

### 1. Clone the repo

``
git clone https://github.com/AnkitJha24/Book-Service
cd Book-Service

### 2.Install dependencies

rm -rf node_modules
rm package-lock.json
npm install

### 3. Running the Service

npm start

### 4.Docker Support

docker build -t book-service .
docker run -p 4000:4000 --env-file .env notification-service