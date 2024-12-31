import { Link } from "react-router-dom";
import logo from "../assets/favicon.png";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card";

const Author = () => {
  return (
    <div className="float-right absolute bottom-10 right-10 z-10">
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger asChild>
          <Avatar>
            <AvatarImage src={logo} />
            <AvatarFallback>NP</AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/79047182?v=4" />
              <AvatarFallback>NP</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Project author</h4>
              <p className="text-sm">Nikola Perišić - Software Engineer</p>
              <div className="flex items-center pt-2">
                <Link
                  to="https://github.com/perisicnikola37"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xs text-muted-foreground">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default Author;
