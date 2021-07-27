Api Delilah Resto Acamica

Procedimiento :

1 - Instalación
Clonar proyecto desde la consola :
git clone https://github.com/SebastianGaviriaM/Proyecyo-3-Acamica

2 - Instalación de dependencias
npm install

3 - Crear base de datos
Pegar el contenido del archivo DelilahResto.txt en el terminal. Recuerde que se utiliza una base de datos mysql.

4 - Datos de entorno
Editar el archivo .env con los datos de su entorno.

5 - Iniciar el servidor
Abrir el archivo index.js desde VisualStudio y ejecutar en terminal :
nodemon index.js

6 - Ya puedes Utilizar el Sistema


Recuerde:

Los valores de los estados de los pedidos solamente pueden ser: 'NUEVO', 'CONFIRMADO', 'PREPARANDO', 'ENVIADO', 'CANCELADO', 'ENTREGADO', en mayúscula.
Los valores de las formas de pago de los pedidos solamente pueden ser: 'TARJETA', 'EFECTIVO', en mayúscula.
Cualquier otro valor ingresado en estos dos campos resultarán en un error arrojado por base de datos.

Lea las indicaciones dadas en el archivo DelilahResto.YAML 



