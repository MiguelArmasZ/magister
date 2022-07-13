import { collection, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig'

export const useGetData = (table) => {
  const [data, setData] = useState([])

  useEffect(() => {
    onSnapshot(collection(db, table), async (snap) => {
      const documents = await snap.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      await setData(documents)
    })
  }, [])

  return data
}
