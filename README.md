## Google News Scraping

Este script JavaScript realiza web scraping na página inicial do [Google Notícias](https://news.google.com/home?hl=pt-BR&gl=BR&ceid=BR%3Apt-419) e extrai informações de diferentes seções, como notícias principais, notícias locais e recomendações.

**Funcionalidades**:

- Extração de dados: O script extrai o título, link e horário de publicação das notícias.
- Organização dos dados: As informações extraídas são organizadas em um objeto JSON estruturado por seção.

**Como utilizar**:

- Copie o código: Copie o código JavaScript do arquivo main.js.
- Abra o Google Notícias: Acesse a página inicial do Google Notícias no link fornecido.
- Cole o código no console: Abra o console do navegador (geralmente pressionando F12) e cole o código copiado.
- Execute o código: Pressione Enter para executar o código.
- Visualize os dados: Os dados extraídos serão exibidos no console do navegador em formato JSON.

**Estrutura do objeto JSON**:

```json
{
  "principaisNoticias": [
    {
      "titulo": "...",
      "link": "...",
      "horario": "..."
    }
    // ... outras notícias principais
  ],
  "noticiasLocais": [
    {
      "titulo": "...",
      "link": "...",
      "horario": "..."
    }
    // ... outras notícias locais
  ],
  "recomendados": [
    {
      "titulo": "...",
      "link": "...",
      "horario": "..."
    }
    // ... outras recomendações
  ]
}
```

**Observações**:

- Este script foi desenvolvido para a versão atual da página inicial do Google Notícias. Mudanças na estrutura da página podem fazer com que o script pare de funcionar corretamente.
- Esse script foi criado para fins de estudo e aprendizado como manipular DOM ( Document Object Model ) nas aulas
