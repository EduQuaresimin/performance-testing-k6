import http from 'k6/http'
import { check } from 'k6'

export const options = {
    vus: 1,
    duration: '3s'
}

export default () => {
    const res = http.get('http://test.k6.io')
    check(res, {
        'Response status eq 200': (r) => r.status === 200
    })
}