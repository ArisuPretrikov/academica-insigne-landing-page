
import Title from '../../assets/title4.png'



function FAQ() {

    return (
        <>
            <div className='w-full justify-center flex'>
                <div className='pb-20 relative flex flex-wrap max-w-[1366px] justify-center bg-[#0d1226] pt-12 px-4'>
                    <div className='flex flex-wrap w-full justify-center'><img src={Title} className='max-w-full h-auto' /></div>

                    <div className='flex flex-wrap w-full justify-center'>
                        <div className='mt-10 sm:mt-24 mb-5 w-full max-w-4xl flex flex-wrap shadow-xl/20'>
                            <div className="collapse collapse-arrow bg-[#16163f] rounded-none border-b-2 border-[#ffffff20] rounded-t-lg">
                                <input type="radio" name="my-accordion-2" className="peer" defaultChecked />
                                <div className="collapse-title font-semibold peer-checked:bg-[#1c1652]">Como posso entrar em contato com a Editora Insigne?</div>
                                <div className="collapse-content text-sm bg-[#1c1652] flex items-center peer-checked:pt-4">
                                    Nosso atendimento é rápido e simplificado via WhatsApp. Basta nos chamar pelo número disponível no site e também no link da bio do nosso instagram para tirar dúvidas, enviar seu original ou acompanhar seu processo de publicação. Nossa equipe estará plenamente à sua disposição.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-[#16163f] rounded-none border-b-2 border-[#ffffff20]">
                                <input type="radio" name="my-accordion-2" className="peer" />
                                <div className="collapse-title font-semibold peer-checked:bg-[#1c1652]">Como envio meu original para avaliação?</div>
                                <div className="collapse-content text-sm bg-[#1c1652] flex items-center peer-checked:pt-4">
                                    Você pode enviar seu original diretamente pelo WhatsApp. Nesse caso, inicialmente precisaremos do seu arquivo Word para avaliação, as demais informações necessárias serão alinhadas durante o atendimento. Após isso, o trabalho será enviado para o nosso conselho editorial e em aproximadamente 24 horas você receberá um retorno.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-[#16163f] rounded-none border-b-2 border-[#ffffff20]">
                                <input type="radio" name="my-accordion-2" className="peer" />
                                <div className="collapse-title font-semibold peer-checked:bg-[#1c1652]">A editora aceita originais de qualquer gênero literário?</div>
                                <div className="collapse-content text-sm bg-[#1c1652] flex items-center peer-checked:pt-4">
                                    Sim! Inicialmente, a Editora Insigne realizava a publicação de obras acadêmicas, mas atualmente trabalhamos com obras de todos os gêneros: ficção, poesia, literatura infantojuvenil, acadêmica e mais.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-[#16163f] rounded-none border-b-2 border-[#ffffff20]">
                                <input type="radio" name="my-accordion-2" className="peer" />
                                <div className="collapse-title font-semibold peer-checked:bg-[#1c1652]">Quanto tempo leva para publicar meu livro?</div>
                                <div className="collapse-content text-sm bg-[#1c1652] flex items-center peer-checked:pt-4">
                                    Nosso processo é rápido: publicamos sua obra em até 7 dias após a aprovação do original e o envio dos materiais necessários. E você não precisa se preocupar, iremos te auxiliar a escolher todo design, incluindo capa, diagramação e outros detalhes  para que a obra realmente reflita você!
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-[#16163f] rounded-none border-b-2 border-[#ffffff20]">
                                <input type="radio" name="my-accordion-2" className="peer" />
                                <div className="collapse-title font-semibold peer-checked:bg-[#1c1652]">A publicação já inclui as cópias físicas?</div>
                                <div className="collapse-content text-sm bg-[#1c1652] flex items-center peer-checked:pt-4">
                                    O investimento inicial para o pacote de publicação não engloba as cópias físicas. Entretanto, caso você deseje, cuidaremos disso plenamente para você e a sua única preocupação será essa: receber as suas cópias no local desejado. Temos parceria direta com gráficas, o que facilitará todo o processo para que você tenha sua obra em mãos.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-[#16163f] rounded-none border-b-2 border-[#ffffff20]">
                                <input type="radio" name="my-accordion-2" className="peer" />
                                <div className="collapse-title font-semibold peer-checked:bg-[#1c1652]">Onde posso encontrar os livros publicados pela editora?</div>
                                <div className="collapse-content text-sm bg-[#1c1652] flex items-center peer-checked:pt-4">
                                    Todos os livros ficam disponíveis para compra diretamente no nosso site, de forma simples e atrativa para os leitores.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-[#16163f] rounded-none border-b-2 border-[#ffffff20]">
                                <input type="radio" name="my-accordion-2" className="peer" />
                                <div className="collapse-title font-semibold peer-checked:bg-[#1c1652]">O autor recebe alguma porcentagem pelas vendas?</div>
                                <div className="collapse-content text-sm bg-[#1c1652] flex items-center peer-checked:pt-4">
                                    Sim, o autor recebe um percentual sobre o valor de cada venda e você poderá alinhar todas essas questões com o nosso editor chefe.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-[#16163f] rounded-none border-b-2 border-[#ffffff20]">
                                <input type="radio" name="my-accordion-2" className="peer" />
                                <div className="collapse-title font-semibold peer-checked:bg-[#1c1652]">A editora ajuda na divulgação do livro?</div>
                                <div className="collapse-content text-sm bg-[#1c1652] flex items-center peer-checked:pt-4">
                                    Sim, ajudamos com a divulgação inicial em nossas redes sociais e também em nosso site!
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-[#16163f] rounded-none border-b-2 border-[#ffffff20]">
                                <input type="radio" name="my-accordion-2" className="peer" />
                                <div className="collapse-title font-semibold peer-checked:bg-[#1c1652]">Como acompanho o andamento da minha publicação?</div>
                                <div className="collapse-content text-sm bg-[#1c1652] flex items-center peer-checked:pt-4">
                                    Todo o processo é acompanhado diretamente via WhatsApp. Você pode solicitar atualizações sobre cada etapa, desde a avaliação até a publicação.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-[#16163f] rounded-none rounded-b-lg">
                                <input type="radio" name="my-accordion-2" className="peer" />
                                <div className="collapse-title font-semibold peer-checked:bg-[#1c1652]">O que está incluso no pacote completo de publicação</div>
                                <div className="collapse-content text-sm bg-[#1c1652] flex items-center peer-checked:pt-4">
                                    O nosso pacote completo de publicação inclui: Editoração completa do livro físico e digital, diagramação do texto e projeto gráfico, adequação às normas da ABNT, design da capa, contracapa, orelhas e lombada, elaboração de ficha catalográfica e registro de ISBN.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div><div className="font-black inline-block">Não encontrou suas respostas aqui?</div> <div className="font-thin inline-block">Entre em contato com o <a id='hiperlink' href='#'>Suporte</a> ou <a id='hiperlink' href='#'>Envie sua pergunta</a></div></div>
                </div>
            </div>
        </>
    )
}

export default FAQ