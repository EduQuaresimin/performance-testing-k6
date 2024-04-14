// 1) Inicialização

import sleep from 'k6'

// 2) Configuração

export const options = {
    vus: 1,
    duration: '10s'
}

// 3) Execução

export default function () {
    console.log('Testando K6')
    sleep(1)
}

// 4) Desmontagem (opcional)

export function teardown(data) {
    console.log(data)
}
