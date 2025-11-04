import db from "../config/db.js";

export const getProducts = (req, res) => {
  db.query("SELECT * FROM produk", (err, results) => {
    if (err) throw err;
    res.render("admin/products", { products: results });
  });
};

export const addPurchase = (req, res) => {
  const { produk_id, jumlah } = req.body;
  db.query("SELECT harga FROM produk WHERE id=?", [produk_id], (err, results) => {
    if (err) throw err;
    const harga = results[0].harga;
    const total = harga * jumlah;
    db.query("INSERT INTO pembelian (produk_id, jumlah, total) VALUES (?, ?, ?)",
      [produk_id, jumlah, total],
      err => {
        if (err) throw err;
        res.redirect("/admin/purchases");
      }
    );
  });
};

export const cancelPurchase = (req, res) => {
  const id = req.params.id;
  db.query("UPDATE pembelian SET status='dibatalkan' WHERE id=?", [id], err => {
    if (err) throw err;
    res.redirect("/admin/purchases");
  });
};

export const getPurchases = (req, res) => {
  db.query("SELECT pembelian.*, produk.nama FROM pembelian JOIN produk ON pembelian.produk_id = produk.id", (err, results) => {
    if (err) throw err;
    res.render("admin/purchases", { purchases: results });
  });
};