import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import process from "process"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://projetoreact-beige.vercel.app"
  ]
}))
app.use(express.json())

let cadastros = []
let proximoId = 1


// =========================
// VALIDAÇÕES
// =========================

function emailValido(email) {
  if (!email) return false
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

function telefoneValido(telefone) {
  if (!telefone) return false
  const regex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/
  return regex.test(telefone)
}

function validarCadastro(req, res, next) {

  const { nome, email, telefone, mensagem } = req.body

  // validar nome
  if (!nome || nome.trim().length < 3) {
    return res.status(400).json({
      erro: "Nome deve conter no mínimo 3 caracteres"
    })
  }

  // validar email
  if (!emailValido(email)) {
    return res.status(400).json({
      erro: "Email inválido"
    })
  }

  // validar telefone
  if (!telefoneValido(telefone)) {
    return res.status(400).json({
      erro: "Telefone inválido"
    })
  }

  // validar mensagem (opcional mas com limite)
  if (mensagem && mensagem.length > 500) {
    return res.status(400).json({
      erro: "Mensagem muito longa (máximo 500 caracteres)"
    })
  }

  next()
}


// =========================
// ROTAS
// =========================

app.get("/", (req, res) => {
  res.send("API de voluntários funcionando 🚀")
})


// listar voluntários
app.get("/cadastros", (req, res) => {
  res.json(cadastros)
})


// cadastrar voluntário
app.post("/cadastros", validarCadastro, (req, res) => {

  const { nome, email, telefone, mensagem } = req.body

  const novoCadastro = {
    id: proximoId,
    nome,
    email,
    telefone,
    mensagem: mensagem || ""
  }

  cadastros.push(novoCadastro)
  proximoId++

  res.status(201).json({
    mensagem: "Cadastro realizado com sucesso",
    cadastro: novoCadastro
  })

})


// =========================
// SERVIDOR
// =========================

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})