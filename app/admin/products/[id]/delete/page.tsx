import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"

async function deleteProductById(id: number) {
    const product = await prisma.product.delete({
        where: {
            id
        }
    })
    if(!product) {
        notFound()
    }

    return product
}

export default async function DeleteProductPage({ params }: { params: { id: string } }) {

    const product = await deleteProductById(+params.id)

    return (
        <>
            <Heading>Eliminar Producto: {product.name}</Heading>

            <GoBackButton />

            
        </>
    )
}
