"use client"

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MapPin, Users, Mail, ExternalLink, Calendar, Code, ArrowUpRight } from "lucide-react";

const VerifiedBadge = () => (
  <span className="inline-flex items-center justify-center bg-sky-500 text-white rounded-full p-0.5 size-3.5 shrink-0 ml-1">
    <svg className="size-2.5 fill-current" viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  </span>
);

function SocialHoverCard({ name, url, icon: Icon }: { name: string; url: string; icon: any }) {
  // Configs for different social networks
  const config = {
    GitHub: {
      banner: "bg-gradient-to-r from-zinc-800 via-zinc-900 to-black",
      bannerImage: "/hover_banner.png",
      title: "Manas Tiwari",
      handle: "@manasTiwari-IR",
      bio: "Full-Stack Developer | Backend Engineer | Agentic AI",
      verified: true,
      stats: (
        <div className="flex items-center gap-4 text-[12px] text-zinc-500 dark:text-zinc-400 mt-2">
          <span className="flex items-center gap-1">
            <Users className="size-3.5" /> <strong>3</strong> followers
          </span>
          <span>•</span>
          <span><strong>4</strong> following</span>
        </div>
      ),
      meta: (
        <span className="flex items-center gap-1 text-[11px] text-zinc-400 dark:text-zinc-500">
          <MapPin className="size-3" /> Greater Noida, India
        </span>
      )
    },
    LinkedIn: {
      banner: "bg-gradient-to-r from-blue-700 to-indigo-900",
      bannerImage: "/hover_banner.png",
      title: "Manas Tiwari",
      handle: "Software Developer Intern",
      bio: "Full-Stack Developer & Backend Engineer.",
      verified: true,
      stats: (
        <div className="flex items-center gap-1 text-[12px] text-zinc-500 dark:text-zinc-400 mt-2">
          <Users className="size-3.5" /> <strong>500+</strong> connections
        </div>
      ),
      meta: (
        <span className="flex items-center gap-1 text-[11px] text-zinc-400 dark:text-zinc-500">
          <MapPin className="size-3" /> Greater Noida, Uttar Pradesh, India
        </span>
      )
    },
    LeetCode: {
      banner: "bg-gradient-to-r from-orange-500 via-orange-600 to-amber-700",
      bannerImage: "/hover_banner.png",
      title: "Ansh Singh",
      handle: "@zenansh",
      bio: "DSA & Problem Solving profile.",
      verified: false,
      stats: (
        <div className="flex items-center gap-1.5 text-[12px] text-zinc-500 dark:text-zinc-400 mt-2">
          <Code className="size-3.5" /> <strong>500+</strong> DSA Problems Solved
        </div>
      ),
      meta: (
        <span className="flex items-center gap-1 text-[11px] text-zinc-400 dark:text-zinc-500">
          <ExternalLink className="size-3" /> leetcode.com/u/zenansh
        </span>
      )
    },
    email: {
      banner: "bg-gradient-to-r from-violet-600 via-purple-700 to-indigo-800",
      bannerImage: "/hover_banner.png",
      title: "Send Email",
      handle: "manastiwari.personal@gmail.com",
      bio: "Looking for collaboration or freelance projects? Direct message me anytime!",
      verified: false,
      stats: (
        <div className="flex items-center gap-1 text-[12px] text-zinc-500 dark:text-zinc-400 mt-2">
          <Mail className="size-3.5" /> Direct email contact
        </div>
      ),
      meta: (
        <span className="flex items-center gap-1 text-[11px] text-zinc-400 dark:text-zinc-500">
          <Calendar className="size-3" /> Open for opportunities
        </span>
      )
    }
  };

  const current = config[name as keyof typeof config] || config["email"];

  const isMail = url.startsWith("mailto:");
  const displayUrl = isMail ? url.replace("mailto:", "") : url.replace(/^https?:\/\//, "");

  return (
    <HoverCard openDelay={200} closeDelay={150}>
      <HoverCardTrigger asChild>
        <Link
          href={url}
          target={isMail ? undefined : "_blank"}
          rel={isMail ? undefined : "noopener noreferrer"}
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "size-12"
          )}
        >
          <Icon className="size-4" />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-auto min-w-56 max-w-72 p-3 bg-white/95 dark:bg-zinc-950/95 border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-lg z-50 pointer-events-auto"
        side="top"
        align="center"
        sideOffset={8}
      >
        <div className="flex items-center gap-3">
          <Icon className="size-4 shrink-0 text-zinc-700 dark:text-zinc-300" />
          <div className="min-w-0">
            <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">{name}</p>
            <p className="max-w-48 truncate text-[11px] text-zinc-500 dark:text-zinc-400">{displayUrl}</p>
          </div>
          <Link
            href={url}
            target={isMail ? undefined : "_blank"}
            rel={isMail ? undefined : "noopener noreferrer"}
            aria-label={`Open ${name}`}
            className="shrink-0 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            {isMail ? <ExternalLink className="size-3.5" /> : <ArrowUpRight className="size-3.5" />}
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex justify-center origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <SocialHoverCard name={name} url={social.url} icon={social.icon} />
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
