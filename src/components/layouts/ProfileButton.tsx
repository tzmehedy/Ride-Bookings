import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Role } from "@/constants/role";
import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { LayoutDashboard, LogOutIcon, User } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ProfileButton({ userInfo }: { userInfo: any }) {
  const [logOut] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigationLinks = [
    { href: "/admin", label: "Dashboard", role: Role.ADMIN },
    { href: "/rider", label: "Dashboard", role: Role.RIDER },
    { href: "/driver", label: "Dashboard", role: Role.DRIVER },
  ];

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full h-10 w-10 border border-primary cursor-pointer"
        >
          <User className="text-primary" size="sm" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          {navigationLinks.map(
            (navLink) =>
              navLink.role === userInfo?.data?.role && (
                <Link className="flex items-center gap-2" to={navLink.href}><LayoutDashboard/>{navLink.label}</Link>
              ),
          )}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" className="cursor-pointer" onClick={handelLogout}>
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
