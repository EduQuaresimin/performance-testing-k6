# Performance Testing with K6

Anotações criadas para fins didáticos sobre testes de performance.

## Smoke Test

Tem objetivo de validar a minimo funcionamento após uma modificação na aplicação. 

### Abordagem:

- Carga mínima
  - Baixo volume de usuários por um curto periodo.

### Benefícios: 
- Validar se a aplicação está ou não funcional.

## Load Test

Obter uma avaliação do desempenho da aplicação em termos de usuários e requisições simultaneos.

Validar condições normais e de pico (verificar com o time a quantidade de usuários esperados).

Tem objetivo de garantir o funcionamento da aplicação com aquela quantidade de usuários.

### Abordagem:

- Carga costante
  - Volume alto de usuários por um período médio.

- Carga variável
  - Dividido em fases;
  - Fase de arrancada: Sair do usuário 0 até chegar a carga máxima do teste;
  - Fase de carga: Durante um perído de tempo terá uma carga constante de usuários;
  - Fase de desaceleração: Diminui gradativamente a quantidade de usuários até chegar em 0.

### Benefícios: 

- Permite que o sistema aqueça ou redimensione automaticamente para lidar com o tráfego;
- Comparar o tempo de resposta entre os estágios de carga baixa e carga nominal.

## Stress Test

Tem objetivo de avaliar disponibilidade, estabilidade e a recuperabilidade do sistema.

1) Como o sistema se comporta em condições extremas?
2) Qual é a capacidade máxima do sistema em termos de usuários ou taxa de transferência?
3) Qual é o ponto de ruptura do sitema?
4) O sistema se recupera sem intervenção manual após o término do teste de estresse?

Também tem como objetivo validar a arquitetura de uma aplicação, identificando gargalos que podem ser prejudiciais.

### Abordagem:

- Aumento gradual da carga até uma quantidade extrema de usuários.

### Benefícios:

- Valida a rapidez com que os mecanismos de dimensionamento automático reagem ao aumento de carga;
- Valida se houve alguma falha durante os eventos de dimensionamento.

## Spike Test

- Como o sistema funcionará sob um aumento repentino de tráfego?
- O seu sistema irá se recuperar assm que o tráfego diminuir?

O sistema pode reagir de quatro maneiras diferentes:

1) Excelente: O sistema não é degradado durante aumento de tráfego e o tempo de resposta é semelhante durante o tráfego baixo.
2) Bom: O tempo de resposta é mais lento, o sistema não apresenta erros e todos os perigos são tratados.
3) Insatisfatório: O sistema produz erros durante o aumento de tráfego mas volta ao normal depois que o tráfego diminui.
4) Ruim: O sistema trava e não se recupera depois que o tráfego diminui.

### Abordagem: 

- Pode ser abordado em etapas;
- Aumento repentino de carga por um intervalo de tempo muito curto.

### Benefícios: 

- Valida como o sistema reage a um ataque DDoS;
- Valida a recupração do sistema após um aumento extremo e repentino de usuários. 

## Soak Test 

1) Valida confiabilidade em longos períodos de tempo;
2) Se o sistema não sofre de bugs ou vazamentos de memória;
3) Se as reinicializações inesperadas do aplicativo não perdem solicitações;
4) Bugs relacionados a condições de corrida que aparecem esporaficamente;
5) Certificar que seu banco de dados não esgote o espaço de armazenamento alocado e pare;
6) Certificar que seus logs não esgotam o armazenamento em disco alocado
7) Certificar de que o serviçoes externos dos quais o sistema depende não parem de funcionar após a execução de uma certa quantidade de solicitações.

### Abordagem: 

- Realizado por um longo período que pode levar de várias horas até dias ou semanas;
- Utiliza cerca de 80% de carga do ponto de ruptura.

### Benefícios: 

- Validar comportamento do sistema com uma alta carga de usuários por um longo período de tempo.

### OBS.:

- Deve ser feito um estudo antes de realizar o Soak Test, pois pode gerar altos custo para a empresa.

## Breakpoint Test

Testa os limites do seu sistema.

- Busca ajustar/cuidar de pontos fracos do sistema, buscando limites maiores suportados pelo sistema;
- Ajuda a planejar e verificar a correção do sistema com um baixo limite de utilização.

Quando realizar?

1) Após mudanças significativas na base de código ou infraestrutura;
2) Ajuda a verificar o consumo elevado de recursos pelo sistema;
3) Validar se a carga do sistema cresce continuamente.

Considerações antes de realizar o teste:

1) Atenção a elasticidade de ambientes de nuvem (buscamos validar os limentes do sistema e não da infraestrutura);
2) Aumento de carga gradual;
3) Tipo de teste de ciclo iterativo (realizar varios esperimentos para entender o limite do sitema);
4) Interrupção manual ou automática.

Esse teste é realizado após a realização dos testes anteriores.