/**
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/online-payments).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v69/payments ```  ## Release notes Have a look at the [release notes](https://docs.adyen.com/online-payments/release-notes?integration_type=api&version=69) to find out what changed in this version!
 *
 * The version of the OpenAPI document: 69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class AcctInfo {
    /**
    * Length of time that the cardholder has had the account with the 3DS Requestor.  Allowed values: * **01** — No account * **02** — Created during this transaction * **03** — Less than 30 days * **04** — 30–60 days * **05** — More than 60 days
    */
    'chAccAgeInd'?: AcctInfo.ChAccAgeIndEnum;
    /**
    * Date that the cardholder’s account with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added.  Format: **YYYYMMDD**
    */
    'chAccChange'?: string;
    /**
    * Length of time since the cardholder’s account information with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added.  Allowed values: * **01** — Changed during this transaction * **02** — Less than 30 days * **03** — 30–60 days * **04** — More than 60 days
    */
    'chAccChangeInd'?: AcctInfo.ChAccChangeIndEnum;
    /**
    * Date that cardholder’s account with the 3DS Requestor had a password change or account reset.  Format: **YYYYMMDD**
    */
    'chAccPwChange'?: string;
    /**
    * Indicates the length of time since the cardholder’s account with the 3DS Requestor had a password change or account reset.  Allowed values: * **01** — No change * **02** — Changed during this transaction * **03** — Less than 30 days * **04** — 30–60 days * **05** — More than 60 days
    */
    'chAccPwChangeInd'?: AcctInfo.ChAccPwChangeIndEnum;
    /**
    * Date that the cardholder opened the account with the 3DS Requestor.  Format: **YYYYMMDD**
    */
    'chAccString'?: string;
    /**
    * Number of purchases with this cardholder account during the previous six months. Max length: 4 characters.
    */
    'nbPurchaseAccount'?: string;
    /**
    * String that the payment account was enrolled in the cardholder’s account with the 3DS Requestor.  Format: **YYYYMMDD**
    */
    'paymentAccAge'?: string;
    /**
    * Indicates the length of time that the payment account was enrolled in the cardholder’s account with the 3DS Requestor.  Allowed values: * **01** — No account (guest checkout) * **02** — During this transaction * **03** — Less than 30 days * **04** — 30–60 days * **05** — More than 60 days
    */
    'paymentAccInd'?: AcctInfo.PaymentAccIndEnum;
    /**
    * Number of Add Card attempts in the last 24 hours. Max length: 3 characters.
    */
    'provisionAttemptsDay'?: string;
    /**
    * String when the shipping address used for this transaction was first used with the 3DS Requestor.  Format: **YYYYMMDD**
    */
    'shipAddressUsage'?: string;
    /**
    * Indicates when the shipping address used for this transaction was first used with the 3DS Requestor.  Allowed values: * **01** — This transaction * **02** — Less than 30 days * **03** — 30–60 days * **04** — More than 60 days
    */
    'shipAddressUsageInd'?: AcctInfo.ShipAddressUsageIndEnum;
    /**
    * Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction.  Allowed values: * **01** — Account Name identical to shipping Name * **02** — Account Name different to shipping Name
    */
    'shipNameIndicator'?: AcctInfo.ShipNameIndicatorEnum;
    /**
    * Indicates whether the 3DS Requestor has experienced suspicious activity (including previous fraud) on the cardholder account.  Allowed values: * **01** — No suspicious activity has been observed * **02** — Suspicious activity has been observed
    */
    'suspiciousAccActivity'?: AcctInfo.SuspiciousAccActivityEnum;
    /**
    * Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous 24 hours. Max length: 3 characters.
    */
    'txnActivityDay'?: string;
    /**
    * Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year. Max length: 3 characters.
    */
    'txnActivityYear'?: string;
}

export namespace AcctInfo {
    export enum ChAccAgeIndEnum {
        _01 = <any> '01',
        _02 = <any> '02',
        _03 = <any> '03',
        _04 = <any> '04',
        _05 = <any> '05'
    }
    export enum ChAccChangeIndEnum {
        _01 = <any> '01',
        _02 = <any> '02',
        _03 = <any> '03',
        _04 = <any> '04'
    }
    export enum ChAccPwChangeIndEnum {
        _01 = <any> '01',
        _02 = <any> '02',
        _03 = <any> '03',
        _04 = <any> '04',
        _05 = <any> '05'
    }
    export enum PaymentAccIndEnum {
        _01 = <any> '01',
        _02 = <any> '02',
        _03 = <any> '03',
        _04 = <any> '04',
        _05 = <any> '05'
    }
    export enum ShipAddressUsageIndEnum {
        _01 = <any> '01',
        _02 = <any> '02',
        _03 = <any> '03',
        _04 = <any> '04'
    }
    export enum ShipNameIndicatorEnum {
        _01 = <any> '01',
        _02 = <any> '02'
    }
    export enum SuspiciousAccActivityEnum {
        _01 = <any> '01',
        _02 = <any> '02'
    }
}
