const ProductCard = ({ item }) => {
    return (
        <div className="border border-slate-300 p-4 
         rounded-md
        ">
            <img
                src={item.image}
                alt={item.title}
                className="aspect-square object-contain"
            />
            <h1 className="font-semibold text-slate-800
             mt-2 truncate
            ">
                {item.title}
            </h1>

            <p className="text-sm text-slate-500 my-3">
                ${item.price}
            </p>

            <button className="bg-slate-800 text-white
             w-full py-2 rounded-md
            ">
                Add to cart
            </button>

        </div>
    )
}
export default ProductCard