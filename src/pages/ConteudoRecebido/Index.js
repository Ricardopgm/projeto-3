import styles from './ConteudoRecebido.module.css';

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const ConteudoRecebido = () => {


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



  
  // Função para deletar uma postagem!
  function deletePost(id){
    axios.delete(`https://json-proj-3.vercel.app/Pratos/${id}`)

    setPosts(posts.filter(post => post._id !== id))
  }


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

                  <div className={styles.btns}>
                    <div className={styles.btnEdit}>
                        <Link to={{ pathname: `/Edicao/${post.id}` }}>
                            <button className={styles.botao}>Editar</button>
                        </Link>
                    </div>

                    <div className={styles.btnDelete}>
                        <button className={styles.botao} onClick={() => deletePost(post.id) }>Deletar</button>
                    </div>
                  </div>
                </div>
              )
          })}
            
        </div>
      </main>
  </div>
  )
};
  
export default ConteudoRecebido;