import styles from './Pratos.module.css';

import axios from "axios";
import React, { useState, useEffect } from "react";


const Refeicoes = () => {


  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    axios.get("https://json-proj-3.vercel.app/Pratos")
    .then((response) => {
        setPosts(response.data)
    })
    .catch(() => {
        console.log("Deu errado!")
    })
  })

  return (
    <div>  
      <main>
        <div className={styles.cards}>
          {posts.map((post, key) => {
              return (    
                <div className={styles.card} key={key}>
                  <h3 className={styles.titulo}>{post.nome}</h3>
                  
                  <p className={styles.subTitulo}>Acompanhamentos: {post.acompanhamento}</p>
                  <p>Por apenas R${post.preco} reais!</p>
                </div>
              )
          })}
            
        </div>

      </main>
  </div>
  )
};
  
export default Refeicoes;