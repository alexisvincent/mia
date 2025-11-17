import { LinearClient } from "@linear/sdk"

import { nango } from "@/src/nango"


export async function getTempClient(user_id: string) {

  await nango.listConnections({
    userId: user_id,
    integrationId: 'integration-456',
  });

  await nango.getConnection("", "");

  return new LinearClient({ accessToken: "" })
}


