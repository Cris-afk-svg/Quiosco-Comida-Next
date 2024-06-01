import {PrismaClient} from '@prisma/client'


const prismaClient = new PrismaClient()



export default function OrderSidebar(){
    
    return(
   <aside className="md:w-72 md:h-screen bg-white">
        OrderSidebar
   </aside>
)

}