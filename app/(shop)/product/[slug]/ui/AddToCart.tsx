'use client';

import { useState } from "react";
import { SizeSelector, QuantitySelector } from "@/components"
import type { CartProduct, Product, Size } from "@/interfaces"
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useCartStore } from "@/store";


interface Props {
  product: Product
}

export const AddToCart = ({ product }: Props) => {

  const addProductToCart = useCartStore( state => state.addProductToCart );

  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true)
    if (!size) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0],
      stock: product.inStock
    }
    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);
    setSize(undefined);
  }


  return (
    <>

      {posted && !size && (
        <div className="mt-2 flex text-red-500 gap-2 items-center fade-in">
          <WarningAmberIcon/>
          <span className=" font-bold">
          Debes seleccionar una talla
        </span>
        </div>
      )}

      {/* Selector tallas */}
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChanged={setSize}
      />

      {/* Cantidad */}
      <QuantitySelector
        quantity={quantity}
        stock={product.inStock}
        onQuantityChanged={setQuantity}
      />

      {/* Boton */}
      <button className="btn-primary my-5" onClick={addToCart}>Agregar al carrito</button>

    </>
  )
}
