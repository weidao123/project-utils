/**
 * @file index.ts
 * @description Date 相关的基础工具类
 * @author TianChao (2209697714@qq.com)
 * @time 2019/12/18
 */
import {IDateUtils} from "../types/IDateUtils";

class DateUtilsImpl implements IDateUtils {

    /**
     * 获取当前 或者 指定的日期时间
     * @param temp
     * @param type
     */
    public getDate(temp?: string | number, type?: string): string {
        let yearMonthDay: string = this.getYearMonthDay(temp, type);
        let hoursMinutesSeconds: string = this.getHoursMinutesSeconds(temp);
        return yearMonthDay + " " + hoursMinutesSeconds;
    }

    /**
     * 获取年月日
     * @param temp
     * @param type
     */
    public getYearMonthDay(temp?: string | number, type?: string): string {
        let tem = temp || Date.now();
        let date: Date = new Date(tem);
        let year: number = date.getFullYear();
        let month: number = date.getMonth() + 1;
        let day: number = date.getDate();

        let newMonth: string = String(month);
        if (month < 10) newMonth = "0" + month;

        let dateStr: string = `${year}-${newMonth}-${day}`;
        if (type === "/") {
            dateStr = dateStr.replace(/-/g, "/")
        }

        return dateStr;
    }

    /**
     * 获取时分秒
     * @param temp
     */
    public getHoursMinutesSeconds(temp?: string | number): string {
        let tem = temp || Date.now();
        let date: Date = new Date(tem);
        let hours: number = date.getHours();
        let minutes: number = date.getMinutes();
        let seconds: number = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }

    /**
     * 获取两个年月日的时间差
     */
    public getYearMonthDayDiff(start: string | number, end: string | number): string {
        let date1: Date = new Date(start);
        let date2: Date = new Date(end);

        let year1: number = date1.getFullYear();
        let year2: number = date2.getFullYear();

        let month1: number = date1.getMonth() + 1;
        let month2: number = date2.getMonth() + 1;

        let day1: number = date1.getDate();
        let day2: number = date2.getDate();

        let yearResult: number = year2 - year1;
        let monthResult: number = month2 - month1;

        if(yearResult < 0) return "";
        //如果月份为负数 向年份借1
        if (monthResult < 0) {
            yearResult -= 1;
            monthResult += 12;
        }

        let dayResult: number = day2 - day1;

        //如果天数为负数 向月份借1
        if (dayResult < 0) {
            let monthDays: number = new Date(year2, month2 - 1, 0).getDate();
            dayResult = dayResult + monthDays;
            monthResult -= 1;
            if (monthResult < 0) {
                yearResult -= 1;
                monthResult += 12;
            }
        }
        return `${yearResult}-${monthResult}-${dayResult}`;
    }

    public getHoursMinutesSecondsDiff(start: string | number, end: string | number): string {
        let date1: Date = new Date(start);
        let date2: Date = new Date(end);

        let hours1: number = date1.getHours();
        let hours2: number = date2.getHours();

        let minutes1: number = date1.getMinutes();
        let minutes2: number = date2.getMinutes();

        let seconds1: number = date1.getSeconds();
        let seconds2: number = date2.getSeconds();

        let hoursResult: number = hours2 - hours1;
        let minutesResult: number = minutes2 - minutes1;
        let secondsResult: number = seconds2 - seconds1;
        if(hoursResult < 0) return "";
        if(minutesResult < 0) {
            hoursResult -= 1;
            minutesResult += 60;
        }

        if(secondsResult < 0) {
            minutesResult -= 1;
            secondsResult += 60;
            if(minutesResult < 0) {
                hoursResult -= 1;
                minutesResult += 60;
            }
        }

        return `${hoursResult}:${minutesResult}:${secondsResult}`;
    }
}

export const DateUtils: IDateUtils = new DateUtilsImpl();
