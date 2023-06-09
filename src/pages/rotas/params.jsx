import Link from "next/link"
import { useRouter } from "next/router"

export default function params() {
    const router = useRouter()
    const nome = router.query.nome
    const id = router.query.id

    return (
        <div>
            <h1>Rotas Params {nome} - {id}</h1>
            <Link href="/rotas">
                <button>
                    Voltar
                </button>
            </Link>
        </div>
    )
}