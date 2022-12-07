import Carousel from 'react-bootstrap/Carousel';
import foto from '../../img/torta.webp';
import foto2 from '../../img/carne.webp';
import foto3 from '../../img/bebida.webp';
import foto4 from '../../img/print.PNG';

import '../../componentes/Home.css';

function Home() {
  return (
    <>
        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={foto2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Comidas</h3>
          <p>Diversos pratos para vocês e sua familia se deliciar.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={foto}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Sobremesas</h3>
          <p>As Sobremesas mais saborosas vocês encontram aqui.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={foto3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>BEBIDAS</h3>
          <p>
          Variedades de bebidas e drinks.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="local">
 <h1 className="end" > venha conhecer nossa loja fisica</h1>
 <img
          className="print"
          src={foto4}
          alt="Second slide"
/>
</div>
     
    </>



  );
}

export default Home;