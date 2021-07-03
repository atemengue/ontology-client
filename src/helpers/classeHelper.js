/** @format */

import axios from 'axios';

export function getClasses() {
  const response = axios.get('http://localhost:9393/api/classes');
  return response;
}

export function getClasse(className) {
  const response = axios.get(`http://localhost:9393/api/classes/${className}`);
  return response;
}

export function exploreIndividual(name) {
  const response = axios.get(`http://localhost:9393/api/explore/${name}`);
  return response;
}

export function searchTerm(term) {
  const response = axios.get(`http://localhost:9393/api/search/${term}`);
  return response;
}

export function describeClasse(classe) {
  const response = axios.get(`http://localhost:9393/api/describe/${classe}`);
  return response;
}

export function getStatistique() {
  const response = axios.get(`http://localhost:9393/api/stats`);
  return response;
}
