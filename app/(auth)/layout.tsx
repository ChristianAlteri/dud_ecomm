export default function AuthLayout ({
    children
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <div className="flex flex-col items-center justify-center h-full  ">
             <div>Welcome, please sign in or create an account with Stelala</div>
                {children}
            </div>
        </>
    )
}