import Link from "next/link";

export default function Header() {
   return (
      <div>
         <Link href="/">Acasa</Link>
         <Link href="/cine-suntem">Cine suntem?</Link>
         <Link href="/ce-facem">Ce facem?</Link>
         <Link href="/contact">Contact</Link>
         <Link href="/implica-te">Implica-te</Link>
      </div>
   );
}
