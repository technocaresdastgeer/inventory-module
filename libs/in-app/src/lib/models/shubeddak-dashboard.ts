import { GraphInfo } from './graph-info';

export class ShubeddakDashboard {
    Suppliers: Array<GraphInfo>;
    InsuranceCompanies: Array<GraphInfo>;
    Requests: Array<GraphInfo>;

    constructor() {
        this.Suppliers = new Array<GraphInfo>();
        this.InsuranceCompanies = new Array<GraphInfo>();
        this.Requests = new Array<GraphInfo>();
    }
}