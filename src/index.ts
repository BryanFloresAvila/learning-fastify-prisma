import prisma from './utils/prisma'
import fastify from 'fastify'
const app = fastify()

async function main() {
    prisma.members.findMany({
        where: {
            name: {
                contains  : 'aea'
            }
        }
    }).then((members) => {
        members.forEach((member) => {
            console.log(member.name)
        })
        })
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
