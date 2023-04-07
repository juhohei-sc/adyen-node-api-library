/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CompanyUser } from './companyUser';
import { PaginationLinks } from './paginationLinks';

export class ListCompanyUsersResponse {
    '_links'?: PaginationLinks;
    /**
    * The list of users.
    */
    'data'?: Array<CompanyUser>;
    /**
    * Total number of items.
    */
    'itemsTotal': number;
    /**
    * Total number of pages.
    */
    'pagesTotal': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "_links",
            "baseName": "_links",
            "type": "PaginationLinks"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<CompanyUser>"
        },
        {
            "name": "itemsTotal",
            "baseName": "itemsTotal",
            "type": "number"
        },
        {
            "name": "pagesTotal",
            "baseName": "pagesTotal",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ListCompanyUsersResponse.attributeTypeMap;
    }
}

