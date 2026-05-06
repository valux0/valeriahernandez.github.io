# 1. Usamos la imagen oficial de Apache (el servidor web que pide el PDF)
FROM httpd:latest

# 2. Copiamos el contenido de tu carpeta docs (donde ya tienes tu build listo)
# hacia la carpeta de Apache que sirve los archivos web
COPY ./docs/ /usr/local/apache2/htdocs/

# 3. Exponemos el puerto 80, que es el estándar para HTTP
EXPOSE 80
