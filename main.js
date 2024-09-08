/**
 *
 * Objetivo do código abaixo é realizar um scrap do google news na parte da saúde e transformar em um objeto:
 * - Abra o link disponibilizado: https://news.google.com/topics/CAAqJQgKIh9DQkFTRVFvSUwyMHZNR3QwTlRFU0JYQjBMVUpTS0FBUAE?hl=pt-BR&gl=BR&ceid=BR%3Apt-419
 *
 */

/**
 * Extrai informações das principais notícias do Google Notícias.
 * @returns {Array} Array de objetos de notícias.
 */
function extrairPrincipaisNoticias() {
  const noticias = [];
  const elementosNoticias = document.querySelectorAll(".KDoq1");
  const elementosSubNoticias = document.querySelectorAll(
    ".f9uzM  *:not(:last-child)"
  );

  /**
   * Noticias principais
   */
  for (const elementoNoticia of elementosNoticias) {
    const titulo =
      elementoNoticia.querySelector(".JtKRv")?.innerText ||
      elementoNoticia.querySelector(".gPFEn")?.innerText ||
      "";
    const link =
      elementoNoticia.querySelector(".JtKRv")?.href ||
      elementoNoticia.querySelector(".gPFEn")?.href ||
      "";
    const horario = elementoNoticia.querySelector(".hvbAAd")?.innerText || "";

    noticias.push({ titulo, link, horario });
  }

  /**
   * Sub-noticias
   */
  for (const elementoSubNoticia of elementosSubNoticias) {
    const titulo = elementoSubNoticia.querySelector(".gPFEn")?.innerText || "";
    const link = elementoSubNoticia.querySelector(".gPFEn")?.href || "";
    const horario =
      elementoSubNoticia.querySelector(".hvbAAd")?.innerText || "";

    if (titulo.length > 0 && link.length > 0 && horario.length > 0)
      noticias.push({ titulo, link, horario });
  }
  return noticias;
}

const dadosPrincipais = {
  principaisNoticias: extrairPrincipaisNoticias(),
};
console.log(dadosPrincipais);
