function renderNavFootAut(){
    if(localStorage.getItem("token")){
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'authorization': localStorage.getItem("token")
            },
            body: JSON.stringify()
        }

        fetch('http://localhost:3001/api/open/getAuth', options)
        .then((res) => {
            if(res.status===200){
                return res.json()
            }
            else{
                localStorage.removeItem("token");
                renderNavNaoAutenticado();
                return null
            }
        })
        .then((res)=>{
            if(res){
            console.log(res);
            switch (res.level) {
                case 'regular':
                    renderNavRegular();
                    break;
                case 'admin':
                    renderNavRegular();
                    break;
            }
        }else return;
        })
        .catch((error) => console.log(error));
    }else{
        renderNav();
    }
}


function renderFooter(){
    renderCode("foot",`<!DOCTYPE html>
                    <html lang="pt-PT">
                    
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                            crossorigin="anonymous"></script>
                    </head>
                    
                    <body>
                        <div class="footer-dark">
                            <footer>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-3 item">
                                            <h3>Serviços</h3>
                                            <ul>
                                                <li><a href="/index.html">Início</a></li>
                                                <li><a href="/Visita_Explora/visit_explor.html">Visita/Explora</a></li>
                                                <li><a
                                                        href="/Experiencia_Atividades/experiencia_atividades.html">Experiências/Atividades</a>
                                                </li>
                                                <li><a href="/Alojamento/alojamento.html">Alojamento</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-6 col-md-3 item">
                                            <h3>Sobre</h3>
                                            <ul>
                                                <li><a href="/Equipa/team.html">Equipa</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6 item text">
                                            <h3>Visita São Miguel</h3>
                                            <p>São Miguel é uma das melhores e mais lindas ilhas do nosso arquipélago, não hesite em
                                                conhecê-la.</p>
                                        </div>
                                        <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i
                                                    class="icon ion-social-twitter"></i></a><a href="#"><i
                                                    class="icon ion-social-snapchat"></i></a><a href="#"><i
                                                    class="icon ion-social-instagram"></i></a></div>
                            </footer>
                    </body>
                    
                    </html>`)
}

function renderNav(){
    renderCode('nbar',
    `<!DOCTYPE html>
    <html lang="pt-PT">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
    </head>
    
    <body>
    
        <nav class="navbar navbar-expand-lg navbar-dark my_bg-nav">
            <div class="container-fluid">
                <div class="d-flex flex-grow-1">
                    <span class="w-100 d-lg-none d-block">
                    </span>
                    <a class="navbar-brand d-none d-lg-inline-block" href="/index.html"> Visita São Miguel </a>
                    <a class="navbar-brand-two mx-auto d-lg-none d-inline-block" href="/index.html">
                        <img src="Imagens/favicon-16x16.png" width="45px">
                    </a>
                    <div class="w-100 text-right">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                    <ul class="navbar-nav ms-auto flex-nowrap">
    
                        <li class="nav-item">
                            <a href="/index.html" class="nav-link m-2 menu-item">Início</a>
                        </li>
                        <li class="nav-item dropdown" style="margin-top: 7px;">
                            <a href="/Visita_Explora/visit_explor.html" class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown">Visita/Explora</a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <ul>
                                    <li><a class="dropdown-item" href="/Visita_Explora/centros_interpretacao.html">Centros
                                            de Interpretação</a></li>
                                    <li><a class="dropdown-item" href="/Visita_Explora/museus_centros.html">Museus e Centros
                                            Culturais</a></li>
                                    <li><a class="dropdown-item" href="/Visita_Explora/jardins_parques.html">Jardins e
                                            Parques</a></li>
                                    <li><a class="dropdown-item" href="/Visita_Explora/zona_balneare.html">Zonas
                                            Balneares</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item dropdown" style="margin-top: 7px;">
                            <a href="/Experiencia_Atividades/experiencia_atividades.html" class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown">Experiências/Atividades</a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <ul>
                                    <li><a class="dropdown-item" href="/Experiencia_Atividades/experiencia_atividades.html">Terra</a>
                                    </li>
                                    <li><a class="dropdown-item" href="/Experiencia_Atividades/expriencia_mar.html">Mar</a>
                                    </li>
                                    <li><a class="dropdown-item" href="/Experiencia_Atividades/expriencia_ar.html">Ar</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item dropdown" style="margin-top: 7px;">
                            <a href="/Alojamento/alojamento.html" class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown">Alojamentos</a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <ul>
                                    <li><a class="dropdown-item" href="/Alojamento/ponta_delgada.html">Ponta Delgada</a></li>
                                    <li><a class="dropdown-item" href="/Alojamento/lagoa.html">Lagoa</a></li>
                                    <li><a class="dropdown-item" href="/Alojamento/nordeste.html">Nordeste</a></li>
                                    <li><a class="dropdown-item" href="/Alojamento/vila_povoacao.html">Vila da Povoação</a></li>
                                    <li><a class="dropdown-item" href="/Alojamento/ribeira_grande.html">Ribeira Grande</a></li>
                                    <li><a class="dropdown-item" href="/Alojamento/vila_franca.html">Vila Franca do Campo</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item dropdown" style="margin-top: 7px;">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Conta</a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <ul>
                                    <li><a class="dropdown-item" href="/Conta/login.html">Iniciar Sessão</a></li>
                                    <li><a class="dropdown-item" href="/Conta/cadastro.html">Registar-se</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </body>
    
    </html>`)
}

