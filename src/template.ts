export default ({body = null, title = 'Page'}: { body: string | null, title: string | null }): string => {
    return (`
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <title>${title}</title>
<!--        <base href="http://localhost:8080/public"/>-->
<!--        <link rel="stylesheet" href="http://localhost:8080/assets/index.css" />-->
      </head>

      <body>
        <div id="root">${body}</div>
      </body>

      <script src="assets/bundle.js"></script>
    </html>
  `);
};
