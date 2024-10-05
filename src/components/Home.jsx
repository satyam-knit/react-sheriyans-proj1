import { Link, useLocation } from "react-router-dom"
import Nav from "./Nav"
import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../utils/Context"
import Loading from "./Loading"
import axios from "../utils/axios"
const Home = () => {
    const [Products] = useContext(ProductContext)
    const { search } = useLocation();
    const category = decodeURIComponent(search.split("=")[1])

    const [filteredprod, setfilteredprod] = useState(null);

    const getproductCategory = async () => {

        try {

            const { data } = await axios.get(`/Products/category/${category}`)
            setfilteredprod(data)
        } catch (error) {

            console.log(error)

        }
    }



    useEffect(() => {
        if (!filteredprod || category == 'undefined') setfilteredprod(Products)
        if (category != "undefined") getproductCategory();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, Products])


    return Products ? (
        <>
            <Nav />
            <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto ">


                {filteredprod && filteredprod.map((p) => (
                    <Link key={p.id} to={`/details/${p.id}`} className="card p-3 border shadow rounded w-[18%] h-[30vh] mr-3 mb-3 flex flex-col justify-center items-center" >

                        <div className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                            style={{
                                backgroundImage: `url(${p.image})`
                            }}>

                        </div>
                        <h1 className="text-xs font-semibold hover:text-blue-500 " >{p.title}</h1>

                    </Link>))}


            </div >

        </>
    ) : (
        <Loading />
    )
}

export default Home