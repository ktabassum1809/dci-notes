export default function ProductCard({product}) {
  return (
    <div className="product-card">
      <img src={product.image} width={100} alt="product-image" />
      <h4> {product.title} </h4>
      <h5> {product.price} € </h5>
    </div>
  );
}
