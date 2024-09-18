import useProducts from '../UseProducts/UseProducts';
import { useMutation } from '@tanstack/react-query';
import "./Products.scss";

interface IProduct {
    id: string;
    title: string;
    price: string;
    description: string;
    image: string;
}

const Products = () => {
    const { data, isPending, isError, error } = useProducts();

    if (isPending) return <h1>Loading...</h1>;
    if (isError) return <h1>{error?.message}</h1>;

    const mutation = useMutation({
        mutationFn: () => fetch(`https://fakestoreapi.com/products/`, {
            method: 'POST',
            body: JSON.stringify({
                id: "id",
                title: "title",
                price: "price",
                description: "description",
                image: "image",
            })
        }).then(res => res.json()).then(json => console.log(json))
    });
    // const addProduct = () => {
    //     mutation();
    // };

    return (
        <>
            <button className='btn btn-primary col-sm-2' onClick={() => mutation.mutate()}>Add Product</button>
            {
                mutation.isPending ? <h3>Adding...</h3> : mutation.data
            }
            <div className="products-container">
                {data?.length && data.map((product: IProduct) => {
                    return (
                        <div className="product-card" key={product.id}>
                            <img className="product-image" src={product.image} alt={product.title} />
                            <h1 className="product-id">{product.id}</h1>
                            <h1 className="product-title">{product.title}</h1>
                            <p className="product-description">{product.description}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Products;
