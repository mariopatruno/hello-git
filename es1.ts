function generaSubString(str: string): string[] {
    let sottoStringhe: string[] = [];
  
    for (let i = 0; i < str.length; i++) {// Itera attraverso ogni carattere nella stringa
      for (let j = i + 1; j <= str.length; j++) {// Itera attraverso le possibili lunghe delle sottostringhe
        sottoStringhe.push(str.slice(i, j)); // Aggiunge la sottostringa corrente all'array delle sottostringhe
      }
    }
    return sottoStringhe;  // Restituisce l'array contenente tutte le sottostringhe
}