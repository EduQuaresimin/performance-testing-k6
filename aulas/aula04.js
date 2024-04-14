import http from 'k6/http'
import { check } from 'k6'
import { Counter, Gauge, Rate, Trend } from 'k6/metrics'

export const options = {
    vus: 1,
    duration: '3s'
}

const myCounter = new Counter('quantidade_de_chamadas')
const myGauge = new Gauge('tempo_bloqueado')
const myRate = new Rate('taxa_req_200')
const myTrend = new Trend('taxa_de_espera')

export default function() {
    const res = http.get('http://test.k6.io')
    myCounter.add(1) // Conta a quantidade de chamadas realizadas na requisição
    myGauge.add(res.timings.blocked) // acessa o retorno da req e valida o tempo de bloqueio
    myRate.add(res.status === 200) // acessa o retorno da req e valida quantas req tiverem o status 200 no seu res
    myTrend.add(res.timings.waiting) // acessa o retorno da req e valida quanto tempo a req ficou esperando para ser realizada
}