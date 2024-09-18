const nomes = ['Maria','André','Marina','Gabriel','Emilyn','Joca','Beatriz']
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)