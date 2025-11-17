"use server"
import { nango } from "@/nango"
import { currentUser } from "@clerk/nextjs/server"

export async function sessionToken() {
  const user = await currentUser()

  if (user) {
    // Ask Nango for a secure token
    const res = await nango.createConnectSession({
      end_user: {
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress,
        display_name: user.fullName || undefined
      },
      // allowed_integrations: ['<INTEGRATION-ID>'],
    });

    return res.data.token
  }
};