function renderNavRegular(){
    renderCode('nbar',
    `<!DOCTYPE html>
    <html lang="pt-PT">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/Css/style.css">
        <script src="scripts/scripts.js"></script>
    </head>
    
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark my_bg-nav">
            <div class="container-fluid">
                <div class="d-flex flex-grow-1">
                    <span class="w-100 d-lg-none d-block">
                    </span>
                    <a class="navbar-brand d-none d-lg-inline-block" href="/index.html"> Visita São Miguel </a>
                    <a class="navbar-brand-two mx-auto d-lg-none d-inline-block" href="/index.html">
                        <img src="Imagens/favicon-16x16.png" width="45px">
                    </a>
                    <div class="w-100 text-right">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                    <ul class="navbar-nav ms-auto flex-nowrap">
    
                        <li class="nav-item">
                            <a href="/index.html" class="nav-link m-2 menu-item">Início</a>
                        </li>
                        <li class="nav-item dropdown" style="margin-top: 7px;">
                            <a href="/Visita_Explora/visit_explor.html" class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown">Visita/Explora</a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <ul>
                                    <li><a class="dropdown-item" href="/Visita_Explora/centros_interpretacao.html">Centros
                                            de Interpretação</a></li>
                                    <li><a class="dropdown-item" href="/Visita_Explora/museus_centros.html">Museus e Centros
                                            Culturais</a></li>
                                    <li><a class="dropdown-item" href="/Visita_Explora/jardins_parques.html">Jardins e
                                            Parques</a></li>
                                    <li><a class="dropdown-item" href="/Visita_Explora/zona_balneare.html">Zonas
                                            Balneares</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item dropdown" style="margin-top: 7px;">
                            <a href="/Experiencia_Atividades/experiencia_atividades.html" class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown">Experiências/Atividades</a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <ul>
                                    <li><a class="dropdown-item"
                                            href="/Experiencia_Atividades/experiencia_atividades.html">Terra</a>
                                    </li>
                                    <li><a class="dropdown-item" href="/Experiencia_Atividades/expriencia_mar.html">Mar</a>
                                    </li>
                                    <li><a class="dropdown-item" href="/Experiencia_Atividades/expriencia_ar.html">Ar</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item dropdown" style="margin-top: 7px;">
                            <a href="/Alojamento/alojamento.html" class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown">Alojamentos</a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <ul>
                                    <li><a class="dropdown-item" href="/Alojamento/ponta_delgada.html">Ponta Delgada</a>
                                    </li>
                                    <li><a class="dropdown-item" href="/Alojamento/lagoa.html">Lagoa</a></li>
                                    <li><a class="dropdown-item" href="/Alojamento/nordeste.html">Nordeste</a></li>
                                    <li><a class="dropdown-item" href="/Alojamento/vila_povoacao.html">Vila da Povoação</a>
                                    </li>
                                    <li><a class="dropdown-item" href="/Alojamento/ribeira_grande.html">Ribeira Grande</a>
                                    </li>
                                    <li><a class="dropdown-item" href="/Alojamento/vila_franca.html">Vila Franca do
                                            Campo</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a onclick="logout();" class="nav-link m-2 menu-item">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </body>
    
    </html>`
    )
}

function logout(){
    localStorage.removeItem("token");
    location.replace("http://localhost:3001/sessao");
}

function renderCode(id,code){
    document.getElementById(id).innerHTML = code;
}