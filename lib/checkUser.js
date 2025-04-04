import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async()=>{
    const user = await currentUser();

    if(!user) return null;
    try {
        // check if user is logged in or not
        const loggedInUser  = await db.user.findUnique({
            where:{
                clerkUserId: user.id,
            },
        });

        // if user is loggedIn
        if(loggedInUser) return loggedInUser;
        
        // if User is not LoggedIn
        const name = `${user.firstName} ${user.lastName}`;
        const newUser = await db.user.create({
            data:{
                clerkUserId:user.id,
                name: name,
                imageUrl : user.imageUrl,
                email: user.emailAddresses[0].emailAddress,
                },
            });
            
            return newUser;
    } catch (error) {
        console.log(error.message)
    }
}