const nomes = ["Felipe", "Gabriella", "Mariana", "Murilo", "Alice", "Golias", "Guilherme"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)