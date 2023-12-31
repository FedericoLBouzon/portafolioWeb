
import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Project from '../components/Proyectos'; // Asegúrate de importar el componente Project si aún no lo has hecho
import Footer from '../components/Footer'
import './App.css'
function App() {
  return (
    <div>
      <Header />
      <Main/>
      <div className="projects-container">
      <h2 className='titleP'>Proyectos Finalizados</h2>

      <Project
        title="Mercado Liebre"
        lenguaje="HTML, CSS Y JS"
        description="Página Web realizada en cursos de Aprendé Programando 2022, que simula un E-Commers Básico, algo similar a mercado Libre "  
        imageUrl="./src/assets/Img/MercadoLiebre.png"
        projectUrl="https://federicolbouzon.github.io/MercadoLiebre/"
      />
      <Project
        title="MediHealt"
        lenguaje="React"
        description="APP realizada en Desarrollo-web 3 Aprendé Programando, de manera grupal, esta apliación informa algunos centros de salud de Buenos Aires."
        imageUrl="./src/assets/Img/MediHealt.png"
        projectUrl="https://gustin23.github.io/GRUPO-3-DSD-MediHealth/"
      />
        <Project
        title="S.A.A"
        lenguaje="C# y Acces"

        description="PROTOTIPO de un Sistema Automático de Asistencia (S.A.A). Aplicación de escritorio para un proyecto de la escuela, desarollada en grupo, el cual simula un sistema de fichaje por huella digital."
        imageUrl="./src/assets/Img/S.A.A.png"
        projectUrl="https://github.com/FedericoLBouzon/S.A.A"
      />
     
</div>
    <Footer/>
    </div>
  );
}

export default App;
