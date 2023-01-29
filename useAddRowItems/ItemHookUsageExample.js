import useAddRowItems from "./useAddRowItems"

function ItemHookUsageExample() {
  const { items, handleChange, handleAddItem, handleRemoveItem, grandTotal } = useAddRowItems({ title: '', description: '', quantity: '', price: '', day: '', total: 0 })

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="item">
          <input type="text" name="title" value={item.title} onChange={(e) => handleChange(e, index)} />
          <input type="text" name="description" value={item.description} onChange={(e) => handleChange(e, index)} />
          <input type="number" name="quantity" value={item.quantity} onChange={(e) => handleChange(e, index)} />
          <input type="number" name="price" value={item.price} onChange={(e) => handleChange(e, index)} />
          <input type="number" name="day" value={item.day} onChange={(e) => handleChange(e, index)} />
          <span>{item.total}</span>
          <button className="add-item-btn" onClick={() => handleRemoveItem(index)}>
            Remove Item
          </button>
        </div>
      ))}
      <button className="add-item-btn" onClick={handleAddItem}>
        Add Item
      </button>
      <div>Grand Total: {grandTotal}</div>
    </div>
  )
}

export default ItemHookUsageExample