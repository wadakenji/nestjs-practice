
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum CacheControlScope {
    PRIVATE = "PRIVATE",
    PUBLIC = "PUBLIC"
}

export interface UserInfoInput {
    bloodPressure?: number;
    bodyTemperature?: number;
    pulse?: number;
}

export interface Me {
    systemAdmin?: boolean;
    facilityAdmin?: boolean;
    id?: number;
}

export interface IMutation {
    login(password: string, username: string): string | Promise<string>;
    updateUserInfo(userId: string, updateItems?: UserInfoInput): number | Promise<number>;
}

export interface User {
    id: string;
    firstName?: string;
    lastName?: string;
    age?: number;
}

export interface IQuery {
    getMe(): Me | Promise<Me>;
    getStaffs(): Staff[] | Promise<Staff[]>;
    user(): User[] | Promise<User[]>;
}

export interface Staff {
    systemAdmin?: boolean;
    facilityAdmin?: boolean;
    facilityId?: number;
    firstName?: string;
    id: string;
    lastName?: string;
}

export interface Tokens {
    accessToken?: string;
}

export interface UserInfoUpdate {
    id: string;
    bloodPressure?: number;
    bodyTemperature?: number;
    pulse?: number;
}

export interface ISubscription {
    userInfoUpdated(): UserInfoUpdate | Promise<UserInfoUpdate>;
}

export type Upload = any;
