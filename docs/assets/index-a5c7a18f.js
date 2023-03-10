(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();document.querySelector("#app").innerHTML=`
<header>
    <div class="contener">        
        <a href="index.html" title="Stencil">
            <img class="visible" src="assets/img/milogo.png" alt="logo" width="70" title="Stencil">
        </a>
        <h1 class=""></h1>
        <input type="checkbox" id="menu-bar">
        <label class="icono  fa-solid fa-bars" for="menu-bar"></label>
        
        <nav class="menu">
            <a href="#">Home</a>
            <a href="#habiliti">Skills</a>
            <a href="#info">Portfolio</a>
            <a href="#contacto">Contact</a>
        </nav>    
    </div>
</header>

<main>
    <section id="banner">
        <img src="assets/img/hitech.jpg">
            <div class="contenedor">
                <div class="container_text">
                    <h4 class="titule">
                        <span class="typed"></span>
                    </h4>
                    <div class="titule" id="txt_cadena">
                        <p> Yauri Antonio <br> <i class="warrior">Web Developer</i></p>
                        <p> Yauri Antonio <br>  <i class="warrior">Front-End</i></p>
                        <p> Yauri Antonio <br>  <i class="warrior">Back-End</i></p>
                        <p> Yauri Antonio <br>  <i class="warrior">Full-Stack</i></p>
                    </div>
                </div>
            </div>
            
            <div class="contain_btn_msj">
                <div class="btn_msj">
                    <label for="btn_msn">
                        Contact
                    </label>
                </div>
            </div>

            <input type="checkbox" id="btn_msn">
            <div class="container_msn">
                <div class="content_msn">
                    <h3>Contact</h3>
                    
                    <form action="https://formsubmit.co/d7573b6b39cf8cfc9ed9b93765cdd979" method="POST" class="form_valid" id="form_valid">
                       
                        <div class="group_form " id="group_names">
                            <label for="names" class="label_form">Name</label>
                            <div class="group_form_in" >
                                <input type="text" class="input_form" name="name" id="names" placeholder="Name">
                                <i class="state_form fas fa-times-circle"></i>
                            </div>
                            <p class="form_error">
                            The Name can only contain 4 - 40 numbers and letters.
                            </p>
                        </div>

                        <div class="group_form" id="group_correo">
                            <label for="correo" class="label_form">Email</label>
                            <div class="group_form_in" >
                                <input type="email" class="input_form" name="email" id="correo" placeholder="correo">
                                <i class="state_form fas fa-times-circle"></i>
                            </div>
                            <p class="form_error">
                                The email has to be real.
                            </p>
                        </div>

                        <div class="group_form" id="group_phone">
                            <label for="phone" class="label_form">Affair</label>
                            <div class="group_form_in" >
                                <input type="text" class="input_form" name="subject" id="phone" placeholder="Affair">
                                <i class="state_form fas fa-times-circle"></i>
                            </div>
                            <p class="form_error">
                                The Affair can only contain 4 - 40 numbers and letters.
                            </p>
                        </div>

                        <div class="group_form " id="group_user">
                            <label for="comments" class="label_form">Message</label>
                            <div class="group_form_in" >
                                <textarea class="input_forms" name="comments" id="user" placeholder="Hello!"></textarea>
                                <i class="state_forms fas fa-times-circle"></i>
                            </div>
                            <p class="form_error">
                                The user can writing 4 - 500 letters.
                            </p>
                        </div>

                       
                        <div class="btn_conten">

                            <div class="conten_mesagges">
                                <div class="messages">
                                    <div class="form_message" id="form_message">
                                        <p><i class="fas fa-exclamation-triangle"></i> 
                                            <b>Error: </b>Please complete the form!
                                        </p>
                                    </div>

                                    <div class="form_great" id="form_great">
                                        <p><b>Thank You Very Much!</b></p>
                                    </div>
                                </div>
                            </div> 

                            <div class="group_form form_group_btn">
                                
                                <button type="submit" value="Enviar" class="form_btn">Send</button>
                            </div>
                                
                            <div class="btn_close_msn">
                                <label for="btn_msn">Close</label>
                            </div>

                            </div>
                                <label for="btn_msn" class="close_msn"></label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>    
    </section>

    <section id="bienvenidos">
        <div class="contenedor">
            <div class= "welcome">
                <h3>WELCOME</h3>
            </div>
            <div class="yonys">
                <img class="yony" src="assets/img/milogo.png">
            </div>
            <div class="perfil" >
                <h2 class="habil">PROFILE</h2> 
                    <p > I'm a self-taught young man passionate about technology 
                    who is always constantly updated with the newest and best technologies 
                    available to develop websites, that meet the needs of users and 
                    at the same time make your visit an agreeable experience.
                    </p>
                
                <h2 id="habiliti">SKILLS</h2>
                    <p>My skills are focused on Front-End Web Development, 
                    however, I have developed some Back-End proyects.
                    Over the time I have manipulated different tools to fulfill
                    the ephemeral purpose of learning,  
                    nonetheless, due to their different degrees of complexity,
                    it is necessary to emphasize that the tools contained here
                    are still in constant learning, so you learn something new every day.
                    
                    </p>                
            </div>
        </div>
                <div class="contain">

                    <div class="caja">
                        <li> 
                           <h1 class="front">Front-End</h1>
                            <ul class="style_box">
                                <li>
                                    <img class="img_box1" src="assets/img/iconFigma.png" />
                                    Figma
                                </li>
                                <li>
                                    <img class="img_box1" src="assets/img/iconCss.png" />
                                    Html
                                </li>
                                <li>
                                    <img class="img_box1" src="assets/img/iconHtml.png" />
                                    Css
                                </li>
                                <li>
                                    <img class="img_box1" src="assets/img/iconJs.png" />
                                    Js
                                </li>
                                                
                            </ul>
                        </li>
                    </div>

                    <div class="caja">
                        <li> 
                        <h1 class="front">Back-End</h1>
                            <ul class="style_box">

                                <li>
                                    <img class="img_box1" src="assets/img/iconPhp.png" />
                                    PHP
                                </li>
                                <li>
                                    <img class="img_box1" src="assets/img/iconMysql.png" />
                                    MySQL
                                </li>
                                <li>
                                    <img class="img_box1" src="assets/img/iconNode.png" />
                                    Node
                                </li>
                                <li>
                                    <img class="img_box1" src="assets/img/iconMongo.png" />
                                    MongoDB
                                </li>
                               
                            </ul>
                        </li>
                    </div>

                    <div class="caja">
                        <li> 
                        <h1 class="front">Librarys</h1>
                            <ul class="style_box">
                                <li>
                                    <img class="img_box1" src="assets/img/iconJquery.png" />
                                    Jquery
                                </li>
                                <li>
                                    <img class="img_box1" src="assets/img/iconBoots.png" />
                                    Bootstrap
                                </li>
                            
                                <li>
                                    <img class="img_box1" src="assets/img/iconUnders.png" />
                                    Underscore
                                </li>
                                <li>
                                    <img class="img_box1" src="assets/img/iconReact.png" />
                                    React
                                </li>                      
                            </ul>
                        </li>
                    </div>

                    <div class="caja">
                        <li> 
                        <h1 class="front">Others more</h1>
                            <ul class="style_box">
                            
                                <li>
                                    <img class="img_box1" src="assets/img/iconVite.png" />
                                    Vite 
                                </li>
                                <li>
                                    <img class="img_box1" src="assets/img/iconWeb.png" />
                                    Webpack
                                </li>
                            
                                <li>
                                    <img class="img_box1" src="assets/img/iconGit.png" />
                                    Git-Hub
                                </li>
                                <li>
                                    <img class="img_box1" src="assets/img/iconVs.png" />
                                    VSCode
                                </li>                      
                            </ul>
                        </li>
                    </div>          
    
                </div>
            
        
    </section>

    <section id="blog">
        <h3>MORE USED TOOLS</h3>
            <div class="contenedor">    
                <article>
                    <img src="assets/img/iconCss.png">
                        
                </article>
                <article>
                    <img src="assets/img/iconHtml.png">
                       
                </article>
                <article>
                    <img src="assets/img/iconJs.png">
                        
                </article>
            </div>   
    </section>

    <section id="info">
        <h3>PORTFOLIO</h3>
            <div class="contenedor">

                <div class="boton_modal">
                    <label for="btn_modal">
                        <div class="info"> 
                                <img src="assets/img/undrawTask.png">
                                    <h4>Todo-App</h4>
                        </div>
                    </label>
                </div>

                <input type="checkbox" id="btn_modal">
                <div class="container_modal">
                    <div class="content_modal">
                        <h2>Todo-App</h2>
                        <div class="img_app">
                            <a href="https://yauriantonio.github.io/task-list/">
                                <img src="assets/img/Imagen1.png" > 
                            </a>
                        </div>
                        <p>Register tasks to do, mark them and delete them.</p>
                        <div class="contenido">
                            <div class="git">
                                <a href="https://github.com/Yauriantonio/task-list">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                            <div class="btn_visit">
                                <a href="https://yauriantonio.github.io/task-list/">
                                    <label class="visit"for="">Visit</label>
                                </a>
                            </div>
                            <div class="btn_close">
                                <label for="btn_modal">Close</label>
                            </div>
                        </div>
                    </div>
                        <label for="btn_modal" class="close_modal"></label>
                </div>


                <div class="boton_modal">
                    <label for="btn_modall">
                        <div class="info"> 
                                <img src="assets/img/undrawCalculator.png">
                                    <h4>Calculator</h4>
                        </div>
                    </label>
                </div>           
                <input type="checkbox" id="btn_modall">
                <div class="container_modall">
                    <div class="content_modal">
                        <h2>Calculator</h2>
                        <div class="img_app">
                            <a href="https://yauriantonio.github.io/calculator/">
                                <img src="assets/img/Imagen2.png" > 
                            </a>
                        </div>
                        <p>Do your math operations and have fun.</p>
                        <div class="contenido">
                            <div class="git">
                                <a href="https://github.com/Yauriantonio/calculator">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                            <div class="btn_visit">
                                <a href="https://yauriantonio.github.io/calculator/">
                                    <label class="visit"for="">Visit</label>
                                </a>
                            </div>
                            <div class="btn_close">
                                <label for="btn_modall">Close</label>
                            </div>
                        </div>
                    </div>
                        <label for="btn_modall" class="close_modal"></label>
                </div>

                <div class="boton_modal">
                    <label for="btn_modala">
                        <div class="info"> 
                                <img src="assets/img/undrawPoke.png">
                                    <h4>Pokedesk</h4>
                        </div>
                    </label>
                </div>
                <input type="checkbox" id="btn_modala">
                <div class="container_modala">
                    <div class="content_modal">
                        <h2>Pokedesk</h2>
                        <div class="img_app">
                            <a href="https://yauriantonio.github.io/pokedesk/">
                                <img src="assets/img/Imagen3.png" > 
                            </a>
                        </div>
                        <p>Search your favorite pokemons by name or id.</p>
                        <div class="contenido">
                            <div class="git">
                                <a href="https://github.com/Yauriantonio/pokedesk">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                            <div class="btn_visit">
                                <a href="https://yauriantonio.github.io/pokedesk/">
                                    <label class="visit"for="">Visit</label>
                                </a>
                            </div>
                            <div class="btn_close">
                                <label for="btn_modala">Close</label>
                            </div>
                        </div>
                    </div>
                        <label for="btn_modala" class="close_modal"></label>
                </div> 

                <div class="boton_modal">
                    <label for="btn_modale">
                        <div class="info"> 
                                <img src="assets/img/undrawList.png">
                                    <h4>Tasks</h4>
                        </div>
                    </label>
                </div> 
                <input type="checkbox" id="btn_modale">
                <div class="container_modale">
                    <div class="content_modal">
                        <h2>Tasks</h2>
                        <div class="img_app">
                            <a href="https://yauriantonio.github.io/tasks/">
                                <img src="assets/img/ImgTasks.png" > 
                            </a>
                        </div>
                        <p>Add, select, delete and save your tasks to be done. </p>
                        <div class="contenido">
                            <div class="git">
                                <a href="https://github.com/Yauriantonio/tasks">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                            <div class="btn_visit">
                                <a href="https://yauriantonio.github.io/tasks/">
                                    <label class="visit"for="">Visit</label>
                                </a>
                            </div>
                            <div class="btn_close">
                                <label for="btn_modale">Close</label>
                            </div>
                        </div>
                    </div>
                        <label for="btn_modale" class="close_modal"></label>
                </div>                 
            </div>  

            <div class="contenedor">

                <div class="boton_modal">
                    <label for="btn_modali">
                        <div class="info"> 
                                <img src="assets/img/undrawGame.png">
                                    <h4>BlackJack</h4>
                        </div>
                    </label>
                </div>           
                <input type="checkbox" id="btn_modali">
                <div class="container_modali">
                    <div class="content_modal">
                        <h2>BlackJack</h2>
                        <div class="img_app">
                            <a href="https://yauriantonio.github.io/blackjack/">
                                <img src="assets/img/ImgBlack.png" > 
                            </a>
                        </div>
                        <p>Play blackjack, the first to match the number 21 wins.</p>
                        <div class="contenido">
                            <div class="git">
                                <a href="https://github.com/Yauriantonio/blackjack">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                            <div class="btn_visit">
                                <a href="https://yauriantonio.github.io/blackjack/">
                                    <label class="visit"for="">Visit</label>
                                </a>
                            </div>
                            <div class="btn_close">
                                <label for="btn_modali">Close</label>
                            </div>
                        </div>
                    </div>
                        <label for="btn_modali" class="close_modal"></label>
                </div> 

                <div class="boton_modal">
                    <label for="btn_modalo">
                        <div class="info"> 
                            <img src="assets/img/undrawDino.png">
                                <h4>Crud</h4>
                        </div>
                    </label>
                </div>
                <input type="checkbox" id="btn_modalo">
                <div class="container_modalo">
                    <div class="content_modal">
                        <h2>Crud</h2>
                        <div class="img_app">
                            <a href="#">
                                <img src="assets/img/hitech.jpg" > 
                            </a>
                        </div>
                        <p>Loading...</p>
                        <div class="contenido">
                            <div class="git">
                                <a href="#">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                            <div class="btn_visit">
                                <a href="#">
                                    <label class="visit"for="">Visit</label>
                                </a>
                            </div>
                            <div class="btn_close">
                                <label for="btn_modalo">Close</label>
                            </div>
                        </div>
                    </div>
                        <label for="btn_modalo" class="close_modal"></label>
                </div>            
                

                <div class="boton_modal">
                    <label for="btn_modalu">
                        <div class="info"> 
                                <img src="assets/img/undrawDanone.png">
                                    <h4>Danone</h4>
                        </div>
                    </label>
                </div>           
                <input type="checkbox" id="btn_modalu">
                <div class="container_modalu">
                    <div class="content_modal">
                        <h2>Danone</h2>
                        <div class="img_app">
                            <a href="#">
                                <img src="assets/img/hitech.jpg" > 
                            </a>
                        </div>
                        <p>Loading...</p>
                        <div class="contenido">
                            <div class="git">
                                <a href="#">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                            <div class="btn_visit">
                                <a href="#">
                                    <label class="visit"for="">Visit</label>
                                </a>
                            </div>
                            <div class="btn_close">
                                <label for="btn_modalu">Close</label>
                            </div>
                        </div>
                    </div>
                        <label for="btn_modalu" class="close_modal"></label>
                </div> 

                <div class="boton_modal">
                    <label for="btn_modalz">
                        <div class="info"> 
                                <img src="assets/img/undrawTime.png">
                                    <h4>Store</h4>
                        </div>
                    </label>
                </div>           
                <input type="checkbox" id="btn_modalz">
                <div class="container_modalz">
                    <div class="content_modal">
                        <h2>Store</h2>
                        <div class="img_app">
                            <a href="#">
                                <img src="assets/img/hitech.jpg" > 
                            </a>
                        </div>
                        <p>Loading...</p>
                        <div class="contenido">
                            <div class="git">
                                <a href="#">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                            <div class="btn_visit">
                                <a href="#">
                                    <label class="visit"for="">Visit</label>
                                </a>
                            </div>
                            <div class="btn_close">
                                <label for="btn_modalz">Close</label>
                            </div>
                        </div>
                    </div>
                        <label for="btn_modalz" class="close_modal"></label>
                </div> 
            </div>

    </section>
</main>

<footer>


    <div class="contenedor" id="contacto">
    <h3>CONTACT</h3>
        <div class="sociales">
            <div class="social">
                <a class="github" href="https://github.com/Yauriantonio">
                <i class="fa-brands fa-github"></i>
                    <h4>GitHub</h4>
                </a>
            </div>

            <div class="social">
                <a class="gmail" href="https://mail.google.com/mail/u/0/?tab=km#inbox?compose=new">
                <i class="fa-solid fa-envelope"></i>
                    <h4>Email</h4>
                </a>
            </div>

            <div class="social">
                <a class="link" href="https://www.linkedin.com/in/antonio-aguirre-357324245">
                <i class="fa-brands fa-linkedin"></i>
                    <h4>LinkedIn</h4>
                </a>
            </div>

            <div class="social">
                <a class="wats" href="https://wa.me/525633689804?text=Hola">
                <i class="fa-brands fa-whatsapp"></i>
                    <h4>Watsapp</h4>
                </a>
            </div>
            
        </div>
    </div>
    
    <div class="btn_subir">
        <div class="subir" id="subir">
        <i class="fa-regular fa-circle-up"></i>
        </div>
    </div>

    <div class="ultimo">
         <p class="copy">Yauri_Antonio_&copy;2024</p>
    </div>
    
</footer> 
`;
