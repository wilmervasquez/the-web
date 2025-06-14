git init # Inicializa el repositorio
git add <archivo> # agregar archivos al área de preparación
git commit -m "mensaje" # creará una instantánea de los cambios y la guardará en el directorio git.

git push origin <name-branch> # enviar confirmaciones locales a la rama del repositorio remoto

git clone <url-repository> # Repository copy

# Config
git config --global user.email you@xyz.com
git config --local user.email you@xyz.com

git status # files changed

git checkout -b <branch> # Crea y se mueve a esa rama