import { useState } from "react"

function useAddRowItems(itemInputs) {
  const [items, setItems] = useState([itemInputs])

  const handleChange = (e, index) => {
    const { name, value } = e.target
    const newItems = [...items]
    newItems[index][name] = value
    newItems[index].total = newItems[index].quantity * newItems[index].price * newItems[index].day
    setItems(newItems)
  }

  const handleAddItem = () => {
    setItems([...items, itemInputs])
  }

  const handleRemoveItem = (index) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  const grandTotal = items.reduce((acc, cur) => acc + cur.quantity * cur.price * cur.day, 0)

  return { items, handleChange, handleAddItem, handleRemoveItem, grandTotal }
}

export default useAddRowItems
