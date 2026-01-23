import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link } from "react-router"
import { useGetUserInfoQuery } from "@/redux/features/auth/auth.api"
import { getSidebarItems } from "@/utilis/getsidebarItems"
import { useGetDriverInfoQuery } from "@/redux/features/drivers/driver.api"
import Loader from "./layouts/Loader"
import RideLogo from "@/assets/icons/logo/RideLogo"

// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const {data:userInfo, isLoading} = useGetUserInfoQuery(undefined)
  
  const {data: driverInfo} = useGetDriverInfoQuery(undefined)

  if(isLoading) return <Loader/>

  const data = {
    navMain: getSidebarItems(userInfo?.data?.role as string, driverInfo?.data?.approval_status as string)
  };


  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link to="/">
          <RideLogo/>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
