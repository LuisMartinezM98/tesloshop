
export const generatePaginationNumbers = ( currentPage: number, totalPages: number) => {
    //Si el numero total de paginas es 7 o menos 
    // se muestran todoas las paginas sin puntos suspensivos

    if(totalPages <= 7){
        return Array.from({length: totalPages}, (_, i) => i + 1);
    }

    // Si la pagina actual está entre las primeras 3 páginas
    // Mostrar las primeras 3, puntos suspensivos y las ultimas dos
    if(currentPage <= 3){
        return [1,2,3, '...', totalPages -1, totalPages];
    }

    // Si la pagina actual está entre las últimas 3 páginas
    // mostrar las primeras 2, puntos suspencivos, las ultimas 3 páginas.
    if( currentPage >= totalPages - 2){
        return [1,2, '...', totalPages -2, totalPages -1, totalPages];
    }

    // si la pagina actual está en otro lugar medio
    // motrar la primera pagina, puntos suspensivos, la pagina actual y vecinos
    return [
        1,
        '...',
        currentPage -1,
        currentPage,
        currentPage +1,
        '...',
        totalPages
    ];
}