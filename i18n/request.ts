import { getRequestConfig } from "next-intl/server";

const defaultLocale = "en";
const locales = ["ru", "en"];

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;

    // если undefined или невалидное значение — используем дефолтный
    const locale =
        requested && locales.includes(requested) ? requested : defaultLocale;

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
