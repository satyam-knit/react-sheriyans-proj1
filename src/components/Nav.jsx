import { useContext } from "react"
import { ProductContext } from "../utils/Context"
import { Link } from "react-router-dom"

const Nav = () => {

    const [Products] = useContext(ProductContext)


    let distinctcat = Products && Products.reduce((acc, cv) => [...acc, cv.category], [])
    distinctcat = [...new Set(distinctcat)]


    return (
        <>
            <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
                <a className="py-5 px-5 border rounded border-blue-200 text-blue-300 mt-10" href="/create">Add New Product</a>
                <hr className="w-[80%] my-3" />
                <h1 className="text-1xl  w-[80%] mb-3" >Category Filter</h1>
                <div className=" w-[80%]">
                    {distinctcat.map((c, i) => (

                        <Link
                            to={`/?category=${c}`}
                            key={i} className="hover:bg-cyan-200 rounded-lg delay-100 flex items-center mb-3 ">
                            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-500">


                            </span>{"  "}
                            {c}
                        </Link>))}


                </div>
            </nav>
        </>
    )
}

export default Nav