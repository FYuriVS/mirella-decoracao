import { Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-50 mt-8">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
                        <p>Somos uma loja online dedicada a oferecer os melhores produtos com excelente atendimento ao cliente.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:underline">Página Inicial</Link></li>
                            <li><Link href="#" className="hover:underline flex gap-1"><Instagram /> Instagram</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contato</h3>
                        <p>Email: contato@email.com</p>
                        <p>Telefone: (85) 98702-6545</p>
                        <p>Endereço: Rua tal no bairro tal numero tal</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                    <p>&copy; {new Date().getFullYear()} Mirella Monteiro - Decoração. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}