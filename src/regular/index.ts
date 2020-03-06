/**
 * 常用的正则
 */

export class RegularConstants {
    public static phone: RegExp = new RegExp(/^((\+|00)86)?1[3-9]\d{9}$/g);
    public static email: RegExp = new RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g);
    public static url: RegExp = new RegExp(/^(http|https)(:\/\/)(www\.)?([a-zA-Z0-9]{1,16}\.){2,5}(com|cn|org|int|cc|tv|cd|tm)$/g);
    public static idNumber: RegExp = new RegExp(/^(\d{14}|\d{17})[a-zA-Z0-9]$/g);
    public static zipCode: RegExp = new RegExp(/\d{6}/);
}

export class RegularUtils {
    // 匹配手机号
    public static checkPhone(phone: string | number): boolean {
        return RegularConstants.phone.test(String(phone));
    }

    // 匹配邮箱
    public static checkEmail(email: string): boolean {
        return RegularConstants.email.test(email);
    }

    // 匹配URL
    public static checkUrl(url: string): boolean {
        return RegularConstants.url.test(url);
    }

    // 匹配身份证号码
    public static checkIdNumber(number: number | string): boolean {
        return RegularConstants.idNumber.test(String(number));
    }

    // 匹配邮编
    public static checkZipCode(zipCode: string): boolean {
        return RegularConstants.zipCode.test(zipCode);
    }
}

