import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { pages } from "@/utilities/pages";

export const routing = defineRouting({
   // A list of all locales that are supported
   locales: ["ro", "en"],

   // Used when no locale matches
   defaultLocale: "ro",
   pathnames: {
    [pages.acasa]: "/",
    [pages.cineSuntem]: {
        ro: "/cine-suntem",
        en: "/about",
    },
    [pages.ceFacem]: {
        ro: "/ce-facem",
        en: "/projects"
    },
    [pages.ceFacem]: {
        ro: "/ce-facem",
        en: "/projects"
    },
    [`${pages.ceFacem}/[projectId]`]: {
        ro: "/ce-facem/[projectId]",
        en: "/projects/[projectId]"
    },
    [pages.contact]: "/contact",
    [pages.implicaTe]: {
        ro: "/implica-te",
        en: "/support",
    },
   }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
   createNavigation(routing);
