const tablePlayers = [
    {"nome": "Fulano","xp":2500},
    {"nome": "Beltrano","xp":950},
    {"nome": "Sicrano","xp":8300},
    {"nome": "Pedrinho","xp":15000},
    {"nome": "Maria","xp":6300},
    {"nome": "Luiza","xp":7650},
]

console.log('| Tabela de Heróis 🎮 |')
console.table(tablePlayers,["nome","xp"])

tablePlayers.forEach((e)=>{
    let level = ''
    if(e.xp<=1000){ // No caso de ser 1000 de xp o Herói não teria nenhum nível, então coloquei o operador menor igual
        level = 'Ferro'
    }else if(e.xp<=2000){
        level = 'Bronze'
    }else if(e.xp<=5000){
        level = 'Prata'
    }else if(e.xp<=7000){
        level = 'Ouro'
    }else if(e.xp<=8000){
        level = 'Platina'
    }else if(e.xp<=9000){
        level = 'Ascendente'
    }else if(e.xp<=10000){
        level = 'Imortal'
    }else{
        level='Radiante'
    } 
        
    console.log(`O herói de nome **{${e.nome}}** está no nível **{${level}}** com o xp : ${e.xp} `);
    
})

