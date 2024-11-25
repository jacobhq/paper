"use client"

import {
  BadgeCheck,
  ChevronsUpDown,
  LogIn,
  LogOut,
  Sparkles,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserProfile, useUser} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton";

export function NavUser() {
  const {isMobile} = useSidebar()
  const {user, isLoaded, isSignedIn} = useUser()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Dialog>
          {!isLoaded ?
            <Skeleton className="w-full h-11"/>
            :
            isSignedIn ?
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage className="object-cover" src={user.imageUrl} alt={user.fullName as string}/>
                      <AvatarFallback className="rounded-lg">{user.firstName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{user?.fullName}</span>
                      <span className="truncate text-xs">{user?.username}</span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4"/>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side={isMobile ? "bottom" : "right"}
                  align="end"
                  sideOffset={4}
                >
                  <SignedIn>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Sparkles/>
                        Upgrade to Pro
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator/>
                    <DropdownMenuGroup>
                      <DialogTrigger asChild>
                        <DropdownMenuItem>
                          <BadgeCheck/>
                          Account Settings
                        </DropdownMenuItem>
                      </DialogTrigger>
                    </DropdownMenuGroup>
                    <SignOutButton>
                      <DropdownMenuItem>
                        <LogOut/>
                        Log out
                      </DropdownMenuItem>
                    </SignOutButton>
                  </SignedIn>
                  <SignedOut>
                    <SignInButton>
                      <DropdownMenuItem>
                        <LogIn/>
                        Sign in
                      </DropdownMenuItem>
                    </SignInButton>
                  </SignedOut>
                </DropdownMenuContent>
              </DropdownMenu>
              :
              <div className="flex flex-row gap-2">
                <SignInButton>
                  <Button size="lg" className="w-full font-semibold" variant="outline">
                    Sign in
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button size="lg" className="w-full font-semibold" variant="default">
                    Sign up
                  </Button>
                </SignUpButton>
              </div>
          }
          <DialogContent className="min-w-fit p-0">
            <DialogTitle className="sr-only">Manage Account</DialogTitle>
            <UserProfile routing="virtual"/>
          </DialogContent>
        </Dialog>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
