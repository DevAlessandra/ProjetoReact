import React, { useState } from "react";
import S from "./SejaVoluntario.module.scss";
import Swal from "sweetalert2";



const SejaVoluntario = () => {
   const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  })

  function handleChange(e){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

async function handleSubmit(e){
  e.preventDefault()

  const response = await fetch("http://localhost:3000/cadastros", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  })

  const data = await response.json()
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: data.mensagem || "Cadastro enviado com sucesso!",
    showConfirmButton: false,
    timer: 1500
  });
    // limpa o formulário
  setForm({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  })
}


  return (
    <>
      <article>
        {/* SEÇÃO - Seja Voluntário */}
        <div className={S.voluntario}>
          <h2>Seja Voluntário</h2>
          <p>
            Junte-se a nós e faça a diferença na vida de pessoas que precisam
          </p>

          <div className={S.cards}>
            <div className={S.card}>
              <h3>Impacto Direto</h3>
              <p>Sua dedicação salva vidas e transforma comunidades</p>
            </div>

            <div className={S.card}>
              <h3>Crescimento Pessoal</h3>
              <p>Desenvolva habilidades e cresça profissionalmente</p>
            </div>

            <div className={S.card}>
              <h3>Comunidade</h3>
              <p>Faça parte de uma rede de profissionais comprometidos</p>
            </div>
          </div>
        </div>
      </article>
       <section className={S.container}>
      <div className={S.formBox}>
        <h2>Inscrição para Voluntários</h2>

          <form onSubmit={handleSubmit}>
           <h3>Dados Pessoais</h3>
<div className={S.row}>
          <input
            className={S.row}
            type="text"
            name="nome"
            placeholder="Seu Nome *"
            required
            value={form.nome}
            onChange={handleChange}
          />

          <input
            className={S.row}
            type="email"
            name="email"
            placeholder="Seu Email *"
            required
              value={form.email}
            onChange={handleChange}
          />
</div>
          <input
            className={S.full}
            type="tel"
            name="telefone"
            placeholder="Seu Telefone *"
            required
             value={form.telefone}
            onChange={handleChange}
          />

          <h3>Mensagem Adicional</h3>

          <textarea
            name="mensagem"
            placeholder="Conte-nos porque você quer ser voluntário..."
              value={form.mensagem}
            onChange={handleChange}
          />

          <div className={S.btnBox}>
  <button type="submit">Enviar Inscrição</button>
</div>

        </form>
      </div>
    </section>
    </>
  );
};

export default SejaVoluntario;