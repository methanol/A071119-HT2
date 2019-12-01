import { InjectionToken } from '@angular/core';

export const BASE_URL = 'https://api.github.com/search/repositories?q';
export const BASE_URL_TOKEN = new InjectionToken(BASE_URL);