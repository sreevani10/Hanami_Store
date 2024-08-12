import './SalesSection.css'
import Product from "../Sales/Product";
import SaleItems from "../../data/SaleItems.json"


const SalesSection = () => {
    const sale = SaleItems.filter(products =>products.sale === true && products.outOfStock === false);
    console.log("sales products")
    console.log(sale);

    return (
        <div>
            <h1 className="heading">Exclusive Sale</h1>
            <p className="tag">Get in on the trend with our curated selection of best-selling styles.</p>
            <div className="saleproducts">
            {sale.map((product)=>{
                return <Product {...product}/>
            })}
            </div>
        </div>
    )
}

export default SalesSection