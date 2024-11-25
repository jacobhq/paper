"use client"

import * as React from "react"
import {
  BookOpen,
  Brain,
  Cpu, FlaskConical,
  Frame,
  Map,
  PieChart,
  Settings2, SquareFunction,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavDecks } from "@/components/nav-decks"
import { NavUser } from "@/components/nav-user"
import { CourseSwitcher } from "@/components/course-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Jacob Marshall",
    email: "jacobm0@glynschool.org",
    avatar: "/avatars/shadcn.jpg",
  },
  courses: [
    {
      name: "Computer Science",
      icon: Cpu,
      classCode: "12A/Cu1",
    },
    {
      name: "Further Maths",
      icon: SquareFunction,
      classCode: "12C/Fm1, 12D/Fm1",
    },
    {
      name: "Chemistry",
      icon: FlaskConical,
      classCode: "12B/Ch1",
    },
  ],
  navMain: [
    {
      title: "Revise",
      url: "#",
      icon: Brain,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Specification",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  decks: [
    {
      name: "Networks",
      url: "#",
      icon: Frame,
    },
    {
      name: "Databases",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <CourseSwitcher courses={data.courses} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDecks decks={data.decks} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
