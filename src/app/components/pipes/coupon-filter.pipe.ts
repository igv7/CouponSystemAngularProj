import { Pipe, PipeTransform} from "@angular/core";
import { Coupon } from 'src/app/models/coupon';

@Pipe({

    name: 'couponTypeFilter'

})

// @Pipe({

//     name: 'couponIdFilter'

// })

// @Pipe({

//     name: 'couponPriceFilter'

// })

// @Pipe({

//     name: 'couponDateFilter'

// })

export class CouponFilterPipe implements PipeTransform {
    
    transform(value: Coupon[], filterBy: string) : Coupon[] {
       
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter((coupon : Coupon) => coupon.type.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }

    // transformId(value: Coupon[], filterBy: number) : Coupon[] {
       
    //     filterBy = filterBy ? filterBy.valueOf() : null;

    //     return filterBy ? value.filter((coupon : Coupon) => coupon.id.valueOf() !== -1) : value;
    // }

    // transformPrice(value: Coupon[], filterBy: number) : Coupon[] {
       
    //     filterBy = filterBy ? filterBy.valueOf() : null;

    //     return filterBy ? value.filter((coupon : Coupon) => coupon.price.valueOf() !== -1) : value;
    // }

    // transformDate(value: Coupon[], filterBy: string) : Coupon[] {
       
    //     filterBy = filterBy ? filterBy.valueOf() : null;

    //     return filterBy ? value.filter((coupon : Coupon) => coupon.endDate.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    // }
    
}