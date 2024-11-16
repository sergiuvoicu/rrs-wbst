
import { routing } from "@/src/i18n/routing";

import BaseLayout from "../components/base-layout/base-layout";
import NotFoundPage from "../components/not-found-page/not-found-page";

export default function NotFound() {
   return (
      <BaseLayout locale={routing.defaultLocale}>
        <NotFoundPage />
      </BaseLayout>
   );
}
