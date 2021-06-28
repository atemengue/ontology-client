/** @format */

import axios from 'axios';

export function getClasses() {
  const response = axios.get('http://localhost:9393/api/classes');
  return response;
}
