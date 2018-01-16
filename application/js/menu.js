function menu_geral(_classe,_metodo,_callback){
    renovaTempoLogado=true;
    limpa_settimeouts();
    if(!mensagem_rodape){
        mensagem_sistema();
    }
    run_conteudo_geral(_classe,_metodo,undefined,_callback);
}
function menu_entidades(_metodo,obj_sel){
    renovaTempoLogado=true;
    limpa_settimeouts();
    run_conteudo_geral('Entidade',_metodo,$('#conteudo-entidades'));
    $(obj_sel).parents('ul:first').find('li').removeClass('active');
    $(obj_sel).parents('li:first').addClass('active');
}