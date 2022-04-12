import { Injectable } from '@angular/core';
import details from '../assets/data/A4.json';

@Injectable()
export class DetailsService {
	constructor() {}

	getDetails(){
		return details;
	}
}