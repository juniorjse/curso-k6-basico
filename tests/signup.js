import http from 'k6/http'
import { sleep, check } from 'k6'
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';
export const options = {
  vus: 10,
  duration: '30s'
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
