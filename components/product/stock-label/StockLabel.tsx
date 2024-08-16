'use client';
import { getStockBySlug } from "@/actions";
import { titleFont } from "@/config/fonts"
import { useEffect, useState } from "react";

interface Props {
    slug: string
}

export const StockLabel = ({ slug }: Props) => {
    const [stock, setStock] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getStock();
    }, [slug])

    const getStock = async () => {
        const stockData = await getStockBySlug(slug);
        setStock(stockData)
        setIsLoading(false);
    }

    return (
        <>
        {
            isLoading ? (
                <h1 className={`${titleFont.className} antialiased font-bold text-xl bg-gray-300 animate-pulse`}>
                &nbsp;
                </h1>
            ) : (
                <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
                Stock: {stock}
            </h1>
            )
        }
        </>
    )
}
