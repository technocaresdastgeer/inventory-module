import { ICWorkShop } from './ic-workshop';
import { Supplier } from './supplier';
import { Accident } from './accident';
import { DashboardAdditionalStats } from './dashboard-additional-stats';
import { DashboardStats } from './dashboard-stats';
import { GraphInfo } from './graph-info';

export class ICDashboard {
    Accidents: Array<GraphInfo>;
    Requests: Array<GraphInfo>;
    DashboardStatsInfo: DashboardStats;
    DashboardAdditionalStatsData: Array<DashboardAdditionalStats>;
    FinalAccidentCosts: Array<Accident>;
    AccidentClearance: Array<Accident>;
    SupplierStats: Array<Supplier>;
    WorkshopStats: Array<ICWorkShop>;

}