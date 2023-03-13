Descrizione
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus
Aggiungere alla pagina un’immagine, presa anch’essa da un data.


RISOLUZIONE:

1-Inizio includendo vuejs tramite la sua cdn nel body;

2-creo un div nel body che sara' il contenitore in cui vuejs potra' guardare e su js inizializzo vue, nei data scrivero' il testo dell'h1 (es: message: 'Hello Vue') e il percorso foto del bonus (es: picpath:'blablabla').

3-Nel div creo un h1 che andro' a modificare direttamente con l'interpolazione che ci e' concessa da vue

4-come nel punto 3 lo faccio anche per l'immagine 

FINE

CORREZIONI DI RISOLUZIONE

1-Per la fonte del img devo usare il v-bind, perche' con il v-model ci viene restituita una stringa che non viene letta dal tag src