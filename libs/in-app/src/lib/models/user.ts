import { UserPermission } from './user-permission';
import { Permission } from './permission';
import { ICWorkShop } from './ic-workshop';
import { Workshop } from './workshop';
import { FeaturePermission } from './featurePermission';
import { JoclaimsSetting } from './joclaims-setting';
export class User {
  UserId: number;
  Id: string;
  Email: string;
  EmailConfirmed: boolean;
  PasswordHash: string;
  SecurityStamp: string;
  PhoneNumber: string;
  PhoneNumberConfirmed: boolean;
  TwoFactorEnabled: boolean;
  LockoutEndDateUtc: Date;
  LockoutEnabled: boolean;
  AccessFailedCount: number;
  UserName: string;
  RoleID: number = 4;
  Password: string;
  ConfirmPassword: string;
  CompanyName: string;
  token: string;
  ProfileImageURL: string;
  SupplierLogoURL: string;
  LogoURL: string;
  EmployeeProfileImageURL: string;
  ShubeddakUserID: number;
  CompanyID: number;
  SupplierID: number;
  EmployeeID: number;
  phoneNumberObject: any;
  access_token: string;
  expires_in: number;
  token_type: string;
  cityID: number;
  addressLine1: string;
  CommercialRegisterImg: string;
  ProfessionLicenseImg: string;
  ICWorkshopID: number;
  WorkshopID: number;
  UserPermissions: Array<Permission>;
  featurePermissions: Array<FeaturePermission>;
  CompanyCode: string;
  CPName: string;
  WorkshopGoogleMapLink: string;
  WorkshopAreaName: string;
  ICWorkshops: Array<ICWorkShop>;
  Workshop: Workshop;
  jwtToken: string;
  RoleName: string;
  LastName: string;
  FirstName: string;
  ModifiedBy: number;
  CreatedBy: number;
  isPriceEstimate: boolean = false;
  IsPriceEstimate: number;
  IsCompanyExist: boolean;
  CompanyTypeID: number;
  SuggestionOfferTime : string | number;
  joclaimsSetting:Array<JoclaimsSetting>;
  CountryID:number;
}
