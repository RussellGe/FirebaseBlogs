import { db } from "~/firebase/firebaseInit"

export const searchDb = (databaseName: string) => {
    return db.collection(databaseName).get()
}

export const setNewData = (databaseName: string, params: any) => {
    return  db.collection(databaseName).doc().set(params)
}

export const updateData = (databaseName: string, id:string,  params: any) => {
    return  db.collection(databaseName).doc(id).set(params)
}