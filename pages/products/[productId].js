const ProductDetail = ({ product }) => {
    return (
        <div>
            ProductDetail = {product.name} - {product.price}
        </div>
    )
}

export default ProductDetail;

export const getStaticPaths = async () => {
    const response = await fetch(`http://localhost:5000/products`);

    const data = await response.json();

    const paths = data.map((item) => ({
        params: {
            productId: `${item.id}`,
        }
    }));

    return {
        paths,
        fallback: false,
    }
};
export const getStaticProps = async ({ params }) => {
    const response = await fetch(`http://localhost:5000/products/${params.productId}`);
    const data = await response.json();

    return {
        props: {
            product: data,
        },
    };
};