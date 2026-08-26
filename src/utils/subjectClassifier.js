export function classifySubject(value) {
  const query = value.toLocaleLowerCase('pt-BR')
  const categories = {
    retrato: ['retrato', 'pessoa', 'selfie', 'rosto', 'gente', 'amigo', 'humano', 'foto minha'],
    paisagem: ['paisagem', 'natureza', 'céu', 'ceu', 'montanha', 'praia', 'mar', 'árvore', 'arvore', 'viagem'],
    comida: ['comida', 'prato', 'macarrão', 'macarrao', 'doce', 'bebida', 'restaurante', 'café', 'cafe', 'almoço', 'almoco'],
  }

  return Object.entries(categories).find(([, terms]) =>
    terms.some((term) => query.includes(term)),
  )?.[0] ?? 'objeto'
}
