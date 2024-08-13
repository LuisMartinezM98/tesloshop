'use client';

import React from 'react'
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { IoChevronBackOutline, IoChevronForward, IoChevronForwardOutline } from 'react-icons/io5';
import { generatePaginationNumbers } from '@/utils';
import clsx from 'clsx';


interface Props {
    totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const pageString = searchParams.get('page') ?? 1;

    let curretPage = isNaN( +pageString )? 1 : +pageString;

    if(curretPage < 1 || isNaN(+pageString)){
        redirect(pathname)
    }


    const allPages = generatePaginationNumbers(curretPage, totalPages);

    const createPageUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);

        if (pageNumber === '...') {
            return `${pathname}?${params.toString()}`
        }

        if (+pageNumber <= 0) {
            return `${pathname}`;
        }

        if (+pageNumber > totalPages) {
            return `${pathname}?${params.toString()}`;
        }
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    }

    return (
        <div className="flex justify-center text-center mt-10 mb-32">
            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none">
                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href={createPageUrl(curretPage - 1)}>
                            <IoChevronBackOutline size={30} />
                        </Link></li>
                    {
                        allPages.map((page, index) => (
                            <li className="page-item" key={page + '-' + index}>
                                <Link
                                className={
                                    clsx(
                                        "page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none", { 'bg-blue-700 shadow-sm text-white hover:bg-blue-600 hover:text-white': page === curretPage}
                                    )
                                }
                                href={createPageUrl(page)}>{page}</Link></li>
                        ))
                    }

                    <li className="page-item"><Link
                        className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                        href={createPageUrl(curretPage + 1)}>
                        <IoChevronForwardOutline size={30} />
                    </Link></li>
                </ul>
            </nav>
        </div>
    )
}
