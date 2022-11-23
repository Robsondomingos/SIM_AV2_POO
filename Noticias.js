console.log ('teste');

class jornalista {
    construtor(foto, nome){
        this.foto = foto;
        this.nome= nome;

    }
    //atributos
noticias() {
    console.log('noticias');
}
}
class informações extends jornalista {
     construtor(foto,nome,informacoes){
        super(foto,nome);
       this.informacoes = informacoes;
     }  
       informações() {
        super.informacoes();
        console.log('noticia');
    }
}
  
