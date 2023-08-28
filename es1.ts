function generaSubString(str: string): string[] {
    let sottoStringhe: string[] = [];
  
    for (let i = 0; i < str.length; i++) {// Itera attraverso ogni carattere nella stringa
      for (let j = i + 1; j <= str.length; j++) {// Itera attraverso le possibili lunghe delle sottostringhe
        sottoStringhe.push(str.slice(i, j)); // Aggiunge la sottostringa corrente all'array delle sottostringhe
      }
    }
    return sottoStringhe;  // Restituisce l'array contenente tutte le sottostringhe
}

function generaOggettoSubString(inputArray: string[]): Record<string, string[]> {
    let oggettoFinale: Record<string, string[]> = {};  // Crea un oggetto vuoto per immagazzinare i risultati
  
    for (const inputStringa of inputArray) {  // Itera attraverso ogni stringa nell'array di input
      try {
        if (typeof inputStringa !== 'string') {  // Verifica se l'elemento dell'array è una stringa
          throw new Error('Input non è una stringa');  // Da errore se l'input non è una stringa
        }
  
        let sottoStringhe = generaSubString(inputStringa);  // Genera le sottostringhe per la stringa corrente
        oggettoFinale[inputStringa] = sottoStringhe;  // Aggiungi l'array di sottostringhe all'oggetto risultante
      } catch (error) {
        console.error('Errore: ', error.message);  // Gestisce eventuali errori e stampa il messaggio di errore
      }
    }
  
    return oggettoFinale;  // Restituisce l'oggetto contenente le chiavi e le sottostringhe associate
  }

  const inputArray: string[] = ["test", "foo", "bar"];
  const result: Record<string, string[]> = generaOggettoSubString(inputArray);
  result; // Il risultato verrà visualizzato nella console dopo l'esecuzione