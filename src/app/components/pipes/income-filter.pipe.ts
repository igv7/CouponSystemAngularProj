import { Pipe, PipeTransform} from "@angular/core";
import { Income } from 'src/app/models/income';

@Pipe({

    name: 'incomeFilter'

})

export class IncomeFilterPipe implements PipeTransform {
    
    transform(value: Income[], filterBy: string) : Income[] {
       
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter((income : Income) => income.clientName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
    
}