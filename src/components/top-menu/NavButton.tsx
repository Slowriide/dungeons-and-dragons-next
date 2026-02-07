import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  to: string; // The route path this button links to
  icon: React.ReactNode; // Icon displayed on the button
  label: string; // Text label for the button
  isActive: boolean; // Determines if the button represents the current route
  className?: string; // Optional click handler
}

export const NavButton = ({ icon, isActive, label, to, className }: Props) => {
  return (
    <Button
      asChild
      variant={isActive ? "default" : "ghost"}
      className={isActive ? className : ""}
    >
      <Link href={to}>
        {icon}
        <span>{label}</span>
      </Link>
    </Button>
  );
};
