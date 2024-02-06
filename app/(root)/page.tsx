import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs";


// const user = clerkClient.users.getUserList()
// console.log(user)



export default function Home() {
    return (
      <div >hello world
        <Button variant={"default"}> Click </Button>
        <UserButton afterSignOutUrl="/"/>
      </div>
    )
  }
  