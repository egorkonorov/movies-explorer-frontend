export const BASE_URL = 'https://api.frontend.konorov.nomoredomains.rocks';

export const register = (userPassword, userEmail) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password: userPassword, email:userEmail})
  })
  .then((res) => {
    return getResponseData(res);
  })
  
}; 

export const authorize = (identifier, userPassword) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password: userPassword, email: identifier})
    })
    .then((res) => {
      return getResponseData(res)
    })
    .then((data) => {
        
      if (data.token){
        localStorage.setItem('token', data.token);
        return data;
      }
    })
  }; 


  export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then((res) => {
      return getResponseData(res);
    })
  } 

  export const getResponseData = (res) => {
    if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}