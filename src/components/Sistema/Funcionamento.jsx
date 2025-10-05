import React from 'react'
import { motion } from "framer-motion";

const Funcionamento = () => {

    const cards = [
    {
      title: "TANQUE 1",
      text: "O Tanque 1 é o primeiro estágio do sistema Acqualife e desempenha um papel fundamental no início do processo de reaproveitamento sustentável da água. Ele foi projetado para captar e armazenar a água da chuva, evitando o desperdício e aproveitando ao máximo esse recurso natural que muitas vezes é negligenciado no dia a dia.",
      text2:"A estrutura do Tanque 1 foi pensada para garantir eficiência, durabilidade e segurança, permitindo que a água coletada seja armazenada por um período adequado até ser encaminhada para o Tanque 2. Nesse intervalo, o sistema ajuda a reduzir o impacto ambiental, minimizando o escoamento superficial e contribuindo para a diminuição de alagamentos e erosões em áreas urbanas.",
      text3:"Além disso, o Tanque 1 simboliza o primeiro passo rumo a um ciclo inteligente de reaproveitamento hídrico, onde cada etapa tem uma função específica para assegurar a qualidade e o aproveitamento total da água captada. A partir dele, a água segue seu caminho dentro do sistema Acqualife, continuando o processo de filtragem, purificação e reutilização de forma prática e sustentável.",
    },
    {
      
      title: "TANQUE 2",
      text: "O Tanque 2 é o segundo estágio do sistema Acqualife e tem a importante função de receber a água armazenada no Tanque 1 para dar continuidade ao processo de tratamento. Nesta fase, a água passa por um sistema de filtragem e purificação, que remove impurezas, resíduos sólidos e possíveis contaminantes, tornando-a mais limpa e segura para o uso posterior.",
      text2:"O processo de filtragem é realizado de forma eficiente e controlada, utilizando materiais e tecnologias que simulam métodos naturais de purificação, como camadas de areia, carvão ativado e elementos filtrantes específicos. Isso garante uma qualidade superior da água tratada, contribuindo diretamente para o uso consciente e sustentável desse recurso tão essencial.",
      text3:"Mais do que uma simples etapa de limpeza, o Tanque 2 representa o coração do sistema Acqualife, onde a transformação realmente acontece. A água captada da chuva deixa de ser apenas um recurso coletado e passa a se tornar água tratada e reaproveitável, pronta para seguir para os próximos estágios do sistema e ser utilizada de maneira segura e ambientalmente responsável.",
    },
    {
      title: "Monitoramento Contínuo de pH",
      text: "O Tanque 3 é o terceiro e último estágio do sistema Acqualife, responsável por garantir que a água tratada atinja o padrão ideal antes de ser utilizada. Após passar pelas etapas de captação e purificação, a água chega a este tanque, onde ocorre a análise e o controle do pH, etapa fundamental para assegurar que a água esteja dentro dos níveis adequados para o uso doméstico.",
      text2:"Com sensores de medição precisos, o Tanque 3 monitora constantemente a qualidade e o equilíbrio químico da água, ajustando o pH quando necessário. Esse processo garante não apenas a segurança e eficiência do sistema, mas também contribui para a preservação de tubulações e equipamentos que utilizam essa água.",
      text3:"Após a verificação e estabilização dos parâmetros, a água é distribuída para a residência, podendo ser utilizada em diversas atividades do dia a dia — como irrigação, limpeza, descargas sanitárias e outros usos não potáveis — de maneira prática e sustentável, simbolizando o encerramento do ciclo inteligente do Acqualife, onde tecnologia, inovação e consciência ambiental se unem para promover o uso responsável da água e reduzir o impacto ambiental nas comunidades.",
    },
    {
      title: "ACQUALIFE",
      text: "No seu controle, um futuro sustentável. Na sua casa, água inteligente fazendo a diferença.",
    },
  ];

  return (      
          <section className="w-full min-h-screen text-white px-6 md:px-20 py-16 flex flex-col items-center">
            
            {/* Título super rápido */}
            <motion.div 
              className="flex flex-col justify-center items-center pt-5 mb-16"
              initial={{ opacity: 0, filter: "blur(6px)", y: 15 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h1 className="text-xl md:text-5xl font-bold font-zalando text-[#0D6DFF] mb-4 text-center">
                O QUE NOSSO SISTEMA DE TANQUE OFERECE
              </h1>
            </motion.div>
      
            {/* Grid de cards vindo de baixo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
  {cards.map((card, index) => (
    <motion.div
      key={index}
      className={`bg-gradient-to-r font-zalando from-azul-style to-azul-style rounded-xl p-6 flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-transform duration-300
        ${index === 3 ? 'md:col-span-3' : ''}`}
      initial={{ 
        opacity: 0, 
        filter: "blur(4px)", 
        y: 50 // Mudança aqui: em vez de x (horizontal), usa y (vertical)
      }}
      whileInView={{ 
        opacity: 1, 
        filter: "blur(0px)", 
        y: 0 
      }}
      transition={{ 
        duration: 0.4, 
        ease: "easeOut",
      
      }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="">
        <h3 className={`text-center pb-3 text-lg font-semibold ${index === 3 ? 'text-xl md:text-2xl' : ''}`}>
          {card.title}
        </h3>
        <p className={`text-sm mt-2 ${index === 3 ? 'text-center text-base md:text-lg' : 'text-justify text-gray-200'}`}>
          {card.text}
        </p>
        {card.text2 && (
          <p className={`text-sm pt-2 mt-2 ${index === 3 ? 'text-center' : 'text-justify text-gray-200'}`}>
            {card.text2}
          </p>
        )}
        {card.text3 && (
          <p className={`text-sm pt-2 mt-2 ${index === 3 ? 'text-center' : 'text-justify text-gray-200'}`}>
            {card.text3}
          </p>
        )}
      </div>
    </motion.div>
  ))}
</div>

          </section>
    
  )
}

export default Funcionamento;