'use client';
import { EventHandler, MouseEventHandler, useEffect, useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/store";
import { QuantitySelector } from "@/components";
import Link from "next/link";
import { CartProduct } from "@/interfaces";



export const ProductsInCart = () => {

    const updateProductQuantity = useCartStore(state => state.updateProductQuantity);
    const [loaded, setLoaded] = useState(false);
    const productsInCart = useCartStore(state => state.cart);
    const removeProduct = useCartStore(state => state.removeProduct);

    useEffect(() => {
        setLoaded(true)
    }, [])


    if(!loaded) {
        return <p>Loading...</p>
    }

    const handleRemoveItem = (product: CartProduct): MouseEventHandler<HTMLButtonElement> => {
      return (e) => {
        e.preventDefault();
        removeProduct(product);
      };
    };
  return (
    <>
    {productsInCart.map( product => (
              <div key={`${product.slug}-${product.size}`} className="flex mb-5">
                  <Image src={`/products/${product.image}`}
                  width={100}
                  height={100}
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                  alt={product.title}
                  className="mr-5 rounded"
                  />
                  <div>
                    <Link 
                    className="hover:underline cursor-pointer"
                    href={`/product/${product.slug}`}>
                    {product.size} - {product.title}
                    </Link>
                    <p>${product.price}</p>
                    <QuantitySelector quantity={product.quantity}
                    onQuantityChanged={quantity => updateProductQuantity(product, quantity)}
                    stock={product.stock}
                    />

                    <button className="underline mt-3" onClick={handleRemoveItem(product)}>Remover</button>
                  </div>
              </div>
            ))}
    </>
  )
}
