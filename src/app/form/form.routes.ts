import { AddressComponent } from "./adress/address.component";
import { CustomComponent } from "./custom/custom.component";
import { SelectComponent } from "./select/select.component";

export default [
    {
        path: 'address',
        component: AddressComponent
    },
    {
        path: 'custom',
        component: CustomComponent
    },
    {
        path: 'select',
        component: SelectComponent
    }
]