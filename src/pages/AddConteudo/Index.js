import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './AddConteudo.module.css';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import axios from 'axios';


// Função para o formulário ter alguns requerimentos.
const validacaoForms = yup.object().shape({
    nome: yup.string().required("O título é obrigatório!").max(30, "O título precisa ter menos de 30 caracteres!"),

    acompanhamento: yup.string().required("O acompanhamento é obrigatório!").max(300, "O acompanhamento precisa ter menos de 300 caracteres"),

    preco: yup.string().required("O Preço é obrigatório!").max(10, "O Preço precisa ter menos de 10 caracteres!"),

    ingredientes: yup.string().required("Os ingredientes são obrigatório!").max(300, "Os ingredientes precisam ter menos de 300 caracteres!")
})


function AddConteudo(){

    // Função para poder dar o comando Post
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validacaoForms)
    })

    const addPost = x => axios.post("https://json-proj-3.vercel.app/Pratos", x)
    .then(() => {
        console.log("Deu certo!")
    })
    .catch(() => {
        console.log("Deu errado!")
    })

    return(
        <div>

            <main>
                <div className={styles.cardPost}>
                    <h1>Adicionar Conteúdo</h1>
                    <div className="line-post"></div>
                    
                    <div className="card-body-post">

                        <form onSubmit={handleSubmit(addPost)}>
                            <div className={styles.fields}>
                                <label className={styles.tituloForm}>Título</label>
                                <input type="text" name="nome" {...register("nome")} />
                                <p className={styles.errorMessage}>{errors.nome?.message}</p>

                                <label className={styles.tituloForm}>Acompanhamentos</label>
                                <textarea type="text" name="acompanhamento" {...register("acompanhamento")}></textarea>
                                <p className={styles.errorMessage}>{errors.acompanhamento?.message}</p>

                                <label className={styles.tituloForm}>Preço</label>
                                <input type="text" name="preco" {...register("preco")} ></input>
                                <p className={styles.errorMessage}>{errors.preco?.message}</p>

                                <label className={styles.tituloForm}>Ingredientes</label>
                                <textarea type="text" name="ingredientes" {...register("ingredientes")}></textarea>
                                <p className={styles.errorMessage}>{errors.ingredientes?.message}</p>

                                <div className={styles.btnPost}>
                                    <button className={styles.botao} type="submit">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <p className={styles.paragrafo}>Editar e deletar os conteúdos da página Refeições</p>
                <div className={styles.btnEdit}>
                    <Link to={{ pathname: `/ConteudoRecebido` }}>
                        <button className={styles.botao}>Editar/Deletar</button>
                    </Link>
                </div>

            </main>

            
        </div>
    )
}
export default AddConteudo;