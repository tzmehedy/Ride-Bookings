import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router";
import { ModeToggle } from "./ModeToggler";
import Logo from "@/assets/icons/Logo/Logo";
import { authApi, useGetUserInfoQuery, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { Role } from "@/constants/role";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hook";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/features", label: "Features", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  { href: "/faq", label: "FAQ", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: Role.ADMIN },
  { href: "/rider", label: "Dashboard", role: Role.RIDER },
  { href: "/ride-request", label: "Ride Request", role: Role.RIDER },
  { href: "/driver", label: "Dashboard", role: Role.DRIVER },
];

export default function Navbar() {
  const { data : userInfo} = useGetUserInfoQuery(undefined);
  const [logOut, ] = useLogoutMutation()
  const dispatch = useAppDispatch()

  const handelLogout = async() =>{
    try {
      await logOut(undefined)
      toast.success("Logout Successfully.")
      dispatch(authApi.util.resetApiState())
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message)
    }
  }


    return (
      <header className="container mx-auto border-b px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-8 md:hidden"
                  variant="ghost"
                  size="icon"
                >
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-36 p-1 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link, index) => (
                      <>
                        {link.role === "PUBLIC" && (
                          <NavigationMenuItem key={index}>
                            <NavigationMenuLink
                              asChild
                              className="py-1.5 font-medium text-muted-foreground hover:text-primary"
                            >
                              <Link to={link.href}>{link.label}</Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        )}

                        {link.role === userInfo?.data.role && (
                          <NavigationMenuItem key={index}>
                            <NavigationMenuLink
                              asChild
                              className="py-1.5 font-medium text-muted-foreground hover:text-primary"
                            >
                              <Link to={link.href}>{link.label}</Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        )}
                      </>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
            {/* Main nav */}
            <div className="flex items-center gap-6">
              <Link to={"/"} className="text-primary hover:text-primary/90">
                <Logo />
              </Link>
              {/* Navigation menu */}

              <NavigationMenu className="max-md:hidden">
                <NavigationMenuList className="gap-2">
                  {navigationLinks.map((link, index) => (
                    <div key={index}>
                      {link.role === "PUBLIC" && (
                        <NavigationMenuItem >
                          <NavigationMenuLink
                            asChild
                            className="py-1.5 font-medium text-muted-foreground hover:text-primary"
                          >
                            <Link to={link.href}>{link.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )}

                      {link.role === userInfo?.data.role && (
                        <NavigationMenuItem key={index}>
                          <NavigationMenuLink
                            asChild
                            className="py-1.5 font-medium text-muted-foreground hover:text-primary"
                          >
                            <Link to={link.href}>{link.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )}
                    </div>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-2">
            <ModeToggle />
            {userInfo?.data.email ? (
              <Button
                onClick={handelLogout}
                type="button"
                className="cursor-pointer"
                variant={"outline"}
              >
                Logout
              </Button>
            ) : (
              <Link
                to="/login"
                className="text-sm bg-primary px-3 py-2 text-background font-bold rounded-md cursor-pointer"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </header>
    );
}
