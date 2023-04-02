import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsBack = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = axios.get("http://localhost:5000/products");

    data.then((res) => setProducts(res.data));
  }, []);

  const newProduct ={
    title:"Titulo...",
    img:"aca va la imagen..."
  };

  const addProduct = ( ) =>{
    axios.post("http://localhost:5000/products", newProduct)
  }

  return (
    <div>
      <h1>Productos desde el backend</h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "30px",
          justifyContent: "space-around",
          alingItem: "center",
          minHeight: "90vh",
        }}
      >
        {products.map((e) => {
          return (
            <div
              style={{
                width: "300px",
                height: "300px",
                border: "2px solid black",
                textAling: "center",
              }}
              key={e.id}
            >
              <h2>{e.title}</h2>
              <img
                src={e.img}
                alt=""
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>

      <div
        style={{ backgroundColor: "steelblue", width: "100%", height: "400px" }}
      >
        <form
          action=""
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            height: "400px",
            justifyContent: "space-center",
            alingItem: "center",
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Ingresar nombre del producto"
            style={{ width: "100%", height: "40px" }}
          />
          <input
            type="text"
            name="imagen"
            placeholder="Ingresar url del producto"
            style={{ width: "100%", height: "40px" }}
          />
          <button onClick= {addProduct}style={{ width: "100%", height: "40px" }}>
            Crear Producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductsBack;
