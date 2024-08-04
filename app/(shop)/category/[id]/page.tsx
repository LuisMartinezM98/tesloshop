import React from 'react'
import { notFound } from 'next/navigation';
import { initialData } from '@/seed/seed';
import { ProductGrid, Title } from '@/components';
import { Category } from '@/interfaces';

interface Props {
  params: {
      id: Category;
  }
}

const products = initialData.products;

const page = ({params}: Props) => {


  const {id} = params;

  // if(id === 'kids'){
  //   notFound();
  // }

  const productsFilter = products.filter(item => item.gender == id);


  const labels: Record<Category, string>= {
    'men': 'para mombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  }

  return (
    <>
      <Title
        title={`Articulos ${ labels[id]}`}
        subtitle={`Todos los productos ${ labels[id] }`}
        className='mb-2'
      />
      <ProductGrid
        products={productsFilter}
      />
    </>
  )
}

export default page
