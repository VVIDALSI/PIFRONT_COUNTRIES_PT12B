# Usa una imagen base que ya tenga Node.js instalado
FROM node:14
# Establece el directorio de trabajo en la imagen
WORKDIR /app

# Copia los archivos necesarios para la construcción
COPY . /app/

# Instala las dependencias de producción (omitir las de desarrollo)
RUN npm install --omit=dev

# Ejecuta el comando de construcción
RUN npm run build
