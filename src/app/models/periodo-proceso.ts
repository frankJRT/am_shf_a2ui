import { Cartera } from "./cartera";
import { Periodo } from "./periodo";


export interface PeriodoProceso {
    id: number;
    i_Periodo: Periodo;
    i_Cartera_Comportamiento: Cartera;
    d_Alta: Date;
    X_Status: string;
}
