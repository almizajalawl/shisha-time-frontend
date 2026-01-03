import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// منتجات تجريبية (نعدّلها لاحقًا)
const products = [
  { id: 1, name: "فحم مكعبات", price: 35 },
  { id: 2, name: "معسل تفاحتين", price: 25 },
  { id: 3, name: "راس شيشة", price: 15 }
];

// اختبار السيرفر
app.get("/", (req, res) => {
  res.json({ status: "Shisha Time backend running ✅" });
});

// ✅ مسار المنتجات (المهم)
app.get("/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
