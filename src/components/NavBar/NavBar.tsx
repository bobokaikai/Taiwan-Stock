import { StyledNavBar } from "./StyledNavBar";
import { ModeToggle } from "../mode-toggle";
import { ThemeProvider } from "../themeProvider";
import { Button } from "../ui/button";
import { BiMessageDetail } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { Input } from "../ui/input";
import InputSearch from "../InputSearch/InputSearch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxAvatar } from "react-icons/rx";
import { useContext } from "react";
import { fireBaseUserStatus } from "@/pages/HomeLayout/HomeLayout";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const NavBar = () => {
  const [userTooltip, setUserTooltip] = useState(false);
  const { user } = useContext(fireBaseUserStatus);
  const auth = getAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  console.log(user);

  const onLogout = () => {
    auth.signOut();

    navigate("/");

    const intervalId = setInterval(() => {
      toast({
        title: "系統訊息",
        description: "✅ 登出成功",
        duration: 1000,
        className: "bg-[#fff] text-[#1a1a1a]",
      });
      clearInterval(intervalId);
    }, 100);
  };

  const askLogIn = () => {
    if (!user) {
      toast({
        title: "系統訊息",
        description: "請先登入",
        duration: 1000,
        className: "bg-[#fff] text-[#1a1a1a]",
      });
    }
    return;
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <StyledNavBar>
        <Toaster />
        <AlertDialog>
          <section className="max-h-[100px] w-[90%] mx-auto flex flex-row justify-between py-[1rem] h-full">
            <InputSearch />
            <div className="function_wrap flex flex-row gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <GrNotification className="h-[1.2rem] w-[1.2rem] transition-all" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <BiMessageDetail className="h-[1.2rem] w-[1.2rem] transition-all" />
              </Button>
              <ModeToggle />
              <div className="avatar_container">
                <TooltipProvider>
                  <Tooltip>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <TooltipTrigger>
                          <Button className="text-[#fff]" onClick={askLogIn}>
                            <Avatar>
                              <AvatarImage src={user ? user?.photoURL : null} />
                              <AvatarFallback>
                                <RxAvatar className="w-full h-full" />
                              </AvatarFallback>
                            </Avatar>
                          </Button>
                        </TooltipTrigger>
                      </DropdownMenuTrigger>
                      {user && (
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <DropdownMenuItem>
                              個人資料
                              <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              帳單
                              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              設定
                              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator />
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => navigate("/my_tracking_list")}
                          >
                            我的追蹤清單
                          </DropdownMenuItem>
                          <DropdownMenuItem>Support</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <AlertDialogTrigger asChild className="text-[#ffff]">
                            <DropdownMenuItem className="text-[#fff]">
                              登出
                              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                              {/* alert */}
                            </DropdownMenuItem>
                          </AlertDialogTrigger>
                        </DropdownMenuContent>
                      )}
                    </DropdownMenu>
                  </Tooltip>
                </TooltipProvider>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>登出</AlertDialogTitle>
                    <AlertDialogDescription>
                      確定是否登出？
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>取消</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-[#ffff] hover:bg-[#fff]"
                      onClick={onLogout}
                    >
                      確定
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </div>
            </div>
          </section>
        </AlertDialog>
      </StyledNavBar>
    </ThemeProvider>
  );
};

export default NavBar;
