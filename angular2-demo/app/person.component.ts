import {Component} from '@angular/core';
import {NumEnum} from './numEnum';
import {Employee} from './employee';
@Component({
    selector: 'person-app',
    templateUrl: 'app/person.component.html', 
    styleUrls: ['app/person.component.css']
})
export class PersonComponent {
    isValid = true;
	ids = [1,2,3,4];	
 	myNumEnum = NumEnum;	
    emp1 = new Employee(100, 'Nilesh');
    emp2 : Employee;
}