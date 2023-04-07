/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DayOfWeekRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    'operation': string;
    /**
    * List of days of the week.  Possible values: **monday**, **tuesday**, **wednesday**, **thursday**, **friday**, **saturday**, **sunday**.  
    */
    'value'?: Array<DayOfWeekRestriction.ValueEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<DayOfWeekRestriction.ValueEnum>"
        }    ];

    static getAttributeTypeMap() {
        return DayOfWeekRestriction.attributeTypeMap;
    }
}

export namespace DayOfWeekRestriction {
    export enum ValueEnum {
        Friday = 'friday',
        Monday = 'monday',
        Saturday = 'saturday',
        Sunday = 'sunday',
        Thursday = 'thursday',
        Tuesday = 'tuesday',
        Wednesday = 'wednesday'
    }
}
