import {useEffect, useState} from "react"

export default function questao() {
    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/123')
        .then(res => res.json())
        .then(setQuestao)
    }, [])

    function renderizarRepostas() {
        if (questao) {
            return questao.respostas.map((resp, index) => {
                return <li key={index}>{resp}</li>
            })
        }

        return false
    }

    return (
        <div>
            <h1>Questao</h1>
            <div>
                <span>{questao?.id} - {questao?.enunciado}</span>
                <ul>
                    {renderizarRepostas()}
                </ul>
            </div>
        </div>
    )
}