import Link from "next/link";
import { circleFadingPlus } from "@/utils/icons";

const Logo = () => {
  return (
    <Link href="/">
        
      <h1 className="font-bold text-2xl flex items-center">
        P<span>{ circleFadingPlus }</span>ST HUB
    </h1>
    </Link>
  );
};

export default Logo;