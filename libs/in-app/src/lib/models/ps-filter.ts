export class PSFilter {
    ShopName: string;
    CPName: string;
    CPEmail: string;
    MakeID: number;
    YearID: number;
    ModelID: number;
    SearchQuery: string;
    SortBy: string = 'DESC';
    WorkingFrom: Date | string;
    WorkingTo: Date | string;
    CountryID: number
}
