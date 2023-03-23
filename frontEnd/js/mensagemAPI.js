'use strict'

export const pesquisarMensagens = async (telefone) => {
    const url = `http://localhost:8080/contatos/${telefone}`
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()
    return data.contacts
}

//console.log(pesquisarMensagens('11987876567'))