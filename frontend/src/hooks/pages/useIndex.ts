import { useEffect, useState } from "react";
import { Professor } from "../../@types/Professor";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [listProfessors, setListProfessors] = useState<Professor[]>([]);
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [professorSelected, setProfessorSelected] = useState<Professor | null>(null)
    const [message, setMessage] = useState('')

    useEffect(() => {
        ApiService.get('/professores').then((response) => {
            setListProfessors(response.data)
        })
    }, []);

    useEffect(()=>{
        limparFormulário()
    },[professorSelected])

    function marcarAula(){
        if(professorSelected!== null){
            if(validarDadosAula()){
                ApiService.post('/professores/'+ professorSelected.id +'/aulas',{
                    nome, email
                }).then(()=>{
                    setProfessorSelected(null)
                    setMessage('Cadastrado com sucesso')
                }).catch((error)=>{
                    setMessage(error.response?.data.message)
                })
            }else{
                setMessage('Preencha os dados corretamente')
            }
        }
    }

    function validarDadosAula(){
        return nome.length > 0 && email.length > 0
    }

    function limparFormulário(){
        setNome('')
        setEmail('')
    }

    return {
        listProfessors,
        nome, setNome,
        email, setEmail,
        professorSelected, setProfessorSelected,
        marcarAula,
        message, setMessage,
        limparFormulário
    }
}
