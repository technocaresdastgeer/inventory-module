import { Year } from './year';
import { Model } from './model';
import { Make } from './make';
import { ObjectType } from './object-type';
import { Notification } from './notification';
import { ICWorkShop } from './ic-workshop';
import { EmployeeRoles } from './employee-roles';
import { Employee } from './employee';
import { City } from './city';
import { Permission } from './permission';
import { DamagePoint } from './damage-point';
import { GroupName } from './groupName';
import { IndividualReturn } from './IndividualReturn';
import { FeaturePermission } from './featurePermission';
import { JoclaimsSetting } from './joclaims-setting';

export class CommonMeta {
    Cities: Array<City>;
    Roles: Array<EmployeeRoles>;
    ObjectTypes: Array<ObjectType>;
    ICWorkshops: Array<ICWorkShop>
    Notifications: Array<Notification>;
    UserPermissions: Array<Permission>;
    featurePermissions: Array<FeaturePermission>;
    Makes: Array<Make>;
    Models: Array<Model>;
    Years: Array<Year>;
    UnReadNotification:number;
    TrNotificationCount: number;
    NotificationPageCount:number; // for notification screen pagination
    DamagePoints: Array<DamagePoint>;
    GroupName: GroupName;
    IndividualReturns: Array<IndividualReturn>;
    joclaimsSetting:Array<JoclaimsSetting>;
    IsEmployeeDeleted: number;
    IsShubeddakEmployeeDeleted: number;
    constructor() {
        this.Cities = new Array<City>();
        this.Roles = new Array<EmployeeRoles>();
        this.ICWorkshops = new Array<ICWorkShop>();
        this.UserPermissions = new Array<Permission>();
        this.Makes = new Array<Make>();
        this.Models = new Array<Model>();
        this.Years = new Array<Year>();
        this.DamagePoints = new Array<DamagePoint>();
        this.featurePermissions = new Array<FeaturePermission>();
        this.joclaimsSetting = new Array<JoclaimsSetting>();
    }
}
