
"use client"; 
// import { Button } from "@/components/ui/button";
// import { SignInButton, UserButton } from "@clerk/nextjs";
// import { ArrowRight } from "lucide-react";

import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="max-w-3xl space-y-4 w-full min-h-full flex flex-col items-center justify-center">
//         <h1 className="text-base sm:text-xl md:text-2xl font-medium">
//             Welcome to newspapertrade
//         </h1>
//         <h3 className="text-base sm:text-xl md:text-2xl font-medium">
//             Stop being financially illiterate
//         </h3>
//         <SignInButton mode="modal">
//             <Button>
//                 Sign In
//                 <ArrowRight className="h-4 w-4 ml-2"/>
//             </Button>
//         </SignInButton>
//     </div>
// );
// }

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, SignInButton, SignOutButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      // Redirect to the dashboard if the user is authenticated
      router.push('/dashboard');
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    // Optionally, display a loading indicator while checking authentication
    return <p>Loading...</p>;
  }

  return ( signin
    <div className="max-w-3xl space-y-4 w-full min-h-full flex flex-col items-center justify-center">
        <h1 className="text-base sm:text-xl md:text-2xl font-medium">
            Welcome to newspapertrade
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
            Stop being financially illiterate
        </h3>
        <SignInButton mode="modal">
            <Button>
                Sign In
                <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
        </SignInButton>
    </div>
);

}
    <div className="max-w-3xl space-y-4 w-full min-h-full flex flex-col items-center justify-center">
      <h1 className="text-base sm:text-xl md:text-2xl font-medium">
        Welcome to newspapertrade
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Stop being financially illiterate
      </h3>
      {!user ? (
        <SignInButton mode="modal">
          <Button>
            Sign In
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      ) : (
        <SignOutButton >
          <Button>
            Sign Out
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignOutButton>
      )}
    </div>
  );
}

