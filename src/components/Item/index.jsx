import {Draggable} from "react-beautiful-dnd";
import {useDispatch} from "react-redux";
import {checkItem,deleteItem } from "@/store/sliceList.jsx";


function Item({index, listIndex, listItem} ) {
    const dispatch = useDispatch()

    const handleCheckedItem = (listIndex, index) =>{
        dispatch(checkItem({listIndex,index,fromIndex:listIndex}))
    }
    const handleDeleteItem = (listIndex, index) => {
        dispatch(deleteItem({ listIndex, index }))
    }


    return (
        <>

            <Draggable key={listItem.id} draggableId={listItem.id} index={index}>
                {
                    (provided) => (<>
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                              >
                            <div className="flex px-[10px] py-[12px] flex-col items-start self-stretch bg-white rounded-[4px] border border-[#F3E1DF]">
                                <div className="flex items-center gap-[10px] self-stretch group">
                                    <input
                                        type="checkbox"
                                        className="
                                        defaultCheckbox relative flex h-[16px] min-h-[16px] w-[16px] min-w-[16px] appearance-none items-center
      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10
                                        checked:border-none checked:bg-green-500 dark:checked:bg-green-400"
                                        checked={listItem.completed}
                                        onChange={() => handleCheckedItem(listIndex, index)}
                                    />

                                    <p className="text-[#3A3A3A] text-[12px] not-italic font-semibold" style={{textDecorationLine : `${listItem.completed ? "line-through":''}`}}>{listItem.content}</p>
                                    <button  onClick={() => handleDeleteItem(listIndex, index)} >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hidden group-hover:block" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                            <rect x="12.1218" y="3.63655" width="1.71429" height="12" rx="0.857143" transform="rotate(45 12.1218 3.63655)" fill="#F4C5CB"/>
                                            <rect x="3.63656" y="4.84873" width="1.71429" height="12" rx="0.857143" transform="rotate(-45 3.63656 4.84873)" fill="#F4C5CB"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </>)

                }

            </Draggable>

        </>
    )
}

export default Item