import { Pipe, PipeTransform} from "@angular/core";
import { Customer } from 'src/app/models/customer';

@Pipe({

    name: 'customerFilter'

})

export class CustomerFilterPipe implements PipeTransform {
    
    transform(value: Customer[], filterBy: string) : Customer[] {
       
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter((customer : Customer) => customer.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
    
}