import prisma from '../utils/prisma'


export const getMembers = async () => {
    const members = await prisma.members.findMany()
    return members
}

export const getMember = async (id: number) => {
    const member = await prisma.members.findUnique({
        where: {
            id
        }
    })
    return member
}