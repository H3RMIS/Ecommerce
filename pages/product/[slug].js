//[slug] unique identifier of each product ,,inside square brackets to show that is going to be dynamic
//eg product/speaker - it dynamically renders the product clicked/selected

import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from  '../../components';
import { useSateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
    
    const{ image, name, details, price } = product;   
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty } = useSateContext();

  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src={urlFor(image && image[index])} className="product-detail-image"/>
                </div>
                <div className="small-images-container">
                    {image?.map((item, i) => (
                        <img 
                        src={urlFor(item)}
                        className={i === index ? 'small-image selected-image' : 'small-image'}
                        onMouseEnter={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div>
            <div className="product-detail-desc">
                <h1>{name}</h1>
                <div className='reviews'>
                    <div>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                    <p>(30)</p>
                </div>
                <h4>Details</h4>
                <p>{details}</p>
                <p className='price'>${price}</p>
                <div className='quantity'>
                    <h3>Quantity: </h3>
                    <p className='quantity-desc'>
                        <span className='minus' onClick={decQty}><AiOutlineMinus/></span>
                        <span className='num' onClick="">{qty}</span>
                        <span className='plus' onClick={incQty}><AiOutlinePlus/></span>
                    </p>
                </div>

                <div className='buttons'>
                    <button type='button' className='add-to-cart' onClick="">Add to Cart</button>
                    <button type='button' className='buy-now' onClick="">Buy Now</button>
                </div>
            </div>
        </div>

        <div className='maylike-products-wrapper'>
            <h2>You may also like</h2>
            <div className='marquee'>
                <div className='maylike-products-container track'>
                    {products.map((item) => (
                        <Product key={item._id} product={item}/>
                    ))}
                </div>
            </div>
        </div>

    </div>
  )
}
export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;//getting current property of a slug of each of the products 
    const products = await client.fetch(query);
    //to generate the paths and instantly returning an object
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}
export const getStaticProps = async ({ params: { slug } }) => {
    //getStaticProps is used if the data required to render the page is available at build time ahead of a users request. if the data comes from a headless CMS
    //If we are on the home page the user can click on any of the product images,,so the data having been already store //in Sanity CMS , everything will be populated instantly . We can also destructure params and get access to the query
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`; //fetch product details from the product page that we are on
    //[0] we only want to fetch the first product that matches this query
    const productsQuery = '*[_type == "product"]'
    const product = await client.fetch(query); 
    const products = await client.fetch(productsQuery);

    return {
      props: {
        product,
        products,
      }
    }
}

export default ProductDetails 