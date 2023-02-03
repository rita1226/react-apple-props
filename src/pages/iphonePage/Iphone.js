import React, { useEffect, useState } from 'react'

function Iphone() {
    const[iphone,setIphone] = useState([])
    useEffect (()=>{
        fetch("http://localhost:1212/products")
        .then((res)=>res.json())
        .then((pro)=>{
            const product = pro.Products
            setIphone(product)
        })
    },[])
    let order = 1
  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
         
          {iphone.map((item,index) => {
           
            

            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            return (
              <div
                key={index}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{item.product_name}</div>
                  <div className="product-brief">{item.product_brief_description}</div>
                  <div className="starting-price">
                    {`Starting at ${item.starting_price}`}
                  </div>
                  <div className="monthly-price">{item.price_range}</div>
                  {/* <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div> */}
                </div>
                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="prodict-image">
                    <img src={item.product_img} alt="" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Iphone
