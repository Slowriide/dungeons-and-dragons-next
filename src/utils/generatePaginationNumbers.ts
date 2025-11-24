export const generatePaginationNumbers = (
  currentPage: number,
  totalPages: number
) => {
  //si son 7 o menos mostramos todas las paginas
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1); //[1,2,3,4,5,6,7]
  }

  // si la pag actual esta enre las primeras 3 paginas
  //mostrar las primeras 3, puntos y las ultimas 2
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages]; //[1,2,3, ... ,49,50]
  }

  //si esta entre las ultimas 3
  //primeras 2 puntos y ultimas 3
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages]; //[1,2, ..., ,49,50]
  }

  //si la pagina actual esta en otro lugar medio
  //mostrar la primera pag, puntos, la actual, vecinos
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
