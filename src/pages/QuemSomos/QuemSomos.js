import './QuemSomos.css'
import foto5 from '../../img/restaurante.jpg'

const QuemSomos= () => {
    return <>
<>
        <div className="text">
        <h1 className="quem">QuemSomos</h1>
        <h3>Fundado em 2022, o King Restaurant é gerenciado pelos proprietários Diego, Matheus, Milena, Ricardo e Suelen, criado pensando no melhor atendimento, 
          aliado com a melhor qualidade de produto, com profissionais qualificados na área da culinária. Nosso cardápio é diferenciado e único, trazendo diversos pratos executivos, sobremesas, petisco e drinks, perfeito para qualquer ocasião, fazendo com que nosso cliente se sinta à vontade em todos os seus momentos. Os pratos são bem servidos e toda essa excelência é apresentada a preços acessíveis. Nosso ambiente é amplo e muito aconchegante. Venha nos visitar! </h3>
        </div> 
        </>
     <img
          className="restaurante"
          src={foto5}
          alt="Second slide"
/>
</>
  };
  
  
  
  export default QuemSomos ;

