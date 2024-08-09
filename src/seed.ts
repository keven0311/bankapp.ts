import { db, syncDatabase, User, Account } from "./db"


async function seed(){
    try {
        await syncDatabase();
        console.log("Database synchronized.")

        const user = await User.create({
            firstName:'first',
            lastName:'user',
            email:'first123@email.com',
            phoneNumber:'4024445555'
        })
    
        await Account.create({
            accountNumber:'4444 5555 6666 7777',
            balance:100.00,
            userId: 1
        })
    } catch (err) {
        console.error("Error seeding the db.",err)
    }
    
}

async function runSeed(){
    try {
        await seed()
        console.log("Seed successful!")
    } catch (err) {
        console.error("somthing wrong when seeding:",err)
    } finally{
        await db.close();
    }
}

runSeed();