"use client"

import * as React from "react"
import {ChevronsUpDown, Plus} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

export function CourseSwitcher({
                                   courses,
                               }: {
    courses: {
        name: string
        icon: React.ElementType
        classCode: string
    }[]
}) {
    const {isMobile} = useSidebar()
    const [activeCourse, setActiveCourse] = React.useState(courses[0])

    return (
        <SidebarMenu>
            <Dialog>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton
                                size="lg"
                                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                            >
                                <div
                                    className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <activeCourse.icon className="size-4"/>
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {activeCourse.name}
                </span>
                                    <span className="truncate text-xs">{activeCourse.classCode}</span>
                                </div>
                                <ChevronsUpDown className="ml-auto"/>
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                            align="start"
                            side={isMobile ? "bottom" : "right"}
                            sideOffset={4}
                        >
                            <DropdownMenuLabel className="text-xs text-muted-foreground">
                                Courses
                            </DropdownMenuLabel>
                            {courses.map((course, index) => (
                                <DropdownMenuItem
                                    key={course.name}
                                    onClick={() => setActiveCourse(course)}
                                    className="gap-2 p-2"
                                >
                                    <div className="flex size-6 items-center justify-center rounded-sm border">
                                        <course.icon className="size-4 shrink-0"/>
                                    </div>
                                    {course.name}
                                    <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuSeparator/>
                            <DialogTrigger asChild>
                                <DropdownMenuItem className="gap-2 p-2">
                                    <div
                                        className="flex size-6 items-center justify-center rounded-md border bg-background">
                                        <Plus className="size-4"/>
                                    </div>
                                    <div className="font-medium text-muted-foreground">Add course</div>
                                </DropdownMenuItem>
                            </DialogTrigger>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add Course</DialogTitle>
                            <DialogDescription>
                                Fill out your course&#39;s name, and your class. Click save when you&#39;re done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name" placeholder="Further Maths" className="col-span-3"/>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="class" className="text-right">
                                    Class
                                </Label>
                                <Input id="class" placeholder="12C/Fm" className="col-span-3"/>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Create course</Button>
                        </DialogFooter>
                    </DialogContent>
                </SidebarMenuItem>
            </Dialog>
        </SidebarMenu>
    )
}
