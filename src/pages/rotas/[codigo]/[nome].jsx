import { useRouter } from "next/router"
import Link from "next/link"

export default function nome() {
    const router = useRouter()
    const codigo = router.query.codigo
    const nome = router.query.nome

    return (
        <div>
            <h1>Rotas / { codigo } / {nome} / Buscar</h1>
            <Link href="/rotas">
                <button>
                    Voltar
                </button>
            </Link>
        </div>
    )
}