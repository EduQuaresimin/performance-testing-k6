import http from 'k6/http'

export default () => {
    http.get('http://test.k6.io')
}