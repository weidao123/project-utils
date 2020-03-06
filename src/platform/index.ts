export abstract class Platform {
    protected abstract _value: string;
    public abstract getValue(): string;
    // 用于判断两个平台是否相等
    public equals(platform: Platform): boolean {
        return this.getValue() === platform.getValue();
    }
}

class PlatformType extends Platform {
    constructor(value: string) {
        super();
        this._value = value;
    }
    protected readonly _value: string;

    public getValue(): string {
        return this._value;
    }
    public static IOS: Platform = new PlatformType("IOS");
    public static ANDROID: Platform = new PlatformType("ANDROID");
    public static WINDOWS: Platform = new PlatformType("WINDOWS");
    public static I_PAD: Platform = new PlatformType("I_PAD");
    public static NO_MATCH: Platform = new PlatformType("error: no match");
}

export class PlatformUtils {
    // 获取当前的运行平台 （不支持node环境）
    public static getPlatform(): Platform {
        const userAgent = navigator.userAgent;
        const isWindows =  /windows|win32/i.test(userAgent);
        const isIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(userAgent);
        const isIPad = userAgent.indexOf("iPad") > -1;
        const isAndroid = userAgent.indexOf("Android") > -1 || userAgent.indexOf("Linux") > -1;
        if (isWindows) {
            return PlatformType.WINDOWS;
        }
        if (isIos) {
            return PlatformType.IOS;
        }
        if (isIPad) {
            return PlatformType.I_PAD;
        }
        if (isAndroid) {
            return PlatformType.ANDROID;
        }
        return PlatformType.NO_MATCH;
    }

    // 是否是微信环境
    public static isWeChat(): boolean {
        return navigator.userAgent.indexOf("MicroMessenger") > -1;
    }
}
