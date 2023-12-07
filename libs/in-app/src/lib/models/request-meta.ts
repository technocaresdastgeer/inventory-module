import { Note } from 'src/app/models/note';
import { Image } from './image';
import { PartBranch } from './part-branch';
import { Country } from './country';
import { PartManufacturer } from './part-manufacturer';
import { Make } from './make';
import { Model } from './model';
import { Year } from './year';
import { Accident } from './accident';
import { AutomotivePart } from './automotive-part';
import { AccidentPart } from './accident-part';
import { AccidentMarker } from './accident-marker';
import { joClaimsSeriesData } from './joClaimsSeriesData';
import { JCSeriesCase } from './JCSeriesCase';
export class RequestMeta {

  Accidents: Array<Accident>;
  jCSeriesCases: Array<JCSeriesCase>;
  // Makes: Array<Make>;
  // Models: Array<Model>;
  // AutomotivePart: Array<AutomotivePart>
  // Years: Array<Year>;
  // PartManufacturers: Array<PartManufacturer>;
  Countries: Array<Country>;
  AccidentParts:Array<AccidentPart>;
  AccidentPartsImages:Array<Image>;
  AccidentImages:Array<Image>;
  AccidentNotes:Array<Note>;
  AccidentMarkers: Array<AccidentMarker>;
}
