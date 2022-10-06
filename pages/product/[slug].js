//[slug] unique identifier of each product ,,inside square brackets to show that is going to be dynamic
//eg product/speaker - it dynamically renders the product clicked/selected

import React from 'react'
import { client, urlFor } from '../../lib/client'


const ProductDetails = () => {
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src=''/>
                </div>
            </div>
        </div>    
    </div>
  )
}

export const getStaticProps = async ({ params: { slug } }) => {

    //getStaticProps is used if the data required to render the page is available 
    //at build time ahead of a users request
    //if the data comes from a headless CMS
    //If we are on the home page the user can click on any of the product images,,so the data having been already store
    //in Sanity CMS , everything will be populated instantly
    //We can also destructure params and get access to the query
    
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`; //fetch product details from the product page that we are on
    const products = await client.fetch(query); 
  
    

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: {
        products,
        bannerData
      }
    }
}

export default ProductDetails 