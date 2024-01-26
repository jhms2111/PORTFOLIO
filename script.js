//BOTAO  CONTACTE COMIGO 

function abrirWhatsApp() {
    // Substitua "123456789" pelo número de telefone desejado
    var numeroTelefone = "674458434";

    // Crie o link do WhatsApp
    var linkWhatsApp = "https://wa.me/" + 34674458434;

    // Abra o WhatsApp em uma nova guia
    window.open(linkWhatsApp);
}
   
    //SCROLL
    document.addEventListener("DOMContentLoaded", function() {
        var navbar = document.querySelector(".nav");
        var offset = navbar.offsetTop;
    
        window.onscroll = function() {
            if (window.scrollY >= offset) {
                navbar.classList.add("fixed-navbar");
            } else {
                navbar.classList.remove("fixed-navbar");
            }
        };
    
        // Atualiza o item de menu ativo ao rolar a página
        var sections = document.querySelectorAll("section");
        
        window.addEventListener("scroll", function() {
            var current = "";
    
            sections.forEach(function(section) {
                var sectionTop = section.offsetTop - 70;
                var sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute("id");
                }
            });
    
            var menuItems = document.querySelectorAll(".nav a");
            menuItems.forEach(function(item) {
                item.classList.remove("active");
                if (item.getAttribute("href").slice(1) === current) {
                    item.classList.add("active");
                }
            });
        });
    });



    function validarFormulario() {
        var nombre = document.getElementById('nombre');
        var email = document.getElementById('email');
        var telefono = document.getElementById('telefono');
        var tipoServicio = document.getElementById('tipoServicio');

        //Resetar classes 
        nombre.classList.remove('error', 'success');
        email.classList.remove('error', 'success');
        telefono.classList.remove('error', 'success');
        tipoServicio.classList.remove('errors', 'success');

        //Validar nome
        if (nombre.value.trim() === '') {
            nombre.classList.add('error');
        } else {
            nombre.classList.add('success')
        }

        //validar email
        var emailPattern = /^\S+@\S+\.\S+$/;
        if (email.value.trim() === '' || !emailPattern.test(email.value)) {
            email.classList.add('error');
        } else {
            email.classList.add('success');
        }

        //validar telefono
        if (telefono.value.trim() === '') {
            telefono.classList.add('error');
        } else {
            telefono.classList.add('success');
        }

        // Validar Tipo de Servicio
        if (tipoServicio.value === '') {
            tipoServicio.classList.add('error');
        } else {
            tipoServicio.classList.remove('error');
            tipoServicio.classList.add('success');
        }
   
    }