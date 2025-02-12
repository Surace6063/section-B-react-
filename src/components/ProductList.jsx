import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const getProducts = async () => {
            try {
                setIsLoading(true)
                setError('')
                const res = await
                    axios.get('https://fakestoreapi.com/products')
                setProducts(res.data);
            } catch (error) {
                console.log(error);
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        getProducts()
    }, [])

    return (
        <div
            className="max-w-6xl mx-auto my-10 px-4
         grid grid-cols-4 gap-4
        ">
            {isLoading ? <span>loading...</span> :
                error ? <span>Error fetching data!</span> :
                    products.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))
            }
        </div>
    )
}
export default ProductList