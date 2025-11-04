CREATE DATABASE toko_db;
USE toko_db;

CREATE TABLE produk (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100),
  harga DECIMAL(10,2),
  deskripsi TEXT
);

CREATE TABLE stok (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produk_id INT,
  jumlah INT,
  FOREIGN KEY (produk_id) REFERENCES produk(id)
);

CREATE TABLE pembelian (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produk_id INT,
  jumlah INT,
  total DECIMAL(10,2),
  tanggal TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('selesai', 'dibatalkan') DEFAULT 'selesai',
  FOREIGN KEY (produk_id) REFERENCES produk(id)
);

-- Contoh data produk
INSERT INTO produk (nama, harga, deskripsi) VALUES
('Produk A', 10000, 'Deskripsi produk A'),
('Produk B', 15000, 'Deskripsi produk B'),
('Produk C', 20000, 'Deskripsi produk C'),
('Produk D', 25000, 'Deskripsi produk D'),
('Produk E', 30000, 'Deskripsi produk E'),
('Produk F', 35000, 'Deskripsi produk F'),
('Produk G', 40000, 'Deskripsi produk G'),
('Produk H', 45000, 'Deskripsi produk H'),
('Produk I', 50000, 'Deskripsi produk I'),
('Produk J', 55000, 'Deskripsi produk J');