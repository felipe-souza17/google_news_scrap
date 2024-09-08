/**
 *
 * Objetivo do código abaixo é realizar um scrap do google news na parte da saúde e transformar em um objeto:
 * - Abra o link disponibilizado: https://news.google.com/topics/CAAqJQgKIh9DQkFTRVFvSUwyMHZNR3QwTlRFU0JYQjBMVUpTS0FBUAE?hl=pt-BR&gl=BR&ceid=BR%3Apt-419
 *
 */

/**
 * Extrai informações de notícias de um contêiner do Google Notícias.
 * @param {string} containerSelector Seletor CSS do contêiner de notícias.
 * @returns {Array} Array de objetos de notícias.
 */
function extrairNoticias(containerSelector) {
  const noticias = [];
  const elementosNoticias = document.querySelectorAll(
    `${containerSelector} > *:not(:last-child)`
  );

  for (const elementoNoticia of elementosNoticias) {
    const titulo = elementoNoticia.querySelector(".JtKRv")?.innerText || "";
    const link = elementoNoticia.querySelector(".JtKRv")?.href || "";
    const horario = elementoNoticia.querySelector(".hvbAAd")?.innerText || "";

    noticias.push({ titulo, link, horario });
  }

  return noticias;
}

const noticiasSaude = extrairNoticias(".R5wh1e");

console.log(noticiasSaude);
