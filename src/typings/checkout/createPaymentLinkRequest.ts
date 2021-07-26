/**
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/online-payments).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v67/payments ```
 *
 * The version of the OpenAPI document: 67
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Address } from './address';
import { Amount } from './amount';
import { ApplicationInfo } from './applicationInfo';
import { InstallmentOption } from './installmentOption';
import { LineItem } from './lineItem';
import { Name } from './name';
import { RiskData } from './riskData';
import { Split } from './split';

export class CreatePaymentLinkRequest {
    /**
    * List of payment methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).  Example: `\"allowedPaymentMethods\":[\"ideal\",\"giropay\"]`
    */
    'allowedPaymentMethods'?: Array<string>;
    'amount': Amount;
    'applicationInfo'?: ApplicationInfo;
    'billingAddress'?: Address;
    /**
    * List of payment methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).  Example: `\"blockedPaymentMethods\":[\"ideal\",\"giropay\"]`
    */
    'blockedPaymentMethods'?: Array<string>;
    /**
    * The shopper\'s two-letter country code.
    */
    'countryCode'?: string;
    /**
    * The date and time the purchased goods should be delivered.
    */
    'deliverAt'?: Date;
    'deliveryAddress'?: Address;
    /**
    * A short description visible on the payment page. Maximum length: 280 characters.
    */
    'description'?: string;
    /**
    * The date that the payment link expires, in ISO 8601 format. For example `2019-11-23T12:25:28Z`, or `2020-05-27T20:25:28+08:00`. Maximum expiry date should be 70 days from when the payment link is created. If not provided, the default expiry is set to 24 hours after the payment link is created.
    */
    'expiresAt'?: string;
    /**
    * A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options.
    */
    'installmentOptions'?: { [key: string]: InstallmentOption; };
    /**
    * Price and product information about the purchased items, to be included on the invoice sent to the shopper. This parameter is required for open invoice (_buy now, pay later_) payment methods such AfterPay, Klarna, RatePay, and Zip.
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The merchant account identifier for which the payment link is created.
    */
    'merchantAccount': string;
    /**
    * This reference allows linking multiple transactions to each other for reporting purposes (for example, order auth-rate). The reference should be unique per billing cycle.
    */
    'merchantOrderReference'?: string;
    /**
    * Metadata consists of entries, each of which includes a key and a value. Limitations: * Maximum 20 key-value pairs per request. Otherwise, error \"177\" occurs: \"Metadata size exceeds limit\" * Maximum 20 characters per key. Otherwise, error \"178\" occurs: \"Metadata key size exceeds limit\" * A key cannot have the name `checkout.linkId`. Any value that you provide with this key is going to be replaced by the real payment link ID.
    */
    'metadata'?: { [key: string]: string; };
    /**
    * Defines a recurring payment type. Possible values: * **Subscription** – A transaction for a fixed or variable amount, which follows a fixed schedule. * **CardOnFile** – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction. * **UnscheduledCardOnFile** – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or has variable amounts. For example, automatic top-ups when a cardholder\'s balance drops below a certain amount. 
    */
    'recurringProcessingModel'?: CreatePaymentLinkRequest.RecurringProcessingModelEnum;
    /**
    * A reference that is used to uniquely identify the payment in future communications about the payment status.
    */
    'reference': string;
    /**
    * List of fields that the shopper has to provide on the payment page before completing the payment. For more information, refer to [Provide shopper information](https://docs.adyen.com/online-payments/pay-by-link/api#shopper-information).  Possible values: * **billingAddress** – The address where to send the invoice. * **deliveryAddress** – The address where the purchased goods should be delivered. * **shopperEmail** – The shopper\'s email address. * **shopperName** – The shopper\'s full name. * **telephoneNumber** – The shopper\'s phone number. 
    */
    'requiredShopperFields'?: Array<CreatePaymentLinkRequest.RequiredShopperFieldsEnum>;
    /**
    * Website URL used for redirection after payment is completed. If provided, a **Continue** button will be shown on the payment page. If shoppers select the button, they are redirected to the specified URL.
    */
    'returnUrl'?: string;
    /**
    * Indicates whether the payment link can be reused for multiple payments. If not provided, this defaults to **false** which means the link can be used for one successful payment only.
    */
    'reusable'?: boolean;
    'riskData'?: RiskData;
    /**
    * The shopper\'s email address.
    */
    'shopperEmail'?: string;
    /**
    * The language to be used in the payment page, specified by a combination of a language and country code. For example, `en-US`.  For a list of shopper locales that Pay by Link supports, refer to [Language and localization](https://docs.adyen.com/online-payments/pay-by-link#language-and-localization).
    */
    'shopperLocale'?: string;
    'shopperName'?: Name;
    /**
    * Your reference to uniquely identify this shopper (for example, user ID or account ID). Minimum length: 3 characters.
    */
    'shopperReference'?: string;
    /**
    * An array of objects specifying how the payment should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/platforms/processing-payments#providing-split-information).
    */
    'splits'?: Array<Split>;
    /**
    * The physical store, for which this payment is processed.
    */
    'store'?: string;
    /**
    * When this is set to **true** and the `shopperReference` is provided, the payment details will be stored. From api version 68 use `storePaymentMethodMode` instead.
    */
    'storePaymentMethod'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowedPaymentMethods",
            "baseName": "allowedPaymentMethods",
            "type": "Array<string>"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "applicationInfo",
            "baseName": "applicationInfo",
            "type": "ApplicationInfo"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address"
        },
        {
            "name": "blockedPaymentMethods",
            "baseName": "blockedPaymentMethods",
            "type": "Array<string>"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "deliverAt",
            "baseName": "deliverAt",
            "type": "Date"
        },
        {
            "name": "deliveryAddress",
            "baseName": "deliveryAddress",
            "type": "Address"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "string"
        },
        {
            "name": "installmentOptions",
            "baseName": "installmentOptions",
            "type": "{ [key: string]: InstallmentOption; }"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "merchantOrderReference",
            "baseName": "merchantOrderReference",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "recurringProcessingModel",
            "baseName": "recurringProcessingModel",
            "type": "CreatePaymentLinkRequest.RecurringProcessingModelEnum"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "requiredShopperFields",
            "baseName": "requiredShopperFields",
            "type": "Array<CreatePaymentLinkRequest.RequiredShopperFieldsEnum>"
        },
        {
            "name": "returnUrl",
            "baseName": "returnUrl",
            "type": "string"
        },
        {
            "name": "reusable",
            "baseName": "reusable",
            "type": "boolean"
        },
        {
            "name": "riskData",
            "baseName": "riskData",
            "type": "RiskData"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "shopperLocale",
            "baseName": "shopperLocale",
            "type": "string"
        },
        {
            "name": "shopperName",
            "baseName": "shopperName",
            "type": "Name"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        },
        {
            "name": "splits",
            "baseName": "splits",
            "type": "Array<Split>"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        },
        {
            "name": "storePaymentMethod",
            "baseName": "storePaymentMethod",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CreatePaymentLinkRequest.attributeTypeMap;
    }
}

export namespace CreatePaymentLinkRequest {
    export enum RecurringProcessingModelEnum {
        CardOnFile = <any> 'CardOnFile',
        Subscription = <any> 'Subscription',
        UnscheduledCardOnFile = <any> 'UnscheduledCardOnFile'
    }
    export enum RequiredShopperFieldsEnum {
        BillingAddress = <any> 'billingAddress',
        DeliveryAddress = <any> 'deliveryAddress',
        ShopperEmail = <any> 'shopperEmail',
        ShopperName = <any> 'shopperName',
        TelephoneNumber = <any> 'telephoneNumber'
    }
}
