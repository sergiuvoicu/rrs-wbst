export interface IMember {
   name: string;
   description: string;
   image: any;
   email: string;
   linkedinLink: string;
   instagramLink: string;
   facebookLink: string;
}

import MihaiFlorinVoicu from "../assets/members/mihai-florin-voicu.png";
import RudolfMihaiu from "../assets/members/rudolf-mihaiu.png";
import CiprianSpataru from "../assets/members/ciprian-spataru.png";
import MateiSumbasacu from "../assets/members/matei-sumbasacu.png";

export const members: IMember[] = [
   {
      name: "Mihai Florin Voicu",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at urna iaculis mi euismod tempus non quis quam. Nullam pharetra lacinia neque, non ultrices sem",
      image: MihaiFlorinVoicu,
      email: "Mihai Florin Voicu",
      linkedinLink: "Mihai Florin Voicu",
      instagramLink: "Mihai Florin Voicu",
      facebookLink: "Mihai Florin Voicu",
   },
   {
      name: "Rudolph Mihaiu",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at urna iaculis mi euismod tempus non quis quam. Nullam pharetra lacinia neque, non ultrices sem",
      image: RudolfMihaiu,
      email: "Mihai Florin Voicu",
      linkedinLink: "Mihai Florin Voicu",
      instagramLink: "Mihai Florin Voicu",
      facebookLink: "Mihai Florin Voicu",
   },
   {
      name: "Ciprian Spătaru",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at urna iaculis mi euismod tempus non quis quam. Nullam pharetra lacinia neque, non ultrices sem",
      image: CiprianSpataru,
      email: "Mihai Florin Voicu",
      linkedinLink: "Mihai Florin Voicu",
      instagramLink: "Mihai Florin Voicu",
      facebookLink: "Mihai Florin Voicu",
   },
   {
      name: "Matei Sumbasacu",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at urna iaculis mi euismod tempus non quis quam. Nullam pharetra lacinia neque, non ultrices sem",
      image: MateiSumbasacu,
      email: "Mihai Florin Voicu",
      linkedinLink: "Mihai Florin Voicu",
      instagramLink: "Mihai Florin Voicu",
      facebookLink: "Mihai Florin Voicu",
   }
];
