import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs";



const sessions = clerkClient.users.getUserList();
const user1email = sessions.then((res) => {
  // console.log('user1email', user1email);
  const email = res.map((user) => user.emailAddresses)
  console.log(email)
})



export default function Home() {
    return (
      <div >hello world
        <Button variant={"default"}> Click </Button>
        <UserButton afterSignOutUrl="/"/>
      </div>
    )
  }
  