import { InjectionToken } from '@angular/core';

export const BASE_URL = 'https://api.github.com/search/repositories?q';
export const BASE_URL_TOKEN = new InjectionToken(BASE_URL);

export interface IProject {
	'id': number;
	'name': string;
	'html_url': string;
	'watchers': number;
	'language': string;
  }