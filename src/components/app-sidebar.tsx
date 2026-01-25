import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useNavigate } from "react-router";
import { authApi, useGetUserInfoQuery, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { getSidebarItems } from "@/utilis/getsidebarItems";
import { useGetDriverInfoQuery } from "@/redux/features/drivers/driver.api";
import Loader from "./layouts/Loader";
import RideLogo from "@/assets/icons/logo/RideLogo";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";
import { useAppDispatch } from "@/redux/hook";
import { toast } from "sonner";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userInfo, isLoading } = useGetUserInfoQuery(undefined);
  const { data: driverInfo } = useGetDriverInfoQuery(undefined);
    const [logOut] = useLogoutMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

  if (isLoading) return <Loader />;

  const data = {
    navMain: getSidebarItems(
      userInfo?.data?.role as string,
      driverInfo?.data?.approval_status as string,
    ),
  };

  const handelLogout = async () => {
    try {
      await logOut(undefined);
      toast.success("Logout Successfully.");
      dispatch(authApi.util.resetApiState());
      navigate("/login");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link to="/">
          <RideLogo />
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
      <SidebarFooter>
        <Button onClick={handelLogout} className="cursor-pointer">
          <LogOutIcon />
          Log out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
