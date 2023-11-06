import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import GridAddItem from "./GridAddItem";

const images = [
  {
    id: "1",
    image: "images/image-1.webp",
    checked: false,
  },
  {
    id: "2",
    image: "images/image-2.webp",
    checked: false,
  },
  {
    id: "3",
    image: "images/image-3.webp",
    checked: false,
  },
  {
    id: "4",
    image: "images/image-4.webp",
    checked: false,
  },
  {
    id: "5",
    image: "images/image-5.webp",
    checked: false,
  },
  {
    id: "6",
    image: "images/image-6.webp",
    checked: false,
  },
  {
    id: "7",
    image: "images/image-7.webp",
    checked: false,
  },
  {
    id: "8",
    image: "images/image-8.webp",
    checked: false,
  },
  {
    id: "9",
    image: "images/image-9.webp",
    checked: false,
  },
  {
    id: "10",
    image: "images/image-10.jpeg",
    checked: false,
  },
  {
    id: "11",
    image: "images/image-11.jpeg",
    checked: false,
  },
];

const Grid = () => {
  // Drag and Drop Handler
  const onDragDropEnds = (oldIndex, newIndex) => {
    console.log("Drag and drop other tasks");
    console.log(oldIndex, newIndex);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("Deleted Items List -> ", deleteList);
    for (var i = 0; i < deleteList.length; i++) {
      const objWithIdIndex = items.findIndex(
        (item) => item.id === deleteList[i]
      );

      if (objWithIdIndex > -1) {
        items.splice(objWithIdIndex, 1);
      }
    }
    console.log("Remaining Items List -> ", items);
    setItems([...items]);
    setDeleteList([]);
  };

  const onChange = (sourceId, sourceIndex, targetIndex) => {
    const nextState = swap(items, sourceIndex, targetIndex);
    console.log("Nextstate Items List ->", nextState);
    setItems(nextState);
  };

  const CheckHandler = (e) => {
    const value = e.target.value;
    setDeleteList((prev) =>
      deleteList.includes(value)
        ? prev.filter((cur) => cur !== value)
        : [...prev, e.target.value]
    );
  };

  let [deleteList, setDeleteList] = useState([]);
  const [items, setItems] = useState(images);

  return (
    <>
      <nav className="navbar navbar-light mt-3">
        <h2 className="navbar-brand">Gallery</h2>
        <p>{deleteList.length} items selected</p>
        <form className="form-inline">
          <button
            className="btn btn-outline-danger my-2 my-sm-0"
            onClick={handleDelete}
          >
            Delete
          </button>
        </form>
      </nav>
      <hr />
      <div className="border rounded-3 p-3 shadow">
        {items.length === 0 ? (
          <GridAddItem />
        ) : (
          <ReactSortable
            list={items}
            animation={700}
            setList={(newlist) => setItems(newlist)}
            ghostClass="dropArea"
            handle=".dragHandle"
            filter=".ignoreDrag"
            preventOnFilter={true}
            className="grid-container"
            onEnd={({ oldIndex, newIndex }) =>
              onDragDropEnds(oldIndex, newIndex)
            }
          >
            <>
              {items.map((item, index) => {
                if (index == 0)
                  return (
                    // <GridItem key={item.id} item={item} index={index} />
                    <div
                      className="dragHandle grid-items card shadow-sm rounded-3 overflow-hidden item-first"
                      key={item.id}
                    >
                      <div className="card-body image-container">
                        <input
                          key={index}
                          type="checkbox"
                          id={item.id}
                          value={item.id}
                          onClick={CheckHandler}
                        />
                        <img
                          src={item.image}
                          alt={index}
                          className=" h5 card-title image-design m-0"
                        />
                      </div>
                    </div>
                  );
                else
                  return (
                    // <GridItem key={item.id} item={item} index={index} />
                    <div
                      className="dragHandle grid-items card shadow-sm rounded-3 overflow-hidden"
                      key={item.id}
                    >
                      <div className="card-body image-container">
                        <input
                          type="checkbox"
                          id={item.id}
                          value={item.id}
                          onClick={CheckHandler}
                        />
                        <img
                          src={item.image}
                          alt={index}
                          className=" h5 card-title image-design m-0"
                        />
                      </div>
                    </div>
                  );
              })}
              <GridAddItem />
            </>
          </ReactSortable>
        )}
      </div>
    </>
  );
};

export default Grid;
