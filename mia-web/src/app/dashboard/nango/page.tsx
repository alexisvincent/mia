"use client"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

import Nango from '@nangohq/frontend';
import { sessionToken } from "./actions"
import { Button } from "@/components/ui/button"

async function connectUI() {
  const nango = new Nango();

  const connect = nango.openConnectUI({
    onEvent: (event) => {
      if (event.type === 'close') {
        // Handle modal closed.
      } else if (event.type === 'connect') {
        // Handle auth flow successful.
      }
    },
  });

  const res = await sessionToken()
  if (res) {
    connect.setSessionToken(res); // A loading indicator is shown until this is set.
  }
}

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Setup
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Nango</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="p-4">
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Connect</ItemTitle>
              <ItemDescription>
               Connect things
              </ItemDescription>
              <ItemActions>
                <Button onClick={() => connectUI()}>Connect</Button>
              </ItemActions>
            </ItemContent>
          </Item>

        </div>

      </SidebarInset>
    </SidebarProvider>
  )
}
