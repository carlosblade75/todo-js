# Webpack Stater

Proyecto inicial

### Configuración

1.  git config --global user.name "[name]"
2.  git config --global user.email "[email address]"
3.  git config --global color.ui auto

### Creación de un repositorio en GITHUB

1.  Crear o tener una cuenta en GitHub
2.  Crear un repositorio nuevo y copiar el comando para que el repositorio sea remoto
    git remote add origin https://github.com/carlosblade75/webpack-starter.git
    
### Pasos para subir:

1.  git init
2.  git add . (la primera vez que se añade el repositorio) 
    git add [nombre de fichero] (si ya esta creado). Es necesario también para los ficheos modificados

3.  git commit -m "Comentario"

4.  git push -u origin master   (
                                    El -u es para configurar siempre esta rama (master en este caso) y no tener que hacer cada vez
                                    Origin se refiere al repository, la url que hemos configurado
                                    Master es la rama
                                )

### Mas cosas

1.  Recuperar git checkout -- .

### GitHUB

1.  Para subir a GitHub renombramos la carpeta dist por docs