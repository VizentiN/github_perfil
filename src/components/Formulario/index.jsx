import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou")

        return () => {
            console.log("O componente finalizou")
        }
    }, [])

    useEffect(() => {
        console.log('o estado nome mudou');
    }, [nome])

    useEffect(() => {
        console.log("Materia A mudou para:" + materiaA)
    }, [materiaA])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior)

            return evento.target.value;
        })
    }

    const rendedrizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3

        if (media >= 7) {
            return (
                <p>Ola {nome}, voce foi aprovado!</p>
            )
        }
        else {
            return (
                <p>Ola {nome}, voce nao foi aprovado!</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota materia A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota materia B" onChange={({ target }) => setMateriaB(parseInt(target.value))} />
            <input type="number" placeholder="Nota materia c" onChange={({ target }) => setMateriaC(parseInt(target.value))} />
            {rendedrizaResultado()}
        </form>
    )
}

export default Formulario