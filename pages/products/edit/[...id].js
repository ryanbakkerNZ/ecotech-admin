import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);

  return (
    <Layout className="!p-10">
      <h1>Edit Product</h1>
      {/* Show form if existing product info is loaded */}
      {/* Can add loading icon later */}
      {productInfo && <ProductForm {...productInfo} />}
    </Layout>
  );
}
