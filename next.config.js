/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Serve para criar variaveis de ambiente
  env: {
    // process.env.teste
    teste: 'teste'
  }
}

module.exports = nextConfig
