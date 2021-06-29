/** @format */

import axios from 'axios';

export function getClasses() {
  const response = axios.get('http://localhost:9393/api/classes');
  return response;
}

export function getClasse(idClasse) {
  const response = axios.get(`http://localhost:9393/api/classes${idClasse}`);
  return response;
}
