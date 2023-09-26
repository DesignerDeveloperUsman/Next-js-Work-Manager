import { NextResponse } from 'next/server'
export function middleware(request) {
    // console.log("middleware run");
    const authToken = request.cookies.get("authToken")?.value;
    if (request.nextUrl.pathname === "/api/login" || request.nextUrl.pathname === "/api/users") {
        return;
    }
    // console.log(authToken);
    const loggedUser =
        request.nextUrl.pathname === "/login" ||
        request.nextUrl.pathname === "/signup"
    if (loggedUser) {

        // agr wo login ha mgr login ma jana chata ha tu na ja sky 
        if (authToken) {
            return NextResponse.redirect(new URL("/profile", request.url))
        }
    }
    else {
        // agr wo login nhi ha mgr task add krna chay to wo log in ma chla jay 
        if (!authToken) {
            if (request.nextUrl.pathname.startsWith("/api")) {
                return NextResponse.json({
                    message: "access denied",
                    success: false
                },
                    {
                        status: 401,
                    })
            }
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }

}
export const config = {
    matcher: ["/", "/login", "/signup", "/add-task", "/show-task", "/profile/:path*", "/api/:path*"],
}