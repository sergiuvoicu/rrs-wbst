import PageTitle from "@/components/pageTitle/pageTitle";
import { projects } from "@/utilities/projects";

interface IProjectParams {
   numeProiect: string;
}

export async function generateStaticParams() {
   return projects.map((project) => ({
      numeProiect: encodeURIComponent(project.name),
   }));
}
export default function Proiect({ params }: { params: IProjectParams }) {
   return (
      <div>
         <PageTitle
            title={decodeURIComponent(params.numeProiect)}
            description="ReDU (Registrul Digital al Utilajelor) este un proiect în mai multe etape ce presupune crearea unei hărți în timp real cu toate utilajele pregătite pentru eliberarea căilor de acces după cutremur, salvarea persoanelor de sub dărâmături și punerea în siguranță a structurilor afectate."
         />
      </div>
   );
}
