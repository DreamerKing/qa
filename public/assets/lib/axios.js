import axios from 'axios';
import Cookie from 'js-cookie';
import qs from 'qs';

export const GET = (url, params) => {
  let csrfToken = Cookie.get('csrftoken');
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRFToken': csrfToken
  };
  return axios.get(url, {headers, params})
              .then(res => res.data)
              .catch(err => {
                throw(err);
              });
}

export const POST = (url, data) => {
  let csrfToken = Cookie.get('csrftoken');
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRFToken': csrfToken
  };
  return axios.post(url, qs.stringify(data), {headers})
              .then(res => res.data)
              .catch(err => {
                throw(err);
              });
}

export const PUT =(url, data) => {
  let csrfToken = Cookie.get('csrftoken');
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRFToken': csrfToken
  };
  return axios.put(url, qs.stringify(data), {headers})
              .then(res => res.data)
              .catch(err => {
                throw(err);
              });
}
