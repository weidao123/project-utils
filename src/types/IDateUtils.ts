export interface IDateUtils {

    /**
     * 获取当前 或者 指定的时间
     * @param temp 时间戳
     * @param type 日期拼接方式 有效值为 “/” | “-” 默认为 “-”
     */
    getDate: (temp?: number | string, type?: string) => string

    /**
     * 获取年月日
     */
    getYearMonthDay: (temp?: number | string, type?: string) => string

    /**
     * 获取时分秒
     */
    getHoursMinutesSeconds: (temp?: number | string) => string

    /**
     * 获取年月日的差值
     */
    getYearMonthDayDiff: (start: number | string, end: number | string) => string

    /**
     * 获取 时分秒差值
     */
    getHoursMinutesSecondsDiff: (start: number | string, end: number | string) => string
}
