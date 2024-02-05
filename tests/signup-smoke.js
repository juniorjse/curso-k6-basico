import http from 'k6/http'
import { sleep, check } from 'k6'
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';

export const options = {
  vus: 1,
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% of requests must complete below 250ms
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
  },
}
 
export default function () {
  const url = 'http://localhost:3333/signup'
  const randomUUID = uuidv4().substring(24);//cut the UUID to fit the email size
  const payload = JSON.stringify({
     
    email: `${randomUUID}@qa.wls.com.br`,
    password: '123456'
  })

  const headers = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const res = http.post(url, payload, headers)

  check(res, {
    'status should be 201': (r) => r.status === 201
  })

  sleep(1)
}
