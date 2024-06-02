"use server"
import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    
}
