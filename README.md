# Mis Finanzas Pro

App de finanzas personales (PWA), 100% en el navegador — los datos se guardan en
`localStorage` del dispositivo (nada se envía a un servidor).

## Estructura

```
index.html
styles.css
app.js
db.js
reports.js
categories.js
sw.js
manifest.webmanifest
icons/
  icon-192.png
  icon-512.png
  icon-192-maskable.png
  icon-512-maskable.png
  apple-touch-icon.png
  favicon.png
```

## Subir a GitHub y publicar con GitHub Pages

1. Crea un repositorio nuevo en GitHub (público, para usar Pages gratis).
2. Sube **todos** estos archivos y la carpeta `icons/` completa, manteniendo
   la misma estructura (todo en la raíz del repo, no dentro de una subcarpeta).
   - Desde la web de GitHub: *Add file → Upload files*, arrastra todo.
   - O por terminal:
     ```bash
     git init
     git add .
     git commit -m "Mis Finanzas Pro"
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
     git push -u origin main
     ```
3. En el repo: **Settings → Pages → Source**, selecciona la rama `main` y la
   carpeta `/ (root)`. Guarda.
4. Espera 1-2 minutos. Tu app quedará en:
   `https://TU_USUARIO.github.io/TU_REPO/`

**Importante:** la PWA debe servirse por **HTTPS** (GitHub Pages ya lo hace por
defecto) — sin HTTPS el Service Worker no se registra y no se puede instalar.

## Instalar en iPhone (Add to Home Screen)

1. Abre el link de GitHub Pages en **Safari** (tiene que ser Safari, no Chrome
   ni otro navegador — iOS solo permite instalar PWAs desde Safari).
2. Toca el botón de **Compartir** (el cuadrado con la flecha hacia arriba).
3. Baja y toca **"Agregar a pantalla de inicio"**.
4. Confirma el nombre ("Finanzas Pro") y toca **Agregar**.
5. Listo: queda como app independiente, con su propio ícono, sin barra de
   Safari, y funciona sin conexión una vez que la abriste la primera vez
   online (el Service Worker cachea todo lo necesario).

## Nota sobre el PIN

El PIN de la pantalla de bloqueo es solo un candado visual guardado en el
propio dispositivo (`localStorage`); no cifra los datos. Si necesitas
protección real (por ejemplo si compartes el teléfono), no lo uses como
única medida de seguridad — sirve para evitar miradas casuales, no accesos
técnicos.
