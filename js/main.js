$(document).ready(function(){
    const home = $(".home");     // Creamos la variable home y apuntamos a donde llamamos
    const aboutMe = $(".aboutMe");
    const proyects = $(".proyects");
    const contact = $(".contact");
    let idHome = $("#idHome");   // Creamos la variable id.Home y apuntamos a donde llamamos
    let idAboutMe = $("#idAboutMe");
    let idProyects = $("#idProyects");
    let idContact = $("#idContact");


    idHome.on("click",function(e){                // funcion para el boton HOME
        console.log("HOLAAAAAA");
        e.preventDefault();
        $("html,body").animate({
            scrollTop: home.offset().top},800);
    });

    idAboutMe.on("click",function(e){                   // funcion para el boton Habilidades
        e.preventDefault();
        $("html,body").animate({
            scrollTop: aboutMe.offset().top},800);
    });

    idProyects.on("click",function(e){                       // funcion para el boton Trayectoria
        e.preventDefault();
        $("html,body").animate({
            scrollTop: proyects.offset().top},800);
    });

    idContact.on("click",function (e) {                     // funcion para el boton Proyectos
          e.preventDefault();
          $("html,body").animate({
              scrollTop: contact.offset().top},800);
      });



    $(function (){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.mainNav').addClass("colorMainScroll").addClass('navRight0').removeClass('navRight20');
            } else {
                $(".mainNav").removeClass("colorMainScroll").addClass('navRight20').removeClass('navRight0');
            }
        });
    });





    /**
     * Array con las imagenes y enlaces que se iran mostrando en la web
     */
    var imageFront=new Array(
        ['img/Logos/html5.png'],
        ['img/Logos/css3-seeklogo_com.png'],
        ['img/Logos/bootstrap.png'],
        ['img/Logos/less.png'],
        ['img/Logos/sass2.png'],
        ['img/Logos/javascript-º23232.png'],
        ['img/Logos/typescript-logo-B29A3F462D-seeklogo.com_.png'],
        ['img/Logos/ecma6.png'],
        ['img/Logos/jquery-seeklogo_com.png'],
        ['img/Logos/react-hexagon.png']
        //['img/backend.png','http://www.lawebdelprogramador.com/utilidades/']
    );
    var imageBack=new Array(
        ['img/Logos/php-seeklogo_com.png'],
        ['img/Logos/nodejs3.png'],
        ['img/Logos/express.png'],
        ['img/Logos/mysql2.png'],
        ['img/Logos/mariadb.png'],
        ['img/Logos/sequelize.png'],
        ['img/Logos/apache.png'],
        ['img/Logos/laravel-seeklogo_com.png'],
    );
    var imageMethod=new Array(
        ['img/Logos/git2.png'],
        ['img/Logos/github.png'],
        ['img/Logos/scrum.png'],
        ['img/Logos/trello-logo-blue.png']
    );
    var imageOth=new Array(
        ['img/Logos/angularjs.png'],
        ['img/Logos/tux-seeklogo_com.png'],
        ['img/Logos/vuejs.png'],
        ['img/Logos/ionic.png'],
        ['img/Logos/gulp.png'],
        ['img/Logos/grunt.png'],
        ['img/Logos/npm2.png'],
        ['img/Logos/ionic.png'],
        ['img/Logos/nodemon.png'],
        ['img/Logos/vagrant.png'],
    );

    /**
     * Funcion para cambiar la imagen y link
     */
    function rotarImagenes()
    {
        // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
        var indexFront=Math.floor((Math.random()*imageFront.length));
        var indexBack=Math.floor((Math.random()*imageBack.length));
        var indexMethod=Math.floor((Math.random()*imageMethod.length));
        var indexOth=Math.floor((Math.random()*imageOth.length));

        // cambiamos la imagen y la url
        document.getElementById("imageFrontend").src=imageFront[indexFront][0];
        //document.getElementById("linkFrontend").href=imagenes[index][1];

        document.getElementById("imageBackend").src=imageBack[indexBack][0];
        //document.getElementById("linkBackend").href=imagenes[index][1];

        document.getElementById("imageMethodology").src=imageMethod[indexMethod][0];
        //document.getElementById("linkBackend").href=imagenes[index][1];

        document.getElementById("imageOthers").src=imageOth[indexOth][0];
        //document.getElementById("linkBackend").href=imagenes[index][1];
    }

    /**
     * Función que se ejecuta una vez cargada la página
     */
    onload=function()
        {
            // Cargamos una imagen aleatoria
            rotarImagenes();

            // Indicamos que cada 2 segundos cambie la imagen
            setInterval(rotarImagenes,2000);
        }



});



