import { JCSeriesCase } from 'src/app/models/JCSeriesCase';
import { joClaimsSeriesData } from 'src/app/models/joClaimsSeriesData';
export class SeriesCase{
  JoclaimsSeriesData: joClaimsSeriesData;
  MapExistingSeries: Array<JCSeriesCase>;
  MapCurrentSeries: Array<JCSeriesCase>;
  Conflict: Array<joClaimsSeriesData>;
  seriesremoved: Array<joClaimsSeriesData>;
  SelfSeriesCases: Array<JCSeriesCase>;
}
