declare module "next/font/google" {
  const Inter: any;
  const Poppins: any;
  export { Inter, Poppins };
}

declare module "lucide-react" {
  import { FC, SVGProps } from "react";
  
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    color?: string;
    size?: string | number;
    absoluteStrokeWidth?: boolean;
    strokeWidth?: string | number;
  }
  
  export type LucideIcon = FC<LucideProps>;
  
  export const Moon: LucideIcon;
  export const Sun: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const Star: LucideIcon;
  export const Clock: LucideIcon;
  export const MapPin: LucideIcon;
  export const Search: LucideIcon;
  export const User: LucideIcon;
  export const Mail: LucideIcon;
  export const Phone: LucideIcon;
  export const CreditCard: LucideIcon;
  export const Receipt: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const Ticket: LucideIcon;
  export const LogIn: LucideIcon;
  export const LogOut: LucideIcon;
  export const Lock: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const UserPlus: LucideIcon;
  export const UserCircle: LucideIcon;
  export const Settings: LucideIcon;
  export const Heart: LucideIcon;
  export const Calendar: LucideIcon;
  export const Trash: LucideIcon;
  export const Edit: LucideIcon;
  export const Home: LucideIcon;
  export const FilmReel: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const Share: LucideIcon;
  export const Share2: LucideIcon;
} 