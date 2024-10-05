import axios from "../utils/axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Loading from "./Loading"

const Details = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams();

    const getsingleProduct = async () => {
        try {
            const { data } = await axios.get(`/products/${id}`)
            setProduct(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // Call the function to get product data when the component mounts
        getsingleProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]); // Adding id as dependency ensures the function runs whenever the id changes

    return (
        product ? (
            <div className="w-[70%] h-full justify-between m-auto p-[10%] flex">
                <img
                    className="object-contain w-[40%]"
                    src={`${product.image}`}
                    alt="Product image"
                />
                <div className="content w-[50%] h-[80%] ml-10">
                    <h1 className="text-2xl my-10 font-semibold">
                        {product.title}
                    </h1>
                    <h3 className="text-gray-500 my-2">{product.category}</h3>
                    <h2 className="mb-3 text-stone-950">${product.price}</h2>
                    <p className="mb-[5%]">{product.description}</p>
                    <Link
                        className="px-3 py-1 rounded-md bg-green-400 mr-5"
                        to={`/edit/${product.id}`}
                    >
                        Edit
                    </Link>
                    <Link
                        className="px-3 py-1 rounded-md bg-red-400"
                        to={`/delete/${product.id}`}
                    >
                        Delete
                    </Link>
                </div>
            </div>
        ) : (
            <Loading />
        )
    )
}

export default Details;
