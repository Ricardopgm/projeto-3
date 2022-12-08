import styles from './Editar.module.css';

import React, { useEffect } from "react";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

import { useParams } from "react-router-dom";


const validacaoForms = yup.object().shape({
  nome: yup.string().required("O título é obrigatório!").max(30, "O título precisa ter menos de 30 caracteres!"),

  acompanhamento: yup.string().required("O acompanhamento é obrigatório!").max(150, "A descrição precisa ter menos de 150 caracteres"),
  
  preco: yup.string().required("O Preço é obrigatório!").max(10, "O conteúdo precisa ter menos de 10 caracteres!"),

  ingredientes: yup.string().required("Os ingredientes são   obrigatório!").max(30, "O título precisa ter menos de 30 caracteres!")
})

const Editar = () => {

  const { id } = useParams()

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validacaoForms)
  })

  useEffect(() => {
    axios.get(`https://json-proj-3.vercel.app/Pratos/${id}`)
    .then((response) => {
      reset(response.data)
    })

  }, [])

  const addPost = x => axios.put(`https://json-proj-3.vercel.app/Pratos/${id}`, x)
  .then(() => {
    console.log("Deu certo!")
  })
  .catch(() => {
    console.log("Deu errado!")
  })

  return (
    <>
      <main>
        <div className={styles.cardPost}>
            <h1>Editar Conteúdo</h1>
            <div className="line-post"></div>
            
            <div className="card-body-post">

              <form onSubmit={handleSubmit(addPost)}>
                  <div className={styles.fields}>
                      <label>Título</label>
                      <input type="text" name="nome" {...register("nome")} />
                      <p className="error-message">{errors.nome?.message}</p>

                      <label>Acompanhamentos</label>
                      <textarea type="text" name="acompanhamento" {...register("acompanhamento")}></textarea>
                      <p className="error-message">{errors.acompanhamento?.message}</p>

                      <label>Preço</label>
                      <input type="text" name="preco" {...register("preco")} ></input>
                      <p className="error-message">{errors.preco?.message}</p>

                      <label>Ingredientes</label>
                      <textarea type="text" name="ingredientes" {...register("ingredientes")}></textarea>
                      <p className="error-message">{errors.ingredientes?.message}</p>

                      <div className={styles.btnPost}>
                        <button type="submit">Enviar</button>
                      </div>
                  </div>
              </form>
            </div>
        </div>

      </main>
      
    </>
  )
};
  
export default Editar;