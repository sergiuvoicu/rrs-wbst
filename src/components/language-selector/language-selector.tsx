"use client";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import styles from "./language-selector.module.scss";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, usePathname } from "@/src/i18n/routing";

interface IDropdownItem {
   id: string;
   label: string;
}

interface IDropdown {
   items: IDropdownItem[];
}
export default function LanguageSelector(props: IDropdown) {
   const { items } = props;
   const router = useRouter();
   const pathname = usePathname();
   const params = useParams();
   const locale = useLocale()

   // const [isMobile, setIsMobile] = useState(window.innerWidth < 400);

   const handleClick = (e: any) => {
      router.replace(
         // @ts-expect-error -- TypeScript will validate that only known `params`
         {pathname, params}, {locale: e.target.value})
   };

   // const updateScreenWidth = () => {
   //    setIsMobile(window.innerWidth < 400);
   // };

   // useEffect(() => {
   //    updateScreenWidth();
   //    window.addEventListener("resize", updateScreenWidth);

   //    return () => {
   //       window.removeEventListener("resize", updateScreenWidth);
   //    };
   // }, []);

   return (
      <div className={styles.wrapper}>
            <>
               <label htmlFor="language-selector">
                  <FontAwesomeIcon icon={faGlobe} />
               </label>
               <select
                  id="language-selector"
                  defaultValue={locale}
                  onChange={handleClick}
               >
                  {items &&
                     items.map((item) => (
                        <option key={item.id} value={item.id}>
                           {item.label}
                        </option>
                     ))}
               </select>
            </>
      </div>
   );
}
