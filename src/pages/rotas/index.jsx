import Link from 'next/link'
import router from 'next/router' // pode importar o router ou importar o useRouter e instanciar

export default function rotas() {

    function navegacaoSimples(url) {
        router.push(url)
    }

    function navegacaoComParams() {
        router.push({
            pathname: 'rotas/params',
            query: {
                id: 15,
                nome: 'Joao dos Santos'
            }
        })
    }

    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="rotas/params?id=15&nome=teste">
                    <li>Params</li>
                </Link>
                <Link href="rotas/123/buscar">
                    <li>Buscar</li>
                </Link>
                <Link href="rotas/123/Daniel">
                    <li>Daniel</li>
                </Link>
            </ul>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <button onClick={() => router.push('rotas/123/buscar')}>Buscar</button>
                <button onClick={() => navegacaoSimples('rotas/123/Daniel')}>Daniel</button>
                <button onClick={navegacaoComParams}>Params</button>
            </div>
        </div>
    )
}